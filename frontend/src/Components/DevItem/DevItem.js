import React from 'react';

import { DevItem, UserInfo } from './styles';

export default function Components({ dev }) {
  return (
    <DevItem>
        <header>
            <img
                src={dev.avatar_url} alt={dev.name}
            />
            <UserInfo>
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
            </UserInfo>
        </header>
        <hr/>
        <p>{dev.bio}</p>
        <a href={`https://github.com/${dev.github_username}`}>
            Acessar Perfil no Github
        </a>
    </DevItem>
  );
}
