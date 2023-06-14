// import { create } from "@mui/material/styles/createTransitions";
import { createSlice } from "@reduxjs/toolkit";
// import { useEffect, useState } from "react";
import { configureStore } from "@reduxjs/toolkit";
// import { useState } from "react";

import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.jpg";
import post4 from "../assets/post4.jpg";
import post5 from "../assets/post5.jpg";
import post6 from "../assets/post6.jpg";

export const usersSlice = createSlice({
  name: "users",
  initialState: JSON.parse(localStorage.getItem("users")) || [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state));
    },
  },
});

const data = [
  {
    username: "kody",
    fullname: "Kody Rhodes",
    imageURL: post1,
    caption: "Boys will be boys",
    isLike: false,
    likeCount: 2112,
  },
  {
    username: "john_doe",
    fullname: "John Doe",
    imageURL: post2,
    caption: "Adventure awaits",
    isLike: false,
    likeCount: 1500,
  },
  {
    username: "mike_smith",
    fullname: "Mike Smith",
    imageURL: post3,
    caption: "Chasing dreams",
    isLike: false,
    likeCount: 800,
  },
  {
    username: "emma_wilson",
    fullname: "Emma Wilson",
    imageURL: post4,
    caption: "Empowered women empower women",
    isLike: false,
    likeCount: 1200,
  },
  {
    username: "sophia_johnson",
    fullname: "Sophia Johnson",
    imageURL: post5,
    caption: "Slaying it like a queen",
    isLike: false,
    likeCount: 900,
  },
  {
    username: "lily_smith",
    fullname: "Lily Smith",
    imageURL: post6,
    caption: "Together is a wonderful place to be",
    isLike: false,
    likeCount: 600,
  },
];

export const userPostSlice = createSlice({
  name: "userPost",
  initialState: data,
  reducers: {
    addPost: (state, action) => {
      state.unshift(action.payload);
    },
    updateLike: (state, action) => {
      return state.map((user, index) => {
        if (index === action.payload) {
          if (!user.isLike) {
            return { ...user, isLike: true, likeCount: user.likeCount + 1 };
          } else {
            return { ...user, isLike: false, likeCount: user.likeCount - 1 };
          }
        }
        return user;
      });
    },
  },
});

export const loggedUser = createSlice({
  name: "loggedUser",
  initialState: {},
  reducers: {
    addloggedUserName: (state, action) => {
      return action.payload;
    },
  },
});
export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    userPost: userPostSlice.reducer,
    loggedUser: loggedUser.reducer,
  },
});
