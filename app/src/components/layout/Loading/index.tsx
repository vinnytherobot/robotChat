import loading from "../../../assets/loading.svg";
import styles from "./index.module.css";

function Loading(){
    return(
        <>
            <img className={styles.loading} src={loading}/>
        </>
    )
}

export default Loading;