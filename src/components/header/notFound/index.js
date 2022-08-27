import { useState, useEffect } from "react";
import { UseGithub } from "../../../hooks/hooks";
import * as S from './styled'
const NotFound = ({IsCheck}) => {
    const { error} = UseGithub();

    if(IsCheck === true){
        if(error.true === true && error.typeErro === 404) {
            return <S.text>Not found user</S.text>
        }
        if(error.true === true && error.typeErro !== 404) {
            return <S.text>SERVER ERROR</S.text>
        }
    }
        
    
}
export default NotFound;