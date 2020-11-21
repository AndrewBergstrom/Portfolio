import React from 'react'
import './style.css'



function ContactForm(props) {

    return (
        <div className="col-sm-4 mt-4">
        <div className="card portfolio-cards">
       
            <div className="card-body text-center">
                <h6 className="card-title">{props.title}</h6>
                <a href="mailto:andrew.bergstrom88@gmail.com" target="_blank" rel="noopener noreferrer">andrew.bergstrom88@gmail.com</a>
               <br></br>
                {/* <a href={props.applink} className="btn btn-dark" target="_blank" rel="noopener noreferrer">Resumé</a> */}
            </div>
        </div>
    </div>
    )

}

export default ContactForm;