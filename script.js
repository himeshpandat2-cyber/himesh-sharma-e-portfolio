const links = {
  github: "https://github.com/himeshpandat2-cyber",
  repositories: "https://github.com/himeshpandat2-cyber?tab=repositories",
  linkedin: "https://www.linkedin.com/in/himesh-sharma-070956324",
  email: "mailto:himeshpandat2@gmail.com"
};

const projects = [
  {
    index: "01",
    status: "Live",
    title: "Professional Portfolio Website",
    description:
      "A responsive personal website created to present profile details, skills, contact links, and project direction in one recruiter-friendly page.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: links.github,
    action: "View Profile"
  },
  {
    index: "02",
    status: "Publishing Next",
    title: "Web Development Projects",
    description:
      "Repository space prepared for complete web apps with clean UI, readable code, screenshots, and deployment links.",
    stack: ["Frontend", "Responsive UI", "README"],
    link: links.repositories,
    action: "View Repos"
  },
  {
    index: "03",
    status: "In Progress",
    title: "Programming Practice",
    description:
      "A dedicated section for problem-solving practice, programming fundamentals, and code samples as repositories become public.",
    stack: ["DSA", "Debugging", "Logic"],
    link: links.repositories,
    action: "View Repos"
  },
  {
    index: "04",
    status: "Professional",
    title: "LinkedIn & Contact Profile",
    description:
      "Direct profile and contact path for recruiters, placement teams, internship callbacks, and collaboration conversations.",
    stack: ["LinkedIn", "Email", "Recruiters"],
    link: links.linkedin,
    action: "Connect"
  }
];

const projectGrid = document.querySelector("#project-grid");

projects.forEach((project) => {
  const card = document.createElement("a");
  card.className = "project-card";
  card.href = project.link;

  card.innerHTML = `
    <div>
      <div class="project-top">
        <span class="project-index">${project.index}</span>
        <span class="project-status">${project.status}</span>
        <span class="project-action">${project.action}</span>
      </div>
      <h3>${project.title}</h3>
    </div>
    <p>${project.description}</p>
    <div class="project-stack">
      ${project.stack.map((item) => `<span>${item}</span>`).join("")}
    </div>
  `;

  projectGrid.appendChild(card);
});
