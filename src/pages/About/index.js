import React from 'react'
import HeroPic from '../../components/HeroPic'
import AboutMeCard from '../../components/AboutMeCard'

function About() {
    return (
        <>
        <HeroPic text="Andrew Bergstrom" />
        <div >
        <AboutMeCard className='bio' img='./images/profilepic.jpg' title="About Me" description="An aspiring Full Stack Web Developer. I have years of experience demonstrating excellent communication and teamwork skills while being highly organized and eager to contribute, learn and lead with any team. Having graduated from University of Washington’s full stack web development bootcamp, I have experience and understanding of multiple front-end languages and libraries such as HTML/CSS/JavaScript, JQuery, Handlebars. On the back-end I have experience with languages such as:Express, Node.js, User Authentication, API Interaction with AJAX and JSON, MySQL, MongoDB and Mongoose. 

Co-workers of mine have always complimented me on my desire to learn, and my ability to be comfortable in a fast paced, ever-changing environment.
 
        " github="https://github.com/AndrewBergstrom" linkedin='https://www.linkedin.com/in/andrew-bergstrom-74a79aa4/' />
    </div>
        </>
    )
}

export default About;