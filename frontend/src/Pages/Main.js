import React from 'react';

import { 
    Container,
    Aside,
    List,
    Title,
    Form,
    Label,
    Input,
    InputGroup,
    InputBlock,
    SubmitButton,
    Ul,
    DevItem,
    UserInfo
} from './styles';

export default function Pages() {
  return (
    <Container>
        <Aside>
            <Title>Cadastrar</Title>
            <Form>
                <Label>Usuário do Github</Label>
                <Input
                    name='github_username'
                    required
                    
                />

                <Label>Tecnologias</Label>
                <Input
                    name='techs'
                    required
                    
                />

                <InputGroup>
                    <InputBlock>
                        <Label>Latitude</Label>
                        <Input
                            name='techs'
                            required
                        />
                    </InputBlock>

                    <InputBlock>
                        <Label>Longitude</Label>
                        <Input
                            name='techs'
                            required
                        />
                    </InputBlock>
                </InputGroup>
            </Form>

            <SubmitButton>
                Criar Usuário
            </SubmitButton>
        </Aside>
        <List>
            <Ul>
                <DevItem>
                    <header>
                        <img
                            src='https://avatars0.githubusercontent.com/u/49910898?s=460&u=a8c0048c6136be345c135cc098b37378c6c9b33f&v=4' alt='eu'
                        />
                        <UserInfo>
                            <strong>Neto Domingos</strong>
                            <span>ReactJs, React Native, JavaScript.</span>
                        </UserInfo>
                    </header>
                    <hr/>
                    <p>
                    Filho de músicos, mas com o coração de desenvolvedor. 💘 JavaScript Lover ⚡
                    </p>
                    <a href='https://github.com/netodomingos'>
                        Acessar Perfil no Github
                    </a>
                </DevItem>

                <DevItem>
                    <header>
                        <img
                            src='https://avatars0.githubusercontent.com/u/49910898?s=460&u=a8c0048c6136be345c135cc098b37378c6c9b33f&v=4' alt='eu'
                        />
                        <UserInfo>
                            <strong>Neto Domingos</strong>
                            <span>ReactJs, React Native, JavaScript.</span>
                        </UserInfo>
                    </header>
                    <hr/>
                    <p>
                    Filho de músicos, mas com o coração de desenvolvedor. 💘 JavaScript Lover ⚡
                    </p>
                    <a href='https://github.com/netodomingos'>
                        Acessar Perfil no Github
                    </a>
                </DevItem>

                <DevItem>
                    <header>
                        <img
                            src='https://avatars0.githubusercontent.com/u/49910898?s=460&u=a8c0048c6136be345c135cc098b37378c6c9b33f&v=4' alt='eu'
                        />
                        <UserInfo>
                            <strong>Neto Domingos</strong>
                            <span>ReactJs, React Native, JavaScript.</span>
                        </UserInfo>
                    </header>
                    <hr/>
                    <p>
                    Filho de músicos, mas com o coração de desenvolvedor. 💘 JavaScript Lover ⚡
                    </p>
                    <a href='https://github.com/netodomingos'>
                        Acessar Perfil no Github
                    </a>
                </DevItem>

                <DevItem>
                    <header>
                        <img
                            src='https://avatars0.githubusercontent.com/u/49910898?s=460&u=a8c0048c6136be345c135cc098b37378c6c9b33f&v=4' alt='eu'
                        />
                        <UserInfo>
                            <strong>Neto Domingos</strong>
                            <span>ReactJs, React Native, JavaScript.</span>
                        </UserInfo>
                    </header>
                    <hr/>
                    <p>
                    Filho de músicos, mas com o coração de desenvolvedor. 💘 JavaScript Lover ⚡
                    </p>
                    <a href='https://github.com/netodomingos'>
                        Acessar Perfil no Github
                    </a>
                </DevItem>
            </Ul>
        </List>
    </Container>
  );
}
