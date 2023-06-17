// import React from 'react'

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";

import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";



import styles from "./Footer.module.css";


const Footer = () => {
 
  
 
 
  return (
   
    <div className={styles.sidebar}>
    <ul className={styles.options}>
    
      <li className={styles.option}>
        <HomeOutlinedIcon sx={{ fontSize:35,marginRight:2 }}/>
       
      </li>
      <li className={styles.option}>
        <ExploreOutlinedIcon sx={{ fontSize:35,marginRight:2 }}/>
        
      </li>
      <li className={styles.option}>
        <MovieCreationOutlinedIcon sx={{ fontSize:35,marginRight:2 }}/>
       
      </li>
      <li className={styles.option}>
        <AddBoxOutlinedIcon  sx={{ fontSize:35,marginRight:2 }} />
        
      </li>
      <li className={styles.option}>
        <AccountCircleOutlinedIcon  sx={{ fontSize:35,marginRight:2 }} />
        
      </li>
      
      
    </ul>
    </div>
    

    
  );
};

export default Footer;
