import { useEffect, useState } from "react";
import { NavLink, useHref, useLinkClickHandler } from "react-router-dom";
import { Menu as MenuIcon, Close as CloseIcon} from '@mui/icons-material';

function Header() {
    const [ isOpen, setIsOpen ] = useState(false);
    const refPath = useHref();

    const handleButtonOpen = () => setIsOpen(state => !state);

    useEffect(() => {
        handleButtonOpen();
    },[refPath]);

    return (
        <header className=" bg-gray-800 w-full fixed p-4 rounded-b-xl shadow-app text-white grid md:grid-cols-1 lg:grid-cols-2 grid-cols-2 items-center justify-items-center z-[100]">
            <div className="">
                <p className="font-black text-4xl bg-gradient-text-header">David Bulla</p>
            </div>
            <div className={`fixed md:block w-full h-screen md:w-auto md:static md:h-auto md:bg-transparent md:bg-opacity-100 bg-slate-950 bg-opacity-40 shadow-xl ${isOpen ? 'bottom-0' : '-bottom-full'} left-0 z-[101] flex text-black md:text-white items-end transition-all duration-300`}>
                <nav className="h-[80vh] md:bg-transparent bg-slate-200 w-full md:h-auto flex items-center justify-center md:flex-wrap">
                    <ul className="flex gap-3 font-bold flex-col text-center text-xl md:text-md md:flex-row md:text-auto">
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
                                Proyectos
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
            <div className={`pointer justify-self-end ${isOpen ? 'bg-red-400' :'bg-slate-50'} p-2 rounded-full ${isOpen ? 'text-white' : 'text-black'} z-[102] shadow-lg hover:scale-[102%] md:hidden transition duration-200`} onClick={handleButtonOpen}>
                {
                    isOpen ?
                        <CloseIcon />
                    :   <MenuIcon />
                }
            </div>
        </header>
    );
}

export default Header;