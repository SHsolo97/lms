import React from "react";
import DashBoard from "./dashboard"
import "./style.css"

function Home(){
return (
<body>
    <div className="container">
        <header>
            <h1>Learning Management System</h1>
        </header>
        <DashBoard />
        <main class="main">
            <h1>Active Courses</h1>
            <div class="Filters">
                <div class="Filteritem">
                    <label>Filter by:</label>
                    <select>
                        <option value="/">All Courses</option>
                        <option value="/">2021</option>
                        <option value="/">2020</option>
                        <option value="/">2019</option>
                    </select>
                </div>
                <div class="Filteritem">
                    <label>Sort by:</label>
                    <select>
                        <option value="/">Alphabetically, A-Z</option>
                        <option value="/">Alphabetically, Z-A</option>
                        <option value="/">Date, new to old</option>
                        <option value="/">Date, old to new</option>
                    </select>
                </div>
            </div>
            <section class="Courses">
                <div class="course-card">
                    <div class="course-image">
                        <img src="https://miro.medium.com/max/1024/1*9QRFQdpO2f59GsN2KsE9XA.png" />
                    </div>
                    <div class="course-info">
                        <h5>Data Structures </h5>
                        <h6>Stacks. Arrays. List </h6>
                    </div>
                </div>
                <div class="course-card">
                    <div class="course-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn039pcqFgdRtWt0aROGVpZXfZ1K6elwX4A&usqp=CAU" />
                    </div>
                    <div class="course-info">
                        <h5>Embedded Systems</h5>
                        <h6>VHDL. Verilog. FPGA. </h6>
                    </div>
                </div>
                <div class="course-card">
                    <div class="course-image">
                        <img src="https://miro.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg" />
                    </div>
                    <div class="course-info">
                        <h5>Web Development </h5>
                        <h6>HTML. CSS. Javascript</h6>
                    </div>
                </div>
            </section>
        </main>
        <div class="sidebar-top">
            <h1>Announcements </h1>
        </div>

        <div class="sidebar-bottom">
            <small>Coming up</small>
            <div class="cost">
                <span>Enroll Courses</span>
                <br />
                <span></span>
            </div>
            <a href="/signup">
              <center> <button type="button" class="button">Sign up</button></center>
            </a>
        </div>
    </div>
</body>
);
}

export default Home;