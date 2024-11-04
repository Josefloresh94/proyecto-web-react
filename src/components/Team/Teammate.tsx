import { ITeammate } from "../../types/teammate";

export function Teammate({image, name, area, slogan}: ITeammate){
    return(
        <div className="team-item">
            <img src={image} alt=""/>
            <h3>{name}</h3>
            <p>{area}</p>
            <p>{slogan}</p>
            <div className="social-networks">
                <div className="social-item">
                    <a href=""></a>
                </div>
            </div>
        </div>
    )
}