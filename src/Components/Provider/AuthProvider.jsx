import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const AuthInfo = {
        googleSignIn,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;