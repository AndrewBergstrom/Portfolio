import React from 'react'
import HeroPic from '../../components/HeroPic'
import AboutMeCard from '../../components/AboutMeCard'

function About() {
    return (
        <>
        <HeroPic text="Andrew Bergstrom" />
        <div >
        <AboutMeCard className='bio' img='./images/profilepic.jpg' title="About Me" description="As a full stack web developer with a background in biology I am looking to incorporate my skills as a developer into the natural world. Having graduated from University of Washington’s full stack web development bootcamp I have gained more experience and understanding of multiple front-end languages and libraries such as HTML/CSS/JavaScript, JQuery, Handlebars. On the back-end I have experience with languages such as: Express, Node.js, User Authentication, API Interaction with AJAX and JSON, MySQL, MongoDB and Mongoose. I have excellent communication and teamwork skills, am highly  organized and eager to contribute, learn and lead with any team.  
        " github="https://github.com/domjparker/GuideMe-FE" linkedin='https://www.linkedin.com/in/andrew-bergstrom-74a79aa4/' />
    </div>
        </>
    )
}

export default About;