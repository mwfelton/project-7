import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
  Redirect,
    Route,
    Switch
} from 'react-router-dom';
import axios from 'axios';
import './App.css';

//Components
import apiKey from '../src/Config';
import PhotoContainer from './components/PhotoContainer.js'
import Nav from './components/Nav.js'
import SearchForm from './components/SearchForm.js'
import PageNotFound from "./components/PageNotFound";

class App extends Component {
  state = {
    photos: [],
    hibiscus: [],
    roses: [],
    tulips: [],
    isLoading: true
  };

  componentDidMount() {
    const links = ['tulips', 'hibiscus', 'roses'];
    links.map((link) => this.performSearch(link, true))
  }

  performSearch = (query, isLink = false) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=%22${query}%22&per_page=24&format=json&nojsoncallback=1`
        )
        .then((response) => {
          if (isLink) {
            this.setState({
              [query]: response.data.photos.photo
            });
          } else {
            this.setState({
              photos: response.data.photos.photo
            });
          }
          this.setState({ isLoading: false });
        })
        .catch((error) => {
          console.error("Error fetching and parsing data", error);
        });

        this.setState({ isLoading : true });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Nav />

          {this.state.isloading ? (
            <p>Loading images...</p>
          ) : (
          <Switch>

            <Route exact path="/" component={() => <Redirect to="/tulips" />}/>

            <Route 
              path="/tulips"
              children={<PhotoContainer data={this.state.tulips} />}
            />
            <Route 
              path="/hibiscus"
              children={<PhotoContainer data={this.state.hibiscus} />}
            />
            <Route 
              path="/roses"
              children={<PhotoContainer data={this.state.roses} />}
            />
            <Route 
              path="/search/:query"
              children={({ match }) => (
                <PhotoContainer
                  data={this.state.photos}
                  query={match.params.query}
                  onSearch={this.performSearch}
                  />
              )}
            />

            <Route component={PageNotFound} />
          </Switch>
          )}
        </div>
      </Router>
    )
  }
}

export default App;

//   componentDidMount() {
//     this.performSearch();
//   }
  
//   performSearch = (query = 'flower') =>{
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

//   nav1 = () => { 
//     axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=%22tulips%22&per_page=24&format=json&nojsoncallback=1`)
//         .then(response => {
//           this.setState({
//             nav1: response.data.photos.photo
//           })
//         })
//         .catch( error => {
//           console.log('error fetching and parsing for nav1')
//         })
//   }

//   render() {
//     console.log(this.state.photos)
//     return (
//       <BrowserRouter>
//         <div className="container">
//           {/* <SearchForm onSearch={this.performSearch}/>
//           <Nav /> */}
//           {/* <PhotoContainer data={this.state.photos}/> */}

//           <Switch>
          
//             <Route path="/">
//               <SearchForm onSearch={this.performSearch}/>
//               <Nav />
//               <PhotoContainer data={this.state.photos}/>
//             </Route>

//             <Route path={`/search/:search`} render={ () => <SearchForm onSearch={this.performSearch}/> }/>


           


//           {/* <Route path={`/flowers/:button`} render={ () => <PhotoContainer data={this.state.nav1}/> }/>
//           <Route path={`/search/:search`} render={ () => <PhotoContainer data={this.state.nav1}/> }/>
//  */}

//             {/* <Route path="/:buttonName" component={PhotoContainer} /> */}

//             <Route component={NotFound}/>
//           </Switch>

//         </div>
//       </BrowserRouter>
//     )
//   }
// }


