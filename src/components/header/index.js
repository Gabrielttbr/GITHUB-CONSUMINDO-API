import React, {useState} from "react";
import * as S from './styled'
import { getUser } from "../../provider/contex";

const Header = () => {
    const [value, setValue] = useState()
    const handleSubmit = (e) =>{
        getUser(value)
        e.preventDefault();
        e.stopPropagation();
    }
    return (
        <S.Container>
            <S.ChildContainer>
                <S.FormGithubUser onSubmit={handleSubmit}>
                    <h1>Search github user</h1>
                    <input  type="text" required placeholder="Enter the username" onChange={(e) => setValue(e.target.value) }></input>
                    <button type="sumbit">Submit</button>
                </S.FormGithubUser>
            </S.ChildContainer>
        </S.Container>
    )
}
export default Header;