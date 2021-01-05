import React from 'react';

import './Result.css'

const Result = (props) => {
     const {err, name, date, language, note, genres, image,summary} = props.data
     // const type = genres.map(item => <p>{item}</p>)
     const result = (
          <div className="result">
               <div className="image-info">
                    <div className="image"><img src={image} alt={name}/></div>
                    <div className="info">
                         <div className="name">Nazwa: <span>{name}</span></div>
                         <div className="genres">Gatunek: <span>{genres.join(' ')}</span></div>
                         <div className="note">Ocena: <span>{note}</span></div>
                         <div className="premiere-date">Data premiery: <span>{date}</span></div>
                         <div className="language">Język: <span>{language}</span></div>
                    </div>
               </div>
               <div className="description">
                    <span>OPIS:</span>
                    <div className="summary" dangerouslySetInnerHTML={{ __html: summary }} ></div>
               </div>
            </div>
     )
     return ( 
          <div className = "result-panel">
               {err
               ? <div className="err">{(err && props.data.value) && `Nie znaleziono wyszukiwania dla: ${props.data.value}`}</div>
               : name && result 
               } 
          </div>
      );
}
 
export default Result;