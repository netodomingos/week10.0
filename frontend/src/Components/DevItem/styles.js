import styled from 'styled-components';

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

