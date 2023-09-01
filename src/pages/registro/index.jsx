import React, {useState, useEffect} from 'react';
import CaixaFilme from '../../components/caixaf.jsx';
import styled from 'styled-components';
import api from '../../services/api';
import { Link } from 'react-router-dom';

const Container = styled.div`
max-width: auto;
margin: 0px;
text-align: center;
color: #faf7f7;
border-color: #eeeaeb;
padding: 0px;
border: 0px;
background-color: #38161b;

`;

const ListMovie = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: #7f8083;
justify-content: center;
height: auto;
padding: 16px 16px 16px 32px;

`;

const Imagem = styled.img`
width: 100%;
height: 450px;
`;

const Input = styled.input`
  width: 700px;
  height: 32px;
  margin: 8px;
  border-radius: 5px;
`;

const Botao = styled.button`
  width: 100px;
  height: 25px;
  background-color: #6d2f39;
  color: #fff;
  border-radius: 8px;
  box-shadow: none;
  margin: 8px;
  cursor: pointer;
`;


function Registro() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const endereco = '/movies';

    const params = {};
    if (search) {

      params.title_like = search

      api.get('/movies?_embed=movies', {params})
      .then( (response) => 
      {setMovies(response.data)
      })

    } else {

      api.get(endereco)
      .then((response) => {
      setMovies(response.data)
    }) 
  }

  },[search])



  return (

  <Container>
    <h1>Filmes e Séries</h1>
    <Imagem src="./img/marvel.jpg" alt="" />
    <Input type="search" placeholder='Buscar Filme - Digite o nome' value={search} onChange={(ev) => setSearch(ev.target.value)}></Input>
    <Link to={`/administrar/cadastrar`}><Botao>Cadastrar</Botao></Link>
    <ListMovie>
    {
      movies.map(movie => {
        return (<CaixaFilme
          key= {movie.url}
          movies={movie}
          />)
      })
    }
    
    </ListMovie>


  </Container> 
    
  )
}
  export default Registro

