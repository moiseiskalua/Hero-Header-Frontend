import { createGlobalStyle } from "styled-components"
import Bkg1 from '../assets/background1.png'
import Bkg2 from '../assets/background2.png'

const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background: url(${Bkg1}) no-repeat 1010px, url(${Bkg2}) no-repeat 931px;
        background-size: cover;
        font-family: 'Poppins', sans-serif;
        background-color: #F8FDFF;
    }

    button {
        background-color: transparent;
        font-family: 'Poppins', sans-serif;
        border: none;
        outline: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        outline: none;
    }
`


export default globalStyle;