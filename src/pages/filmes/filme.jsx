import React, {useState, useEffect} from 'react';
import CaixaFilme from '../../components/caixafilme.jsx';
import styled from 'styled-components';
import api from '../../services/api';

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
background-color: #7f8083;
justify-content: center;
height: 650px;
padding: 0px;
border: 0px;

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




function Filme() {
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
  export default Filme
