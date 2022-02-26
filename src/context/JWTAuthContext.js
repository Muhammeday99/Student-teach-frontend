import { createContext, useEffect, useReducer } from 'react';
import useMessage from '../hooks/useMessage';
import axios from '../utils/axios';

const initialAuthState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
    success: "",
    message: ""
};

const setSession = (accessToken) => {
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
        localStorage.removeItem('accessToken');
        delete axios.defaults.headers.common.Authorization;
    }
};

const handlers = {
    INITIALIZE: (state, action) => {
        const { isAuthenticated, user } = action.payload;

        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user
        };
    },
    LOGIN: (state, action) => {
        const { user } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user
        };
    },
    LOGOUT: (state) => ({
        ...state,
        isAuthenticated: false,
        user: null
    }),
    REGISTER: (state, action) => {
        const { user } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user
        };
    }
};

const reducer = (state, action) =>
    handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext(
    {
        ...initialAuthState,
        method: 'JWT',
        login: () => Promise.resolve(),
        logout: () => Promise.resolve(),
        register: () => Promise.resolve()
    }
);

export const AuthProvider = (props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, initialAuthState);
    const { setMessage } = useMessage()

    useEffect(() => {
        const initialize = async () => {
            try {
                const accessToken = window.localStorage.getItem('accessToken');

                if (accessToken) {

                    setSession(accessToken);

                    const response = await axios.get('auth/me');
                    const user = response.data;

                    dispatch({
                        type: 'INITIALIZE',
                        payload: {
                            isAuthenticated: true,
                            user
                        }
                    });
                } else {
                    dispatch({
                        type: 'INITIALIZE',
                        payload: {
                            isAuthenticated: false,
                            user: null
                        }
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                        isAuthenticated: false,
                        user: null
                    }
                });
            }
        };

        initialize();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('auth/signin', {
                email,
                password
            });

            const token = response.data;

            const [encodedHeader, encodedPayload, signature] = token.split('.');

            const payload = JSON.parse(atob(encodedPayload));

            const user = payload; // get user from jwt

            setSession(token);

            setMessage("You're logged in", "success");

            dispatch({
                type: 'LOGIN',
                payload: {
                    user
                }
            });
        } catch (error) {
            setMessage(error.response.data.error, "error");
        }
    };

    const logout = async () => {
        setSession(null);
        dispatch({ type: 'LOGOUT' });
    };

    const register = async (userInfo) => {
        const response = await axios.post('auth/signup', {
            Email: userInfo.Email,
            UserName: userInfo.UserName,
            Password: userInfo.Password,
            FullName: userInfo.FullName,
            MobilePhones: userInfo.MobilePhones,
        });
        const { success, message } = response.data;
        // window.localStorage.setItem('token', accessToken);
        dispatch({
            type: 'REGISTER',
            payload: {
                success,
                message
            }
        });
    };


    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'JWT',
                login,
                logout,
                register
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;