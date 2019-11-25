import React, { Component } from 'react';
import Note from './Note';




class App extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      notes: []
    }
  }
  componentDidMount() {
    this.setState({ notes: ["test note"] });
  }

  submit(e) {
    const { notes, text } = this.state;
    notes.push({ text });
    this.setState({ notes });
    e.preventDefault()
  }

  clear() {
    this.setState({ notes: [] });
  }

  render() {
    return (
      <div>
        <h2>Note to Self</h2>
        <form>
          <input onChange={event => this.setState({ text: event.target.value })} />
          <button onClick={(e) => this.submit(e)}>Submit</button>
        </form>
        {
          this.state.notes.map((note, index) => {
            return (
              <Note key={index} note={note} />
            )
          })
        }
        <hr />
        <button onClick={() => this.clear()}>Clear Notes</button>
      </div>
    )
  }
}

export default App;