import { ITestimonial } from "../../types/testimonial";
import styles from "./Testimonials.module.css"

export function TestimonialsItem({author, image, area, testimonial}: ITestimonial){
    return(
        <div className={styles.testimonialsItem}>
            <p>{testimonial}</p>
            <div className={styles.testimonialsAuthor}>
                <div className="image">
                    <img src={image} alt=""/>
                </div>
                <div className="bio">
                    <h3>{author}</h3>
                    <p>{area}</p>
                </div>
            </div>
        </div>
    )
}