import styled from "styled-components"

export const ContHeader = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: black;
    padding: 40px;
    text-align: center;
    flex-wrap: wrap;
    border-bottom: 4px solid #95BF47;
`

export const AddContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 50px;
    height: 50px;
    padding: 12px;
    align-items: center;
    justify-content: center;
    .button{
        padding: 3px;
    }
    && .AddButton{
        cursor: pointer;
        color: #95BF47;
        align-items: center;
        justify-content: center;
    }
`

export const Button = styled.button`
    padding: 3px;
`