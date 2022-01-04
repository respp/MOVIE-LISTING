
import { Fragment, useState } from 'react';
import './App.css';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import Pelicula from './Pelicula';
import allPeliculas from './peliculasOriginal.json'


function App() {
  let [paginaActual, setPaginaActual] = useState(1);
  let peliculas=[
    {
      titulo:<>oblivion<span>(2012)</span></>,
      calificacion:<><span>8.1</span>/10</>,
      descripcion:"Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...",
      fecha:'Release: 1 May 2015’  ',
      edad:'MMPA: PG-13',
      duracion:'Run Time: 2h21’',
      director:<><a href='#'>Joss Whedon</a></>,
      actores:<><a href="#">Robert Downey Jr</a><a href="#">., Chris Evans</a>  <a href="#">, Chris Hemsworth</a></>,
      imagen:"images/uploads/mv1.jpg"
    },
    {
      titulo:<>into the wild<span>(2014)</span></>,
      calificacion:<><span>7.8</span>/10</>,
      descripcion:"As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...",
      fecha:'Release: 1 May 2015’  ',
      edad:'MMPA: PG-13',
      duracion:'Run Time: 2h21’',
      director: <><a href='#'>Anthony Russo</a>, <a href='#'>Joe Russo</a> </>,
      actores:<><a href="#">Chris Evans,</a><a href="#">.Samuel L. Jackson,</a>  <a href="#">Scarlett Johansson</a></>,
      imagen:"images/uploads/mv2.jpg"
    },
    {
      titulo:<>blade runner<span>(2015)</span></>,
      calificacion:<><span>7.3</span>/10</>,
      descripcion:"Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help...",
      fecha:'Release: 1 May 2015’  ',
      edad:'MMPA: PG-13',
      duracion:'Run Time: 2h21’',
      director:<><a href='#'>Peyton Reed</a></>,
      actores:<><a href="#">Paul Rudd,</a><a href="#">Michael Douglas</a></>,
      imagen:"images/uploads/mv3.jpg"
    },
    {
      titulo:<>Mulholland <span>(2013)</span></>,
      calificacion:<><span>7.2</span>/10</>,
      descripcion:"When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
      fecha:'Release: 1 May 2015’  ',
      edad:'MMPA: PG-13',
      duracion:'Run Time: 2h21’',
      director:<><a href='#'>Shane Black</a></>,
      actores:<><a href="#">Robert Downey Jr</a><a href="#">., Guy Pearce,</a>  <a href="#">, Don Cheadle</a></>,
      imagen:"images/uploads/mv4.jpg"
    },
    {
      titulo:<>skyfall: evil of boss<span>(2013)</span></>,
      calificacion:<><span>7.0</span>/10</>,
      descripcion:"When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
      fecha:'Release: 1 May 2015’  ',
      edad:'MMPA: PG-13',
      duracion:'Run Time: 2h21’',
      director:<><a href='#'>Alan Taylor</a></>,
      actores:<><a href="#">Chris Hemsworth,  </a><a href="#">, Natalie Portman,</a>  <a href="#"> Tom Hiddleston</a></>,
      imagen:"images/uploads/mv5.jpg"
    }
    
  ]
        /*
        peliculas.slice(0,5)
        peliculas.slice(5,10)
        peliculas.slice(10,15)
        */

let cargarPeliculas=()=>{
    peliculas=peliculas.slice((paginaActual-1)*5,paginaActual*5);
    if(!peliculas) { alert("No hay contenido")}
  }

// let buscarPeliculas=async()=>{
//   let url='https://cors-anywhere.heroku.app.com/https://lucasmoy.dev/data/react/peliculas.json';

//   let respuesta =await fetch(url, {
//     "method" : 'GET',
//     "headers" : {
//       "Accept" : 'application/json',
//       "Content-Type" : 'application/json',
//       "origin" : 'https://lucasmoy.dev/data/react/peliculas.json'
//     }
//   });
//   let json = await respuesta.json();
//   debugger;
// }  
// buscarPeliculas();
cargarPeliculas();



  return (
    <Fragment>
    
    <PageWrapper>
      {peliculas.map(pelicula => //si no ponemos llaves en la funcion de flecha no es necesario especificar el return
        <Pelicula
          titulo={pelicula.titulo}
          calificacion={pelicula.calificacion}
          descripcion={pelicula.descripcion}
          fecha={pelicula.fecha}
          edad={pelicula.edad}
          duracion={pelicula.duracion}
          director={pelicula.director}
          actores={pelicula.actores}
          imagen={pelicula.imagen} />
      )}
      <Paginacion pagina= {paginaActual}  total={4} onChange= {(pagina) =>

      setPaginaActual(pagina)
      } />
    </PageWrapper>
    
    
    </Fragment>
    
  );
}

export default App;