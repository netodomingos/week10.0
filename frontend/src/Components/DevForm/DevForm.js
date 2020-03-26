import React, { useState, useEffect } from 'react';

import { Form, InputGroup } from './styles'

export default function DevForm({ onSubmit }) {
    const [ github_username, setGithubUsername ] = useState('')
    const [ techs, setTechs ] = useState('')
    const [ latitude, setLatitude ] = useState('')
    const [ longitude, setLongitude ] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords

                setLatitude(latitude)
                setLongitude(longitude)

            },
            (err) => {
                console.log(err)
            },
            {
                timeout: 30000
            }
        )
    }, [latitude, longitude])

    async function handleSubmit(e){
        e.preventDefault()

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        })

        setGithubUsername('')
        setTechs('')

    }
    
  return (
    <Form onSubmit={handleSubmit}>
            <label>Usuário do Github</label>
            <input
                value={github_username}
                onChange={text => setGithubUsername(text.target.value)}
            />
                <label>Tecnologias</label>
                <input
                    value={techs}
                    onChange={text => setTechs(text.target.value)}
                />
            <InputGroup>
                <div>
                    <label>Latitude</label>
                    <input
                         value={latitude}
                        onChange={text => setLatitude(text.target.value)}
                    />
                </div>

                <div>
                    <label>Longitude</label>
                    <input
                        value={longitude}
                        onChange={text => setLongitude(text.target.value)}
                    />
                </div>
            </InputGroup>
        <button>
            Criar Usuário
        </button>
    </Form>
  );
}
