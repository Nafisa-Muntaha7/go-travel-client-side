import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth()

    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(res => {
                setUser(res.user);
            })
            .finally(() => setIsLoading(false))
            .catch(error => {
                setError(error.message);
            })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // setUser({})
            })
            .finally(() => setIsLoading(false));

    }
    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        logout
    }
}

export default useFirebase;