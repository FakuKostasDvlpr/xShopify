import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    max-width: 324px;
    margin-bottom: 30px;
    border-radius: 24px;
    color: black;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    background-color: #edede9;
    flex-wrap: wrap;
    && p{
        font-family: 'Rajdhani', sans-serif;
    }
`
export const ContainerIcon = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    align-items: flex-end;
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
   && img{
    max-width: 100%;
    max-height: 100%;
    object-fit: cover
    }
`
export const TextContainer = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: bold;
    margin-top: 50px;
    text-align: center;
    && h2{
    font-size: 32px;
    font-family: 'Handjet', cursive;
    }
`

export const ContainerCaracts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    margin: auto;
    padding: 10px;
    border-radius: 10px;
    flex-wrap: wrap;
    && p{
    color: white;
    font-weight: 500;
    }
`
export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #5e8e3e;
    padding: 6px;
    border-radius: 40px;
    gap: 10px;


`
export const ContainerFavorite = styled.div`
    border-radius: 10px;
    border: 3px dashed rgb(94, 142, 62);
    padding: 10px;
    cursor: pointer;
    
    && :hover{
        color: #ffd500;
    }
`

export const ContainerPrice = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const PriceContainer = styled.div`
/* flexbox */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 30px;
    padding: 10px;
    /* BG */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    && p{
        color: green;
        font-size: 20px;
    }
`