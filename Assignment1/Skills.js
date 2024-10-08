document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = [
        { name: "Skills", href: "Skills.html", img: "./web1.png", content: softHardSkills() },
        { name: "Projects", href: "Projects.html", img: "./web2.png", content: projectList() },
        { name: "Short Courses", href: "ShortCourses.html", img: "./web3.png", content: shortCoursesList() },
        { name: "Degree Program", href: "DegreeProgram.html", img: "./web4.png", content: degreePrograms() },
        { name: "Awards / Certificates", href: "Awards.html" }
    ];

    function createNavbar() {
        navbarLinks.forEach(link => {
            const li = document.createElement('li');
            li.classList.add('nav-item');
            const a = document.createElement('a');
            a.classList.add('nav-link');
            a.textContent = link.name;
            a.onclick = () => window.location.href = link.href;
            li.appendChild(a);
            if (link.img) {
                const dropdownMenu = document.createElement('div');
                dropdownMenu.classList.add('dropdown-menu');
                dropdownMenu.innerHTML = link.content;
                li.appendChild(dropdownMenu);
            }
            document.getElementById("navbarLinks").appendChild(li);
        });
    }

    function softHardSkills() {
        return `
            <div class="row">
                <div class="col-md-4"><img src="./web1.png" alt="Skills" class="img-fluid"></div>
                <div class="col-md-4">
                    <h6><u>Soft Skills</u></h6>
                    <ul>
                        <li>Creativity</li>
                        <li>Time Management</li>
                        <li>Communication</li>
                        <li>Adaptability</li>
                        <li>Attentive</li>
                        <li>Critical Thinking</li>
                        <li>Patience</li>
                        <li>Teamwork</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h6><u>Hard Skills</u></h6>
                    <ul>
                        <li>Version Control</li>
                        <li>Programming languages</li>
                        <li>Web Development</li>
                        <li>Basic AI</li>
                        <li>SDLC</li>
                        <li>Problem Solving</li>
                        <li>Database Systems</li>
                        <li>Data Structures and Algorithms</li>
                    </ul>
                </div>
            </div>
        `;
    }

    function projectList() {
        return `
            <div class="row">
                <div class="col-md-4"><img src="./web2.png" alt="Projects" class="img-fluid"></div>
                <div class="col-md-4">
                    <h6><u>Projects</u></h6>
                    <ul>
                        <li>Ludo</li>
                        <li>Quranic Verses</li>
                        <li>Sapphire Website</li>
                        <li>Tic Tac Toe</li>
                        <li>Chess</li>
                        <li>Paint Brush</li>
                        <li>Parents Guide App</li>
                        <li>Calculator</li>
                        <li>Snake Game</li>
                        <li>Gomoko</li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h6><u>Date and Time</u></h6>
                    <ul>
                        <li>2 semester (ITU)</li>
                        <li>4 semester (ITU)</li>
                        <li>last month (PNY Training)</li>
                        <li>1 semester (ITU)</li>
                        <li>2 semester (ITU)</li>
                        <li>1 semester (ITU)</li>
                        <li>4 semester (ITU)</li>
                        <li>1 semester (ITU)</li>
                        <li>1 semester (ITU)</li>
                        <li>2 semester (ITU)</li>
                    </ul>
                </div>
            </div>
        `;
    }

    function shortCoursesList() {
        return `
            <div class="row">
                <div class="col-md-4"><img src="./web3.png" alt="Short Courses" class="img-fluid"></div>
                <div class="col-md-4">
                    <h6><u>Short Courses</u></h6>
                    <ul>
                        <li>Web Development</li>
                        <li>Python</li>
                        <li>Robotics</li>
                        <li>WordPress</li>
                        <li>Freelancing</li>
                    </ul>
                </div>
            </div>
        `;
    }

    function degreePrograms() {
        return `
            <div class="row">
                <div class="col-md-3"><img src="./web4.png" alt="Degree Program" class="img-fluid"></div>
                <div class="col-md-3">
                    <h6><u>Programs</u></h6>
                    <ul>
                        <li>Hackathon</li>
                        <li>Python</li>
                    </ul>
                </div>
            </div>
        `;
    }

    function createShortCoursesContent() {
        const content = `
            </div>
    <div class="image-box-head">
        <img src="./skills1.png" alt="Image 1">
    </div>
    <div class="space1"></div>
 <b><h5>Creativity:</h5></b>
<p><b>Cooking:</b>Experimenting with recipes and presentation.</p>
<p><b>Reading/Movies:</b> Critical thinking and imagination in analyzing narratives.</p>
<b><h5>Attentive:</h5></b>
<p><b>Cooking:</b>Planning and timing different components of a meal.</p>
<p><b>Computer Science:</b>Managing deadlines and project milestones.</p>
<b><h5>Problem-Solving:</h5></b>
<p><b>Cooking:</b>Troubleshooting recipes and ingredient substitutions.</p>
<p><b>Computer Science:</b>Debugging and optimizing code.</p>
<b><h5>Communication:</h5></b>
<p><b>Cooking:</b>Explaining recipes or techniques to others.</p>
<p><b>Music:</b>Adapting to different musical styles or situations.</p>
<p><b>Computer Science:</b> Learning new technologies or methods.</p>
<b><h5>Awareness:</h5></b>
<p><b>Cooking:</b>Understanding and appreciating diverse cuisines.</p>
<p><b>Music:</b>Exposure to various musical genres and traditions.</p>
<p><b>Computer Science:</b> Understanding different cultural contexts and perspectives.</p>
<b><h5>Teamwork:</h5></b>
<p><b>Cooking:</b>Understanding and appreciating each other taste of food.</p>
<p><b>Computer Science:</b> Working together to complete projects effectively.</p>
    </div>
    <div class="image-box-head">
        <img src="./skill2.png" alt="Image 1">
    </div>
    <div class="space1"></div>
    
    <!--Education-->
    <div id="education">
        <div id="footer-column-head"><h3><ul><b>Hard Skills</b></ul></h3></div>
        <div class="footer-column justify-content">
            <b><h5>Technical Cooking Skills:</h5></b>
    <p><b>Cooking:</b>Knife skills, cooking techniques, food safety, and kitchen equipment proficiency.</p>
    <b><h5>Literary Analysis:</h5></b>
    <p><b>Reading:</b>Critical analysis, comprehension, and interpretation of texts.</p>
    <b><h5>Programming Languages:</h5></b>
    <p><b>Computer Science:</b>Proficiency in languages such as Python, Java, C++, C sharp, C , mongoDB , readis , etc.</p>
    <b><h5>Database Management:</h5></b>
    <p><b>Computer Science:</b>Understanding of SQL and database design.</p>
    <b><h5>Debugging and Testing:</h5></b>
    <p><b>Computer Science:</b> Skills in identifying and fixing issues in code and ensuring software quality through testing.</p>
    <b><h5>Systems Analysis and Design:</h5></b>
    <p><b>Computer Science:</b>Skills in analyzing and designing complex systems and architectures.</p>
        
</div>
            `;
        document.getElementById("shortCoursesContent").innerHTML = content;
    }

    createNavbar();
    createShortCoursesContent();
});
