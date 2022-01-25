import { useEffect, useState } from "react"
import initializeAuthentication from '../Pages/Login/Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState("");

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    // google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // signInUsingGoogle().then(result => result.user)

    // logout
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                console.log("okkk");
            })
            .catch((error) => { })
            .finally(() => {
                setIsLoading(false);
            });
    }
    // signin hold
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false)
        })
    }, [auth]);

    // Login by email and password
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

    };

    const handleLogin = () => {
        return signInWithEmailAndPassword(auth, email, password);

    };

    const hanleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => { })
            .catch((err) => {
                console.log(err.message);
            });
    };

    // registration by email and password
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password must be at least 6 character long");
            // setMessage("");
            return;
        }
        if (!/(?=.*?[a-z])/.test(password)) {
            setError("Password must be At least one Lower case English letter");
            // setMessage("");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                updateRegisterInfo();
                verifyEmail();
                // setMessage('Register Done');
                window.location.reload()
            })
            .catch((error) => {
                setError('fail to register');
            });
    };
    const updateRegisterInfo = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => { })
            .catch((error) => { });
    };

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
            });
    };

    return {
        user,
        setUser,
        error,
        setError,
        email,
        password,
        name,
        message,
        setMessage,

        signInUsingGoogle,
        logout,

        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleLogin,
        hanleResetPassword,

        handleOnSubmit,

        isLoading,
        setIsLoading
    }
}

export default useFirebase;