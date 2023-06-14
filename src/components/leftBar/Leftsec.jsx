// import React from "react";
import styles from "./LeftSec.module.css";
import st1 from "../../assets/st1.jpg";
import { useSelector } from "react-redux";
import pro1 from "../../assets/pro1.jpg";
import pro2 from "../../assets/pro2.jpg";
import pro3 from "../../assets/pro3.jpg";
import pro4 from "../../assets/pro4.jpg";
import pro5 from "../../assets/pro5.jpg";
import pro6 from "../../assets/pro6.jpg";
import pic1 from "../../assets/pic1.jpg";
import { useState } from "react";
const Leftsec = () => {
  // const profiles = [pro1, pro2, pro3, pro4, pro5, pro6];
  const user = useSelector((state) => {
    return state.loggedUser;
  });
  const suggestedUsers = [
    {
      profiles: pro1,
      name: "Dylan",
      followUser: "Followed by emma",
      isFollow: false,
    },
    {
      profiles: pro2,
      name: "Charlotte",
      isFollow: false,
      followUser: "Followed by aryan",
    },
    {
      profiles: pro3,
      name: "Olivia",
      isFollow: false,
      followUser: "Suggested for you",
    },
    {
      profiles: pro4,
      name: "James",
      isFollow: false,
      followUser: "Followed by aditya",
    },
    {
      profiles: pro5,
      name: "Oliver",
      isFollow: false,
      followUser: "Followed by yogesh",
    },
    {
      profiles: pro6,
      name: "Kriti",
      isFollow: false,
      followUser: "Suggested for you",
    },
  ];
  const [suggest, setsuggest] = useState(suggestedUsers);
  function handleFollow(id) {
    let newArr = suggest.map((user, index) => {
      if (index === id) {
        return { ...user, isFollow: !user.isFollow };
      }
      return user;
    });
    setsuggest(newArr);
  }
  return (
    <div className={styles.leftBar}>
      <div className={styles.leftTopmost}>
        <div className={styles.leftTop}>
          <div className={styles.leftTopImg}>
            <img src={st1} />
          </div>
          <div className={styles.leftTopUser}>
            <p>
              {" "}
              <strong>{user.username}</strong>
            </p>
            <p>{user.fullname}</p>
          </div>
        </div>
        <div className={styles.leftTopBtn}>
          <li>Switch</li>
        </div>
      </div>
      <div className={styles.leftSuggest}>
        <p>Suggested for you</p>
        {/* <p>See all</p> */}
      </div>
      {suggest.map((item, index) => (
        <>
          <div className={styles.accountList} key={index}>
            <div className={styles.account}>
              <div className={styles.accountImg}>
                <img src={item.profiles} />
              </div>
              <div className={styles.accountdetail}>
                <p>
                  <strong>{item.name}</strong>
                </p>
                <p> {item.followUser}</p>
              </div>
            </div>
            <div className={styles.leftTopBtn}>
              <li
                onClick={() => handleFollow(index)}
                style={{ color: item.isFollow ? "grey" : "" }}
              >
                {item.isFollow ? "Following" : "Follow"}
              </li>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Leftsec;
