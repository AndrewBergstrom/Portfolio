import React from 'react'
import './style.css'

function Hero(props) {

    return(
        <section className="container-fluid">
            <figure className="hero row">
            <h1 className="col">{props.text}</h1>
            </figure>
        </section>
    )
}

export default Hero;