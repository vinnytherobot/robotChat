import FormLogin from "../../layout/FormLogin";
import { DataUser } from "../../../types/types";

import { FormEvent, ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom";

function Login(){
    const [user, setUser] = useState<DataUser>(Object);
    const navigate = useNavigate();

    const token = Math.floor(Date.now() * Math.random()).toString(36);

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setUser({...user, [e.target.name]: e.target.value})
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
    
        fetch("https://vinnyrobot-humble-waffle-r9r677xqwjj34gv-9090.preview.app.github.dev/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        localStorage.setItem("name", user.name);
        localStorage.setItem("username", user.username);
        localStorage.setItem("login", token);

        navigate("/");
        window.location.reload();
    }

    return(
        <FormLogin handleSubmit={handleSubmit} handleChange={handleChange}/>
    )
}

export default Login;