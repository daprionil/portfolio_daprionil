import CarouselApp from "./CarouselApp"
import DeployButton from "./DeployButton"
import GitHubButton from "./GitHubButton"

const CardProject = ({name, role, description, github, deploy, images, tecnologies}) => {
  return (
    <div className="w-full flex flex-wrap sm:flex-nowrap [&:nth-child(even)]:flex-row-reverse gap-4">
        <div className="sm:max-w-[400px] w-full">
            <CarouselApp images={images}/>
        </div>
        <div className="text-left px-2 pl-3">
            <div className="flex flex-wrap border-b-2 justify-between items-center">
                <p className="whitespace-nowrap title-h1 text-xl text-black">{name}</p>
                <p className="whitespace-nowrap underline text-sm">{role}</p>
            </div>
            <p className="text-sm">{description}</p>
            <div className="py-2 border-b-2">
                <p className="drop-shadow font-semibold py-2">Tecnologías aplicadas:</p>
                <div className="flex items-center gap-2 flex-wrap">
                    {
                        tecnologies.map( (tech, idx) => (
                            <p className=" bg-blue-600 px-2 text-sm py-1 rounded whitespace-nowrap font-semibold text-white" key={idx}>{tech}</p>
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-end items-center">
                <GitHubButton url={github} />
                <DeployButton url={deploy}/>
            </div>
        </div>
    </div>
  )
}

export default CardProject