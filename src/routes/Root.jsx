import React from "react";
import { 
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Filme from "../pages/filmes/filme.jsx";
import Cadastrar from "../pages/Cadastrar/cadastro.jsx";
import NotFound from "../pages/notfound/not.jsx";
import Registro from "../pages/registro/index";
import Editar from '../pages/Editar/editar.jsx';


const Root = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <Filme/> } />
                <Route path="/administrar/cadastrar" element={ <Cadastrar/> } />
                <Route path="/registro" element={ <Registro/> } />
                <Route path="/editar/:id" element={ <Editar/> } />
                 <Route path="*" element={ <NotFound/> } />
            </Routes>
        </Router>
    );
}

export default Root;