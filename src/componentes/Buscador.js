import React, {Component} from 'react';

class Buscador extends Component {
    busquedaRef = React.createRef();
    obtenerDatos = (e) =>{
        e.preventDefault();
        //tomamos el valor del imput
        const termino = this.busquedaRef.current.value;
        //lo enviamos al componente principal
        this.props.datosBusqueda(termino);
    }
  render(){
      return (
         
          <form onSubmit={this.obtenerDatos}>
               <div className="container">
              <div className ="row">
                  <div className ="form-group col-sm-8">
                       <input ref={this.busquedaRef} type="text" className ="form-control form-control-lg " 
                       placeholder ="Busca tu Imagen ejemplo Futbol..."/>
                   </div>
               <div className ="form-group col-md-4">
                       <input type="submit" className ="btn btn-lg btn-danger btn-block " value="Buscar" />
                       </div>

                   </div>
                   </div>

          </form>
      );
    }
}
export default Buscador;