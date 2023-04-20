import styles from "./index.module.css";

import { Link } from "react-router-dom";
import { FaCaretDown, FaUserCircle} from "react-icons/fa";
import { useState } from "react";

function Navbar(){
    const [showExtraMenu, setShowExtraMenu] = useState(false)

    function clearLocalStorage(){
        localStorage.clear();
        window.location.reload();
    }

    function handleShowExtraMenu(){
        setShowExtraMenu(showExtraMenu ? false : true);
    }

    return(
        <>
            <header className={styles.navbar}>
                <div className={styles.logo}>
                    <h2 className={styles.textLogo}>Jvn</h2>
                </div>
                <nav>
                    <ul className={styles.links}>
                        {localStorage.getItem("login") ? (
                            <>
                                <li className={styles.link}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className={styles.link}>
                                    <Link to="/createpost">Create Post</Link>
                                </li>
                                <li className={styles.link}>
                                    <Link to="/search">Search</Link>
                                </li>
                            </>
                        ): (
                            <>
                                <li className={styles.link}>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className={styles.link}>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li className={styles.link}>
                                    <Link to="/search">Search</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
                <div>
                    <FaCaretDown size={25} color="#ccc  " onClick={handleShowExtraMenu}/>
                    {localStorage.getItem("login") && (
                        <Link to="/myprofile">
                            <FaUserCircle size={45} color="#ccc"/>
                        </Link>
                    )}
                </div>
            </header>
            <div className={showExtraMenu ? styles.showExtraMenu : styles.closeExtraMenu}>
                {localStorage.getItem("login") ? (
                    <nav>
                        <ul className={styles.links}>
                            <li className={styles.link}>
                                <Link to="/myprofile">My Profile</Link>
                            </li>
                            <li className={styles.link} onClick={clearLocalStorage}>
                                <Link to="/">Log Out</Link>
                            </li>
                            <li className={styles.link}>
                                <Link to="/createpost">Create Post</Link>
                            </li>
                            <li className={styles.link}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={styles.link}>
                                <Link to="/search">Search</Link>
                            </li>
                        </ul>
                    </nav>
                ) : (
                    <nav>
                        <ul className={styles.links}>
                            <li className={styles.link}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={styles.link}>
                                <Link to="/login">Login</Link>
                            </li>
                            <li className={styles.link}>
                                <Link to="/search">Search</Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </>
    )
}

export default Navbar;