import React from "react";
import { createContext, useReducer, useMemo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthReducer,{ initialState, actions } from "./reducers";
import { View } from "react-native";

const {
    SIGN_IN,
    LOGOUT,
    PERSIST_TOKEN,
} = actions;

interface PropChildren {
    children?: JSX.Element;
}

const LoginContext = createContext([initialState, {}, () => {}])

const AuthProvider = ({children}: PropChildren) => {
    const [state, dispatch] = useReducer(AuthReducer, {...initialState})
    const LoginActions = useMemo(() => ({
        signIn: async (token: string) => {
            if(token) {
                AsyncStorage.setItem('token', token);
                dispatch({type: SIGN_IN, payload: {token} })
                console.log(token)
            }
        },
        signOut: async () => {
            AsyncStorage.removeItem('token');
            dispatch({type: LOGOUT})
        },
        persistLogin: async () => {
            let token = null;
            try {
                AsyncStorage.getItem('token');
            } catch(e) {
                console.log(e);
            }
            dispatch({type: PERSIST_TOKEN, payload: {token}})
        }
    }), []);
    return(
        <LoginContext.Provider value={[state, LoginActions, dispatch]}>{children}</LoginContext.Provider>
    )
}

export {AuthProvider, LoginContext};