import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import styles from "./Footer.module.css";
import { useRef, useState } from "react";
import st1 from "../../assets/st1.jpg";
import createPost from "../../assets/createPost.jpg";
import { useDispatch, useSelector } from "react-redux";
import { userPostSlice } from "../../store/Store";
import { Box, Button, Modal, TextField } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";

const Footer = () => {
  const [getimg, setgetimg] = useState("");
  const [getcaption, setgetcaption] = useState("");
  const [open, setOpen] = useState(false);
  const [finalopen, setfinalopen] = useState(false);
  const [discardopen, setdiscardopen] = useState(false);
  const [capLen, setcapLen] = useState(0);
  const dispatch = useDispatch();
  const createPostRef = useRef();
  const finalModalOptions = [
    { name: "Add location", icon: <LocationOnOutlinedIcon /> },
    { name: "Accessibility", icon: <KeyboardArrowDownOutlinedIcon /> },
    { name: "Advanced Settings", icon: <KeyboardArrowDownOutlinedIcon /> },
  ];
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 500,
    bgcolor: "background.paper",
    borderRadius: "10px",
    overflow: "hidden",
  };
  const finalstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 580,
    bgcolor: "background.paper",
    borderRadius: "10px",
    overflow: "hidden",
  };
  const discardstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 200,
    bgcolor: "background.paper",
    borderRadius: "10px",
    overflow: "hidden",
  };
  function handleClose() {
    setOpen(false);
    // seticons(sideIcons);
    setgetimg("");
  }
  function handlefinalClose() {
    setfinalopen(false);
    setOpen(false);
    // seticons(sideIcons);
    setgetcaption("");
    setgetimg("");
  }
  function handleImgChange(e) {
    let file = URL.createObjectURL(e.target.files[0]);
    setgetimg(file);
  }
  function nextModal() {
    // dispatch(userPostSlice.actions.addPost(getimg));
    // localStorage.setItem("userpost", JSON.stringify([...userpost, getimg]));
    // setgetimg("");
    setfinalopen(true);
  }
  function handleCancle() {
    setOpen(false);
    // setdiscardopen(false);
    setgetimg("");
    // seticons(sideIcons);
    setgetcaption("");
  }
  const userpost = useSelector((state) => {
    return state.userPost;
  });
  const user = useSelector((state) => {
    return state.loggedUser;
  });
  function addUserPost() {
    // setgetcaption(usercaption);
    let newPost = {
      dp: st1,
      username: user.username,
      fullname: user.fullname,
      imageURL: getimg,
      caption: getcaption,
      isLike: false,
      likeCount: 0,
    };
    dispatch(userPostSlice.actions.addPost(newPost));
    localStorage.setItem("userpost", JSON.stringify([...userpost, newPost]));

    setgetimg("");
    setgetcaption("");
    setfinalopen(false);
    setOpen(false);
    // seticons(sideIcons);
  }
  // let usercaption;
  function handleCaption(e) {
    setgetcaption(e.target.value);
    setcapLen(getcaption.length + 1);
    if (getcaption.length >= 2200) {
      alert("Maximum Caption Length Reached");
    }
  }
  function handleSelectPost() {
    createPostRef.current.click();
  }
  function handleDiscard() {
    setfinalopen(false);
    setOpen(false);
    setdiscardopen(false);
    setgetimg("");
    setgetcaption("");
  }
  const loggeduser = useSelector((state) => {
    return state.loggedUser;
  });
  var handleOpen = () => setOpen(true);
  return (
    <div className={styles.sidebar}>
      <ul className={styles.options}>
        <li className={styles.option}>
          <HomeOutlinedIcon sx={{ fontSize: 35, marginRight: 2 }} />
        </li>
        <li className={styles.option}>
          <ExploreOutlinedIcon sx={{ fontSize: 35, marginRight: 2 }} />
        </li>
        <li className={styles.option}>
          <MovieCreationOutlinedIcon sx={{ fontSize: 35, marginRight: 2 }} />
        </li>
        <li className={styles.option} onClick={handleOpen}>
          <AddBoxOutlinedIcon sx={{ fontSize: 35, marginRight: 2 }} />
        </li>
        <li className={styles.option}>
          <AccountCircleOutlinedIcon sx={{ fontSize: 35, marginRight: 2 }} />
        </li>
      </ul>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {getimg ? (
            <div className={styles.getImg}>
              <div className={styles.getImgBtn}>
                <Button
                  sx={{
                    textTransform: "none",
                  }}
                  onClick={handleCancle}
                >
                  Cancle
                </Button>
                <Button
                  sx={{
                    textTransform: "none",
                  }}
                  onClick={nextModal}
                >
                  Next
                </Button>
              </div>
              <img src={getimg} />
            </div>
          ) : (
            <>
              <div className={styles.modalBox}>
                <p style={{ top: "0px" }}>Create New Post</p>
              </div>
              <hr />
              <div className={styles.modalBoxBtn}>
                <img src={createPost} />
                <p>Drag photos and videos here</p>
                <input
                  type="file"
                  ref={createPostRef}
                  hidden
                  onChange={handleImgChange}
                />
                <Button
                  onClick={handleSelectPost}
                  sx={{
                    backgroundColor: "#3897f0",
                    color: "white",
                    textTransform: "none",
                    width: "200px",
                    "&:hover": {
                      backgroundColor: "#4ca6ff",
                      color: "black",
                    },
                  }}
                >
                  <strong>Select from computer</strong>
                </Button>
              </div>
            </>
          )}
        </Box>
      </Modal>
      <Modal
        open={finalopen}
        onClose={handlefinalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={finalstyle}>
          <div className={styles.getImgBtn}>
            <Button
              sx={{
                textTransform: "none",
              }}
              onClick={() => setdiscardopen(true)}
            >
              Cancle
            </Button>
            <div className={styles.modalBox}>
              <p>Create New Post</p>
            </div>
            <Button
              sx={{
                textTransform: "none",
              }}
              onClick={addUserPost}
            >
              Share
            </Button>
          </div>
          <hr />
          <div className={styles.finalModal}>
            <img src={getimg} />
            <div className={styles.finalModalLeft}>
              <div className={styles.account}>
                <div className={styles.accountImg}>
                  <img src={st1} />
                </div>
                <div className={styles.accountdetail}>
                  <p>
                    <strong>{loggeduser.username}</strong>
                  </p>
                </div>
              </div>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                variant="outlined"
                placeholder="Enter your caption..."
                sx={{
                  width: "100%",
                  backgroundColor: "#FAFAFA",
                  borderRadius: "4px",
                }}
                onChange={handleCaption}
              />
              <div className={styles.textTools}>
                <p>
                  <SentimentSatisfiedAltOutlinedIcon />
                </p>
                <p>{capLen}/2200</p>
              </div>
              {finalModalOptions.map((item) => (
                <>
                  <div className={styles.finalModalSetting}>
                    <p>{item.name}</p>
                    <p>{item.icon}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={discardopen}
        onClose={handlefinalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={discardstyle}>
          <div className={styles.discardModal}>
            <p>
              <strong>Discard post?</strong>
            </p>
            <p>If you leave, your edits won't be saved.</p>
            <div className={styles.discardBtns}>
              <p>
                <strong onClick={handleDiscard}>Discard</strong>
              </p>
              <p onClick={() => setdiscardopen(false)}>Cancle</p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Footer;
