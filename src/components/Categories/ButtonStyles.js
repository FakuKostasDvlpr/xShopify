import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 30px;
`

export const CategoryBoxs = styled.div`
    display: flex;
    align-items: center;
`

export const ButtonCat = styled.div`
    display: flex;
    gap: 50px;
    padding: 30px;
    
`
export const BoxButton = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s ease-in-out;
    border-radius: 20px;
    border: 4px dashed #95bf47;
        &&:hover{
            color: #95bf47;
            box-shadow: 2px 0px 5px 19px rgba(0,0,0,0.25) ;
            -webkit-box-shadow: 2px 0px 5px 19px rgba(0,0,0,0.25) ;
            -moz-box-shadow: 2px 0px 5px 19px rgba(0,0,0,0.25) ;
        }
`
export const Button = styled.button`
    padding: 20px;
`