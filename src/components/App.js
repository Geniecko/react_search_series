import React, {Component} from 'react';

import './App.css'

import Form from './Form'
import Result from './Result'

class App extends Component {
  state = { 
    value: '',
    name:'',
    date: '',
    language: '',
    note: '',
    genres: [],
    image: '',
    err: '',
    summary: null,
   }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  // handleFilmSubmit = (event) => {
  //   event.preventDefault()
  //   const API = `http://api.tvmaze.com/singlesearch/shows?q=${this.state.value}`

  //   fetch(API)
  //   .then(response => {
  //     if(response.ok) return response

  //     throw Error('Nie udało się')
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({
  //       err:false,
  //       date: data.premiered,
  //       name: data.name,
  //       language: data.language,
  //       note: data.rating.average,
  //       genres: data.genres,
  //       image: data.image.medium,
  //       summary: data.summary,
  //     })
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     this.setState({
  //       err:true,
  //     })
  //   })

    
  // }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.value !== this.state.value){
      const API = `http://api.tvmaze.com/singlesearch/shows?q=${this.state.value}`

    fetch(API)
    .then(response => {
      if(response.ok) return response

      throw Error('Nie udało się')
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        err:false,
        date: data.premiered,
        name: data.name,
        language: data.language,
        note: data.rating.average,
        genres: data.genres,
        image: data.image.medium,
        summary: data.summary,
      })
    })
    .catch(err => {
      console.log(err)
      this.setState({
        err:true,
      })
    })
    }
  }

  render() { 
    const {value} = this.state
    return ( 
      <>
        <Form 
          value = {value} 
          handleInputChange = {this.handleInputChange}
          // handleFilmSubmit = {this.handleFilmSubmit}
        />
        <Result data = {this.state}/>
      </>
     );
  }
}
 
export default App;

