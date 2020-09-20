import React, { Component } from 'react';
import './App.css';
import ListaDeNotas  from "./components/listaDeNotas"
import FormularioCadastro from "./components/formularioCadastro"

export default class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}
