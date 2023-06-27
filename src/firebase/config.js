import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBUMDUuEKkugsU-MFDq27CauZN2adbHe_0",
    authDomain: "olx-clone-773ba.firebaseapp.com",
    projectId: "olx-clone-773ba",
    storageBucket: "olx-clone-773ba.appspot.com",
    messagingSenderId: "720168370882",
    appId: "1:720168370882:web:7e39e22fc9b5267029f15b",
    measurementId: "G-E02NXW63K8"
  };
export default firebase.initializeApp(firebaseConfig)