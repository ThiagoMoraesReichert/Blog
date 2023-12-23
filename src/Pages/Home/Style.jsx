import styled from "styled-components";
import px2vw from "../../Utilities/px2vw";

export const Container = styled.div`
    max-width: 100%;
    margin: 2rem auto;
    padding: 0 2rem;

    h1{
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 1.5rem;
    }

    .post{
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #777;
    }

    .post h2,
    .post p{
        margin-bottom: 1rem;
    }

    .post h2::first-letter{
        text-transform: uppercase;
    }

    .btn{
        background-color: white;
        width: fit-content;
        color: #0e1217;
        border: 1px solid #fff;
        padding: .5rem 1rem;
        opacity: 1;
        border-radius: 1rem;
        text-align: center;
        cursor: pointer;
        transform: .3s;
    }

    .btn:hover{
        color: white;
        background-color: #0e1217;
    }
`