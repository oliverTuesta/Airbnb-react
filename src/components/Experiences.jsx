import Card from './Card';
import data from '../assets/data.js';

const Experiences = () => {
    return (
        <>
            <section className="flex flex-wrap justify-center gap-3">
                {data.map((experience) => {
                    return <Card key={experience.id} {...experience} />;
                })}
            </section>
        </>
    );
};

export default Experiences;
