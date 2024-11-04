import { IProject } from "../../types/project";
import styles from "./Projects.module.css";

export function ProjectItem({image, title, category}: IProject){
    return(
        <div className={styles.projects}>
            <img src={image} alt="Imagen del Proyecto"/>
            <h3>{title}</h3>
            <p>{category}</p>
        </div>
    )
}