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
  <b><h5>Ludo:</h5></b>
        <p>A digital version of the classic board game Ludo in OOP, where players race their pieces around the board based on dice rolls.</p>
        <b><h5>Time & Date:</h5></b>2 semester
        <p> Projects or coursework from the second semester of studies at ITU (International Technology University).</p>
        <div class="space"></div>
        <b><h5>Quranic Verses:</h5></b>
        <p>An application for displaying and managing verses from the Quran, possibly including features for translation, tafsir, or memorization.</p>
        <b><h5>Time & Date:</h5></b>4 semester
        <p>Projects or coursework on MongoDB from the fourth semester of studies at ITU.</p>
        <div class="space"></div>
        <b><h5>Sapphire Website:</h5></b>
        <p>Project to make Sapphire Website on web development</p>
        <b><h5>Time & Date:</h5></b>Last month
        <p>Projects or coursework completed last month during PNY training.</p>
        <div class="space"></div>
        <b><h5>Tic Tac Toe:</h5></b>
        <p> A simple game where players take turns marking spaces in a 3x3 grid to achieve three in a row in C++.</p>
        <b><h5>Time & Date:</h5></b>1 semester
        <p>Projects or coursework from the first semester of studies at ITU.</p>
        <div class="space"></div>
        <b><h5>Chess:</h5></b>
        <p>A digital version of the strategic board game Chess, allowing players to move pieces according to established rules and play against opponents in OOP.</p>
        <b><h5>Time & Date:</h5></b>2 semester
        <p>Additional projects or coursework from the second semester of studies at ITU.</p>
        <div class="space"></div>
        <b><h5>Paint Brush:</h5></b>
        <p>A drawing application that simulates painting and sketching with various tools and colors in C++.</p>
        <b><h5>Time & Date:</h5></b>1 semester
        <p>More projects or coursework from the first semester of studies at ITU.</p>
        <div class="space"></div>
        <b><h5>Parents Guide Application:</h5></b>
        <p>An application providing resources, tips, and advice for parents on various aspects of child-rearing and family life , made on Readis.</p>
        <b><h5>Time & Date:</h5></b>4 semester
        <p>Additional projects or coursework from the fourth semester of studies at ITU.</p>
        <div class="space"></div>
        <b><h5>Calculator:</h5></b>
        <p>A basic arithmetic calculator application for performing standard mathematical operations and made in C#.</p>
        <b><h5>Time & Date:</h5></b>1 semester
        <p>Yet more projects or coursework from the first semester of studies at ITU.</p>
        <div class="space"></div>
        <b><h5>Snake Game:</h5></b>
        <p>A game where players control a snake that grows longer as it eats, while avoiding collisions with itself or the boundaries, made in C++ .</p>
        <b><h5>Time & Date:</h5></b>1 semester
        <p>Further projects or coursework from the first semester of studies at ITU.</p>
        <div class="space"></div>
        <b><h5>Gomoku:</h5></b>
        <p>A game similar to Tic Tac Toe but played on a larger grid where the goal is to align five consecutive marks in a row and made in OOP.</p>
        <b><h5>Time & Date:</h5></b>2 semester
        <p>Continued projects or coursework from the second semester of studies at ITU.</p>
        `;
        document.getElementById("shortCoursesContent").innerHTML = content;
    }

    createNavbar();
    createShortCoursesContent();
});
