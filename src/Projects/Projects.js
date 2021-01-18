import style from "./Projects.module.css"
import styleContainer from "../../src/common/stiles/Container.module.css"
import Project from "./Project/Project";

function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={"CRM System for Service Department"}
                             description={"SPA for service department of medical device distributor."}/>
                    <Project title={"Social Network"}
                             description={"Pet project for learning React, Redux, TypeScript etc."}/>
                    <Project title={"Todo List"}
                             description={"Pet project for learning React, Redux, TypeScript etc."}/>
                </div>
            </div>

        </div>
    );
}

export default Projects;