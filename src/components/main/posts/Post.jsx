import { useState } from "react";
import styles from "./Post.module.css";
import SendIcon from "@mui/icons-material/Send";
// import pic1 from "../../../assets/pic1.jpg";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { userPostSlice } from "../../../store/Store";
const Post = (props) => {
  // let res = props.images;
  // let arr = [pic1, pic1, pic1];
  // let posts=props.post
  const [showHeart, setShowHeart] = useState(false);

  const dispatch = useDispatch();
  function postLike(index) {
    dispatch(userPostSlice.actions.updateLike(index));
    // console.log(index);
  }
  const handleDoubleClick = (res) => {
    postLike(res);
    if (!props.post.isLike) {
      setShowHeart(true);
      setTimeout(() => {
        setShowHeart(false);
      }, 700);
    }
  };

  return (
    <div className={styles.postContainer}>
      <div className={styles.postTopContainer}>
        {/* top */}
        <div className={styles.postProfileImg}>
          <div className={styles.images}>
            <img src={props.post.dp ? props.post.dp : props.post.imageURL} />
          </div>
          <div className={styles.postUserDetail}>
            <p>
              <strong>{props.post.username}</strong>
            </p>
            <p>Location</p>
          </div>
        </div>
        <div className={styles.topBtn}>
          <button>...</button>
        </div>
      </div>
      <div className={styles.postImage} style={{ position: "relative" }}>
        <img
          src={props.post.imageURL}
          onDoubleClick={() => {
            handleDoubleClick(props.postIndex);
          }}
        />
        {showHeart && <div className={styles.imageLike}>🤍</div>}
      </div>
      <div className={styles.iconBtn}>
        <div className={styles.iconBtnLeft}>
          <li>
            {props.post.isLike ? (
              <FavoriteIcon
                onClick={() => {
                  handleDoubleClick(props.postIndex);
                }}
                sx={{
                  color: "red",
                }}
              />
            ) : (
              <FavoriteBorderOutlinedIcon
                onClick={() => {
                  postLike(props.postIndex);
                }}
              />
            )}
          </li>
          <li>
            <ChatBubbleOutlineOutlinedIcon />
          </li>
          <li>
            <SendIcon />
          </li>
        </div>
        <div className={styles.iconBtnRight}>
          <li>
            <BookmarkBorderOutlinedIcon />
          </li>
        </div>
      </div>

      <div className={styles.bottomSec}>
        <p>
          <strong>{props.post.likeCount} Likes</strong>
        </p>
        {props.post.caption && (
          <>
            <strong>User Name</strong>
            <span>{props.post.caption}</span>
          </>
        )}
        <p>Veiw comments</p>
        <p>Add a comment...</p>
      </div>
    </div>
  );
};

export default Post;
