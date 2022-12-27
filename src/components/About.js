import personImage from 'assets/images/person.svg';

export function About() {
    return (
        <section className="about-container">
            <div className="container">
                <div className="text">
                    <div className="title-container">
                        <h2 id="about" className="title">
                            <span className="coloured">About</span> Me
                        </h2>
                    </div>
                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur eos ab rem vitae iusto, aperiam placeat
                        ipsam veritatis porro, labore sint nobis nulla saepe et
                        harum molestias a nesciunt soluta velit rerum voluptatum
                        provident! Quod, optio. Quidem minus aliquid ratione
                        facere laboriosam nihil, adipisci odit quisquam
                        blanditiis quos atque magni voluptatibus ex officiis,
                        sint fugiat earum fuga. Quisquam, praesentium aliquid?
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
