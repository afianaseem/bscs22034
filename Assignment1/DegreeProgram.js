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
<div class="image-box-head">
        <img src="./deg1.png" alt="Image 1">
    </div>
    <div class="space1"></div>
    <div class="footer-column justify-content">
        <b><h3>Hackathon at LUMS:</h3></b>
        <p>Participating in a Hackathon at the Lahore University of Management Sciences (LUMS) provided me with a unique and intensive learning experience. Hackathons are collaborative events where participants work in teams to develop software or hardware solutions to specific challenges within a set timeframe. At LUMS, the hackathon experience was structured to simulate real-world problem-solving and innovation processes.</p>
        <b><h5>Practical Experience:</h5></b>
        <p>I gained proficiency in coding under pressure, debugging on the fly, and integrating various technologies. This practical exposure is invaluable in bridging the gap between classroom learning and real-world application.</p>
        <b><h5>Teamwork:</h5></b>
        <p> Working in a team environment helped me develop strong collaboration skills. I learned how to effectively communicate ideas, delegate tasks, and manage a project from conception to completion.</p>
        <b><h5>Creativity:</h5></b>
        <p>The hackathon encouraged creative thinking and innovation. I was challenged to come up with novel solutions and think outside the box, which is essential for problem-solving in the tech industry. This experience helped me enhance my ability to develop unique approaches to technical challenges.</p>
        <b><h5>Resume:</h5></b>
        <p>Successfully participating in a hackathon adds a significant achievement to my resume. It demonstrates my ability to work under pressure, collaborate with others, and tackle real-world problems.</p>
        <b><h5>Building Networks:</h5></b>
        <p>Building a network within the tech community can open doors to future opportunities, including internships, job placements, and collaborative projects.        </p>
    </div>
    <div class="image-box-head">
        <img src="./deg2.png" alt="Image 1">
    </div>
    <div class="space1"></div>
    <div class="footer-column justify-content"></div>
        <b><h3>Python Course from IBM:</h3></b>
        <p>The Python course from IBM was a comprehensive program that covered a wide range of topics from basic syntax to advanced applications. IBM is known for its expertise in technology and its commitment to providing high-quality educational resources, which made this course particularly valuable.</p>
        <b><h5>Skills:</h5></b>
        <p> IBM’s course focused on practical applications of Python, including data analysis, visualization, and working with libraries such as Pandas and NumPy.</p>
        <b><h5>Projects:</h5></b>
        <p>The course included practical projects and assignments that helped me apply what I learned in a meaningful way. Completing these projects enhanced my problem-solving skills and provided a portfolio of work to showcase to potential employers.        </p>
        <b><h5>Foundation:</h5></b>
        <p>The course provided a solid foundation in Python programming, one of the most versatile and widely used languages in the tech industry. Mastering Python is essential for various fields, including web development, data science, and machine learning.</p>
        <b><h5>Credential:</h5></b>
        <p>Earning a certification from IBM adds significant value to my educational credentials.</p>
    </div>
        `;
        document.getElementById("shortCoursesContent").innerHTML = content;
    }

    createNavbar();
    createShortCoursesContent();
});
