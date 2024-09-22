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
            <b><h5>Web Development:</h5></b>
                    <p>Web Development courses provide a comprehensive introduction to the creation and management of websites. I learned both front-end and a little of back-end technologies, including HTML, CSS, and JavaScript for client-side development, as well as server-side scripting from PNY trainings. The benefits of mastering web development are significant as it opens doors to various career opportunities in tech. This field is in high demand, offering versatility and creative problem-solving opportunities. Web developers can work as freelancers , making it a highly flexible and rewarding career choice.</p>
            <div class="space"></div>
            <b><h5>Python:</h5></b>
                    <p>Python is a versatile programming language renowned for its simplicity and readability. I did Python course from IBM , it cover a range of topics from basic syntax. Python’s ease of learning makes it an excellent choice for beginners, while its powerful libraries and frameworks cater to more advanced needs. It is widely used in data science, machine learning, and scripting, offering a broad array of applications. The course I did was not advanced but I learned a lot from it.</p>
            <div class="space"></div>
            <b><h5>Robotics:</h5></b>
                    <p>Robotics courses delve into the design, construction, and programming of robots. These courses provide hands-on experience with components like sensors and actuators, and teach how to integrate these with control systems to build functional robots. The course that was conducted by PGC college was very helpful. I even made a traffic signal and sensing device. The benefits of studying robotics include gaining practical skills in a cutting-edge field.</p>
            <div class="space"></div>
            <b><h5>WordPress:</h5></b>
                    <p>WordPress courses focus on using the WordPress platform to create and manage websites. I learned how to customize websites using themes and plugins, handle content management, and optimize site functionality from DigiSkills courses. WordPress’s user-friendly nature makes it accessible for both beginners and experienced developers. The ability to build and maintain websites efficiently is a valuable skill for freelancing, managing small business sites. I made many projects on WordPress during my course.</p>
            <div class="space"></div>
            <b><h5>Freelancing:</h5></b>
                    <p>Freelancing courses provide essential skills for managing an independent business. The course I did covered many aspects such as finding and negotiating with clients, setting rates, managing projects, and handling administrative tasks. Freelancing offers significant benefits, including the flexibility to choose projects and work schedules. I made my accounts on many Freelancing websites and they are a great help in regards of jobs. Freelancing earn higher incomes than traditional employment. I worked in diverse fields such as writing, design, programming, and made my profile according to my interests.</p>
        `;
        document.getElementById("shortCoursesContent").innerHTML = content;
    }

    createNavbar();
    createShortCoursesContent();
});
