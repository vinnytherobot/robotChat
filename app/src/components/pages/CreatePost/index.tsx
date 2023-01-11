import FormCreatePost from "../../layout/FormCreatePost";
import { PostData } from "../../../types/types";

import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost(){

    const [post, setPost] = useState<PostData>(Object);
    const navigate = useNavigate();

    if(!localStorage.getItem("login")){
        window.location.href = "/"
        return null;
    }

    const UserPost = {
        name: localStorage.getItem("name"),
        username: localStorage.getItem("username"),
        message: post.message
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setPost({...post, [e.target.name]: e.target.value});
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        fetch("https://vinnyrobot-humble-waffle-r9r677xqwjj34gv-9090.preview.app.github.dev/posts",{
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(UserPost)
        })
        navigate("/");
        window.location.reload();
    }

    return(
        <FormCreatePost handleChange={handleChange} handleSubmit={handleSubmit}/>
    )
}

export default CreatePost;