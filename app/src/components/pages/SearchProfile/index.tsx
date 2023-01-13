import { ChangeEvent, useEffect, useState } from "react";
import { User } from "../../../types/types";


function SearchProfile(){
    const [search, setSearch] = useState("");
    const [profiles, setProfiles] = useState<User[]>([]);

    useEffect(() => {
        async function getProfiles(){
            const response = await fetch("https://vinnyrobot-humble-waffle-r9r677xqwjj34gv-9090.preview.app.github.dev/users");
            const data = await response.json();
            setProfiles(data);
        }
        getProfiles();
    }, [])

    const filteredRepositorys = search.length > 0 ?
         profiles.filter(profile => profile.username.includes(search)) : [];

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setSearch(e.target.value);
    }

    return(
        <section>
            <input
                type="text" 
                name="profile" 
                onChange={handleChange} 
                placeholder="Search..."
            />
            <div>
                {filteredRepositorys.map((profile) => (
                    <h1>{profile.name} | {profile.username}</h1>
                ))}
            </div>
        </section>
    )
}

export default SearchProfile;