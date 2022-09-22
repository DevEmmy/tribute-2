import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: ${({margin})=> margin || "20px"} auto;
    background-color: white;
    padding: ${({padding})=> padding};
`

export const Text = styled.div`
    color:${({color})=> color || "#bb6d14"};
    font-size: ${({fontSize})=> fontSize};
    font-weight: ${({weight})=> weight};
    text-align: ${({align})=> align};
    padding: ${({padding})=> padding};
    background: ${({bg})=> bg };
    font-family: ${({family})=> family || "lora"};

    span{
        font-weight: 600;
    }
`

export const Banner = styled.div`
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    img.tribute{
        width: 100%;
        max-height: 500px;
        object-fit: cover;
    }
`

export const TributeContainer = styled.div`
    /* border-radius: 18px;
    background-color:#ebdd17;
    color: white; */
`

export const Card = styled.div`
    width: 90%;
    box-sizing: border-box;
    min-height: 200px;
    border-radius: 10px;
    background-color: ${({bg})=> bg|| "#bb6d14"};
    color: white;
    padding: 10px;
    margin: 0 auto;
    display: grid;
    align-items: center;
    justify-content: center;
    
`

export const DIContainer = styled.div`
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0);
    z-index: 10000000000000;
    display: flex;
    align-items: center;
    
    img{
        width: 100%;
        max-height: 100vh;
        object-fit: cover;
    }
`

export const Icon = styled.div`
    /* display: flex; */
    position: fixed;
    width: 100%;
    background-color: #bb6d14;
    top: 0px;
    left: 0px;
    z-index: 10000000000000;
    padding: 10px 20px;
`

export const NavBarContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000000000000;
`