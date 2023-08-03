import { ReactComponent as WaveBackground } from '../assets/waveHome.svg';

function HomePage() {
    return (
        <div className='text-white h-full bg-stone-100 shadow-inner'>
            <section className="h-full relative gap-4 sm:gap-0 grid items-center grid-cols-1 lg:grid-cols-2 justify-center max-w-[1400px] mx-auto">
                <article className="flex z-10 self-end md:self-center flex-col-reverse text-center font-black text-5xl sm:text-6xl lg:text-8xl">
                    <p className="text-opacity-70 drop-shadow-2xl -mt-4 sm:-mt-6 lg:-mt-9 -tracking-wider before:content-[''] before:z-9 before:w-20 relative before:bg-black before:opacity-25 before:bottom-6 before:h-2 before:absolute text-red-500">LÓGICA</p>
                    <p className="text-opacity-70 drop-shadow-2xl -mt-4 sm:-mt-6 lg:-mt-9 -tracking-wider before:content-[''] before:z-9 before:w-20 relative before:bg-black before:opacity-25 before:bottom-6 before:h-2 before:absolute text-purple-500">PROACTIVIDAD</p>
                    <p className="text-opacity-70 drop-shadow-2xl -mt-4 sm:-mt-6 lg:-mt-9 -tracking-wider before:content-[''] before:z-9 before:w-20 relative before:bg-black before:opacity-25 before:bottom-6 before:h-2 before:absolute text-yellow-500">CREATIVIDAD</p>
                    <p className="text-opacity-70 drop-shadow-2xl -mt-4 sm:-mt-6 lg:-mt-9 -tracking-wider before:content-[''] before:z-9 before:w-20 relative before:bg-black before:opacity-25 before:bottom-6 before:h-2 before:absolute text-blue-500">SUPERACIÓN</p>
                </article>
                <article className='w-full drop-shadow-2xl h-full relative self-center flex items-start md:items-center lg:items-center justify-center before:shadow-home-shape'>
                    <span className='w-11 h-11 bg-blue top-0 absolute rounded-full'></span>
                    <h1 className='text-white lg:text-8xl drop-shadow-2xl z-20 text-opacity-80 sm:text-white text-4xl md:text-6xl text-center font-black'>FullStack Web <br /> Developer</h1>
                </article>
            </section>
            <div className='absolute bottom-0 z-2 text-black w-full opacity-40'>
                <WaveBackground />
            </div>
        </div>
    );
}

export default HomePage;