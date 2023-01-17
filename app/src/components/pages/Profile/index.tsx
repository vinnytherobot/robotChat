import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";

import useDelay from "../../../hooks/useDelay";
import { User } from "../../../types/types";
import Loading from "../../layout/Loading";

import styles from "./index.module.css";


function Profile(){

    const [profile, setProfile] = useState<User>(Object);
    const [removeLoading, setRemoveLoading] = useState(false);
    const delay = useDelay;
    const { id } = useParams()

    useEffect(() => {
        async function getProfile(){
            await delay(2000);
            const response = await fetch(`https://vinnyrobot-humble-waffle-r9r677xqwjj34gv-9090.preview.app.github.dev/users/${id}`);
            const data = await response.json();
            setRemoveLoading(true);
            setProfile(data);
        }
        getProfile();
    }, [])

    return(
        <> 
            {removeLoading && (
                <section className={styles.userCard}>
                    <h2>{profile.name}</h2>
                    <FaUserCircle size={150} />
                    <span className={styles.description}>{profile.description}</span>
                    <h2 className={styles.username}>@{profile.username}</h2>
                </section>
            )}
            {!removeLoading && <Loading/>}
        </>
    )
}

export default Profile;