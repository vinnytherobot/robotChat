import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

import Loading from "../../layout/Loading";

import styles from "./index.module.css";


function MyProfile(){
    const [removeLoading, setRemoveLoading] = useState(false);

    if(!localStorage.getItem("login")){
        window.location.href = "/";
    }

    setTimeout(() => {
        setRemoveLoading(true);
    }, 2000);



    return(
        <>
            {removeLoading && (
                <section className={styles.userCard}>
                    <h2 className={styles.name}>{localStorage.getItem("name")}</h2>
                    <FaUserCircle size={150}/>
                    <span className={styles.description}>{localStorage.getItem("description")}</span>
                    <h2 className={styles.username}>@{localStorage.getItem("username")}</h2>
                </section>
            )}
            {!removeLoading && <Loading/>}
        </>
    )
}

export default MyProfile;