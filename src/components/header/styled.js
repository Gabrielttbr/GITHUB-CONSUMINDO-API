import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, var(--AssistantsOne), var( --AssistantsaTwo)) ;
`
export const ChildContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 55vh;
    width: 40vw;
    background-color: var(--TertiaryCor) ; 
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    color: #fff;
    padding: 10px;

    @media screen and (max-width: 768px){
        width: 70vw;
    }
    @media screen and (max-width: 407px){
        width: 90vw;
    }
`

export const FormGithubUser = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    h1{
        text-align: center ;
    }
    input {
        padding: 10px;
        border-radius: 5px;
        border: none;
        background-color: #fff;
        width: 80%;
        margin: 20px;
        font-size: 18px;
    }
    button{
        width: 60%;
        padding: 10px;
        border-radius: 30px;
        border: none;
        background: #fff;
        color: #757575;
        font-weight: 700;
        font-size: 16px ;
    }
}
`
