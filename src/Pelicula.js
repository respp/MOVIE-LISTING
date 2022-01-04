import React from 'react'

export default function Pelicula(props) {
    return (
        <div className="movie-item-style-2">
            <img src={props.imagen} alt="" />
            <div className="mv-item-infor">
                <h6><a href="moviesingle.html">{props.titulo}</a></h6>
                <p className="rate"><i className="ion-android-star"></i>{props.calificacion}</p>
                <p className="describe">{props.descripcion}</p>
                <p className="run-time">{props.fecha}   {props.edad}   {props.duracion}</p>
                <p>Director: {props.director}</p>
                <p>Stars: {props.actores}</p>
            </div>
        </div>
    )
}
