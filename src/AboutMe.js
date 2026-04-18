// AboutMe.js
import React from 'react';
import './App.css'; // Ensure this import is present
import { NavLink } from 'react-router-dom';

const AboutMe = () => (
  <div className="about-me">
    <h2>about me</h2>
    <p className="spaced-text">
       I'm Anubhav Gupta, a Software Engineer, currently working in AI Engineering field,  previously contributed to the core team at <a href="https://www.mindtickle.com/" target="_blank" rel="noopener noreferrer"><b>Mindtickle</b></a>. I worked as <b>Senior Software Engineer </b> there. At my daily job , I work on understanding the product requirements related to the platfom domain including user, rule engine, workflows, search or some new feature etc, figuring out the solutions, designing the architecture, task breakdown , leading end to end  and eventually release and maintain it, following the complete software development life cycle.
        {/* You can find my contributions there on <a href="https://gitlab.com/anubhavmt" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'underline' }}>GitLab</a>. */}
    </p>
    <p className="spaced-text">
    I like complex backend and AI software engineering mainly including system designing, scalability, distributed systems, artificial intelligence and databases. And also interested in solving real world problems, which would help humanity to have more wider scope about the life and universe in some way.  
    </p>
    
    <p className="spaced-text">
    I've worked on different technologies like: Golang, C++, Python, Java, JS/TS, GraphQL, SQL, NoSQL, Kafka, AWS (Lambda, Kinesis, SQS, SNS, S3, CloudWatch, MQ, ), Docker, Kubernetes, Snowflake, Airflow, Claude Code, AI Gateway and many more,  as per requirements. I believe its just the tools and can be switch to other if require to solve our usecase. <br/> <br/> I always try to understand the fundamental principles behind any technology and enjoy in deep diving. By focusing on first-principle thinking, I’m able to look at problems differently and think outside the box.
    </p>
    <p className="spaced-text">
    Apart from software engineering: <br/>I also like solving coding problems and use <b>C++</b> there. Now a days , not spend much time on this. I mostly solved problems on <a href="https://leetcode.com/manvirag" target="_blank" rel="noopener noreferrer"><b>Leetcode</b></a> and <a href="https://codeforces.com/profile/_manvirag" target="_blank" rel="noopener noreferrer"><b>Codeforces</b></a>.

    <br/> <br/>  I rarely watch <a href="https://trakt.tv/lists/share/6839d33a07c67f258bb4d11c87a6ee36" target="_blank" rel="noopener noreferrer"><b>web series</b></a> or <a href="https://letterboxd.com/manvirag/films/" target="_blank" rel="noopener noreferrer"><b>movies</b></a> now a days unless they’re must-watch ( imo ) or I’m watching with someone, but enjoy listening to the <a href="https://music.youtube.com/playlist?list=PLA3nnKTMEEaVjWjFaqs9a_TcnC8jYLsfr" target="_blank" rel="noopener noreferrer"><b>music</b></a>    
   
   
    <hr />
    <b>20k ft View, Yearly Reflections: <br></br><br></br></b>
    <b>[2024]</b>
<ul>
  <li>Explored a bunch of positive interests :)</li>

  <li>Developed a liking for <a href="https://www.goodreads.com/review/list/183650280?ref=nav_mybooks" target="_blank" rel="noopener noreferrer"><b>reading books</b></a> (not randomly, but based on what I actually want to learn).</li>

  <li>Started enjoying <NavLink to="/writing/4" className={({ isActive }) => (isActive ? "active-link" : "")} end><b>bike riding</b></NavLink>.</li>

  <li>Began writing more, mainly about <NavLink to="/writing/2" className={({ isActive }) => (isActive ? "active-link" : "")} end><b>tech</b></NavLink> and <NavLink to="/writing/" className={({ isActive }) => (isActive ? "active-link" : "")} end><b>life</b></NavLink>.</li>

  <li>These activities started bringing me a kind of joy that actually feels productive :D Let’s see how long I stay consistent with it.</li>
</ul>

<b>[2025]</b>
<div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
  
  <ul style={{ flex: 1 }}>
    <li>By practice, became naturally curious about many things—life, humanity, health, mathematics, physics, engineering, startups, research, and more.</li>

    <li>Started becoming more optimistic about life, things, and innovation instead of pessimistic.</li>

    <li>Began thinking more about what actually matters.</li>

    <li>Stopped using Instagram (will write about it separately).</li>

    <li>Trying to normalize failure and risk, but don't give up. with <strong>doesn't matter, just do</strong> mindset.</li>
    
  </ul>

  <img
    src="/make_mistake.png"
    alt="Make mistake"
    style={{ width: "220px", height: "auto" }}
  />

</div>    
    </p>

      
    


  </div>
);

export default AboutMe;
