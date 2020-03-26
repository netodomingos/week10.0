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

    h1{
        font-size: 20px;
        text-align: center;
        display: block;
        color: #333;
    }
`

export const List = styled.main`
    flex: 1;
    margin-left: 30px;

`

export const Ul = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    list-style: none;
`

