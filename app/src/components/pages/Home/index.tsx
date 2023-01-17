import { useEffect, useState } from "react";
import { FaUserCircle, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

import useDelay from "../../../hooks/useDelay";
import { PostData } from "../../../types/types";
import Loading from "../../layout/Loading";

import styles from "./index.module.css";

function Home(){
    const [posts, setPosts] = useState<PostData[]>([]);
    const delay = useDelay;

    useEffect(() => {
        async function getPosts(){
            await delay(1500);
            const response = await fetch("https://vinnyrobot-humble-waffle-r9r677xqwjj34gv-9090.preview.app.github.dev/posts");
            const data = await response.json();
            setPosts(data)
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
                                <Link to={`/editpost/${post.id}`}>
                                    <FaEdit>Edit post</FaEdit>
                                </Link>
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