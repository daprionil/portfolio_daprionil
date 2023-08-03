import { ReactComponent as WaveBackground } from '../assets/waveHome.svg';
import ImageDaprion from '../assets/bg_background_personal.png';

function HomePage() {
    return (
        <div className='text-white h-full bg-stone-100 shadow-inner'>
            <section className="h-full relative gap-4 sm:gap-0 grid items-center grid-cols-1 lg:grid-cols-2 justify-center max-w-[1400px] mx-auto">
                <article className="flex z-10 self-center md:self-center flex-col-reverse text-center font-black text-5xl sm:text-6xl lg:text-8xl">
                    <p className="text-opacity-70 drop-shadow-2xl -mt-4 sm:-mt-6 lg:-mt-9 -tracking-wider before:content-[''] before:z-9 before:w-20 relative before:bg-black before:opacity-25 before:bottom-6 before:h-2 before:absolute text-red-500">LÓGICA</p>
                    <p className="text-opacity-70 drop-shadow-2xl -mt-4 sm:-mt-6 lg:-mt-9 -tracking-wider before:content-[''] before:z-9 before:w-20 relative before:bg-black before:opacity-25 before:bottom-6 before:h-2 before:absolute text-purple-500">PROACTIVIDAD</p>
                    <p className="text-opacity-70 drop-shadow-2xl -mt-4 sm:-mt-6 lg:-mt-9 -tracking-wider before:content-[''] before:z-9 before:w-20 relative before:bg-black before:opacity-25 before:bottom-6 before:h-2 before:absolute text-yellow-500">CREATIVIDAD</p>
                    <p className="text-opacity-70 drop-shadow-2xl -mt-4 sm:-mt-6 lg:-mt-9 -tracking-wider before:content-[''] before:z-9 before:w-20 relative before:bg-black before:opacity-25 before:bottom-6 before:h-2 before:absolute text-blue-500">SUPERACIÓN</p>
                </article>
                <article className='z-10 w-full drop-shadow-2xl h-full relative flex items-start sm:items-center lg:items-center justify-center before:shadow-home-shape'>
                    <img
                        src={ImageDaprion}
                        alt="daprionil"
                        className='max-w-[250px] md:max-w-[300px] lg:max-w-[450px] rounded-xl shadow-[10px_-10px_0_white,-10px_-20px_0_black,0_-5px_10px_black] absolute -top-1/3 sm:-top-[25%] md:top-[20%] mx-auto lg:top-1/2 transform md:-translate-y-1/2'
                    />
                    <h1 className='absolute top-1/3 sm:bottom-[15%] lg:top-auto md:bottom-[20%] drop-shadow-[0_0_20px_black] md:text-6xl text-center text-white font-black text-5xl'>
                        Full Stack Web <br /> Developer
                    </h1>
                </article>
            </section>
            <div className='absolute bottom-0 z-0 text-black w-full opacity-40'>
                <WaveBackground />
            </div>
        </div>
    );
}

export default HomePage;