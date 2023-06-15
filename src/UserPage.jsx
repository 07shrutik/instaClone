import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loggedUser } from "./store/Store";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/sideBar/Sidebar";
import StorySec from "./components/main/story/StorySec";
import Leftsec from "./components/leftBar/Leftsec";
import styles from "./UserPage.module.css";
import Posts from "./components/main/posts/Posts";

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let username = JSON.parse(localStorage.getItem("loggedUser"));
    dispatch(loggedUser.actions.addloggedUserName(username));
    if (!username) {
      navigate("/");
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [dispatch, navigate]);

  return (
    <div className={styles.mainContainer}>
      {isLoading ? (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}>
            <div className={styles.innerLoader}></div>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
          <div className={styles.storySec}>
            <StorySec />
            <Posts />
          </div>
          <div className={styles.leftSec}>
            <Leftsec />
          </div>
        </>
      )}
    </div>
  );
};

export default UserPage;
