import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <>
            <Hero />
            <section id="experience" className="section-padding">
                <Experience />
            </section>
            <section id="education" className="section-padding">
                <Education />
            </section>
            <section id="skills" className="section-padding">
                <Skills />
            </section>
            <section id="projects" className="section-padding">
                <Projects />
            </section>
        </>
    );
};

export default Home;
