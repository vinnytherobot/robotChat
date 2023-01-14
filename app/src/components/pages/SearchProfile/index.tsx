import { ChangeEvent, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loading from "../../layout/Loading";

import useDelay from "../../../hooks/useDelay";
import { User } from "../../../types/types";
import styles from "./index.module.css";

function SearchProfile(){

    const [search, setSearch] = useState("");
    const [profiles, setProfiles] = useState<User[]>([]);
    const delay = useDelay;

    useEffect(() => {
        async function getProfiles(){
            await delay(1000)
            const response = await fetch("https://vinnyrobot-humble-waffle-r9r677xqwjj34gv-9090.preview.app.github.dev/users");
            const data = await response.json();
            setProfiles(data);
        }
        getProfiles();
    }, [])

    const filteredProfiles = search.length > 0 ?
         profiles.filter(profile => profile.username.includes(search)) : [];

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setSearch(e.target.value);
    }

    return(
        <section className={styles.searchContainer}>
            <input
                type="search" 
                name="profile" 
                onChange={handleChange} 
                placeholder="Search..."
            />
            {filteredProfiles.map((profile) => (
                <Link to={`/profile/${profile.id}`}>
                    <div className={styles.profile}>
                        <FaUserCircle size={45}/>
                        <ul>
                            <li>
                                <span className={styles.name}>{profile.name}</span>
                            </li>
                            <li>
                                <span className={styles.username}>{profile.username}</span>
                            </li>
                        </ul>
                    </div>
                </Link>
            ))}
        </section>
    )
}

export default SearchProfile;