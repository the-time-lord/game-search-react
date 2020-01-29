import React from 'react';
import { withRouter } from 'react-router-dom';
import './SearchBar.scss';
import { ReactComponent as MagnifyingLense }  from '../img/search.svg';

class SearchBar extends React.Component {
  state = { term: '', fireRedirect: false };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
    this.props.history.push('/search-results');
  }

  render() {
    const { term } = this.state;

    return (
        <div className="search-box">
          <form className="search-box" onSubmit={this.onFormSubmit}>
            <input 
              className="search__input"
              placeholder="Search games"
              type="text"
              value={term}
              onChange={this.onInputChange}
            />
            <button>
              <MagnifyingLense className="search__icon" />
            </button>
          </form>
        </div>

    );
  }
}

export default withRouter(SearchBar);