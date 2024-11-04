import { IFaq } from "../../types/faq";
import styles from "./FAQ.module.css"

export function FAQ({question, answer}: IFaq){
    return(
        <div className={styles.faqsItem}>
            <details className={styles.details}>
                <summary className={styles.summary}>{question}</summary>
                <p>{answer}</p>
            </details>
        </div>
    )
}