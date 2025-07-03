# Instagram Clone 📸

A full-featured **Instagram clone** built with **React.js** and **Firebase**. Users can sign up, log in, upload posts with images, like and comment on posts — all in real-time!

🌐 [Live Demo](https://sima-instgrm.netlify.app/)

## ⚙️ Tech Stack

- 🔥 **Firebase Authentication** – secure sign-up & login
- ☁️ **Firebase Firestore** – real-time database for posts & comments
- 📁 **Firebase Storage** – store and serve image uploads
- ⚛️ **React.js** – component-based UI
- 🎨 **Tailwind CSS** – responsive and clean design
- 🚀 **React Router** – for client-side navigation
- 📦 **Redux Toolkit** – state management

## ✨ Features

- ✅ User authentication (Sign up / Log in / Log out)
- ✅ Upload and display images with captions
- ✅ Real-time likes and comments
- ✅ Responsive layout for all screen sizes
- ✅ Profile photos and user feeds
- ✅ Fully dynamic Firestore integration

## 🔐 Firebase Setup

To run this project locally, you’ll need your own Firebase credentials:

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Enable:
   - **Authentication** (Email/Password)
   - **Firestore Database**
   - **Storage**
3. Create a `.env` file in the root directory and add:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
