import React from 'react'
import HeroPic from '../../components/HeroPic'
import AboutMeCard from '../../components/AboutMeCard'

function About() {
    return (
        <>
        <HeroPic text="Andrew Bergstrom" />
        <div >
        <AboutMeCard className='bio' img='./images/profilepic.jpg' title="About Me" description="Rising full stack web developer. I have years of experience demonstrating excellent communication and teamwork skills while being highly collaborative and eager to contribute, grow and lead. Having graduated from University of Washington’s full stack web development bootcamp, I have experience and understanding of multiple front-end languages and libraries such as HTML/CSS/JavaScript, JQuery, React.JS. I also have a special interest in back-end development using MySQL, API Interaction, MongoDB, and Mongoose.

I'm very passionate about the natural world and technology, currently looking for a way to merge my unique skillsets together.

Co-workers of mine have always complimented me on my desire to learn, and my ability to be comfortable in a fast paced, ever-changing environment.
 
        " github="https://github.com/AndrewBergstrom" linkedin='https://www.linkedin.com/in/andrew-bergstrom/' />
    </div>
        </>
    )
}

export default About;