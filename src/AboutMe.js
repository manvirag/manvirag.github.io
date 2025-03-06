// AboutMe.js
import React from 'react';
import './App.css'; // Ensure this import is present
import { NavLink } from 'react-router-dom';

const AboutMe = () => (
  <div className="about-me">
    <h2>about me</h2>
    <p className="spaced-text">
       I'm Anubhav Gupta, a Software Engineer currently contributing to the platform team at <a href="https://www.mindtickle.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#6d7070', textDecoration: 'underline' }}><b>Mindtickle</b></a>. I work as <b>Software Engineer 2</b> there. At my daily job , I work on understanding the product requirements related to the platfom domain including user, rule engine, workflows etc, figuring out the solutions and eventually release and maintain it, following the complete software development life cycle.
        {/* You can find my contributions there on <a href="https://gitlab.com/anubhavmt" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'underline' }}>GitLab</a>. */}
    </p>
    <p className="spaced-text">
    I like backend software engineering mainly including system designing, scalability, distributed systems, and databases. And also interested in solving real world problems, which would help humanity to have more wider scope about the life and universe in some way. I mostly work in <b>Golang</b> for the development. 
    </p>

    <p className="spaced-text">
    Apart from development, I also like solving coding problems and use <b>C++</b> there. Now a days , not spend much time on this. I mostly solved problems on <a href="https://leetcode.com/manvirag" target="_blank" rel="noopener noreferrer" style={{ color: '#6d7070', textDecoration: 'underline' }}> <b>Leetcode</b></a>. and <a href="https://codeforces.com/profile/_manvirag" target="_blank" rel="noopener noreferrer" style={{ color: '#6d7070', textDecoration: 'underline' }}><b> Codeforces</b></a>.
    </p>

    <p className="spaced-text">
    In addition to my work, I've explored various positive interests :), and I've developed the interests for <a href="https://www.goodreads.com/review/list/183650280?ref=nav_mybooks" target="_blank" rel="noopener noreferrer" style={{ color: '#6d7070', textDecoration: 'underline' }}><b>reading books</b></a> ( not randomly, but as per my interest and learning )  <NavLink to="/writing/4" className={({ isActive }) => (isActive ? "active-link" : "")} end> <a  target="_blank" rel="noopener noreferrer" style={{ color: '#6d7070', textDecoration: 'underline' }}><b>bike riding</b></a></NavLink> and writing ( about <NavLink to="/writing/2" className={({ isActive }) => (isActive ? "active-link" : "")} end> <a  target="_blank" rel="noopener noreferrer" style={{ color: '#6d7070', textDecoration: 'underline' }}><b>tech</b></a></NavLink> and <NavLink to="/writing/" className={({ isActive }) => (isActive ? "active-link" : "")} end> <a  target="_blank" rel="noopener noreferrer" style={{ color: '#6d7070', textDecoration: 'underline' }}><b>life</b></a></NavLink> mainly ) in 2024. I don't usually watch web series or <a href="https://letterboxd.com/manvirag/films/" target="_blank" rel="noopener noreferrer" style={{ color: '#6d7070', textDecoration: 'underline' }}><b>movies</b></a> now a days unless they're highly recommended or considered must-see in a lifetime, but enjoy listening to the <a href="https://music.youtube.com/playlist?list=PLA3nnKTMEEaVjWjFaqs9a_TcnC8jYLsfr" target="_blank" rel="noopener noreferrer" style={{ color: '#6d7070', textDecoration: 'underline' }}><b>music (TBU)</b></a> . These activities bringing me joy ( productive one :D) as of now, Let's see how far it goes. 
    </p>

      
    


  </div>
);

export default AboutMe;
