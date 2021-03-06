import React from 'react'
import{ Card, CardDeck, Container} from 'react-bootstrap'
import './style.css'



function AboutMeCard(props) {
    return (
        <div className="col-sm-6 mt-4">
        <div className="card portfolio-cards">
            <img src={props.img} className="card-img-top" alt={props.title}/>
            <div className="card-body text-center">
                <h6 className="card-title">{props.title}</h6>
                <p className="card-text">{props.description}</p>
                <a href={props.github} className="btn btn-dark" target="_blank" rel="noopener noreferrer">GitHub </a>
                <a href={props.linkedin} className="btn btn-dark" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
    </div>
    )
}

export default AboutMeCard;