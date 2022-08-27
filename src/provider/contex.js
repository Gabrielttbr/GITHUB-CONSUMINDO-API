import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const userContext = createContext({
    loading: undefined,
    user: {},
    repositorys: {}
});

export const ContextProvider = (props) => {
    const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      avatar: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
    })
    const [error, setError] = useState({
        true: false,
        typeErro: undefined
    })
    const getUser = (username) => {
    api.get(`users/`+username)
        .then((data) => {
            if(data.status === 200){
                setGithubState({
                    ...githubState,
                    hasUser: true,
                    user: {
                        id: data.data.id,
                        avatar: data.data.avatar_url,
                        login: data.data.login,
                        name: data.data.name,
                        html_url: data.data.html_url,
                        blog: data.data.blog,
                        company: data.data.company,
                        location: data.data.location,
                        followers: data.data.followers,
                        following: data.data.following,
                        public_gists: data.data.public_gists,
                        public_repos: data.data.public_repos,
                    }
                })
            }
        })
        .catch((erro) => {
            setError({
                true: true,
                typeErro: erro.response.status
            })
    
        })
    }
    const getRepositorys =  (username) =>{
        api.get(`users/${username}/repos`)
        .then( ({data}) => {
            setGithubState((prevState) => ({
                ...prevState,
                repositories: data,
              }));
          }).catch((erro ) =>  {setError({
            true: true,
            typeErro: erro.response.status
        })})
    }
    // UseCallback return function memorization
    const ContextValue = {
        error,
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getRepositorys: useCallback((username) => getRepositorys(username), [])
    }


    return(
        <userContext.Provider value={ContextValue}>
            {props.children}
        </userContext.Provider>
    )
}
