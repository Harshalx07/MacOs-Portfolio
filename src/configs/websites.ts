import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "Quick Links",
    sites: [
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:harshalgalande9@gmail.com",
      },
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/Harshalx07",
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/harshal-galande/",
      },
      {
        id: "my-resume",
        title: "Resume",
        img: "img/icons/launchpad/resume.png",
        link: "/resume.pdf",
      },
      {
        id: "my-location",
        title: "Pune",
        link: "https://maps.google.com/?q=Pune%2C+India",
      },
    ],
  },
  freq: {
    title: "Daily Stack",
    sites: [
      {
        id: "jenkins",
        title: "Jenkins",
        link: "https://www.jenkins.io/doc/",
      },
      {
        id: "github-actions",
        title: "GitHub Actions",
        link: "https://docs.github.com/en/actions",
      },
      {
        id: "kubernetes",
        title: "Kubernetes",
        link: "https://kubernetes.io/docs/home/",
      },
      {
        id: "terraform",
        title: "Terraform",
        link: "https://developer.hashicorp.com/terraform/docs",
      },
      {
        id: "prometheus",
        title: "Prometheus",
        link: "https://prometheus.io/docs/introduction/overview/",
      },
      {
        id: "aws",
        title: "AWS",
        link: "https://docs.aws.amazon.com/",
      },
    ],
  },
};

export default websites;
