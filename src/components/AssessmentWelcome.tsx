import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, Target, TrendingUp } from "lucide-react";

interface AssessmentWelcomeProps {
  onStart: () => void;
}

const AssessmentWelcome = ({ onStart }: AssessmentWelcomeProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-assessment-surface to-primary-light">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary rounded-xl">
                <Brain className="h-8 w-8 text-primary-foreground" />
              </div>
              <Badge variant="secondary" className="px-4 py-2 text-lg font-medium">
                ASR Assessment
              </Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary-accent bg-clip-text text-transparent">
              Feedback-Driven Improver
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              An Applied Skills & Real-World Readiness Assessment measuring your ability to turn feedback into meaningful workplace performance gains.
            </p>
          </div>

          {/* Overview Card */}
          <Card className="mb-8 border-0 shadow-xl bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl">Assessment Overview</CardTitle>
              <CardDescription className="text-lg">
                This assessment evaluates how you receive, process, and act on feedback in professional environments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">What You'll Experience</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Scenario-based workplace situations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Practical skills evaluation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Real-world problem solving</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">You'll Receive</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Badge className="bg-assessment-complete text-white mt-1">PEARL</Badge>
                      <span>Framework analysis with 5 key dimensions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge className="bg-assessment-progress text-white mt-1">Insights</Badge>
                      <span>Personalized improvement recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge className="bg-secondary-accent text-white mt-1">Plan</Badge>
                      <span>4-6 week development roadmap</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Assessment Sections */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { title: "Scenario Response", subtitle: "8 workplace scenarios", icon: Target },
              { title: "Practical Skills", subtitle: "5 actionable tasks", icon: TrendingUp },
              { title: "Time Management", subtitle: "4 priority exercises", icon: Clock },
              { title: "Problem Solving", subtitle: "4 mini-cases", icon: Brain }
            ].map((section, index) => (
              <Card key={index} className="border-0 bg-assessment-surface/50 hover:bg-assessment-surface transition-colors">
                <CardContent className="p-6 text-center">
                  <section.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">{section.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Duration & Start */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span className="text-lg">Estimated time: 25-30 minutes</span>
            </div>
            <Button 
              onClick={onStart}
              size="lg"
              className="px-12 py-6 text-lg font-medium bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Begin Assessment
            </Button>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Your responses will be used to generate personalized insights and development recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentWelcome;