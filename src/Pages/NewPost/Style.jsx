import styled from "styled-components";

export const CreatePostContainer = styled.div`
    max-width: 100%;
    margin: 2rem auto;

    h2{
        text-align: center;
        margin-bottom: 1rem;
    }
    
    form{
        max-width: 34%;
        width: 100%;
        margin: 0 auto;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    div input,
    div textarea{
        padding: .5rem;
        border-radius: 5px;
        border: none;
        margin-bottom: 1rem;
    }

    label{
        margin-bottom: .5rem;
    }

    button{
        background-color: white;
        width: fit-content;
        color: #0e1217;
        border: 1px solid #fff;
        padding: .5rem 1rem;
        opacity: 1;
        border-radius: 1rem;
        text-align: center;
        cursor: pointer;
        transition: .3s;
    }

    button:hover{
        color: white;
        background-color: #0e1217;
    }
    
`

    