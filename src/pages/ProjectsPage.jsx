import CardProject from "../components/CardProject";
import projects from "../utils/listProjects";

function ProjectsPage() {
    return (
        <section className=" bg-slate-100 h-full flex justify-center overflow-y-auto">
            <div className="max-w-4xl w-full mt-28 text-center px-2">
                <h1 className="title-h1 text-black pb-4">Mi Experiencia en Proyectos</h1>
                <article className="flex flex-col gap-4 ">
                    {
                        projects.map((project,idx) => (
                            <CardProject {...project} key={idx}/>
                        ))
                    }
                </article>
            </div>
        </section>
    );
}

export default ProjectsPage;