import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle } from "lucide-react";

interface AssessmentProgressProps {
  currentSection: number;
  totalSections: number;
  sectionTitle: string;
  currentQuestion: number;
  totalQuestions: number;
}

const sectionNames = [
  "Introduction",
  "Scenario Response",
  "Practical Skills", 
  "Time Management",
  "Problem Solving",
  "Results"
];

const AssessmentProgress = ({ 
  currentSection, 
  totalSections, 
  sectionTitle, 
  currentQuestion, 
  totalQuestions 
}: AssessmentProgressProps) => {
  const overallProgress = ((currentSection - 1) / totalSections) * 100;
  const sectionProgress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="border-b bg-card/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Indicators */}
          <div className="flex items-center justify-between mb-4 overflow-x-auto">
            {sectionNames.map((name, index) => {
              const isActive = index === currentSection - 1;
              const isCompleted = index < currentSection - 1;
              
              return (
                <div key={index} className="flex items-center flex-shrink-0">
                  <div className="flex items-center gap-2">
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-assessment-complete" />
                    ) : (
                      <Circle className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                    )}
                    <span className={`text-sm font-medium ${
                      isActive ? 'text-primary' : isCompleted ? 'text-assessment-complete' : 'text-muted-foreground'
                    }`}>
                      {name}
                    </span>
                  </div>
                  {index < sectionNames.length - 1 && (
                    <div className={`w-8 h-0.5 mx-3 ${
                      isCompleted ? 'bg-assessment-complete' : 'bg-border'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Current Section Info */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-xl font-semibold text-foreground">{sectionTitle}</h2>
              <p className="text-sm text-muted-foreground">
                Question {currentQuestion} of {totalQuestions}
              </p>
            </div>
            <Badge variant="outline" className="text-primary border-primary">
              Section {currentSection} of {totalSections}
            </Badge>
          </div>

          {/* Progress Bars */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Section Progress</span>
              <span className="text-primary font-medium">{Math.round(sectionProgress)}%</span>
            </div>
            <Progress value={sectionProgress} className="h-2 bg-muted" />
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Overall Progress</span>
              <span className="text-primary font-medium">{Math.round(overallProgress)}%</span>
            </div>
            <Progress value={overallProgress} className="h-1 bg-muted" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentProgress;