import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth()

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                setUser(res.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    return {
        user,
        error,
        signInUsingGoogle,
        logout
    }
}

export default useFirebase;