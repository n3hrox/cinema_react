import React from 'react'

var api_url = 'http://localhost:5000/reservation';

function getSeats() {
  var url_string = window.location.href
  var url = new URL(url_string);
  return url.searchParams.get("seats");
}

function getMovieId() {
  var url_string = window.location.href
  var url = new URL(url_string);
  return url.searchParams.get("movie_id");
}


const Reservation = () => (
  <div class="reservation-form">
  <h1>Please fill your contact data</h1>
  <form action={api_url} method='post'>
  <input type="hidden" name="movie_id" value={getMovieId()}/>
  <input type="text" id="seatInput" name="seats" value={getSeats()} readonly/>
  <input type="text" name="name" placeholder="Your Name" required/>
  <input type="email" name="email" placeholder="Email Address" required/>
  <input type="text" name="phone" placeholder="Phone number" required/>
  <input type="submit" value="Send" />
  </form>
  </div>
)

export default Reservation
