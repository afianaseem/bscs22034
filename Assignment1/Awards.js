const profileData = {
    skills: {
        softSkills: ["Creativity", "Time Management", "Communication", "Adaptability", "Attentive", "Critical Thinking", "Patience", "Teamwork"],
        hardSkills: ["Version Control", "Programming languages", "Web Development", "Basic AI", "SDLC", "Problem Solving", "Database Systems", "Data Structures and Algorithm"],
        imageSrc: "./web1.png"
    },
    projects: {
        titles: ["Ludo", "Quranic Verses", "Sapphire Website", "Tic Tac Toe", "Chess", "Paint Brush", "Parents Guide App", "Calculator", "Snake Game", "Gomoko"],
        times: ["2 semester (ITU)", "4 semester (ITU)", "last month (PNY Training)", "1 semester (ITU)", "2 semester (ITU)", "1 semester (ITU)", "4 semester (ITU)", "1 semester (ITU)", "1 semester (ITU)", "2 semester (ITU)"],
        imageSrc: "./web2.png"
    },
    shortCourses: ["Web Development", "Python", "Robotics", "WordPress", "Freelancing"],
    degreePrograms: ["Hackathon", "Python"],
    awards: [
        { title: "Kaar e Kamal", description: "In the heart of the welfare society,Kaar-e-Kamal stands as a beacon of transformative work, its achievements now immortalized by the certificate of recognition. This accolade celebrates not just the efforts, but the profound impact made on countless lives.", imageSrc: "./cer1.jpg" },
        { title: "WordPress", description: "The completion of the WordPress course by DigiSkills is marked by a certificate that acknowledges newfound expertise in web development and design. This credential highlights both the dedication to mastering the platform and the readiness to create dynamic, professional websites.", imageSrc: "./cer2.JPG" },
        { title: "Freelancing", description: "The DigiSkills freelancing course culminates in a certificate that signifies a comprehensive grasp of the freelance landscape. This achievement not only validates skill acquisition but also opens doors to new opportunities in the world of independent work.", imageSrc: "./cer3.JPG" },
        { title: "Character Building Society", description: "The seminar on CV making, hosted by the Character Building Society of ITU University, culminated in a certificate that underscores a refined ability to craft compelling resumes. This recognition highlights the skills gained in presenting professional strengths and achievements effectively.", imageSrc: "./cer4.JPG" },
        { title: "Python IBM certificate", description: "The IBM Python course, now marked by a certificate, signifies a solid foundation in programming with Python. This credential reflects both the mastery of coding principles and the readiness to tackle real-world problems with innovative solutions.", imageSrc: "./cer5.JPG" },
        { title: "Robotics", description: "The robotics course from PGC College, validated by a certificate, signifies a thorough understanding of robotic systems and their applications. This achievement highlights both the theoretical knowledge and practical skills acquired in advancing the field of robotics.", imageSrc: "./cer6.JPG" },
        { title: "Microsoft Badge for Word", description: "The Microsoft Word Associate Badge , now recognized with a certificate, attests to a proficient grasp of foundational Microsoft technologies and best practices. This certification marks a significant milestone in demonstrating technical expertise and readiness for advanced IT challenges.", imageSrc: "./cer7.JPG" },
        { title: "Hackathon", description: "The hackathon exam hosted by LUMS University, now celebrated with a certificate, underscores innovative problem-solving and collaborative skills. This accolade reflects both the competitive spirit and technical prowess demonstrated during the event.", imageSrc: "./cer8.JPG" },
        { title: "Microsoft Office Specialist certificate", description: "The Microsoft Office Specialist , now certified, validates expert proficiency in Microsoft Office applications. This credential confirms advanced skills in leveraging Office tools for enhanced productivity and efficiency in professional tasks.", imageSrc: "./cer9.JPG" }
    ]
};

function populateSkills() {
    const softSkillsList = document.getElementById('softSkillsList');
    const hardSkillsList = document.getElementById('hardSkillsList');

    profileData.skills.softSkills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        softSkillsList.appendChild(li);
    });

    profileData.skills.hardSkills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        hardSkillsList.appendChild(li);
    });
}

function populateProjects() {
    const projectsList = document.getElementById('projectsList');
    const projectTimesList = document.getElementById('projectTimesList');

    profileData.projects.titles.forEach(title => {
        const li = document.createElement('li');
        li.textContent = title;
        projectsList.appendChild(li);
    });

    profileData.projects.times.forEach(time => {
        const li = document.createElement('li');
        li.textContent = time;
        projectTimesList.appendChild(li);
    });
}

function populateShortCourses() {
    const shortCoursesList = document.getElementById('shortCoursesList');

    profileData.shortCourses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = course;
        shortCoursesList.appendChild(li);
    });
}

function populateDegreePrograms() {
    const degreeProgramsList = document.getElementById('degreeProgramsList');

    profileData.degreePrograms.forEach(program => {
        const li = document.createElement('li');
        li.textContent = program;
        degreeProgramsList.appendChild(li);
    });
}

function populateAwards() {
    const awardsContainer = document.getElementById('awardsContainer');

    profileData.awards.forEach(award => {
        const div = document.createElement('div');
        div.className = 'image-container1';

        const img = document.createElement('img');
        img.src = award.imageSrc;
        img.alt = award.title;

        const h2 = document.createElement('h2');
        h2.textContent = award.title;

        const p = document.createElement('p');
        p.textContent = award.description;

        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p);
        awardsContainer.appendChild(div);
    });
}

populateSkills();
populateProjects();
populateShortCourses();
populateDegreePrograms();
populateAwards();
