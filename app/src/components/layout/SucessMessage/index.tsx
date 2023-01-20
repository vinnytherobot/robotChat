import styles from "./index.module.css";

import { Message } from "../../../types/types";


function SucessMessage({message}: Message){
    return(
        <section className={styles.messageContainer}>
            <h2 className={styles.message}>{message}</h2>
        </section>
    )
}

export default SucessMessage;