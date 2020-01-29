import React from 'react';
import { withRouter } from 'react-router-dom';
import './SearchBar.scss';

class SearchBar extends React.Component {
  state = { term: '', fireRedirect: false };

  onInputChange = event => {
    this.setState({term: event.target.value});
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
              <svg className="search__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </button>
          </form>
        </div>

    );
  }
}

export default withRouter(SearchBar);