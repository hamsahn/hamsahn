import React from 'react'

const About = () => {
    return (
        <div className="p-6 text-center">
            <div className="text-2xl font-bold text-gray-600">
                About
            </div>
            <div className="mt-3 text-gray-600 sm:mx-20">
                I have 5+ years of experience in to software development with <span className="font-bold">Python</span>,
                <span className="font-bold"> Node.js</span> at the backend and <span className="font-bold"> ReactJS, Javascript, Typescript, Tailwind </span> at the frontend,
                <span className="font-bold"> MySQL</span> and <span className="font-bold">NoSQL  </span> for the database.
                Have experience in building web applications from scratch and scaling up the existing one.
                Experience with Cloud Tech like
                <span className="font-bold"> Google Cloud Platform (GCP), Firebase, AWS,  </span> Baremetal servers on <span className="font-bold"> Hetzner.</span>.
            </div>
            <div>
                <a href='Hamsa H N.pdf' download>
                    <button className="px-4 py-2 mt-6 font-bold text-white bg-green-500 rounded-md shadow-xl">
                        Download Resume
                        <i class="fa fa-download pl-3 pt-1" aria-hidden="true"></i>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default About
