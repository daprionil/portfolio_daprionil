import ImageCoder from '../assets/bg_experience.png';
import listExperiences from "../utils/listExperiencesAcedemics";

function ExperiencePage() {
    return (
        <section className="h-full relative bg-indigo-600 flex items-center justify-center flex-col">
            <div className='text-center z-10'>
                <article className="pb-10">
                    <h1 className="title-h1 text-3xl sm:text-5xl ">Mi Trayectoria</h1>
                </article>
                <article className="max-w-[600px] relative pl-8 pr-4 md:px-2">
                    <div className="w-[2px] bg-white h-full absolute z-0 md:-left-8"></div>
                    {
                        listExperiences.map(({ title, description, heading }, idx) => (
                            <div className="relative pt-10 text-white text-right" key={idx}>
                                <span className="drop-shadow-xl w-12 h-12 absolute rounded-full transform -top-4 md:top-auto md:transform-none -translate-x-1/2 md:-left-16 bg-white text-black flex items-center justify-center font-black text-3xl">{idx + 1}</span>
                                <div className="pl-5 drop-shadow-xl font-medium">
                                    <h2 className="title-h2 ">{title}</h2>
                                    <span className="underline text-sm">{heading}</span>
                                    <p className="">{description}</p>
                                </div>
                            </div>
                        ))
                    }
                </article>
            </div>
            <div className="absolute z-0 w-full bottom-0 opacity-40 drop-shadow-xl">
                <img src={ImageCoder} className=' w-full max-w-[1200px]' />
                <div style={{height: '150px', overflow: 'hidden'}} >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%',width: '100%'}}>
                        <path d="M-2.25,128.58 C159.70,100.95 411.40,82.20 497.74,-47.07 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#ffffff'}}></path>
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default ExperiencePage;