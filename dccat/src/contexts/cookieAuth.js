import { createContext, useState, useMemo } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;
export const cookieAuth = createContext();

const CookieAuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false);

    const handleUserLogin = () => {
        const session = Cookies.get("koa.sess");
        if (session) {
            setCurrentUser(true);
        }
    };

    const handleUserLogout = () => {
        setCurrentUser(false);
        Cookies.remove("koa.sess");
        Cookies.remove("koa.sess.sig");
    };

    const userStatus = useMemo(
        () => ({ currentUser, handleUserLogin, handleUserLogout }),
        [currentUser, handleUserLogin, handleUserLogout],
    );

    return (
        <cookieAuth.Provider value={userStatus}>
            {children}
        </cookieAuth.Provider>
    );
};
  
export default CookieAuthProvider;