import React from 'react'
import './style.css'



function ContactForm() {

    return (
        <>
        <div className='container contactform col-sm-6 mt-5'>
            <form id="contact-form" >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control"  />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>

    )
}

export default ContactForm;