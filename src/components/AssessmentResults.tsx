import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, TrendingUp, Brain, Clock, Target, Download } from "lucide-react";

interface PEARLScore {
  practical: number;
  execution: number;
  adaptability: number;
  reliability: number;
  learning: number;
}

interface AssessmentResultsProps {
  overallScore: number;
  pearlScores: PEARLScore;
  readinessLevel: "Ready" | "Trainable" | "Not Yet";
  topSkillToImprove: string;
  topHabitToBuild: string;
  onRestart: () => void;
}

const AssessmentResults = ({
  overallScore,
  pearlScores,
  readinessLevel,
  topSkillToImprove,
  topHabitToBuild,
  onRestart
}: AssessmentResultsProps) => {
  const getReadinessColor = (level: string) => {
    switch (level) {
      case "Ready": return "bg-assessment-complete";
      case "Trainable": return "bg-warning";
      default: return "bg-destructive";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-assessment-complete";
    if (score >= 60) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-assessment-surface to-primary-light">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 bg-assessment-complete rounded-xl">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <Badge className="px-4 py-2 text-lg font-medium bg-assessment-complete">
                Assessment Complete
              </Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">Your Results</h1>
            <p className="text-xl text-muted-foreground">
              Feedback-Driven Improver Assessment Analysis
            </p>
          </div>

          {/* Overall Score */}
          <Card className="mb-8 border-0 shadow-xl bg-card/95 backdrop-blur">
            <CardContent className="p-8 text-center">
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary-accent bg-clip-text text-transparent">
                {overallScore}
              </div>
              <div className="text-2xl font-semibold text-foreground mb-2">Overall Readiness Score</div>
              <Badge className={`${getReadinessColor(readinessLevel)} text-white px-6 py-2 text-lg`}>
                {readinessLevel}
              </Badge>
            </CardContent>
          </Card>

          {/* PEARL Framework Scores */}
          <Card className="mb-8 border-0 shadow-xl bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Brain className="h-6 w-6 text-primary" />
                PEARL Framework Analysis
              </CardTitle>
              <CardDescription className="text-lg">
                Your performance across the five key dimensions of feedback responsiveness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-6">
                {Object.entries(pearlScores).map(([dimension, score]) => (
                  <div key={dimension} className="text-center space-y-3">
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground capitalize">{dimension}</h3>
                      <div className={`text-3xl font-bold ${getScoreColor(score)}`}>
                        {score}
                      </div>
                    </div>
                    <Progress value={score} className="h-3" />
                    <div className="text-sm text-muted-foreground">
                      {score >= 80 ? "Excellent" : score >= 60 ? "Good" : "Needs Focus"}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Insights */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-0 shadow-xl bg-card/95 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Target className="h-5 w-5 text-primary" />
                  Priority Focus Area
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold text-foreground mb-2">
                  {topSkillToImprove}
                </div>
                <p className="text-muted-foreground">
                  This skill will have the greatest impact on your feedback responsiveness when improved.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card/95 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-secondary-accent" />
                  Habit to Build
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold text-foreground mb-2">
                  {topHabitToBuild}
                </div>
                <p className="text-muted-foreground">
                  Developing this habit will create lasting improvements in your feedback processing.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Personalized Improvement Plan */}
          <Card className="mb-8 border-0 shadow-xl bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                Your 4-6 Week Development Plan
              </CardTitle>
              <CardDescription className="text-lg">
                Customized recommendations based on your assessment results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-primary">Weeks 1-2: Foundation</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Feedback clarification scripts</li>
                    <li>• Active listening exercises</li>
                    <li>• Reflection journal setup</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-primary">Weeks 3-4: Practice</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Scenario-based simulations</li>
                    <li>• Peer feedback exercises</li>
                    <li>• Process improvement tasks</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-primary">Weeks 5-6: Integration</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Real-world application</li>
                    <li>• Progress measurement</li>
                    <li>• Habit reinforcement</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Report
            </Button>
            <Button 
              onClick={onRestart}
              size="lg" 
              className="px-8 bg-primary hover:bg-primary-hover"
            >
              Take Assessment Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResults;