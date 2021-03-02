import React from 'react'
import './App.css'
import { Search } from './components/search-box/search-box.component'
import { CardList } from './components/card-list/card-list.components'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()),
    )
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <Search value={searchField} handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
