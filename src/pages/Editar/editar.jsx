import React, {useEffect, useState} from "react";
import api from '../../services/api';
import { useNavigate, useParams } from "react-router-dom";
import styles from './styles.module.css';


const initialValue = {
    title: '',
    image: '',
    sinopse: '',
    url: '',
};


function Editar (){

    const [values, setValues] = useState(initialValue);

    const navigate = useNavigate();

    const {id} = useParams();

    const endereco = `/movies/${id}`;

    useEffect( () =>{ 
        if (id){
            api.get(endereco)
                .then( (response) => {
                    setValues(response.data)
                })
        }
    },[])
    
    function onSubmit(evento){
        evento.preventDefault(); // não executa o comportamento default do formulário (o recarregar a página)

        api.put(endereco, values)
            .then ( () =>{
                navigate('/registro');
            })
    }


    function onChange(ev){
        const {name, value} = ev.target
        // console.log({name, value});

        setValues({... values,[name]:value})
    }

    return(
        <div className={styles.conteudo}>
        <h1>Editar</h1>
        <form className={styles.Form} onSubmit={onSubmit}>
            <div className={styles.movieForm}>
                <label htmlFor="title">Titulo</label>
                <input type="text" id="title" name="title" value={values.title} onChange={onChange} />
            </div>
            <div className={styles.movieForm}>
                <label htmlFor="url">Url do Filme</label>
                <input type="text" id="url" name="url" value={values.url} onChange={onChange} />
            </div>
            <div className={styles.movieForm}>
                <label htmlFor="image">Url/Imagem</label>
                <input type="text" id="image" name="image" value={values.image} onChange={onChange} />
            </div>
            <div className={styles.movieForm}>
                <label htmlFor="sinopse">Sinopse</label>
                <input type="text" id="sinopse" name="sinopse" value={values.sinopse} onChange={onChange} />
            </div>
            <button className={styles.Botao} type="submit">Salvar</button>
        </form>
        </div>
        
    )
}

export default Editar;