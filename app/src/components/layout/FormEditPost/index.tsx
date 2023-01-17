import styles from "./index.module.css";
import { DataForm } from "../../../types/types";

function FormCreatePost({ handleChange, handleSubmit}: DataForm){
    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <textarea className={styles.messageInput} name="message" onChange={handleChange} placeholder="Message" required/>
            <input className={styles.button} type="submit" value="Edit Message"/>
        </form>
    )
}

export default FormCreatePost;