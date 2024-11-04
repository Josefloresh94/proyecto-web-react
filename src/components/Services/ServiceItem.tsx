import { IServiceItem } from "../../types/serviceItem";
import styles from "./Services.module.css";

export function ServiceItem({image, title, description}: IServiceItem){
    return(
        <div className={styles.serviceItem}>
            <img src={image} alt=""/>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="">Learn More</a>
        </div>
    )
}