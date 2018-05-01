import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {term: '',
                  location: '',
                  sortBy: 'best_match'};
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);


    this.sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
    }
  }

  renderSortByOptions(){
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li key = {sortByOptionValue} className = {this.getSortByClass(sortByOption)}
    onClick = {this.handleSortByChange.bind(this.sortByOptionValue)}> {sortByOption} </li>);
    });
  }

  handleSortByChange(sortByOption){
    this.setState({sortBy: this.sortByOption});
  }
  handleTermChange(event){
    this.setState({term: event.target.value});
  }
  handleLocationChange(event){
    this.setState({location: event.target.value});
  }

handleSearch(event){
  this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy)
    event.preventDefault();
}
getSortByClass(sortByOption){
    if (this.state.sortBy === this.sortByOption){return 'active';}
    else {return 'Poop';}
  }



  render(){
return(
<div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
    <input placeholder="Where?" onChange = {this.handleLocationChange}/>
  </div>
  <div className="SearchBar-submit">
    <a onClick={this.handleSearch}>Lets Go</a>
  </div>
</div>
);
  }
}
export default SearchBar;
