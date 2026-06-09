import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-me",
        title: "intro.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Harshal. I am a DevOps Engineer based in Pune with
              hands-on experience in CI/CD, Kubernetes, Terraform, cloud
              automation, and observability.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "CI/CD / Kubernetes / Terraform / AWS / GitOps / Monitoring"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "I'm looking for DevOps, SRE, and Cloud Infrastructure opportunities. I enjoy building fast release pipelines and reliable cloud platforms."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:harshalgalande9@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                harshalgalande9@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/Harshalx07"
                target="_blank"
                rel="noreferrer"
              >
                @Harshalx07
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/harshal-galande/"
                target="_blank"
                rel="noreferrer"
              >
                harshal-galande
              </a>
            </li>
            <li>
              Resume:{" "}
              <a
                className="text-blue-300"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Harshal_Galande_DevOps_Engineer_Resume.pdf
              </a>
            </li>
            <li>
              Location: Pune, India
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
