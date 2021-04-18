import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        apiKey: "AIzaSyDpZ1NfOcYIuwAx5SCzZ2f41DLMkkJS0Gc",
        authDomain: "class-scheduler-88162.firebaseapp.com",
        databaseURL: "https://class-scheduler-88162-default-rtdb.firebaseio.com",
        projectId: "class-scheduler-88162",
        storageBucket: "class-scheduler-88162.appspot.com",
        messagingSenderId: "441827849926",
        appId: "1:441827849926:web:57eab87ab1e8d0ec0f89c7",
        measurementId: "G-QFPYCZVKBR"
};

firebase.initializeApp(firebaseConfig);

export { firebase };