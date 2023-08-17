import styled from "styled-components"

export const ContHeader = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: black;
    padding: 40px;
    text-align: center;
    flex-wrap: wrap;
    border-bottom: 4px solid #5e8e3e;
`

export const AddContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    && .AddButton{
        cursor: pointer;
        color: #95BF47;
        align-items: center;
        justify-content: center;
    }
`