import icon1 from "../../assets/images/icons/check.svg";
import icon2 from "../../assets/images/icons/user.svg";
import icon3 from "../../assets/images/icons/trophy.svg";
import { Teammate } from "./Teammate";
import { useEffect, useState } from "react";
import { ITeammate } from "../../types/teammate";

export function Team(){
    const [teammate, setTeammate] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/team")
            .then((res) => res.json())
            .then((data) => setTeammate(data))
    }, []);

    return (
        <section className="team">
            <div className="container team-container">
                <div className="info">
                    <h2>We are proud of our design team</h2>
                    <p>Just sit back and relax while we take care of your business needs for you.</p>
                </div>
                <div className="team-statistics">
                    <div className="team-statistics-item">
                        <div className="image">
                            <img src={icon1} alt="" />
                        </div>
                        <h3>1000+</h3>
                        <p>Completed Projects</p>
                    </div>
                    <div className="team-statistics-item">
                        <div className="image">
                            <img src={icon2} alt="" />
                        </div>
                        <h3>50K+</h3>
                        <p>Happy Customers</p>
                    </div>
                    <div className="team-statistics-item">
                        <div className="image">
                            <img src={icon3} alt=""/>
                        </div>
                        <h3>20+</h3>
                        <p>Awards Won</p>
                    </div>
                </div>
                <div className="team-list">
                    {teammate.map((team: ITeammate) => (
                        <Teammate key={team.id} {...team} />
                    ))};
                </div>
            </div>
        </section>
    )
}