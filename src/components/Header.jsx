import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className=" bg-gray-800 w-full fixed p-4 rounded-b-xl shadow-app text-white grid grid-cols-1 md:grid-cols-2 items-center justify-items-center z-[100]">
            <div className="">
                <p className="font-black text-4xl bg-gradient-text-header">David Bulla</p>
            </div>
            <div className="">
                <nav className="">
                    <ul className="flex gap-3 font-bold">
                        <NavLink to="/" className={({isActive}) => isActive ? 'border-red-500 border-b-2' : null}>
                            <li className=" whitespace-nowrap border-transparent border-b-2 transition-all duration-300 hover:border-gray-600">
                                Inicio
                            </li>
                        </NavLink>
                        <NavLink to="/about" className={({isActive}) => isActive ? 'border-red-500 border-b-2' : null}>
                            <li className=" whitespace-nowrap border-transparent border-b-2 transition-all duration-300 hover:border-gray-600">
                                Sobre mi
                            </li>
                        </NavLink>
                        <NavLink to="/experience" className={({isActive}) => isActive ? 'border-red-500 border-b-2' : null}>
                            <li className=" whitespace-nowrap border-transparent border-b-2 transition-all duration-300 hover:border-gray-600">
                                Experiencia
                            </li>
                        </NavLink>
                        <NavLink to="/projects" className={({isActive}) => isActive ? 'border-red-500 border-b-2' : null}>
                            <li className=" whitespace-nowrap border-transparent border-b-2 transition-all duration-300 hover:border-gray-600">
                                Proryectos
                            </li>
                        </NavLink>
                        <NavLink to="/contact" className={({isActive}) => isActive ? 'border-red-500 border-b-2' : null}>
                            <li className=" whitespace-nowrap border-transparent border-b-2 transition-all duration-300 hover:border-gray-600">
                                Contactame
                            </li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;