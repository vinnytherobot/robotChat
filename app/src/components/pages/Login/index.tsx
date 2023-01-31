import FormLogin from "../../layout/FormLogin";
import { User } from "../../../types/types";

import { FormEvent, ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom";

import useDelay from "../../../hooks/useDelay";
import SucessMessage from "../../layout/SucessMessage";

function Login(){
    const [user, setUser] = useState<User>(Object);
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const delay = useDelay;

    const token = Math.floor(Date.now() * Math.random()).toString(36);

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setUser({...user, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        const ObjectUser = {
            name: user.name,
            username: user.username.toLowerCase(),
            description: user.description
        }

        await fetch("https://api-social-network.vercel.app/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ObjectUser)
        });

        localStorage.setItem("name", ObjectUser.name);
        localStorage.setItem("username", ObjectUser.username);
        localStorage.setItem("description", ObjectUser.description);
        localStorage.setItem("login", token);

        setClicked(true);

        await delay(1500);

        navigate("/myprofile");
        window.location.reload();
    }

    return(
        <>
            {clicked && <SucessMessage message="Sua conta foi criada!" />}
            <FormLogin handleSubmit={handleSubmit} handleChange={handleChange}/>
        </>
    )
}

export default Login;
