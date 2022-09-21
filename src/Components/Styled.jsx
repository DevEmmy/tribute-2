import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: ${({margin})=> margin || "20px"} auto;
    background-color: white;
`

export const Text = styled.div`
    color:${({color})=> color || "#ebdd17"};
    font-size: ${({fontSize})=> fontSize};
    font-weight: ${({weight})=> weight};
    text-align: ${({align})=> align};
    padding: ${({padding})=> padding};
    background: ${({bg})=> bg };

    span{
        font-weight: 600;
    }
`

export const Banner = styled.div`
    img{
        width: 100%;
        height: 300px;
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
    background-color: ${({bg})=> bg|| "#ebdd17"};
    color: white;
    padding: 10px;
    margin: 0 auto;
    display: grid;
    align-items: center;
    justify-content: center;
    
`