// AboutMe.js
import React from 'react';
import './App.css'; // Ensure this import is present
import { NavLink } from 'react-router-dom';

const AboutMe = () => (
  <div className="about-me">
    <h2>about me</h2>
    <p className="spaced-text">
       I'm Anubhav Gupta, a Software Engineer currently contributing to the core team at <a href="https://www.mindtickle.com/" target="_blank" rel="noopener noreferrer"><b>Mindtickle</b></a>. I work as <b>Senior Software Engineer </b> there. At my daily job , I work on understanding the product requirements related to the platfom domain including user, rule engine, workflows, search or some new feature etc, figuring out the solutions, designing the architecture, task breakdown , leading end to end  and eventually release and maintain it, following the complete software development life cycle.
        {/* You can find my contributions there on <a href="https://gitlab.com/anubhavmt" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'underline' }}>GitLab</a>. */}
    </p>
    <p className="spaced-text">
    I like complex backend software engineering mainly including system designing, scalability, distributed systems, artificial intelligence and databases. And also interested in solving real world problems, which would help humanity to have more wider scope about the life and universe in some way.  
    </p>
    
    <p className="spaced-text">
    I've worked on different technologies like: Golang, C++, Python, Java, JS/TS, GraphQL, SQL, NoSQL, Kafka, AWS (Lambda, Kinesis, SQS, SNS, S3, CloudWatch, MQ, ), Docker, Kubernetes, Snowflake, Airflow and many more,  as per requirements. I believe its just the tools and can be switch to other if require to solve our usecase. <br/> <br/> I always try to understand the fundamental principles behind any technology. By focusing on first-principle thinking, I’m able to look at problems differently and think outside the box.
    </p>
    <p className="spaced-text">
    Apart from software engineering: <br/>I also like solving coding problems and use <b>C++</b> there. Now a days , not spend much time on this. I mostly solved problems on <a href="https://leetcode.com/manvirag" target="_blank" rel="noopener noreferrer"><b>Leetcode</b></a> and <a href="https://codeforces.com/profile/_manvirag" target="_blank" rel="noopener noreferrer"><b>Codeforces</b></a>.

    <br/> <br/>  I rarely watch <a href="https://trakt.tv/lists/share/6839d33a07c67f258bb4d11c87a6ee36" target="_blank" rel="noopener noreferrer"><b>web series</b></a> or <a href="https://letterboxd.com/manvirag/films/" target="_blank" rel="noopener noreferrer"><b>movies</b></a> now a days unless they’re must-watch ( imo ) or I’m watching with someone, but enjoy listening to the <a href="https://music.youtube.com/playlist?list=PLA3nnKTMEEaVjWjFaqs9a_TcnC8jYLsfr" target="_blank" rel="noopener noreferrer"><b>music</b></a>    

   
    <hr />
    <b>[2024]</b> I've explored various positive interests :), and I've developed the interests for <a href="https://www.goodreads.com/review/list/183650280?ref=nav_mybooks" target="_blank" rel="noopener noreferrer"><b>reading books</b></a> ( as of now not randomly, but as per my interest and learning )  <NavLink to="/writing/4" className={({ isActive }) => (isActive ? "active-link" : "")} end><b>bike riding</b></NavLink> and writing ( about <NavLink to="/writing/2" className={({ isActive }) => (isActive ? "active-link" : "")} end><b>tech</b></NavLink> and <NavLink to="/writing/" className={({ isActive }) => (isActive ? "active-link" : "")} end><b>life</b></NavLink> mainly ). These activities bringing me joy ( productive one :D) as of now, Let's see how far it goes. 

   <br/> <br/> <b>[2025][TBU]</b> I’ve become naturally curious about the life, humanity, health, mathematics, physics, engineering, research and many other topic. I try to read books/blogs, listen to podcasts, and explore the internet to gain understanding of these subjects, whenever i get time. 

    
    </p>

      
    


  </div>
);

export default AboutMe;
