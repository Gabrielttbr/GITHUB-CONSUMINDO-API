import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    h1{
        text-align: center ;
    }
    img{
        width: 20vw;
        border-radius: 50%;
    }
    @media screen and (max-width: 763px){
        img{
            width: 40vw;
        }
    }
    @media screen and (max-width: 400px){
        img{
            width: 70vw;
        }
        h1{
            font-size: 25px;
        }   
    }

`
export const ContainerAllData = styled.div`
    display: flex;
    div{
        margin: 10px;
        text-align:center;

        span{
            font-weight: bold;
        }
    }
    
`

export const ContainerData =  styled.div`

`
export const ContainerAdditionalData = styled.div`
    

`