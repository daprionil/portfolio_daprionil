import { Title } from "react-head";
import CardProject from "../components/CardProject";
import projects from "../utils/listProjects";

function ProjectsPage() {
    return (
        <section className=" bg-slate-100 h-full py-10 flex justify-center overflow-y-auto">
            <Title>¡ Descubre mis proyectos !</Title>
            <div className="max-w-4xl w-full mt-24 text-center px-2">
                <h1 className="title-h1 text-black pb-8">Mis Proyectos</h1>
                <article className="flex flex-col gap-7 ">
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