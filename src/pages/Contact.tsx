import React, { useEffect, useState } from 'react';
import "../styles/Contact.css";


interface FormState {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company?: string;
    message: string;
}


const FORM_INITIALSTATE: FormState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    company: ''
}

const Contact = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [form, setForm] = useState<FormState>(FORM_INITIALSTATE);


    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth !== width) {
                setWidth(window.innerWidth);
            }
            if (window.innerHeight !== height) {
                setHeight(window.innerHeight);
            }
        });
    }, [width, height]);


    const formHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log(name, value);
        setForm({ ...form, [name]: value });
    }

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }


    const { firstName, lastName, email, phone, company, message } = form;
    return (
        <div>
            <div className="contact_logo_container">
                <img
                    src={`${process.env.PUBLIC_URL}/suli-logo.png`}
                    style={{
                        minWidth: 400,
                        width: width * .45,
                        height: height * .35,
                    }}
                />
            </div>
            <div className='form_container'>
                <h1 className='form_header'>Get in touch</h1>
                <div className='box_holder'>
                    <div className='info_container'>
                        <h1>Contact us</h1>
                        <p>Please fill out the form and we will be in touch.</p>
                    </div>
                    <div
                        className='form'>
                        <form onSubmit={(event) => submitForm}>
                            <div className='name_container'>
                                <label style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: 200
                                }}
                                >
                                    <p>First Name</p>
                                    < input
                                        className='label'
                                        required
                                        title="Type first name"
                                        name='firstName'
                                        value={firstName}
                                        onChange={formHandler}
                                    />
                                </label >
                                <label style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    marginLeft: 20,
                                    width: 200
                                }}
                                >
                                    <p>Last Name</p>
                                    < input
                                        className='label'
                                        required
                                        title="Type last name"
                                        name='lastName'
                                        value={lastName}
                                        onChange={formHandler}
                                    />
                                </label >
                            </div>
                            <label style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                            >
                                <p>Email</p>
                                <input
                                    className='label'
                                    required
                                    title="Type email"
                                    name='email'
                                    value={email}
                                    onChange={formHandler}
                                />
                            </label >

                            <label style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                            >
                                <p>Phome Number</p>
                                < input
                                    className='label'
                                    required
                                    title="Type phone number"
                                    name='phone'
                                    type='tel'
                                    value={phone}
                                    onChange={formHandler}
                                />
                            </label >
                            <label style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                            >
                                <div className="label_text">
                                    <p>Company</p>
                                    <p style={{ color: 'rgb(87, 142, 112)' }}>&nbsp;(Optional)</p>
                                </div>
                                < input
                                    className='label'
                                    title="Type company name"
                                    name='company'
                                    value={company}
                                    onChange={formHandler}
                                />
                            </label >
                            <label style={{
                                display: "flex",
                                flexDirection: 'column'
                            }}>
                                <p style={{ marginBottom: 4 }}>Message</p>
                                <textarea
                                    title='Type your message'
                                    minLength={20}
                                    key={message}
                                    name='message'
                                    value={message}
                                    onChange={formHandler}
                                />
                            </label>
                            <button className="submit_btn">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;