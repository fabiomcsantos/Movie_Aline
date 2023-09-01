import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import api from '../services/api';


const Box = styled.div`
width:auto;
height: auto;
background-color: #c9c9c9;
margin: 5px 5px 5px 5px;
display: flex;
align-items: center;
justify-content: center;
padding: 8px;
`;

const ImagemBox = styled.img`
width: 90px;
height: 140px;
margin: 5px;
`;

const Button = styled.button`
 width: 100px;
 height: 25px;
 background-color:#6d2f39;
 color: #fff;
 border-radius: 8px;
 box-shadow: none;
 margin: 16px;
 cursor: pointer;
 text-decoration: none;
`
const Sinopse = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 900px;
height: 120px;
background-color: #c9c9c9;
text-align: justify;
padding: 8px;
`;

const Titulo = styled.div`
background-color: red;
`

const Botao = styled.div`
    padding-left: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
`;



export default function CaixaFilme ({movies}){
    const [loading, setLoading] = useState(true);

    function onDelete(id) {
        setLoading(false);

        const endereco = `/movies/${id}`;
        api.delete(endereco)
            .then ( (response) => {});
    }

    return (
        <>
            {!loading
                ? (
                    <div>Deletado...</div>
                )
                :
                (
                    <Box>
                        <ImagemBox src={movies.image} alt="" />
                        <Sinopse>{movies.title}<br/><br/>{movies.sinopse}
                            <Botao>
                                <Link to={`/editar/${movies.id}`}><Button> editar</Button></Link>
                                <Button onClick={ () => onDelete(movies.id)}>excluir</Button>
                            </Botao>
                        </Sinopse>
                    </Box>
                )
            }
        </>
    )

}