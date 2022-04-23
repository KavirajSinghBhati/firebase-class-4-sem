import { initialiseApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy_t2LabrZFyG4S2NCD9zXXuweSa8cULk",

  authDomain: "w3mentor-d90ac.firebaseapp.com",

  projectId: "w3mentor-d90ac",

  storageBucket: "w3mentor-d90ac.appspot.com",

  messagingSenderId: "748908894673",

  appId: "1:748908894673:web:42997d36efeb072cf3a8f0",
};

const firebaseApp = initialiseApp(firebaseConfig);

export const db = getFirestore();

export const createUserDocument = async (userInfo) => {
  const userDocRef = doc(db, "users", userInfo.userName);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { userName, textMsg, iconUrl, date } = userInfo;
    try {
      const check = await setDoc(userDocRef, {
        userName,
        textMsg,
        iconUrl,
        date,
      });
    } catch (err) {
      console.log("error occured creating the user ", err.message);
    }
  }
  return userDocRef;
};
