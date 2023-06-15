import { useEffect, useState } from "react";
import styles from "./StorySec.module.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import st1 from "../../../assets/st1.jpg";
import st2 from "../../../assets/st2.jpg";
import st3 from "../../../assets/st3.jpg";
import st4 from "../../../assets/st4.jpg";
import st5 from "../../../assets/st5.jpg";
import st6 from "../../../assets/st6.jpg";
import st7 from "../../../assets/st7.jpg";
import st8 from "../../../assets/st8.jpg";
import st9 from "../../../assets/st9.jpg";
import st10 from "../../../assets/st10.jpg";
import story1 from "../../../assets/story1.jpg";
import story2 from "../../../assets/story2.jpg";
import story3 from "../../../assets/story3.jpg";
import story4 from "../../../assets/story4.jpg";
import story5 from "../../../assets/story5.jpg";
import ReactInstaStories from "react-insta-stories";
const StorySec = () => {
  const [arr, setArr] = useState([]);
  const [openStory, setopenStory] = useState(false);
  const [story, setstory] = useState(null);

  const stories = [story1, story2, story3, story4, story5];
  let profileImg = [
    { name: "You", image: st1 },
    { name: "Emma", image: st2 },
    { name: "Ishaan", image: st3 },
    { name: "Advait", image: st4 },
    { name: "Shaurya", image: st5 },
    { name: "vini", image: st6 },
    { name: "meliena", image: st7 },
    { name: "nikki", image: st8 },
    { name: "Aditya", image: st9 },
    { name: "Vihaan", image: st10 },
  ];

  useEffect(() => {
    const initialProfiles = profileImg.slice(0, 5);
    setArr(initialProfiles);
  }, []);

  function handleNext() {
    const remainingProfiles = profileImg.slice(arr.length);
    const nextProfiles = remainingProfiles.slice(0, 5);
    setArr([...nextProfiles]);
  }
  let newstory = [];
  function handleStoryopen(id) {
    newstory.push(stories[id]);
    setstory(newstory);
    setopenStory(true);
  }
  function handleStoryClose() {
    setopenStory(false);
  }
  function handlePrevious() {
    const prevProfiles = profileImg.slice(arr.length - 5, arr.length);
    const remainingProfiles = arr.slice(0, arr.length - 5);
    setArr([...prevProfiles, ...remainingProfiles]);
    // setIsShow(true);
  }

  return (
    <div className={styles.storycontainer}>
      <div className={styles.story}>
        <button onClick={handlePrevious}>
          <ChevronLeftIcon />
        </button>
        {openStory && (
          <div className={styles.storyContent}>
            <ReactInstaStories
              stories={story}
              defaultInterval={4000}
              width="100vw"
              height="100vh"
              // styles={storyContent}
              onAllStoriesEnd={handleStoryClose}
              // onNext={handlenext}
              // currentStory={currentStory}
            />
          </div>
        )}
        {arr.map((item, index) => (
          <div className={styles.stories} key={index}>
            <img
              src={item.image}
              alt="profile image"
              onClick={() => handleStoryopen(index)}
            />
            <span>{item.name}</span>
          </div>
        ))}

        <button onClick={handleNext}>
          <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
};

export default StorySec;
