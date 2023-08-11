import { Title } from 'react-head';
import ImageDaprion from '../assets/bg_background_personal.png';
import IconTecnology from '../components/IconTecnology';
import listTecnologies from '../utils/listTecnologies';
function AboutPage() {
    return (
        <section className="h-full min-h-screen bg-sky-500 relative overflow-y-auto">
            <Title>Sobre mi</Title>
            <article className="w-full z-20 px-10 grid md:grid-cols-2 grid-cols-1 justify-items-center items-center gap-8 justify-center mt-40">
                <div className='flex justify-end z-20 relative group'>
                    <img className='rounded-2xl z-20 group-hover:scale-[101%] transition duration-300 transform' src={ImageDaprion} alt="" />
                    <span className='absolute shadow-xl bg-stone-300 rounded-2xl h-full w-[98%] sm:max-w-[450px] -bottom-4 duration-300 transition-all group-hover:-right-2 -right-0 group-hover:-bottom-1'></span>
                    <span className='absolute shadow-xl bg-sky-700 rounded-2xl h-full w-[98%] sm:max-w-[450px] right-3 duration-300 transition-all group-hover:right-7 -top-1 group-hover:-top-3'></span>
                    <span className='absolute shadow-xl bg-indigo-500 rounded-2xl h-full w-[98%] sm:max-w-[450px] -bottom-1 duration-300 transition-all group-hover:-bottom-5 right-0 group-hover:right-3'></span>
                    <span className='absolute shadow-xl bg-red-500 rounded-2xl h-full w-[98%] sm:max-w-[450px] -top-1 duration-300 transition-all group-hover:-top-5 group-hover:'></span>
                </div>
                <div className='flex justify-start z-20 flex-col max-w-xl gap-3 pb-3'>
                    <h1 className='title-h1 text-white border-b-2'>Sobre mi</h1>
                    <p className='md:text-lg text-white'>Soy un Desarrollador web entusiasmado por la tecnología y su código; me maravilla la idea de que todo lo que vemos está programado en código.</p>
                    <p className='md:text-lg text-white'>Desde el transcurso de mi carrera tecnológica en la Universidad me vi impactado por la programación y desde mis 16 años comenzó mi introducción a este mundo; En la Universidad adquirí la vocación Tech y la capacidad resolutiva de problemas, posterior a esto adquirí conocimientos por más de un año de forma autodidacta y seguido consolidé mis habilidades con el Bootcamp de Soy Henry en donde cursé más de 800 horas para ser un profesional aún más productivo como Desarrollador web Full Stack</p>
                </div>
            </article>
            <div className='flex items-center justify-center text-center flex-col z-20 pb-20'>
                <h1 className="title-h1 py-10">Tecnologías</h1>
                <div className='flex flex-wrap items-center justify-center gap-4 z-20'>
                    {
                        listTecnologies.map((tech, idx) => (
                            <IconTecnology {...tech} key={idx}/>
                        ))   
                    }
                </div>
            </div>
            <div className="absolute top-0 w-full h-full drop-shadow-xl">
                <svg id="wave" style={{ transform: "rotate(180deg)", transition: "0.3s" }} viewBox="0 0 1280 320" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="#ffffff" offset="0%"></stop>
                            <stop stopColor="#d9d9d9" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path style={{ transform: "translate(0, 0px)", opacity: 1 }} fill="url(#sw-gradient-0)" d="M0,256L720,160L1440,128L2160,96L2880,224L3600,128L4320,224L5040,64L5760,288L6480,32L7200,192L7920,224L8640,32L9360,0L10080,192L10800,160L11520,64L12240,192L12960,128L13680,32L14400,96L15120,32L15840,160L16560,256L17280,96L17280,320L16560,320L15840,320L15120,320L14400,320L13680,320L12960,320L12240,320L11520,320L10800,320L10080,320L9360,320L8640,320L7920,320L7200,320L6480,320L5760,320L5040,320L4320,320L3600,320L2880,320L2160,320L1440,320L720,320L0,320Z"></path>
                    <defs>
                        <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
                            <stop stopColor="#ffffff" offset="0%"></stop>
                            <stop stopColor="#d7d7d7" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path style={{ transform: "translate(0, 50px)", opacity: 0.9 }} fill="url(#sw-gradient-1)" d="M0,32L720,160L1440,192L2160,128L2880,256L3600,160L4320,288L5040,0L5760,64L6480,64L7200,256L7920,224L8640,96L9360,256L10080,128L10800,288L11520,288L12240,224L12960,32L13680,160L14400,32L15120,192L15840,160L16560,256L17280,160L17280,320L16560,320L15840,320L15120,320L14400,320L13680,320L12960,320L12240,320L11520,320L10800,320L10080,320L9360,320L8640,320L7920,320L7200,320L6480,320L5760,320L5040,320L4320,320L3600,320L2880,320L2160,320L1440,320L720,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
}

export default AboutPage;