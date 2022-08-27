import React, { useContext } from "react";
import { userContext } from "../provider/contex";

export const UseGithub = () => {
    const { getUser, githubState, getRepositorys, error } = useContext(userContext)
    return{ 
        error,
        getUser,
        githubState,
        getRepositorys
    }    
}
