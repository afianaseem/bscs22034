
const profileData = {
    skills: {
        softSkills: [
            {image: "./skills1.png", name: "Creativity", description: "Experimenting with recipes and presentation."},
            {image: "./skills1.png", name: "Attentiveness", description: "Planning and timing different components of a meal."},
            {image: "./skills1.png", name: "Problem-Solving", description: "Troubleshooting recipes and ingredient substitutions."},
            {image: "./skills1.png", name: "Communication", description: "Explaining recipes or techniques to others."},
            {image: "./skills1.png", name: "Awareness", description: "Understanding and appreciating diverse cuisines."},
            {image: "./skills1.png", name: "Teamwork", description: "Working together to complete projects effectively."}
        ],
        hardSkills: [
            {image: "./skill2.png", name: "Technical Cooking Skills", description: "Knife skills, cooking techniques, food safety."},
            {image: "./skill2.png", name: "Literary Analysis", description: "Critical analysis, comprehension of texts."},
            {image: "./skill2.png", name: "Programming Languages", description: "Proficiency in languages such as Python, Java."},
            {image: "./skill2.png", name: "Database Management", description: "Understanding of SQL and database design."},
            {image: "./skill2.png", name: "Debugging and Testing", description: "Identifying and fixing issues in code."},
            {image: "./skill2.png", name: "Systems Analysis", description: "Analyzing and designing complex systems."}
        ]
    }
};

function populateSkills() {
    const softSkillsContainer = document.querySelector('#softSkills');
    const hardSkillsContainer = document.querySelector('#hardSkills');

    softSkillsContainer.innerHTML = '<h3>Soft Skills</h3>';
    profileData.skills.softSkills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.innerHTML = `<b>${skill.name}:</b> ${skill.description}`;
        softSkillsContainer.appendChild(skillItem);
    });

    hardSkillsContainer.innerHTML = '<h3>Hard Skills</h3>';
    profileData.skills.hardSkills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.innerHTML = `<b>${skill.name}:</b> ${skill.description}`;
        hardSkillsContainer.appendChild(skillItem);
    });
}
function populateSkills() {
const softSkillsContainer = document.querySelector('#softSkills');
const hardSkillsContainer = document.querySelector('#hardSkills');

softSkillsContainer.innerHTML = '<h3>Soft Skills</h3>';
profileData.skills.softSkills.forEach(skill => {
const skillItem = document.createElement('div');
skillItem.innerHTML = `<img src="${skill.image}" alt="${skill.name}" class="img-fluid" style="max-width: 50px;"> <b>${skill.name}:</b> ${skill.description}`;
softSkillsContainer.appendChild(skillItem);
});

hardSkillsContainer.innerHTML = '<h3>Hard Skills</h3>';
profileData.skills.hardSkills.forEach(skill => {
const skillItem = document.createElement('div');
skillItem.innerHTML = `<img src="${skill.image}" alt="${skill.name}" class="img-fluid" style="max-width: 50px;"> <b>${skill.name}:</b> ${skill.description}`;
hardSkillsContainer.appendChild(skillItem);
});
}
populateSkills()
