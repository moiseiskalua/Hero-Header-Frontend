import styled from "styled-components";

export const Container = styled.button`
    width: 130px;
    height: 42px;
    border: 1px solid #17A4D0;
    color: #17A4D0;
    font-size: 14px;
    margin-left: 25px;
    border-radius: 5px;
    box-shadow: 0 0 17px -8px transparent;
    transition: all 0.25s ease-out;

    &:hover{
        color: #fff;
        background-color: #17A4D0;
        box-shadow: 0 0 17px -5px #17A4D0;
    }
`