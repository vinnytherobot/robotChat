import { DataForm } from "../../../types/types";

import styles from "./index.module.css";

function FormLogin({ handleChange, handleSubmit }: DataForm){
    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <input className={styles.input} type="text" name="name" onChange={handleChange} placeholder="Name"/>
            <input className={styles.input} type="text" name="username" onChange={handleChange} placeholder="Username"/>
            <input className={styles.button} type="submit" value="Create Account"/>
        </form>
    )
}

export default FormLogin;