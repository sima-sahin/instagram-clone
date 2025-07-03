import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../firebase/firebase.js";
import { uploadPostImage } from "../../firebase/uploadFile.js";


export const createPost = createAsyncThunk("posts/createPost", async ({ file }, { rejectWithValue }) => {
  try {
    if (!file) throw new Error("Dosya seçilmedi!");
    if (!auth.currentUser) throw new Error("Kullanıcı bilgisi yok!");

    const imageUrl = await uploadPostImage(file);
    //FARKLI DOSYA EXPORT HATASI OLABİLİR

    const newPost = {
      username: auth.currentUser.username || "Anonim",
      profilePic: auth.currentUser.profilePic || "",
      timestamp: serverTimestamp(),
      imageUrl,
      likes: 0,
      commentCount: 0,
      comments: [],
    };

    const docRef = await addDoc(collection(db, "posts"), newPost);

    return { id: docRef.id, ...newPost };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;
