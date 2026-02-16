export const ROUTE_PATHS = {
  HOME: "/",
} as const;

export interface PartnershipFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessGap {
  id: string;
  category: "Procurement & Payables" | "Compliance & Readiness" | "Operational Efficiency";
  title: string;
  challenges: string[];
  impact: string;
}

export interface Outcome {
  title: string;
  description: string;
}

export const PARTNERSHIP_INFO = {
  year: 2026,
  name: "Dice × SQIT",
  tagline: "Closing the ERP Gaps. Powering the Next Phase of Digital Finance.",
  heroHeadline: "From ERP Implementation to Intelligent Process Completion",
  heroSubtext: "Organizations across the MENA region have invested heavily in ERP systems — yet critical finance and procurement processes still remain fragmented, manual, and compliance-ready only on paper.",
  missionStatement: "The Dice × SQIT partnership brings together deep ERP implementation expertise with intelligent automation and compliance-ready solutions to help enterprises bridge what traditional ERPs leave unfinished.",
};

export const SQIT_DETAILS = {
  name: "Square International Technology Consulting",
  shortName: "SQIT",
  description: "Square International Technology Consulting is a trusted ERP implementation partner with strong expertise in enterprise transformation and large-scale deployments.",
  strengths: [
    "Leads ERP implementation and integration",
    "Ensures alignment with existing enterprise architectures",
    "Acts as the primary implementation partner for extended process platforms",
  ],
  focus: "Making complex ERP environments stable, scalable, and adoption-ready across industries.",
};

export const DICE_DETAILS = {
  name: "Dice",
  description: "Dice complements ERP systems by addressing the process gaps that sit around them — especially in procurement, invoicing, and compliance workflows.",
  strengths: [
    "Digitize and automate workflows that ERPs don't fully cover",
    "Reduce manual intervention using intelligent automation",
    "Prepare for evolving regulatory and compliance mandates",
  ],
  integration: "Integrates seamlessly with the core ERP layer.",
};

export const PROCESS_GAPS: ProcessGap[] = [
  {
    id: "procurement",
    category: "Procurement & Payables",
    title: "Fragmented Transactional Flows",
    challenges: [
      "Fragmented flow between request, order, receipt, and invoice stages",
      "Limited validation between documents and transactions",
      "Manual effort in vendor interactions and approvals",
    ],
    impact: "Increased operational friction and slower cycle times.",
  },
  {
    id: "compliance",
    category: "Compliance & Readiness",
    title: "Regulatory & Mandate Friction",
    challenges: [
      "Growing regulatory requirements without scalable systems",
      "Limited preparedness for upcoming digital invoicing mandates",
      "Reactive compliance instead of built-in compliance",
    ],
    impact: "Higher risk of non-compliance and audit failures.",
  },
  {
    id: "efficiency",
    category: "Operational Efficiency",
    title: "Manual Handoff Latency",
    challenges: [
      "High turnaround times due to manual handoffs",
      "Dependency on human intervention for repetitive tasks",
      "Lack of real-time visibility across processes",
    ],
    impact: "Reduced scalability and wasted human capital.",
  },
];

export const ENTERPRISE_OUTCOMES: Outcome[] = [
  {
    title: "Shorter Process Turnaround",
    description: "Significant reduction in the time from procurement request to final payment.",
  },
  {
    title: "Reduced Manual Dependency",
    description: "Automation of repetitive data entry and validation tasks to minimize human error.",
  },
  {
    title: "Improved Auditability",
    description: "Full process transparency and digital trails for simplified compliance auditing.",
  },
  {
    title: "Better ERP Utilization",
    description: "Maximize existing ERP ROI without resorting to heavy, costly customizations.",
  },
  {
    title: "Regulatory Readiness",
    description: "Stay ahead of evolving MENA digital mandates with systems ready for 2026 and beyond.",
  },
];

export const MENA_CONTEXT = {
  headline: "Built for the MENA Market's Next Phase",
  description: "With regulatory landscapes evolving and digital mandates accelerating, organizations need systems that are ready before deadlines arrive — not after.",
  goals: [
    "Transition smoothly toward digital compliance requirements",
    "Scale operations without increasing headcount",
    "Stay future-ready without repeated system overhauls",
  ],
};
