import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDelay from "../../../hooks/useDelay";

import { PostData } from "../../../types/types";
import FormEditPost from "../../layout/FormEditPost";
import SucessMessage from "../../layout/SucessMessage";


function EditPost(){
    const [newMessage, setNewMessage] = useState("");
    const [post, setPost] = useState<PostData>(Object);
    const [clicked, setClicked] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    const delay = useDelay;

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setNewMessage(e.target.value);
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        const response = await fetch(`https://api-social-network.vercel.app/posts/${id}`);
        const data = await response.json();
        setPost(data);

        const updatedPost = {
            name: post.name,
            message: newMessage,
            username: post.username
        }
        
        await fetch(`https://api-social-network.vercel.app/posts/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPost)
        })
        
        setClicked(true);

        await delay(1500);

        navigate("/");
    }

    return(
        <>
            {clicked && <SucessMessage message="Mensagem modificada!" />}
            <FormEditPost handleSubmit={handleSubmit} handleChange={handleChange}/>
        </>
    )
}

export default EditPost;
