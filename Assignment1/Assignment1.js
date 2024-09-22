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

<!--Introduction-->
<div id="introduction">
<div id="footer-column-head"><h3><ul><b>Introduction:</b></ul></h3></div>
<b>Myself:</b>
<p>Hello! My name is Afia Naseem, and I am currently a Computer Science student at ITU University, where I am in my fifth semester. I am passionate about exploring the ever-evolving world of technology and coding.</p>
<b>Hobbies:</b>
<p>Outside of my academic pursuits, I enjoy a range of hobbies that keep me engaged and inspired. These include cooking, where I love experimenting with new recipes, listening to and creating music, and immersing myself in good books and movies. Each of these activities provides a creative outlet and helps me balance my technical studies with a rich array of personal interests.</p>
<b>Interests:</b>
<p>I have a deep interest in exploring new technologies, coding practices, and software development methodologies. My studies in Computer Science fuel my curiosity about emerging tech trends and innovations.</p>
</div>

<!-- Video Content -->
<section id="videoContent" class="video-container">
    <h2><b>Video Content</b></h2>
    <div class="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/sVPYIRF9RCQ?autoplay=1&loop=1&mute=1&playlist=sVPYIRF9RCQ" title="YouTube video" allowfullscreen></iframe>
    </div>
</section>

<!--Education-->
<div class="footer" id="education"></div>
<div id="education">
    <div id="footer-column-head"><h3><ul><b>Education</b></ul></h3></div>
    <div class="footer-column justify-content">
        <h5><b> Technology University</b></h5>
        <b>Duration:</b>2022-present
        <h5><b>CGPA:3.13</b></h5>
        <b>Bachelor of Science in Computer Science</b>
        <p>Introduction to Programming, Object-Oriented Programming, Calculus,
            Differential Equations, Computer Organization and Architecture, Digital
            Logic and Design, Communication skills, Basic Electronics.Operating System</p>
    </div>
    <div class="footer-column justify-content">
                <h5><b>Punjab Group of Colleges</b></h5>
                <b>Duration:</b>2020-2022
                <h5><b>Grade: A+</b></h5>
                <p>Matric: Physics, Computer , Mathematics </p>
                    <p>Full Merit Based Scholarship</p>
    </div>
    <div class="footer-column justify-content"></div>
                <h5><b>American Lycetuff School</b></h5>
                <b>Duration:</b>2018-2020
                <h5><b>Grade: A+</b></h5>
                <p>Subjects: Biology, Physics, Chemistry, Mathematics, Computer Science,
                    English, Urdu, Pakistan Studies, Islamiyat.</p>
                    <p>Full Merit Based Scholarship</p>
    </div>
</div>

<!--Feed Post-->
<div id="footer-column-head"><h3><ul><b>Media Feed:</b></ul></h3></div>
<div id="space"></div>
<div class="feed" id="mediaFeed">
    <div class="post">
        <div>Afia Naseem</div>
        <div class="timestamp">September 15, 2024</div>
        <p>Happy Coding!</p>
    </div>
    <div class="post">
        <div>Azka Tahir</div>
        <div class="timestamp">September 14, 2024</div>
        <p>Check out Web development trends.</p>
    </div>
</div>
</div>
    <!-- About Me -->
<div class="footer" id="aboutMe">
    <div class="footer-column">
        <h3>About Me</h3>
        <p>Afia Naseem<br>
           ABC house , Gulshan-e-Ravi,<br>
           District Lahore, Lahore.
        </p>
        <p>Email: <a href="">bscs22034@itu.edu.pk</a></p>
        <p>Phone: <a href="tel:+92xxxxxxxxx">+92(0)42 000-000-000</a></p>
    </div>
    <div class="footer-column img">
            <img src="./myself.png" alt="Myself">
    </div>

</div>

            `;
        document.getElementById("shortCoursesContent").innerHTML = content;
    }

    createNavbar();
    createShortCoursesContent();
});
