import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "../StartFirebase/firebase.init";
firebaseInit()
const useFirebase=()=>{
    const auth = getAuth();
    const [user,setUser]=useState({});
    const [error, setError] = useState("");
    const singInGoogle=()=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
                 setUser(result.user)
                 setError(" ")
        })
        .catch((error) => setError(error.message));
       }




       useEffect(() => {
       const unSubscrived= onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            
          } else {
            
          }
        });
        return ()=>unSubscrived;
      }, []);




      const logOut=()=>{
        signOut(auth)
        .then(() => {
          setUser({});
        })
        .catch((err) => {
          console.log(err);
        });
    }



        return {
            user,
            singInGoogle,
            logOut

        }
      

}
export default useFirebase