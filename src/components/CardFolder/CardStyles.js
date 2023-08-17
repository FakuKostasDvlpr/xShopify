import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    max-width: 390px;
    margin-bottom: 50px;
    border-radius: 24px;
    color: black;
    margin-top: 50px;
    background-color: #edede9;
    flex-wrap: wrap;
    && p{
        font-family: 'Rajdhani', sans-serif;
    }
`
export const EditContainer = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 20px;
    align-items: center;
    justify-content: center;
    gap: 200px;
    padding: 10px;
    .EditButton{
        cursor: pointer;
        color: #95BF47;
    }
    
    .FavoriteButton{
        cursor: pointer;
        color: #95BF47;
    }

`
export const EditIconContainer = styled.div`
    display: flex;
    border: 4px solid #95BF47;
    border-radius: 14px;
    justify-content: flex-end;
    padding: 5px;
    align-items: end;
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
   && img{
    width: 100%;
    max-width: 260px;
    max-height: 100%;
    object-fit: cover
    }
`
export const TextContainer = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: bold;
    justify-content: center;
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
export const AddToCart = styled.div`
    display: flex;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 30px;
    /* eliminar espacio de hover, evitar errores */
    
`

export const ContainerAddCart = styled.div`
    display: flex;
    cursor: pointer;
    padding: 20px;
    border-radius: 14px;
    transition: all .2s ease-in-out;
    &&:hover{
        -webkit-box-shadow: 1px 2px 37px 13px rgba(149,191,71,1);
        -moz-box-shadow: 1px 2px 37px 13px rgba(149,191,71,1);
        box-shadow: 1px 2px 37px 13px rgba(149,191,71,1);
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