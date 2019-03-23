import React, { Component } from 'react';
import SearchAppBar from './Components/Navigation.js';
// import SearchField from './Components/Searchfield.js';
import CardList from './Components/Cardlist.js';
import './App.css';
import 'tachyons';
// import {courses} from './Components/api.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      courses :[],
      searchField: ''
    }
  }

componentDidMount() {
  fetch('https://api.myjson.com/bins/1fq8pm')
  .then(response => response.json())
  .then(course => this.setState({courses: course}));
}

  onSearchChange = (event) => {
      this.setState({ searchField: event.target.value })
  }


  render() {
        const filteredCourses = this.state.courses.filter(courses =>{
        return courses.Provider.toLowerCase().includes(this.state.searchField.toLowerCase())
      })
        // const filteredCourses1 = this.state.courses.filter(courses =>{
        // return courses.CourseName.toLowerCase().includes(this.state.searchField.toLowerCase())
        // })
    return (
      <div>
         <SearchAppBar searchChange={this.onSearchChange}/>
         <div className = 'tc pt5'>
         <CardList courses={filteredCourses}/>
         </div>
      </div>
    );
  }
}

export default App;
