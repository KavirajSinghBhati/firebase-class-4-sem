import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDy_t2LabrZFyG4S2NCD9zXXuweSa8cULk",

  authDomain: "w3mentor-d90ac.firebaseapp.com",

  projectId: "w3mentor-d90ac",

  storageBucket: "w3mentor-d90ac.appspot.com",

  messagingSenderId: "748908894673",

  appId: "1:748908894673:web:42997d36efeb072cf3a8f0",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();

const createUserDocument = async (userInfo) => {
  const userDocRef = doc(db, "users", userInfo.userName);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { userName, textMsg, iconUrl, date } = userInfo;
    try {
      await setDoc(userDocRef, {
        userName,
        textMsg,
        iconUrl,
        date,
      });
    } catch (err) {
      console.error(err);
    }
  }
  return userDocRef;
};

document.getElementById("submit").addEventListener("click", dataCall);
function dataCall() {
  let userName = document.getElementById("inlineFormInputGroupUsername").value;
  let textMsg = document.getElementById("exampleFormControlTextarea1").value;
  let date = new Date();
  let iconUrl = document.querySelector("input[type=radio]:checked").value;
  const userInfo = {
    userName,
    textMsg,
    iconUrl,
    date,
  };
  const userDocRef = createUserDocument(userInfo);
  //   document.getElementById("modal-fullscreen-xs").style.display = "none";
}
