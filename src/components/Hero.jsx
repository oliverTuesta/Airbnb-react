import heroImage from '../assets/hero.png';

const Hero = () => {
    return (
        <section className="justify-center lg:flex gap-20">
            <div>
                <img src={heroImage} alt="hero image" />
            </div>
            <div className="max-w-md my-auto">
                <h1 className="title">Online Experiences</h1>
                <p className="paragraph">
                    Amet culpa distinctio eveniet voluptate perferendis Ducimus
                    ea vero eius commodi dolor Architecto iure delectus vel
                    exercitationem cupiditate Dolor culpa
                </p>
            </div>
        </section>
    );
};

export default Hero;
