import React, { Component } from 'react';
import ListaDeNotas from "./components/ListaDeNotas"
import FormularioCadastro from "./components/FormularioCadastro"
import ListaDeCategorias from "./components/ListaDeCategorias"

import './assets/App.css';
import './assets/index.css';
import Categorias from './data/Categorias';
import ArrayDeNotas from './data/ArrayDeNotas';

export default class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro 
          categorias={this.categorias}
          criarNota={this.notas.adicionaNota.bind(this.notas)} />

        <main className='conteudo-principal'>
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionaCategoria.bind(this.categorias)}
            categorias={this.categorias}/>
          <ListaDeNotas
           apagarNota={this.notas.apagarNota.bind(this.notas)}
           notas={this.notas} />
        </main>
      </section>
    );
  }
}
