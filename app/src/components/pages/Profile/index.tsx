import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { User } from "../../../types/types";


function Profile(){
    const [profile, setProfile] = useState<User>(Object);
    const { id } = useParams()

    useEffect(() => {
        async function getProfile(){
            const response = await fetch(`https://vinnyrobot-humble-waffle-r9r677xqwjj34gv-9090.preview.app.github.dev/users/${id}`);
            const data = await response.json();
            setProfile(data);
        }
        getProfile();
    }, [])

    return(
        <section>
            <h1>{profile.name}</h1>
        </section>
    )
}

export default Profile;