import { useEffect, useState } from "react";
import { ProjectItem } from "./ProjectItem";
import { IProject } from "../../types/project";
import styles from "./Projects.module.css";


export function Projects(){
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((res) => res.json())
            .then((data) => setProject(data))
    }, []);

    return (
        <section className={styles.projects}>
            <h2>Check out some of our awesome projects with creative ideas and great design.</h2>
            <div className={`container ${styles.projectsContainer}`}>
                {project.map((projects: IProject) => (
                    <ProjectItem key={projects.id} {...projects}
                    />
                ))};
            </div>
        </section>
    )
}