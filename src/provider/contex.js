import React, { createContext, useState } from "react";
import api from "../services/api";

export const userContext = createContext({
    loading: undefined,
    user: {},
    repositorys: {}
});

export const getUser = (username) => {
    api.get(`users/`+username)
        .then((data) => console.log(JSON.stringify(data)))
        .catch((erro) => console.log(erro))
}


export const ContextProvider = (props) => {
    const [context, setContext ] = useState()
    return(
        <userContext.Provider value={{context, setContext}}>
            {props.children}
        </userContext.Provider>
    )
}
