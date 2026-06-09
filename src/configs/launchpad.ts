import type { LaunchpadData } from "~/types";

const launchpadApps: LaunchpadData[] = [
  {
    id: "tetris-v2",
    title: "Tetris v2",
    img: "img/icons/launchpad/cube.png",
    link: "/projects/tetris-v2.html"
  },
  {
    id: "spring-cicd",
    title: "Spring CI/CD",
    img: "img/icons/launchpad/notebook.png",
    link: "/projects/spring-cicd.html"
  },
  {
    id: "gke-microservices",
    title: "GKE Platform",
    img: "img/icons/launchpad/vercel.svg",
    link: "/projects/gke-microservices.html"
  },
  {
    id: "aws-terraform",
    title: "AWS Terraform",
    img: "img/icons/launchpad/library-icon.png",
    link: "/projects/aws-terraform.html"
  }
];

export default launchpadApps;
