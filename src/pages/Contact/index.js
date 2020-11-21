import React from 'react'
import Form from '../../components/Form'
import ContactForm from '../../components/Form';


function Contact() {
    return (
        <div className='container ContactPage'>
            <div className='Projects text-center'><h1>Contact Me</h1></div>

            <div className="row justify-content-center">

                <ContactForm  title="If you would like to contact me, please feel free to email: " 
                // applink={<a href="Andrew Bergstrom Resume.pdf"></a>}
                 />
            </div>

        </div>
    )

}

export default Contact;