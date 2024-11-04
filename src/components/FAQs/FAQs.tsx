import { useEffect, useState } from "react";
import { FAQ } from "./FAQ";
import { IFaq } from "../../types/faq";
import { Button } from "../Button/Button";
import styles from "./FAQs.module.css"

export function FAQs(){

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/faqs")
            .then((res) => res.json())
            .then((data) => setFaqs(data))
    }, []);

    return (
        <section className={styles.faqs}>
            <div className={`container ${styles.faqsContainer}`}>
                <div className="left">
                    <h2>If you don't see an answer to your question, you can send us an email from our contact form.</h2>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare.</p>
                    <Button content="ALL FAQs" href="/faqs" />
                </div>
                <div className="rigth">
                    <div className={styles.faqsList}>
                        {faqs.map((faq: IFaq) => (
                            <FAQ key={faq.id} {...faq} />
                        ))};
                    </div>
                </div>
            </div>
        </section>
    )
}