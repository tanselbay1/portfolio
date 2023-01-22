import SectionHeader from './UI/SectionHeader';
import personImage from '../assets/images/person.svg';

export function About() {
    return (
        <section id="about" className="about-container">
            <div className="container">
                <div className="text">
                    <div className="title-container">
                        <div className="header">
                            <SectionHeader title="About" span="Me" />
                        </div>
                    </div>
                    <p className="lead">
                        I am a self-taught Web Developer with a Masters degree
                        in Business Administration. I've always found coding
                        intuitive and have pushed myself to learn the most
                        effective ways to achieve a result.
                        <br />
                        I'm eager to learn and can quickly integrate into a team
                        so I can provide value to the company and the customers.
                    </p>
                </div>
                <div className="img-container">
                    <img
                        className="personImage"
                        src={personImage}
                        alt="A cartoon of a person sitting at there desk, looking at a laptop"
                    />
                </div>
            </div>
        </section>
    );
}
