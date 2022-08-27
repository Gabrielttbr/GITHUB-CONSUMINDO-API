import React, {useState, useEffect} from "react";
import * as S from './styled'
import { UseGithub } from "../../hooks/hooks";
import NotFound from "./notFound";

const Header = () => {
    const { getUser, getRepositorys, githubState } = UseGithub();
    const [value, setValue] = useState();
    const [checkUser, setCheckUser ] = useState();
    const handleSubmit = async (e) =>{  
        e.preventDefault();
        e.stopPropagation();
        await getUser(value)
        await getRepositorys(value)
        await setCheckUser(true)
    }

    return (
        <S.Container>
            <S.ChildContainer>
                <S.FormGithubUser onSubmit={handleSubmit}>
                    <h1>Search github user</h1>
                    <input  type="text" required placeholder="Enter the username" onChange={(e) => setValue(e.target.value) }></input>
                    <button type="sumbit">Submit</button>

                </S.FormGithubUser>
                {checkUser === true? <NotFound IsCheck={checkUser}/>: null}
                
            </S.ChildContainer>
        </S.Container>
    )
}
export default Header;