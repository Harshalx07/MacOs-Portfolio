import type { StateCreator } from "zustand";

export interface UserSlice {
  typoraMd: string;
  setTyporaMd: (v: string) => void;
  faceTimeImages: {
    [date: string]: string;
  };
  addFaceTimeImage: (v: string) => void;
  delFaceTimeImage: (k: string) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  typoraMd: `# Harshal Galande

## DevOps Engineer

- Location: Pune, India
- GitHub: [Harshalx07](https://github.com/Harshalx07)
- LinkedIn: [harshal-galande](https://www.linkedin.com/in/harshal-galande/)

## Snapshot

I focus on CI/CD automation, Kubernetes orchestration, Infrastructure as Code, and cloud monitoring.

### Recent impact

- Reduced release cycles from **2 hours to 15 minutes** with Jenkins and GitHub Actions
- Provisioned AWS environments from **zero to live in under 10 minutes** with Terraform
- Cut MTTD to **under 5 minutes** using Prometheus and Grafana

### Core tools

\`\`\`yaml
ci_cd:
  - Jenkins
  - GitHub Actions
  - ArgoCD
containers:
  - Docker
  - Kubernetes
  - Helm
cloud:
  - AWS
  - GCP
infrastructure:
  - Terraform
  - Ansible
monitoring:
  - Prometheus
  - Grafana
\`\`\`
`,
  setTyporaMd: (v) => set(() => ({ typoraMd: v })),
  faceTimeImages: {},
  addFaceTimeImage: (v) =>
    set((state) => {
      const images = state.faceTimeImages;
      images[+new Date()] = v;
      return { faceTimeImages: images };
    }),
  delFaceTimeImage: (k) =>
    set((state) => {
      const images = state.faceTimeImages;
      delete images[k];
      return { faceTimeImages: images };
    })
});
