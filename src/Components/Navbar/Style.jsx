import styled from "styled-components";
import px2vw from "../../Utilities/px2vw";

export const NavbarDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: #17191f;
    

    ul {
        display: flex;
        gap: 1rem;
        font-size: 1.2rem;
    }

    h2 {
        font-size: 2rem;
    }
    
    .new-btn{
        font-weight: bold;
        border: 1px solid #fff;
        padding: .5rem 1rem;
        border-radius: 1rem;
        opacity: 1;
    }
`

