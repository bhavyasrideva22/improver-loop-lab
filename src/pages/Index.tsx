import { useState } from "react";
import AssessmentWelcome from "@/components/AssessmentWelcome";
import AssessmentProgress from "@/components/AssessmentProgress";
import ScenarioQuestion from "@/components/ScenarioQuestion";
import AssessmentResults from "@/components/AssessmentResults";
import { scenarios } from "@/data/assessmentData";

type AssessmentStage = "welcome" | "scenarios" | "skills" | "time" | "problems" | "results";

interface AssessmentResponse {
  scenarioId: number;
  answer: string;
  followUp?: string;
  timestamp: Date;
}

const Index = () => {
  const [currentStage, setCurrentStage] = useState<AssessmentStage>("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<AssessmentResponse[]>([]);

  const handleStart = () => {
    setCurrentStage("scenarios");
  };

  const handleScenarioAnswer = (scenarioId: number, answer: string, followUp?: string) => {
    const newResponse: AssessmentResponse = {
      scenarioId,
      answer,
      followUp,
      timestamp: new Date()
    };
    
    setResponses(prev => [...prev, newResponse]);
    
    if (currentQuestionIndex < scenarios.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Move to next section (for demo, jump to results)
      setCurrentStage("results");
    }
  };

  const calculateResults = () => {
    // Simple scoring algorithm for demo
    const totalScore = responses.reduce((sum, response) => {
      const scenario = scenarios.find(s => s.id === response.scenarioId);
      const answer = scenario?.answers.find(a => a.id === response.answer);
      return sum + (answer?.score || 0);
    }, 0);

    const maxPossibleScore = scenarios.length * 5;
    const percentageScore = Math.round((totalScore / maxPossibleScore) * 100);

    return {
      overallScore: percentageScore,
      pearlScores: {
        practical: Math.min(100, percentageScore + Math.random() * 10),
        execution: Math.min(100, percentageScore + Math.random() * 10),
        adaptability: Math.min(100, percentageScore + Math.random() * 10),
        reliability: Math.min(100, percentageScore + Math.random() * 10),
        learning: Math.min(100, percentageScore + Math.random() * 10)
      },
      readinessLevel: percentageScore >= 80 ? "Ready" : percentageScore >= 60 ? "Trainable" : "Not Yet" as "Ready" | "Trainable" | "Not Yet",
      topSkillToImprove: "Active Listening",
      topHabitToBuild: "Daily Reflection Practice"
    };
  };

  const handleRestart = () => {
    setCurrentStage("welcome");
    setCurrentQuestionIndex(0);
    setResponses([]);
  };

  const getSectionInfo = () => {
    switch (currentStage) {
      case "scenarios":
        return {
          sectionTitle: "Scenario-Based Application",
          currentSection: 2,
          totalSections: 6,
          currentQuestion: currentQuestionIndex + 1,
          totalQuestions: scenarios.length
        };
      default:
        return {
          sectionTitle: "Assessment",
          currentSection: 1,
          totalSections: 6,
          currentQuestion: 1,
          totalQuestions: 1
        };
    }
  };

  if (currentStage === "welcome") {
    return <AssessmentWelcome onStart={handleStart} />;
  }

  if (currentStage === "results") {
    const results = calculateResults();
    return <AssessmentResults {...results} onRestart={handleRestart} />;
  }

  if (currentStage === "scenarios") {
    const sectionInfo = getSectionInfo();
    const currentScenario = scenarios[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === scenarios.length - 1;

    return (
      <>
        <AssessmentProgress {...sectionInfo} />
        <ScenarioQuestion
          scenario={currentScenario}
          onAnswer={handleScenarioAnswer}
          isLastQuestion={isLastQuestion}
        />
      </>
    );
  }

  return <AssessmentWelcome onStart={handleStart} />;
};

export default Index;
