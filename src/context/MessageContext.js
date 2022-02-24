import "react-toastify/dist/ReactToastify.css";
import { createContext } from 'react';
import { toast, ToastContainer } from "react-toastify";

export const MessageContext = createContext({});

export const MessageProvider = ({ children }) => {

    const setMessage = (mesaj, status, time = 3000) => {
        toast[status](mesaj, {
            position: "top-right",
            theme: "colored",
            autoClose: time,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    };

    return (
        <MessageContext.Provider
            value={{ setMessage }}
        >
            <ToastContainer />
            {children}
        </MessageContext.Provider>
    );
};