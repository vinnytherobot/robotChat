import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useDelay from "../../../hooks/useDelay";
import { User } from "../../../types/types";
import Loading from "../../layout/Loading";


function Profile(){

    const [profile, setProfile] = useState<User>(Object);
    const [removeLoading, setRemoveLoading] = useState(false);
    const delay = useDelay;
    const { id } = useParams()

    useEffect(() => {
        async function getProfile(){
            await delay(3000);
            const response = await fetch(`https://vinnyrobot-humble-waffle-r9r677xqwjj34gv-9090.preview.app.github.dev/users/${id}`);
            const data = await response.json();
            setRemoveLoading(true);
            setProfile(data);
        }
        getProfile();
    }, [])

    return(
        <> 
            <section>
                {removeLoading && <h1>{profile.name}</h1>}
            </section>
            {!removeLoading && <Loading/>}
        </>
    )
}

export default Profile;