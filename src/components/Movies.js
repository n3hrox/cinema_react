import React from 'react'
import {withRouter} from 'react-router-dom';


class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [{
        id: 1,
        name: "Simon Bailey"
      }, {
        id: 2,
        name: "Thomas Burleson"
      }, {
        id: 3,
        name: "Will Button"
      }, {
        id: 4,
        name: "Ben Clinkinbeard"
      }, {
        id: 5,
        name: "Kent Dodds"
      }, {
        id: 6,
        name: "Trevor Ewen"
      }, {
        id: 7,
        name: "Aaron Frost"
      }, {
        id: 8,
        name: "Joel Hooks"
      }, {
        id: 9,
        name: "Jafar Husain"
      }, {
        id: 10,
        name: "Tim Kindberg"
      }, {
        id: 11,
        name: "John Lindquist"
      }, {
        id: 12,
        name: "Joe Maddalone"
      }, {
        id: 13,
        name: "Tyler McGinnis"
      }, {
        id: 14,
        name: "Scott Moss"
      }, {
        id: 15,
        name: "Robert Penner"
      }, {
        id: 16,
        name: "Keith Peters"
      }, {
        id: 17,
        name: "Lukas Ruebbelke"
      }, {
        id: 18,
        name: "Brett Shollenberger"
      }]
    }
  }
  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    let rows = this.state.data.map(person => {
      return <PersonRow key = {
        person.id
      }
      data = {
        person
      }
      history = {
        this.props.history
      }
      />
    })
    return <table >
      < tbody > {
        rows
      }
      < /tbody> < /table>
  }
}

const PersonRow = (props) => {
  return (
  <div>
    <tr>
      <td>
        { props.data.id }
      </td>
      <td>
        { props.data.name }
      </td>
    </tr>
    <button onClick={() => props.history.push('/seats') }>
      Select
    </button>
    </div>

  );
}

export default withRouter(Movies)
