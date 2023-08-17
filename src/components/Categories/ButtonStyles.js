import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    width: 100%;
    flex-wrap: wrap;
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
    justify-content: center;
    flex-wrap: wrap;
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
            box-shadow: 2px 2px 32px 23px rgba(0,0,0,0.78);
            -webkit-box-shadow: 2px 2px 32px 23px rgba(0,0,0,0.78);
            -moz-box-shadow: 2px 2px 32px 23px rgba(0,0,0,0.78);
        }
        .favorite{
            color: black;
        }
       :hover .favorite{
            color: #ffd60a;
        }
`
export const Button = styled.button`
    padding: 20px;
`