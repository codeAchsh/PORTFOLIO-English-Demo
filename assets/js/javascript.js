document.addEventListener("DOMContentLoaded", function () {
  // About Me Section (Sample demo values)
  document.querySelector(".about-me h1").innerHTML = "Your Name";
  document.querySelector(".about-me p").innerHTML = "Your Position";
  document.querySelector(".about-me a").innerHTML = "This is a brief self-introduction.";

  // Contact Me Section (Demo placeholders)
  document.querySelector(".add").innerHTML = "123 Demo Street, Tokyo";
  document.querySelector(".tel").innerHTML = "tel: 000-0000-0000";
  document.querySelector(".email").innerHTML = "email@example.com";

  // Education Section (Sample data)
  document.querySelector(".h-school").innerHTML = "2010-2013";
  document.querySelector(".h-name").innerHTML = "Sample High School";
  document.querySelector(".uni").innerHTML = "2014-2018";
  document.querySelector(".u-name").innerHTML = "Demo University";

  // Experience Section (Sample data)
  document.querySelector(".experience-1").innerHTML = "2018-2020";
  document.querySelector(".task-1").innerHTML = "Worked on sample project A";
  document.querySelector(".ability-1").innerHTML = "Improved UX by 25%";

  document.querySelector(".experience-2").innerHTML = "2020-2022";
  document.querySelector(".task-2").innerHTML = "Managed project B";
  document.querySelector(".ability-2").innerHTML = "Led 5-person team";

  document.querySelector(".experience-3").innerHTML = "2022-Present";
  document.querySelector(".task-3").innerHTML = "Developing portfolio site";
  document.querySelector(".ability-3").innerHTML = "Focused on responsive design";
});

// Skills Section (Simple skill bar display)
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill");

  skills.forEach((skill) => {
    const skillName = skill.getAttribute("data-skill");

    // Set fixed demo value (originally would use data-level)
    const skillLevel = "30";

    skill.innerHTML = `
      <div class="skill-name">${skillName}</div>
      <div class="skill-bar">
        <div class="skill-level" style="width: ${skillLevel}%;"></div>
      </div>
    `;
  });
});
