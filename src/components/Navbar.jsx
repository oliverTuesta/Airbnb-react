import { SiAirbnb } from 'react-icons/si';

const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 flex w-screen p-5 bg-white shadow">
                <a className="flex text-xl font-semibold cursor-pointer gap-2 text-rose-500">
                    <SiAirbnb className="my-auto" />
                    airbnb
                </a>
            </nav>
        </>
    );
};

export default Navbar;
