import React from 'react'
import {withRouter} from 'react-router-dom';


var url = 'http://localhost:5000/movies';

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
  this.getMovies().then(result => this.setState({
    data: result
  }))
  }
  getMovies() {
    return fetch(url).then((resp) => resp.json())
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
        { props.data.name }
      </td>
    </tr>
    <button class='seatsButton' onClick={() => props.history.push('/seats/?movie_id=' + props.data.id) }>
      Select
    </button>
  </div>

  );
}

export default withRouter(Movies)
