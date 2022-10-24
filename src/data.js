import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "FrontEnd Freak",
        info: "---- HTML/CSS/JavaScript ---- Beginner, Intermediate, and Mastery packages",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "BackEnd Bravery",
        info: "---- Java/Ruby/SQL/Python ---- Beginner, Intermediate, and Mastery packages",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Flamin' FullStack",
        info: "Mark-up + Choices of JS/Python/C+",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Dragon's Breath",
        info: "A custom package designed for truly committed elites, we guarantee a job within 6 months of graduation with this program. ",
        path: "/programs/444"
    }
]








export const values = [ 
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Accountability",
        desc: "We maintain and guarantee our commitment to teaching only the most up-to-date iterations of all our of language offerings. If it's out-of-date, it's a refund in your pocket."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Inclusion",
        desc: "We strive inclusion in not just our trainers, but also our customers, and our package offerings. If there is a frame-work or language you don't see offered here, contact us and we'll build one."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Responsiveness",
        desc: "All of our programs are intricately designed and crafted to ensure that no matter what languages you decide to learn, whether they are front-end, back-end, or full-stack, it'll be taught with responsiveness and accessibility in mind, utilising the latest standards and practices published by W3C, WHATWG, and ECMA, among others."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Ownership",
        desc: "We pride ourselves on the principal of creating great products users love and owning it. Whether its existing, proven software or code you've created from scratch, we teach all our students to utilize the best possible solution for any given project."
    }
]









export const faqs = [
    {
        id: 1,
        question: "How long are your classes?",
        answer: "The short answer is, it depends! We offer 4 week, 8 week, and 12 week accelerated courses alongside slower-paced 1, 2, and 4 year offerings for all of our content. We also pride ourselves on principals of learning that recognize every person is different - you tell us your learning style and speed, and we'll create a program that fits. "
    },
    {
        id: 2,
        question: "Do I get a degree at the end?",
        answer: "You can. We have a partnership through EvRy University for both Bachelors and Associates degrees in Computer Science and Software Engineering, respectively. Visit their website to apply and for further information on all their offerings. Alternatively, reserve classes through us here for non-degree options."
    },
    {
        id: 3,
        question: "I need extra time on tests and quizzes. Do you guys have those, and can I arrange for extra time?",
        answer: "We use a variety of verification tools to ensure our students are ready for the field, tests and quizzes being one of them. We are committed to providing a custom approach for all students, which includes providing extra time for students who need it."
    },
    {
        id: 4,
        question: "What if I don't feel prepared after finishing the course?",
        answer: "All of our classes are backed by our SimplySatisfied Guarantee. While Software Development is a field that requires immersive learning, we offer complementary tutoring packages for up to 12 months post-graduation for any concepts learned that you feel haven't been adequately understood."
    },
    {
        id: 5,
        question: "Can I pick my instructor?",
        answer: "We provide native reviewing software coupled with post-course evaluations on our website to ensure complete transparency for all incoming students. We are comitted to providing the best instructor to the best student, which is why we utilise a learning assessment questionnaire at orientation. Our patent-pending algorithm ensures 97% success!"
    },
    {
        id: 6,
        question: "Are you hiring?",
        answer: "Send us your resume and cover letter via our contact form and we will get back to you within 5-7 business days. No ghosting!"
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Patricia Piper",
        quote: "James is one of the best instructors I've ever had, better than any I had at Harvard. CoderCrafters has provided me with the foundation to be incredibly successful - I'm a Senior Dev at Google now!",
        job: "Full-Stack Developer",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "José Cuervo",
        quote: "I don't think I could have ever made it this far without my Instructor, Harry. He's always providing real-world examples of concepts that everyone can understand. With his help, I'm now a Junior Frontend Engineer for AWS. ",
        job: "Software Engineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Astin Marvin",
        quote: "I've always wanted to be a teacher myself, and I've had a fascination with code for as long as I can remember. So becoming a software engineering professor was a dream of mine. CoderCrafters built me a program that set me up to do exactly that. With the help of my instructor, Sally, I'm now a tenured Associate Professor of Computer Science at Dartmouth.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Robin Baskin",
        quote: "Donna's lectures on Data and server-side queries are world-class. I now make six figures at a start-up in Cupertino because of CoderCrafters.",
        job: "Back-End Developer",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Daisy Druckers",
        quote: "Not only does CoderCrafters have awesome instructors, but they make some amazingly customized programs. I wasn't that interested in being a developer but I really wanted to go on a managers' track. CoderCrafters built me exactly that, and now I'm making north of 1,000,000 a year as a PM and I'm well on my way to VP. Can't recommend them enough.",
        job: "Product Manager",
        avatar: require("./images/avatar7.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    },
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
]