import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyD6YnWQXmdschF1nLxZnB7y34PFcpGgF98",
  authDomain: "feedapp-cc815.firebaseapp.com",
  projectId: "feedapp-cc815",
  storageBucket: "feedapp-cc815.appspot.com",
  messagingSenderId: "876945232086",
  appId: "1:876945232086:web:1233b9dfe56a2f72857977",
  measurementId: "G-8HGDVYE7VQ",
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
};

 const app = initializeApp(firebaseConfig);

export default app
// export const auth = getAuth(app);

// const provider = new GoogleAuthProvider();
// // Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);


// export const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   }); 



// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then(result => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;
//       result.user.console.log(name, email);

//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("profilePic", profilePic);
//     })
//     .catch(error => {
//       console.log(error);
//     });


  //   function writeUserData(email, password ) {
  //     const db = getDatabase();
  //     set(ref(db, 'users/' + userId), {
  //       username: name,
  //       email: email,
  //       profile_picture : imageUrl
  //     });
  //   }

    
  // var user = firebase.auth().currentUser;

  // var ref = firebase.database().ref();

  // var userData = {
  //   name: user.displayName,
  //   email: user.email,
  // };

  // ref.child("users").push().set(userData);
// };
