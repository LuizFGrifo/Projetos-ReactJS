import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PaginaInicial from "../PaginaInicial";
import PaginaArara from "../PaginaArara";


const Rotas = () => ( 
    <BrowserRouter>
    <Switch>
    <Route exact path = '/' component = { PaginaInicial}/> 
    < Route path = '/pagina-arara' component = { PaginaArara} />

    </Switch>
    </BrowserRouter>
);

export default Rotas;