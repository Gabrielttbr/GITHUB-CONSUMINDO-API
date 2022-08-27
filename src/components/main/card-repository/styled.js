import styled from "styled-components";

export const Container = styled.section`
    display: flex ;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding: 15px;
    margin: 10px;
    height: 20vh ;
    text-align: center;
    background-color: var(--TertiaryCor);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    width: 25vw;
    @media screen and (max-width: 600px){
        width: 40vw;
    }
    @media screen and (max-width: 500px){
        width: 70vw;
    }
    h1{
        font-size: 20px;
        color:  #fff ;
        margin: 3px ;
    }
    p{
        margin: 3px;
        color: #fff;
    }
    a{
        margin: 3px ;
        color: #fff ;
    }
`