import React from 'react'
import Cards from '../../components/Cards'
import './style.css'

function Portfolio() {
    return (
        <div className='container portfolioPage'>
            <div className='Projects text-center'><h1>My Projects</h1></div>

            <div className="row justify-content-center">

                <Cards img='./images/guideme.jpg' title="GuideMe" description="Created with React, GuideMe redefines traveling as we know it. Our goal was to create a streamlined service that connects modern day travelers with guides who can provide unique experiences." github="https://github.com/domjparker/GuideMe-FE" applink="https://guidemedimma.herokuapp.com/" />

                <Cards img='./images/flipit.jpg' title="FlipIt" description="FlipIt is an easy to use note card study application. I was part of the back-end development team and was in charge of API routes, setting up the server, and writing models while also adding animation/css styling to the notecards." github="https://github.com/AychDubya/Flipit" applink="https://flipitstudy.herokuapp.com/" />

                <Cards img='./images/wander.jpg' title="Work Day Scheduler" description="Wander is my first group project. We created a random hike finder app and for those that perfer choices, there is a hiking list page for them." github="https://github.com/CodySamuels/wander" applink="https://codysamuels.github.io/wander/" />

                <Cards img='./images/budgettracker.jpg' title="Budget Tracker" description="This is an easy to use budget tracking tool.  Enter the name of your transaction, then enter the dollar amount and select either add funds or subtract funds." github="https://github.com/AndrewBergstrom/Budget-Tracker" applink="https://bug-snaxzz.herokuapp.com/" />

                <Cards img='./images/employeedirectory.jpg' title="Employee Directory" description="For this project, I’ve created an employee directory with React. This assignment required me to break up my application's UI into components, manage component state, and respond to user events. With the employee directory on page load, a table of employees render. A manager is able to view non-sensitive data about other employees and filter employees by name." github="https://github.com/AndrewBergstrom/React-Employee-Directory"          applink="https://huanui-inc.herokuapp.com/" />

                <Cards img='./images/scheduler.jpg' title="Work Day Scheduler" description="This is a day planner to keep you organized hour by hour. It highlights gray if the time has passed, red for the current time and green for the future." github="https://github.com/AndrewBergstrom/scheduler" applink="https://andrewbergstrom.github.io/scheduler/" />
            </div>

        </div>
    )
}
export default Portfolio; 