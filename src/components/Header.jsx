import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className=" bg-gray-800 fixed w-full p-4 rounded-b-xl shadow-app text-white grid grid-cols-1 md:grid-cols-2 items-center justify-items-center">
            <div className="">
                <p className="font-black text-3xl bg-gradient-text-header">David Bulla</p>
            </div>
            <div className="">
                <nav className="">
                    <ul className="flex gap-3 font-bold">
                        <NavLink to="/" className={({isActive}) => isActive ? 'border-red-500 border-b-2' : null}>
                            <li className=" whitespace-nowrap border-transparent border-b-2 transition-all duration-300 hover:border-gray-600">
                                Home
                            </li>
                        </NavLink>
                        <NavLink to="/about" className={({isActive}) => isActive ? 'border-red-500 border-b-2' : null}>
                            <li className=" whitespace-nowrap border-transparent border-b-2 transition-all duration-300 hover:border-gray-600">
                                About
                            </li>
                        </NavLink>
                        <NavLink to="/experience" className={({isActive}) => isActive ? 'border-red-500 border-b-2' : null}>
                            <li className=" whitespace-nowrap border-transparent border-b-2 transition-all duration-300 hover:border-gray-600">
                                Experience
                            </li>
                        </NavLink>
                        <NavLink to="/projects" className={({isActive}) => isActive ? 'border-red-500 border-b-2' : null}>
                            <li className=" whitespace-nowrap border-transparent border-b-2 transition-all duration-300 hover:border-gray-600">
                                Projects
                            </li>
                        </NavLink>
                        <NavLink to="/contact" className={({isActive}) => isActive ? 'border-red-500 border-b-2' : null}>
                            <li className=" whitespace-nowrap border-transparent border-b-2 transition-all duration-300 hover:border-gray-600">
                                Contact Me
                            </li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;