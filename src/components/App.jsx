import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import rawg from '../apis/rawg';
import SearchBar from './SearchBar';
import Header from './Header';
import Layout from './Layout';
import Footer from './Footer';
import Home from './Home';
import './App.scss'
import GameList from './GameList';
import GameDetail from './GameDetail';
import AchievementDetail from './AchievementDetail';

class App extends React.Component {
  state = { games: [] }

  onTermSubmit = async term => {
    const response = await rawg.get('/games', {
      params: { search: term }
    });

    this.setState({ 
      games: response.data.results
    });
  }

  render() {
    const { games } = this.state;

    return (
      <Router>
        <Layout>
          <Header>
            <SearchBar onFormSubmit={this.onTermSubmit} />
          </Header>
          <Switch>
            <Route 
              exact 
              path="/" 
              component={Home} 
            /> 
            <Route 
              exact 
              path="/search-results" 
              render={(props) => <GameList {...props} games={games} />} 
            />
            <Route 
              exact
              path="/games/:id" 
              component={GameDetail} 
            />
            <Route 
              path="/games/:id/achievements"
              component={AchievementDetail}
            />
          </Switch>
          <Footer />
        </Layout>
      </Router>
    );
  }
}

export default App;