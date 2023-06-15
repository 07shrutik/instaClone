// import React from 'react'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import instaLogin from "../../assets/instaLogin.png";
import st1 from "../../assets/st1.jpg";
import createPost from "../../assets/createPost.jpg";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import MovieIcon from "@mui/icons-material/Movie";
import SendIcon from "@mui/icons-material/Send";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useRef, useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Sidebar.module.css";
import { Box, Button, Modal, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userPostSlice } from "../../store/Store";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useNavigate } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Sidebar = () => {
  let iconstyle = { width: "40px", height: "40px" };
  const sideIcons = [
    {
      icon: <HomeOutlinedIcon sx={iconstyle} />,
      iconName: "Home",
    },
    {
      icon: <SearchOutlinedIcon sx={iconstyle} />,
      iconName: "Search",
    },
    {
      icon: <ExploreOutlinedIcon sx={iconstyle} />,
      iconName: "Explore",
    },
    {
      icon: <MovieCreationOutlinedIcon sx={iconstyle} />,
      iconName: "Reels",
    },
    {
      icon: <SendOutlinedIcon sx={iconstyle} />,
      iconName: "Message",
    },
    {
      icon: <FavoriteBorderIcon sx={iconstyle} />,
      iconName: "Notification",
    },
    {
      icon: <AddBoxOutlinedIcon sx={iconstyle} />,
      iconName: "Create",
    },
    {
      icon: <AccountCircleOutlinedIcon sx={iconstyle} />,
      iconName: "Profile",
    },
  ];
  const selectedSideIcons = [
    <HomeIcon sx={iconstyle} />,
    <SearchOutlinedIcon sx={iconstyle} />,
    <ExploreIcon sx={iconstyle} />,
    <MovieIcon sx={iconstyle} />,
    <SendIcon sx={iconstyle} />,
    <FavoriteIcon sx={iconstyle} />,
    <AddBoxIcon sx={iconstyle} />,
    <AccountCircleOutlinedIcon sx={iconstyle} />,
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
  const logoutstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    height: 190,
    bgcolor: "background.paper",
    borderRadius: "10px",
    overflow: "hidden",
  };

  let finalModalOptions = [
    { name: "Add location", icon: <LocationOnOutlinedIcon /> },
    { name: "Accessibility", icon: <KeyboardArrowDownOutlinedIcon /> },
    { name: "Advanced Settings", icon: <KeyboardArrowDownOutlinedIcon /> },
  ];
  const [icons, seticons] = useState(sideIcons);
  const [capLen, setcapLen] = useState(0);
  const [getimg, setgetimg] = useState("");
  const [getcaption, setgetcaption] = useState("");
  const [open, setOpen] = useState(false);
  const [finalopen, setfinalopen] = useState(false);
  const [discardopen, setdiscardopen] = useState(false);
  const [logoutopen, setlogoutopen] = useState(false);
  const navigate = useNavigate();
  // const [discard, setdiscardopen] = useState(false);
  var handleOpen = () => setOpen(true);
  const createPostRef = useRef();
  const userpost = useSelector((state) => {
    return state.userPost;
  });
  function handleClose() {
    setOpen(false);
    seticons(sideIcons);
    setgetimg("");
  }
  function handlefinalClose() {
    setfinalopen(false);
    setOpen(false);
    seticons(sideIcons);
    setgetcaption("");
    setgetimg("");
  }
  function handleDiscardClose() {
    setdiscardopen(false);
    setOpen(true);
  }
  function handlelogoutClose() {
    setlogoutopen(false);
  }
  const dispatch = useDispatch();

  function handleSelectPost() {
    createPostRef.current.click();
  }
  function handleImgChange(e) {
    let file = URL.createObjectURL(e.target.files[0]);
    setgetimg(file);
  }
  useEffect(() => {
    if (getimg) {
      console.log(getimg);
    }
  });
  const loggeduser = useSelector((state) => {
    return state.loggedUser;
  });
  function handleIconClick(id) {
    let res = sideIcons.map((item, index) => {
      if (index === id) {
        if (index === 6) {
          handleOpen();
        }
        let res = <span style={{ fontWeight: 600 }}>{item.iconName}</span>;
        return { ...item, icon: selectedSideIcons[id], iconName: res };
      }
      return item;
    });
    seticons(res);
  }

  function nextModal() {
    // dispatch(userPostSlice.actions.addPost(getimg));
    // localStorage.setItem("userpost", JSON.stringify([...userpost, getimg]));
    // setgetimg("");
    setfinalopen(true);
  }
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
    seticons(sideIcons);
  }
  // let usercaption;
  function handleCaption(e) {
    setgetcaption(e.target.value);
    setcapLen(getcaption.length + 1);
    if (getcaption.length >= 2200) {
      alert("Maximum Caption Length Reached");
    }
  }
  function handleCancle() {
    setOpen(false);
    // setdiscardopen(false);
    setgetimg("");
    seticons(sideIcons);
    setgetcaption("");
  }
  function handleDiscard() {
    setfinalopen(false);
    setOpen(false);
    setdiscardopen(false);
    setgetimg("");
    setgetcaption("");
  }
  function handleLogout() {
    localStorage.removeItem("loggedUser");
    navigate("/");
  }
  return (
    <div className={styles.sidebar}>
      <img src={instaLogin} />
      <div className={styles.iconList} style={{}}>
        {icons.map((item, index) => (
          <>
            <li key={index} onClick={() => handleIconClick(index)}>
              {item.icon}
              <span>{item.iconName}</span>
            </li>
          </>
        ))}
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
        <li className={styles.more}>
          <LogoutOutlinedIcon style={{ width: "40px", height: "40px" }} />
          <span onClick={() => setlogoutopen(true)}>Logout</span>
        </li>
      </div>
      <Modal
        open={logoutopen}
        onClose={handlelogoutClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={logoutstyle}>
          <div className={styles.logout}>
            <div className={styles.logoutbox1}>
              <p>Logging Out?</p>
              <p>You need to log back in</p>
            </div>
            <div className={styles.logoutbox2}>
              <p onClick={handleLogout}>Logout</p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Sidebar;
