import React from 'react';
import './Reservation.css';

const Reservation = () => {
  return (
    <>
        
    <main>
    <form class="row g-3 mx-auto shadow rounded-2">
      <h2>Book a table</h2>
    <div class="col-md-12">
    <label for="branches" class="form-label">RESTAURANT BRANCH</label>
    <select id="branches" class="form-select">
      <option selected>-Select-</option>
      <option>Ramboufe Akala Branch</option>
      <option>Ramboufe Bodija Branch</option>
      <option>Ramboufe Ringroad Branch</option>

    </select>
  </div>

    <div class="col-md-6">
        <label for="inputPassword4" class="form-label">DATE*</label>
        <input type="date" class="form-control" id="inputPassword4" />
    </div>
    <div class="col-md-6">
        <label for="inputPassword4" class="form-label">TIME*</label>
        <input type="time" class="form-control" id="inputPassword4" />
    </div>

  <div class="col-12">
    <label for="inputAddress2" class="form-label">PEOPLE*</label>
    <input type="number" class="form-control" id="inputAddress2" placeholder="Specify the amount" />
  </div>
  
  {/* <div class="col-md-4">
    <label for="inputState" class="form-label">PEOPLE</label>
    <select id="inputState" class="form-select">
      <option selected>-Select-</option>
      <option>2 Persons</option>
      <option>4 Persons</option>
      <option>6 Persons</option>
      <option>8 Persons</option>
      <option>10 Persons</option>
      <option>8 Persons</option>
    </select>
  </div> */}
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Book</button>
  </div>
</form>
    </main>
        
    </>
  )
}

export default Reservation;