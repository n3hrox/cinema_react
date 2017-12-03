import React from 'react'


function getMovieDetails() {
  var url_string = window.location.href
  var url = new URL(url_string);
  var param = url.searchParams.get("seats");
  return param
}


const Reservation = () => (
  <div class="form-style-6">
  <h1>Please fill your contact data</h1>
  <form action='/'>
  <input type="text" id="seatInput" name="seats" value={getMovieDetails()} readonly/>
  <input type="text" name="field1" placeholder="Your Name" required/>
  <input type="email" name="field2" placeholder="Email Address" required/>
  <input type="text" name="field3" placeholder="Phone number" required/>
  <input type="submit" value="Send" />
  </form>
  </div>
)

export default Reservation
