import styled from 'styled-components';

export const Form = styled.form`
    margin-top: 30px;

    label {
        color: #ACACAC;
        font-size: 14px;
        font-weight: bold;
        display: block;
        margin-top: 20px;
    }

    input{
        width: 100%;
        height: 32px;
        font-size: 14px;
        color: #666;
        border: 0;
        border-bottom: 1px solid #eee;
    }

    button{
        width: 100%;
        border: 0;
        margin-top: 30px;
        background-color: #7D40E7;
        border-radius: 2px;
        padding: 15px 20px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
        transition: background 0.5s;

        &:hover{
            background: #6931CA;
        }
    }
`

export const InputGroup = styled.div`
    margin-top: 10px;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
`