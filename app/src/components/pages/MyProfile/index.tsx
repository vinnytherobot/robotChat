import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

import Loading from "../../layout/Loading";

import styles from "./index.module.css";


function MyProfile(){
    const [removeLoading, setRemoveLoading] = useState(false);

    setTimeout(() => {
        setRemoveLoading(true);
    }, 2000);

    return(
        <>
            {removeLoading && (
                <section className={styles.userCard}>
                    <FaUserCircle size={150}/>
                    <h2>{localStorage.getItem("name")} @{localStorage.getItem("username")}</h2>
                </section>
            )}
            {!removeLoading && <Loading/>}
        </>
    )
}

export default MyProfile;