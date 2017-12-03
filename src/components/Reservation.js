import React from 'react'

const Reservation = () => (
  <div>
  <form action="handle_data" method="post">
      <input type="text" name="projectFilepath"/>
      <input type="submit" value="Submit"/>
  </form>
  </div>
)

export default Reservation
