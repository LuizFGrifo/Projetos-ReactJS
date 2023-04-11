import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AnimaisDash from "../animais_dash";
import AnimalPinguim from "../animais/pinguim/";
import AnimalOnca from "../animais/onca/";
import AnimalArara from "../animais/arara/";
import AnimalBaleia from "../animais/baleia/";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<AnimaisDash />} />
            <Route exact path="/penguim" element={<AnimalPinguim />} />
            <Route exact path="/onca" element={<AnimalOnca />} />
            <Route exact path="/arara" element={<AnimalArara />} />
            <Route exact path="/baleia" element={<AnimalBaleia />} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;