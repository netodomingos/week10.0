import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const Aside = styled.aside`
    width: 320px;
    background-color: #FFF;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
    border-radius: 2px;
    padding: 30px 20px;
`

export const List = styled.main`
    flex: 1;
    margin-left: 30px;

`

export const Title = styled.strong`
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
`

export const Form = styled.form`
    margin-top: 30px;
`

export const Label = styled.label`
    color: #ACACAC;
    font-size: 14px;
    font-weight: bold;
    display: block;
    margin-top: 20px;
`

export const Input = styled.input`
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #666;
    border: 0;
    border-bottom: 1px solid #eee;
`

export const InputGroup = styled.div`
    margin-top: 10px;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
`

export const InputBlock = styled.div`

`

export const SubmitButton = styled.button`
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
`

export const Ul = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    list-style: none;
`

export const DevItem = styled.div`
    background-color: #FFF;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
    border-radius: 2px;
    padding: 20px;

    header{
        display: flex;
        flex-direction: row;
        align-items: center;

        img{
            width: 54px;
            height: 54px;
            border-radius: 50%;
        }
    }

    hr{
        background-color: #eee;
        margin: 10px 0;
        border: 1px solid #eee;;
    }

    p{
        color: #666;
        font-size: 14px;
        line-height: 20px;
        margin: 10px 0;
        
    }

    a{
        color: #8e4dff;
        font-size: 14px;
        text-decoration: none;


        &:hover{
            color: #5A26A6;
        }
    }

    
`

export const UserInfo = styled.div`
    margin-left: 10px;

    strong{
        display: block;
        font-size: 16px;
        color: #333
    }

    span{
        font-size: 13px;
        color: #999;
        margin-top: 2px;
    }

`

