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
    transition: all .2s ease-in-out;
    border-radius: 20px;
    border: 4px dashed #95BF47;
        &&:hover{
            color: #ccff33;
            box-shadow: -1px 2px 5px 21px rgba(50,50,50,0.47);
            -webkit-box-shadow: -1px 2px 5px 21px rgba(50,50,50,0.47);
            -moz-box-shadow: -1px 2px 5px 21px rgba(50,50,50,0.47);
        }
`
export const Button = styled.button`
    padding: 20px;
`