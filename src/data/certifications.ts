export interface Certification {
  id: number;
  title: string;
  provider: string;
  issueDate: string;
  expiryDate: string;
  credentialId: string;
  verificationUrl: string;
  description: string;
  skills: string[];
  category: string;
  level: 'Professional' | 'Associate' | 'Basic' | 'Expert';
  logo: string;
  featured: boolean;
  hours: number;
  pdfPath?: string;
  cloudImageUrl?: string; // New field for cloud-hosted image
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Solutions Architect Associate",
    provider: "Amazon Web Services",
    issueDate: "2024-03-15",
    expiryDate: "2027-03-15",
    credentialId: "AWS-SAA-2024-001",
    verificationUrl: "https://aws.amazon.com/verification/001",
    description: "Certificación que valida la capacidad de diseñar sistemas distribuidos escalables, seguros y robustos en AWS",
    skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization", "High Availability"],
    category: "Cloud Computing",
    level: "Associate",
    logo: "☁️",
    featured: true,
    hours: 40,
    pdfPath: "/certificates/aws-saa.pdf",
    cloudImageUrl: "https://cloud-provider.com/certificates/aws-saa.jpg" // Example cloud URL
  },
  {
    id: 2,
    title: "React Developer Professional",
    provider: "Meta",
    issueDate: "2024-01-20",
    expiryDate: "2026-01-20",
    credentialId: "META-REACT-2024-002",
    verificationUrl: "https://coursera.org/verify/002",
    description: "Certificación avanzada en desarrollo con React, incluyendo hooks, context, testing y mejores prácticas",
    skills: ["React", "JavaScript", "TypeScript", "State Management", "Testing"],
    category: "Frontend Development",
    level: "Professional",
    logo: "⚛️",
    featured: true,
    hours: 60,
    pdfPath: "/certificates/meta-react.pdf",
    cloudImageUrl: "https://cloud-provider.com/certificates/meta-react.jpg"
  },
  {
    id: 3,
    title: "Certified Kubernetes Administrator",
    provider: "Cloud Native Computing Foundation",
    issueDate: "2023-11-10",
    expiryDate: "2026-11-10",
    credentialId: "CKA-2023-003",
    verificationUrl: "https://cncf.io/verify/003",
    description: "Administración completa de clusters Kubernetes, incluyendo instalación, configuración y troubleshooting",
    skills: ["Kubernetes", "Docker", "Container Orchestration", "DevOps", "Linux"],
    category: "DevOps",
    level: "Professional",
    logo: "⚙️",
    featured: false,
    hours: 80,
    pdfPath: "/certificates/cka.pdf",
    cloudImageUrl: "https://cloud-provider.com/certificates/cka.jpg"
  }
];
