
import { useEffect, useState } from "react";
import { ServiceItem } from "./ServiceItem";
import { IServiceItem } from "../../types/serviceItem";
import styles from "./Services.module.css";

export function Services(){
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/services")
            .then((res) => res.json())
            .then((data) => setServices(data))
    }, []);

    return (
        <section className={styles.services}>
            <div className="container">
                <h2>The service we offer is specifically designed to meet your needs.</h2>
                <div className={styles.servicesList}>
                    {services.map((service: IServiceItem) => (
                        <ServiceItem 
                            key={service.id}
                            {...service}
                        />
                    ))};
                </div>
            </div>
        </section>
    )
}