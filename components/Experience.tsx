import React from 'react'


const Experience = () => {
    return (
        <div className=" max-w-5xl mx-auto py-24 relative" id='experience'>
            <div className='text-4xl max-md:text-center'>Work Experience</div>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical py-16">
                <li>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">2024</time>
                        <div className="text-lg font-black">Squarebraket Innovations</div>
                        Junior Frontend Developer Intern, where I contributed to live projects using WordPress, HTML, CSS, Bootstrap, and React, delivering responsive and user-friendly interfaces while collaborating with design and backend teams.
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">2024</time>
                        <div className="text-lg font-black">Stackup Learning Hub</div>
                        As a full stack developer intern at stackup learning hub, I worked on web applications using technologies such as html, css, bootstrap, tailwind, javascript, react, node.js, express, sql, and mongodb.
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    )
}

export default Experience