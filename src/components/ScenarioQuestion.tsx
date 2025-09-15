import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Lightbulb } from "lucide-react";

interface Answer {
  id: string;
  text: string;
}

interface ScenarioQuestionProps {
  scenario: {
    id: number;
    title: string;
    description: string;
    context?: string;
    answers: Answer[];
    hasFollowUp?: boolean;
    followUpPrompt?: string;
  };
  onAnswer: (scenarioId: number, answer: string, followUp?: string) => void;
  isLastQuestion: boolean;
}

const ScenarioQuestion = ({ scenario, onAnswer, isLastQuestion }: ScenarioQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [followUpText, setFollowUpText] = useState<string>("");
  const [showFollowUp, setShowFollowUp] = useState(false);

  const handleNext = () => {
    if (scenario.hasFollowUp && !showFollowUp) {
      setShowFollowUp(true);
    } else {
      onAnswer(scenario.id, selectedAnswer, followUpText);
      setSelectedAnswer("");
      setFollowUpText("");
      setShowFollowUp(false);
    }
  };

  const canProceed = selectedAnswer && (!showFollowUp || !scenario.hasFollowUp || followUpText.trim());

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-assessment-surface">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-xl bg-card/95 backdrop-blur">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-light rounded-lg">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="outline" className="text-primary border-primary">
                  Scenario {scenario.id}
                </Badge>
              </div>
              <CardTitle className="text-2xl text-foreground">{scenario.title}</CardTitle>
              <CardDescription className="text-lg leading-relaxed">
                {scenario.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              {scenario.context && (
                <div className="p-4 bg-assessment-surface rounded-lg border-l-4 border-l-primary">
                  <p className="text-foreground italic">"{scenario.context}"</p>
                </div>
              )}

              {!showFollowUp && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">How would you respond?</h3>
                  <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                    <div className="space-y-3">
                      {scenario.answers.map((answer) => (
                        <div key={answer.id} className="flex items-start space-x-3 p-4 rounded-lg border hover:bg-assessment-surface transition-colors">
                          <RadioGroupItem value={answer.id} id={answer.id} className="mt-1" />
                          <Label htmlFor={answer.id} className="flex-1 text-base leading-relaxed cursor-pointer">
                            {answer.text}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              )}

              {showFollowUp && scenario.followUpPrompt && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-warning" />
                    <h3 className="text-lg font-semibold text-foreground">Follow-up Question</h3>
                  </div>
                  <p className="text-foreground">{scenario.followUpPrompt}</p>
                  <Textarea
                    value={followUpText}
                    onChange={(e) => setFollowUpText(e.target.value)}
                    placeholder="Type your response here..."
                    className="min-h-[120px] resize-none"
                  />
                  <p className="text-sm text-muted-foreground">
                    Minimum 50 characters recommended for meaningful analysis.
                  </p>
                </div>
              )}

              <div className="flex justify-between items-center pt-6 border-t">
                <div className="text-sm text-muted-foreground">
                  {showFollowUp ? "Provide additional context" : "Select your approach"}
                </div>
                <Button 
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="px-8 bg-primary hover:bg-primary-hover"
                >
                  {showFollowUp ? (isLastQuestion ? "Complete Section" : "Continue") : "Next"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ScenarioQuestion;