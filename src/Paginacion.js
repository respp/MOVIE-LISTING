import React from 'react'

export default function Paginacion(props) {

    let getPaginas=()=>{
        let resultado=[];
        for (let i=0; i<props.total; i++){
            let pagina=i+1;
            resultado.push(
            <a onClick={() => props.onChange(pagina)} 
            className={props.pagina === (pagina) ? "active" : ''}>
                {(pagina)}
            </a>//dentro de jsx {} para entrar a codigo js puro
            );
        }
        return resultado;
    }

    return (

            <div className="topbar-filter">
                        <div className="pagination2">
                            <span>Pagina {props.pagina} de {props.total}:</span>

                            {getPaginas()};{//dentro de jsx {} para entrar a codigo js puro
}
                            <a href="#">2</a>
                            <a href="#"><i className="ion-arrow-right-b"></i></a>
                        </div>
            </div>
                    
    )
}
