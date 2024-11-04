import { IProject } from "../../types/project";

export function ProjectItem({image, title, category}: IProject){
    return(
        <div className="project">
            <img src={image} alt="Imagen del Proyecto"/>
            <h3>{title}</h3>
            <p>{category}</p>
        </div>
    )
}