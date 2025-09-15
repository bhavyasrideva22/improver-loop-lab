export interface Scenario {
  id: number;
  title: string;
  description: string;
  context?: string;
  answers: {
    id: string;
    text: string;
    score: number;
  }[];
  hasFollowUp?: boolean;
  followUpPrompt?: string;
}

export const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Vague Manager Feedback",
    description: "You receive feedback from your manager during a brief hallway conversation.",
    context: "Your presentation needs to be tighter and more strategic.",
    answers: [
      {
        id: "a",
        text: "Guess what they meant and revise accordingly",
        score: 2
      },
      {
        id: "b", 
        text: "Ask for a specific example or clarification",
        score: 5
      },
      {
        id: "c",
        text: "Ask a peer how they interpreted the feedback",
        score: 3
      },
      {
        id: "d",
        text: "Leave it for now and revisit after your next project",
        score: 1
      }
    ],
    hasFollowUp: true,
    followUpPrompt: "What specific question would you ask to clarify this feedback? Write the exact question you would use."
  },
  {
    id: 2,
    title: "Contradictory Feedback",
    description: "You're receiving conflicting guidance from different stakeholders about your work approach.",
    context: "A client praises your detailed documentation, but your manager says, 'It's too much—keep it brief.'",
    answers: [
      {
        id: "a",
        text: "Follow the manager's guidance and make everything brief",
        score: 2
      },
      {
        id: "b",
        text: "Continue with detailed documentation since the client likes it",
        score: 2
      },
      {
        id: "c",
        text: "Ask both parties to align on expectations together",
        score: 5
      },
      {
        id: "d",
        text: "Create different versions for different audiences",
        score: 4
      }
    ],
    hasFollowUp: true,
    followUpPrompt: "How would you facilitate a conversation between the client and manager to resolve this conflict?"
  },
  {
    id: 3,
    title: "Public Critique in Meeting",
    description: "During a team meeting, you're unexpectedly called out for missing a process step.",
    context: "Everyone notices as your manager points out the oversight in front of the entire team.",
    answers: [
      {
        id: "a",
        text: "Acknowledge the mistake and ask for clarification on the correct process",
        score: 5
      },
      {
        id: "b",
        text: "Defend your approach and explain your reasoning",
        score: 2
      },
      {
        id: "c",
        text: "Apologize briefly and move on quickly",
        score: 3
      },
      {
        id: "d",
        text: "Ask to discuss this privately after the meeting",
        score: 4
      }
    ]
  },
  {
    id: 4,
    title: "Peer-to-Peer Friction",
    description: "A colleague approaches you with feedback about your communication style.",
    context: "You're always correcting people—it's exhausting.",
    answers: [
      {
        id: "a",
        text: "Listen actively and ask for specific examples",
        score: 5
      },
      {
        id: "b",
        text: "Explain that you're just trying to help improve quality",
        score: 2
      },
      {
        id: "c",
        text: "Ask what communication style would work better",
        score: 4
      },
      {
        id: "d",
        text: "Dismiss it as their personal sensitivity",
        score: 1
      }
    ],
    hasFollowUp: true,
    followUpPrompt: "What would you do differently in your next three interactions with this colleague?"
  }
];

export const practicalTasks = [
  {
    id: 1,
    title: "Feedback-to-Action Mapping",
    description: "Match common workplace feedback to the most appropriate improvement actions.",
    type: "matching"
  },
  {
    id: 2,
    title: "Compose a Clarifying Email",
    description: "Write a professional email asking for clarification on vague feedback.",
    type: "composition"
  },
  {
    id: 3,
    title: "Behavioral Adjustment Plan",
    description: "Create a 3-step plan to address feedback about poor communication.",
    type: "planning"
  }
];

export const timeManagementExercises = [
  {
    id: 1,
    title: "Feedback-Informed Prioritization",
    description: "You receive critical feedback mid-sprint. How do you reprioritize your tasks?",
    type: "prioritization"
  },
  {
    id: 2,
    title: "Deadline vs Quality Tradeoff",
    description: "Choose how to respond when feedback requires significant changes near a deadline.",
    type: "decision"
  }
];

export const problemSolvingCases = [
  {
    id: 1,
    title: "Process Audit Case",
    description: "Use team feedback to identify inefficiencies in a customer support process.",
    type: "analysis"
  },
  {
    id: 2,
    title: "Root Cause Exploration", 
    description: "Feedback reveals your team always scrambles at month-end. Find the real issue.",
    type: "investigation"
  }
];