import React, { Component } from 'react';
import axios from 'axios';
import { 
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import apiKey from '../src/Config';
import './App.css';

import PhotoContainer from './components/PhotoContainer.js'
import Nav from './components/Nav.js'
import SearchForm from './components/SearchForm.js'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    photos: [],
    nav1: []
    // nav2: [],
    // nav3: []
  }

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = 'flower') =>{
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=%22${query}%22&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            photos: response.data.photos.photo
          })
        })
        .catch( error => {
          console.log('error fetching and parsing')
        })
  }

  nav1 = () => { 
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=%22tulips%22&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            nav1: response.data.photos.photo
          })
        })
        .catch( error => {
          console.log('error fetching and parsing for nav1')
        })
  }

  render() {
    console.log(this.state.photos)
    return (
      <BrowserRouter>
        <div className="container">
          {/* <SearchForm onSearch={this.performSearch}/>
          <Nav /> */}
          {/* <PhotoContainer data={this.state.photos}/> */}

          <Switch>
          
            <Route path="/">
              <SearchForm onSearch={this.performSearch}/>
              <Nav />
              <PhotoContainer data={this.state.photos}/>
            </Route>

            <Route path={`/search/:search`} render={ () => <SearchForm onSearch={this.performSearch}/> }/>


           


          {/* <Route path={`/flowers/:button`} render={ () => <PhotoContainer data={this.state.nav1}/> }/>
          <Route path={`/search/:search`} render={ () => <PhotoContainer data={this.state.nav1}/> }/>
 */}

            {/* <Route path="/:buttonName" component={PhotoContainer} /> */}

            <Route component={NotFound}/>
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;

// class App extends Component {
//   state = {
//     photos: []
//   }

//   componentDidMount() {
//     this.performSearch();
//   }

//   performSearch = (query) =>{
//     axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=%22${query}%22&per_page=24&format=json&nojsoncallback=1`)
//         .then(response => {
//           this.setState({
//             photos: response.data.photos.photo
//           })
//         })
//         .catch( error => {
//           console.log('error fetching and parsing')
//         })
//   }

//   render() {
//     console.log(this.state.photos)
//     return (
//       <div className="container">

//         <SearchForm onSearch={this.performSearch}/>
//         <Nav />
//         <PhotoContainer data={this.state.photos} />

//       </div>
//     )
//   }
// }

// export default App;

