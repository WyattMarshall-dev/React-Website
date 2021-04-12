import React from 'react';
import Footer from './Footer';

const Resume = (props) => {
    return (
        <div>  
            <hr />
            <h1>Wyatt Marshall</h1>
            <hr />
            <div className='resume container'>

                <h2>CODING EXPERIENCE</h2>
                <span className="resume-span"><strong>Personal Work</strong></span><br />
                <p>I got serious about learning to code in November 2020 after a long hiatus from programming (especially web development)
                     since I graduated from LTCC back in 2013.  Since 2013 I have only made a handful of CSS and HTML static sites to serve as 
                     basic "digital posters" for my own projects and startup businesses. Since November, I have focused mostly on the basics 
                     of Javascript and I am now getting a hold on React.js and plan to move on to some Node.js next. </p>

                <hr />

                <h2>PRIOR WORK EXPERIENCE</h2>
                <span className="resume-span"><strong>Rocky Mountain Construction</strong>, Hayden, ID — <em>Machinist</em></span><br />
                <span className="resume-span">MARCH 2021 - CURRENT</span>
                <p>Operate 3-axis HAAS cnc machines manufacturing critical roller coaster components to spec.</p>

                <hr />

                <span className="resume-span"><strong>Fab-Worx, Mt. Juliet</strong>, TN — <em>Fabricator</em></span><br />
                <span className="resume-span">MARCH 2020 - MAY 2020</span>
                <p>Job tasks include: CNC machine operator, TIG/MIG welding, Fabricating and installing ornamental steel structures.</p>

                <hr />

                <span className="resume-span"><strong>Petrykor Tactical</strong>, Carson City, NV — <em>Engineer</em></span><br />
                <span className="resume-span">AUGUST 2018 - JANUARY 2020</span>
                <p>Startup company. Job requirements included Design and Engineering of modular sniper rifle chassis and various other firearm accessories, Autodesk Fusion 360 CAD and CAM for HAAS VMC (NGC).</p>

                <hr />

                <span className="resume-span"><strong>Montbleu</strong>, Stateline, NV — <em>Security</em></span><br />
                <span className="resume-span">JUNE 2019 - FEBRUARY 2020</span>
                <p>Casino and nightclub security, including ID check and investigating guest incidents and property damage reports.</p>

                <hr />

                <span className="resume-span"><strong>Alpine Metals</strong>, South Lake Tahoe, CA — <em>Fabricator</em></span><br />
                <span className="resume-span">MARCH 2016 - FEBRUARY 2019</span>
                <p>Welding and fabricating ornamental steel structures, operating Torchmate 4x8 CNC plasma cutter, and regular front office assistance with paperwork, billing, ect.</p>

                <hr />

                <span className="resume-span"><strong>GSE inc</strong>, South Lake Tahoe, CA — <em>Engineer</em></span><br />
                <span className="resume-span">MAY 2012 - DECEMBER 2013</span>
                <p>DARPA/SBIR/STTR contracts research and drafting, manual lathe roughing, HAAS VMC (CLASSIC) programming and operation, prototyping engine components.</p>

                <hr />

                <h2>EDUCATION</h2>
                <span className="resume-span"><strong>LTCC</strong>, South Lake Tahoe — <em>A.A.</em></span><br />
                <span className="resume-span">2009 - 2013</span>
                <p>General Computer science degree with emphasis on web design</p>

                <hr />

                <h2>VOLUNTEER</h2>
                <span className="resume-span"><strong>HABITAT for HUMANITY</strong> — Madisi, Malawi</span><br />
                <span className="resume-span">Global village trip in 2017 to build two brick homes in Malawi.</span>
            </div>
            <hr />
            <Footer />
        </div>
    );
}
 
export default Resume;
