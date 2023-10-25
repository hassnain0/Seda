  
   import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'

import 'firebase/compat/firestore';


 const firebaseConfig = {
  apiKey: "AIzaSyBD0bBuBLoxEc_GLW0JCZ1kZsMNmuGicnE",
  authDomain: "seda-f30f6.firebaseapp.com",
  projectId: "seda-f30f6",
  storageBucket: "seda-f30f6.appspot.com",
  messagingSenderId: "220449789694",
  appId: "1:220449789694:web:8d5e5f09f48d62e01db7af",
  measurementId: "G-7N0T6S9QH5"
};

 const app=initializeApp(firebaseConfig)
    firebase.initializeApp(firebaseConfig)
   
   const db=firebase.firestore()

   const auth=getAuth(app);

   export  {db,auth,firebaseConfig}; 