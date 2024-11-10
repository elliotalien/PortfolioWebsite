'use client';
import React, { useState } from 'react';
import ShinyButton from './magicui/shiny-button';

export default function Contact() {
    const [buttonText, setButtonText] = useState('Send message');
    const [formValues, setFormValues] = useState({
        email: '',
        subject: '',
        message: '',
    });

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "289cd63f-437e-4192-9c5e-78fe88a7b465",
                email: email,
                subject: subject,
                message: message,
            }),
        });

        const result = await response.json();
        if (result.success) {
            setFormValues({ email: '', subject: '', message: '' }); 
            setButtonText('Sent successfully'); 
            setTimeout(() => setButtonText('Send message'), 3000); 
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return (
        <div className='w-3/5 max-md:w-full'>
            <form onSubmit={handleSubmit} className="space-y-8 pt-10 pb-14">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="name@gmail.com"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formValues.subject}
                        onChange={handleChange}
                        className="block p-3 w-full text-sm text-gray-900  rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Let us know how we can help you"
                        required
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Your message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formValues.message}
                        onChange={handleChange}
                        className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 h-[90px]"
                        placeholder="Leave a comment..."
                        required
                    ></textarea>
                </div>
                <ShinyButton text={buttonText} type="submit" />
            </form>
        </div>
    );
}
