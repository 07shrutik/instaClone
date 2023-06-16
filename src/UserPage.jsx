import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loggedUser } from "./store/Store";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/sideBar/Sidebar";
import StorySec from "./components/main/story/StorySec";
import Leftsec from "./components/leftBar/Leftsec";
import styles from "./UserPage.module.css";
import Posts from "./components/main/posts/Posts";
import { useMediaQuery } from "@mui/material";

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const isViewportBelow900 = useMediaQuery('(max-width:970px)');
  const isViewportBelow600 = useMediaQuery('(max-width:560px)');

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
         {
      isViewportBelow900 ?

                  isViewportBelow600 ?
                          <div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
                                 <StorySec style={{ gridRow: '2 / span 3' }} />
                                 <Posts style={{ gridRow: '2 / span 3' }} />
                            </div>
                           
                             </div>
                         :

                          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                            <div>
                               <Sidebar style={{ gridRow: '1 / span 2' }} />
                            </div>
                            <div>
                             <StorySec style={{ gridRow: '2 / span 3' }} />
                             <Posts style={{ gridRow: '2 / span 3' }} />
                            </div>
                            
                             
                              
                          </div>

                :

                <div style={{ display: "grid", gridTemplateColumns: "1fr 2.5fr 1fr" }}>
                <div>
                  <Sidebar style={{ gridRow: '1 / span 2' }} />
                </div>
                <div>
                   <StorySec style={{ gridRow: '2 / span 3' }} />
                   <Posts style={{ gridRow: '2 / span 3' }} />
                </div>
                  <div>
                    <Leftsec style={{ gridRow: "2 / span 1" }} />
                  </div>
              </div>
    }
        </>
      )}
    </div>
  );
};

export default UserPage;
