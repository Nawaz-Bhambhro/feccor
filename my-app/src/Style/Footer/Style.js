import styled from "styled-components";

export const FooterContainer = styled.footer`
    max-width: 1170px;
    width: 100%;
    padding: 80px 0px 0px 0px;
    margin: 0 auto;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 50px;
   
`;

export const Left = styled.div`
    max-width: 400px;
    width: 100%;
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    span{
        opacity: .7;
    }

    
`;

export const IconWrapper = styled.div`  
    display: flex;
    align-items: center;
    gap: 5px;
   svg{
    width: 28px;
    color: #0e2b5c;
    opacity: .7;
    transition: 0.3s ease all;
    &:hover{
        color: red;
        cursor: pointer;
    }
   }
`;



export const Right = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const Box = styled.div`
      max-width: 196px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    p{
        color: #0e2b5c;
        margin-bottom: 10px;
        font-size: 15px !important;
        transition: 0.3s ease all;
        &:hover{
            color: red;
            cursor: pointer;
        }
    }
    ul{
        li{
            color: #0e2b5c;
            font-size: 14px;
            margin-bottom: 10px;
            opacity: .7;
        }
    }
`;

export const CopyRightWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 30px 0px;
    justify-content: center;

    border-top: 1px solid rgba(0, 0, 0, 0.08);
    span{
        font-size: 15px;
        color: #627792;
    }
`;
