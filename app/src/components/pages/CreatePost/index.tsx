import FormCreatePost from "../../layout/FormCreatePost";
import { PostData } from "../../../types/types";

import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDelay from "../../../hooks/useDelay";

function CreatePost(){

    const [post, setPost] = useState<PostData>(Object);
    const navigate = useNavigate();
    const delay = useDelay;

    if(!localStorage.getItem("login")){
        window.location.href = "/";
        return null;
    }

    const userPost = {
        message: post.message,
        name: localStorage.getItem("name"),
        username: localStorage.getItem("username")?.toLowerCase(),
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setPost({...post, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        await fetch("https://api-social-network.vercel.app/posts",{
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(userPost)
        })

        await delay(1500);

        navigate("/");
        window.location.reload();
    }

    return(
        <>
            <FormCreatePost handleChange={handleChange} handleSubmit={handleSubmit}/>
        </>
    )
}

export default CreatePost;
