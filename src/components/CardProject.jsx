import { useRef } from "react"
import CarouselApp from "./CarouselApp"
import DeployButton from "./DeployButton"
import GitHubButton from "./GitHubButton"

const CardProject = ({ name, role, description, github, deploy, images, tecnologies }) => {
    const refCard = useRef();
    
    const handleMove = (event) => {
        const $ = refCard.current;
        const { width, height} = refCard.current.getBoundingClientRect()
        const { nativeEvent:{offsetX, offsetY} } = event;

        const halfWidth = width / 2;
        const halfHeight = height / 2;

        const rotationX = ((offsetX - halfWidth) / halfWidth) * 15;
        const rotationY = ((offsetY - halfHeight) / halfHeight) * 15;

        console.log(event);

        $.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(1.03)`;
    };

    const handleLeaveCard = () => {
        const $ = refCard.current;
        $.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    }

    return (
        <div className="w-full flex flex-wrap sm:flex-nowrap [&:nth-child(even)]:flex-row-reverse gap-4">
            <div onMouseLeave={handleLeaveCard} onMouseMove={handleMove} ref={refCard} className="sm:max-w-[400px] w-full perspective-card transition duration-100">
                <CarouselApp images={images} />
            </div>
            <div className="text-left px-2 pl-3 w-full">
                <div className="flex flex-wrap border-b-2 justify-between items-center">
                    <p className="whitespace-nowrap title-h1 text-xl text-black">{name}</p>
                    <p className="whitespace-nowrap underline text-sm">{role}</p>
                </div>
                <p className="text-sm">{description}</p>
                <div className="py-2 border-b-2">
                    <p className="drop-shadow font-semibold py-2">Tecnologías aplicadas:</p>
                    <div className="flex items-center gap-2 flex-wrap">
                        {
                            tecnologies.map((tech, idx) => (
                                <p className=" bg-blue-600 px-2 text-sm py-1 rounded whitespace-nowrap font-semibold text-white" key={idx}>{tech}</p>
                            ))
                        }
                    </div>
                </div>
                <div className="flex justify-end items-center">
                    {
                        github && <GitHubButton url={github}/>
                    }
                    {
                        deploy && <DeployButton url={deploy} />
                    }
                </div>
            </div>
        </div>
    )
}

export default CardProject