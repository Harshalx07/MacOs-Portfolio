import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-ph:paw-print",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-ph:shield-star",
        excerpt: "A quick introduction to Harshal's DevOps background, tools, and goals."
      },
      {
        id: "experience",
        title: "Experience Snapshot",
        file: "markdown/experience.md",
        icon: "i-ph:briefcase",
        excerpt: "Production internship impact across CI/CD, Kubernetes, Terraform, and monitoring."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-fa6-brands:github",
        excerpt: "Live GitHub stats for Harshal's public profile."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-ph:browser",
        excerpt: "How this macOS-inspired portfolio was customized around DevOps work."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-ph:git-branch",
    md: [
      {
        id: "tetris-v2",
        title: "Tetris v2 GitOps",
        file: "markdown/projects/tetris-v2.md",
        icon: "i-ph:rocket-launch",
        excerpt: "Jenkins, Docker, Kubernetes, and ArgoCD working together in a fast deployment loop."
      },
      {
        id: "spring-cicd",
        title: "Spring Boot CI/CD",
        file: "markdown/projects/spring-cicd.md",
        icon: "i-ph:git-commit",
        excerpt: "A webhook-driven multi-stage Docker pipeline for a Java application."
      },
      {
        id: "gke-microservices",
        title: "GKE Microservices",
        file: "markdown/projects/gke-microservices.md",
        icon: "i-ph:cloud",
        excerpt: "A six-service ecommerce stack running on Google Kubernetes Engine with HPA."
      },
      {
        id: "aws-terraform",
        title: "AWS Terraform IaC",
        file: "markdown/projects/aws-terraform.md",
        icon: "i-ph:hard-drives",
        excerpt: "Reusable Terraform modules provisioning 40+ AWS resources across environments."
      }
    ]
  }
];

export default bear;
