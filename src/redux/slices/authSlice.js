import { createSlice } from "@reduxjs/toolkit";
import { signUp, logIn, logOut } from "../../firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: null,
      isAuthenticated: false,
      error: null,
    },
    reducers: {
      setUser: (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = !!action.payload;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
    },
  });
  
  export const { setUser, setError } = authSlice.actions;
  
  // Sign Up
  export const signUpUser = (email, password) => async (dispatch) => {
    try {
      const userCredential = await signUp(email, password);
      const user = userCredential.user;
  
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        dispatch(setUser({ uid: user.uid, ...docSnap.data() }));
      } else {
        dispatch(setUser({ uid: user.uid }));
      }
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
  
  // Log In
  export const loginUser = (email, password) => async (dispatch) => {
    try {
      const userCredential = await logIn(email, password);
      const user = userCredential.user;
  
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        dispatch(setUser({ uid: user.uid, ...docSnap.data() }));
      } else {
        dispatch(setUser({ uid: user.uid }));
      }
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
  
  // Log Out
  export const logoutUser = () => async (dispatch) => {
    try {
      await logOut();
      dispatch(setUser(null));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
  
  export default authSlice.reducer;
