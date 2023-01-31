import { useEffect, useState } from "react";
import { FaUserCircle, FaPencilAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

import useDelay from "../../../hooks/useDelay";
import { PostData } from "../../../types/types";
import Loading from "../../layout/Loading";

import styles from "./index.module.css";

function Home(){
    const [posts, setPosts] = useState<PostData[]>([]);
    const delay = useDelay;

    async function deletePost(id: number){
        await fetch(`https://api-social-network.vercel.app/posts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        alert("Post deletado com sucesso!");
        window.location.reload();
    }

    useEffect(() => {
        async function getPosts(){
            await delay(1500);
            const response = await fetch("https://api-social-network.vercel.app/posts");
            const data = await response.json();
            setPosts(data);
        }
        getPosts();
    }, [])

    return(
        <>
            {posts.length !== 0 ? (
                <section className={styles.containerPosts}>
                    {posts.map((post) => (
                        <div className={styles.post} key={post.id}>
                            <header>
                                <span className={styles.image}>
                                    <FaUserCircle size={35}/>
                                </span>
                                <span className={styles.name}>{post.name} |</span>
                                <span className={styles.username}>@{post.username}</span>
                            </header>
                            <div className={styles.message}>{post.message}</div>
                            {localStorage.getItem("name") === post.name && (
                                <footer className={styles.footer}>
                                    <Link to={`/editpost/${post.id}`}>
                                        <FaPencilAlt/>Editar Post
                                    </Link>
                                    <FaTrash onClick={() => deletePost(post.id)}/><span className={styles.delete}>Excluir Post</span>
                                </footer>
                            )}
                            <hr></hr>
                        </div>
                    ))}
                </section>
            ) : (
                <Loading/>
            )}
        </>
    )
}

export default Home;
