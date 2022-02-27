import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyC0TjO-7hs42sMfFiy6Jyc4IVkZEWeY54Q",
    authDomain: "crwn-db-195d9.firebaseapp.com",
    projectId: "crwn-db-195d9",
    storageBucket: "crwn-db-195d9.appspot.com",
    messagingSenderId: "1066782773354",
    appId: "1:1066782773354:web:a2944c4f317a81e1cffa13",
    measurementId: "G-E36XQC4JF0"
    


};

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()
    console.log(snapShot);

    if(!snapShot.exists) {

        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
               await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData 
               })

        } catch (error) {
           console.log('error creating user', error.message);

        }
    }
    return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;