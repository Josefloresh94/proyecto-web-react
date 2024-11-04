import { ITeammate } from "../../types/teammate";
import styles from "./Team.module.css"

export function Teammate({image, name, area, slogan}: ITeammate){
    return(
        <div className={styles.teamItem}>
            <img src={image} alt=""/>
            <h3>{name}</h3>
            <p>{area}</p>
            <p>{slogan}</p>
        </div>
    )
}