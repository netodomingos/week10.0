import React, { useState, useEffect } from 'react';

import api from '../Services/api'

import DevItem from '../Components/DevItem/DevItem'
import DevForm from '../Components/DevForm/DevForm'

import { 
    Container,
    Aside,
    List,
    Form,
    InputGroup,
    Ul,
} from './styles';

export default function Pages() {
    const [ devs, setDevs ] = useState([])


    useEffect(() => {
        async function loadDevs(){
            const response = await api.get('/devs')

            setDevs(response.data)
        }

        loadDevs()
    }, [])

    const handleCreateDev = async (data) => {

        const response = await api.post('/devs', data)

        setDevs([ ...devs, response.data])
    }

  return (
    <Container>
        <Aside>
            <h1>Cadastrar</h1>
            <DevForm onSubmit={handleCreateDev} />
        </Aside>

        <List>
            <Ul>
                {
                    devs.map(dev => (
                       <DevItem key={dev._id} dev={dev}/>
                    ))
                }
            </Ul>
        </List>
    </Container>
  );
}
