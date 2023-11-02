import { createSlice } from "@reduxjs/toolkit"; // To create slice

// this state will be store in global state.
// So, this data will be accessible throughout the entire application
// Don't have to pass in 'states' and 'properties' to different componects
// If we use 'Redux', we should always 'Redux-Toolkit'
const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // reducers -> actions. Basically, these are functions
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
            // NOTE. 'Redux' can't assign new value as the line above. This is 'Redux/Toolkit'
            // 'state.mode' represents previous condition of 'mode' from 'initialState' above
            // In this case, we switch between 'light' and 'dark' when conditions met. (Assign new value to 'state.mode')
        },
        setLogin: (state, action) => {
            // 'action' is payload. Basically, it's params or arguments for the function
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.error("user friends non-existent....T_T");
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPost = state.posts.map((post) => {
                if (post._id === action.payload.post_id) {
                    return action.payload.post;
                }
                return post;
            });
            state.posts = updatedPost;
        },
    },
});

// Then we need to export each (so called) reducer inside the 'reducers: {}'
export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
    authSlice.actions;

// Finally, expoer default authSlice.reducer;
export default authSlice.reducer;
