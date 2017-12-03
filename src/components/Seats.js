import React from 'react'
import '../styles/seats.css'

var api_url = 'http://localhost:5000/movie_details/';

class Seats extends React.Component {
  constructor() {
    super();
      this.state = {
      seat: [
        'A_1', 'A_2', 'A_3', 'A_4', 'A_5',
        'B_1', 'B_2', 'B_3', 'B_4', 'B_5',
        'C_1', 'C_2', 'C_3', 'C_4', 'C_5',
        'D_1', 'D_2', 'D_3', 'D_4', 'D_5',
      ],
      seatAvailable: [
        'A_1', 'A_2', 'A_3', 'A_4', 'A_5',
        'B_1', 'B_2', 'B_3', 'B_4', 'B_5',
        'C_1', 'C_2', 'C_3', 'C_4', 'C_5',
        'D_1', 'D_2', 'D_3', 'D_4', 'D_5',
      ],
      seatReserved: [],
      seatReservedAPI: [],
      details: []
    }
  }

  componentDidMount() {
    this.getMovieDetails().then(result => this.setState({
      details: result.seats
    })).then(data => this.prepareSeats())
  }
  getMovieDetails() {
    var url_string = window.location.href
    var url = new URL(url_string);
    var param = url.searchParams.get("movie_id");
    return fetch(api_url+param).then((resp) => resp.json())
  }


  onClickData(seat) {
    if(this.state.seatReserved.indexOf(seat) > -1 ) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res != seat)
      })
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res != seat)
      })
    }
  }

  prepareSeats() {
    let seats = this.state.details;
    console.log(seats);
    for(var i=0; i<seats.length; i++){
      var index = this.state.seatAvailable.indexOf(seats[i]);
      if (index > -1) {
        this.setState({
          seatAvailable: this.state.seatAvailable.filter(res => res != seats[i])
        })
      };
      index = this.state.seatReservedAPI.indexOf(seats[i]);
      if (index == -1){
        this.setState({
          seatReserved: this.state.seatReserved.concat(seats[i]),
          seatReservedAPI: this.state.seatReservedAPI.concat(seats[i])
        })
      };
    };
  }

  render() {
    let seats = this.state.details;
    return (
      <div class='centered'>
        <h1>EKRAN</h1>
        <DrawGrid
          seat = { this.state.seat }
          available = { this.state.seatAvailable }
          reserved = { this.state.seatReserved }
          reservedAPI = {this.state.seatReservedAPI}
          onClickData = { this.onClickData.bind(this) }
          />
        <button class='seatsButton' onClick={
            () => this.props.history.push(
              '/reservation/?seats='+ this.state.seatReserved.filter(
                x => this.state.seatReservedAPI.indexOf(x) < 0
              )
            )
          }>
             Confirm
        </button>
      </div>
    )
  }
}

class DrawGrid extends React.Component {
  render() {
    return (
       <div className="container">
        <h2></h2>
        <table className="grid">
          <tbody>
              <tr>
                { this.props.seat.map( row =>
                  <td
                    className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                    key={row} onClick = {
                      this.props.reservedAPI.indexOf(row) > -1? e => alert('This seat is taken!') : e => this.onClickSeat(row)
                    }
                    >{row} </td>) }
              </tr>
          </tbody>
        </table>
       </div>
    )
  }

  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}

export default Seats
