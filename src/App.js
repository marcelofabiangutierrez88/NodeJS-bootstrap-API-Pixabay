import React,{Component} from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado.js';

class App extends Component {

  state= {
    termino : '',
    imagenes : [],
    pagina:''
  }

  scroll = ()=>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = ()=>{
      //leer el state de la pagina actual. 
      let pagina = this.state.pagina ;

      //si la pagina es 1 ya no ir para atras

      if (pagina ===1) return null;
      //resta uno a la pagina actual.
      pagina -=1;
      //agregar el cambio al state
      this.setState({
        pagina
      },()=>{
        this.consultarApi(); 
        this.scroll();
      });
      //   console.log(pagina);
  }

  paginaSiguiente =() =>{
    //leer el state de la pagina actual. 
    let pagina = this.state.pagina ;
    //sumar uno a la pagina actual.
    pagina ++;
    //agregar el cambio al state
    this.setState({
      pagina
    },()=>{
      this.consultarApi();
      this.scroll();
    });
   // console.log(pagina);
  }


  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `http://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page=30&page=${pagina}`;
    //console.log(url);

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes: resultado.hits}))


  }

  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 1
    }, ()=>{
      this.consultarApi();
    })
  }


 render() {
  return (
  
      <div className ="app container">
        <div className ="jumbotron">
        <p className ="lead text-center">Buscador de Imagenes utilizando la API de Pixabay creado en REACT JS.</p>
        <Buscador
          datosBusqueda={this.datosBusqueda} 
          />
        </div>
        <div className ="row justify-content-center">
          <Resultado
          imagenes={this.state.imagenes}
          paginaAnterior={this.paginaAnterior}
          paginaSiguiente={this.paginaSiguiente}
          />  
        </div>
        
        <p className ="lead text-center">Diseñado por Marcelo Gutierrez 2019</p>
    </div>
   
  );
}
}

export default App;
