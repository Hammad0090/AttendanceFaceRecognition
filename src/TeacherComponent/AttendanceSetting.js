import React from "react";

function AttendanceSetting() {
  return (
    <div>
      <h3>Attendance Setting</h3>
      <br></br>
      <form className="row gy-2 gx-3 align-items-center">
        <div className="col-auto">
          <label>Mark Attendance With in </label>
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlfor="autoSizingSelect">
            Preference
          </label>
          <select className="form-select" id="autoSizingSelect">
            <option selected>10</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="1">4</option>
            <option value="2">5</option>
            <option value="3">6</option>
            <option value="1">7</option>
            <option value="2">8</option>
            <option value="3">9</option>
            <option value="3">10</option>
          </select>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-danger">
            cancel
          </button>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Done
          </button>
        </div>
      </form>
      <br></br>
      <br></br>
      <h3>Attendance Slot Setting</h3>
      <form className="row gy-2 gx-3 align-items-center">
        <div className="col-auto">
          <label>Slot No</label>
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlfor="autoSizingSelect">
            Preference
          </label>
          <select className="form-select" id="autoSizingSelect">
            <option selected>1</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="1">4</option>
            <option value="2">5</option>
            <option value="3">6</option>
            <option value="1">7</option>
            <option value="2">8</option>
            <option value="3">9</option>
            <option value="3">10</option>
          </select>
        </div>
        <div class="col-auto">
          <button type="submit" className="btn btn-danger">
            cancel
          </button>
        </div>
        <div class="col-auto">
          <button type="submit" className="btn btn-primary">
            Done
          </button>
        </div>
      </form>
      <br></br>

      <form className="row gy-2 gx-3 align-items-center">
        <div className="col-auto">
          <label>Start Time</label>
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlfor="autoSizingSelect">
            Preference
          </label>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="8:30AM"
            />
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-danger">
            cancel
          </button>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Done
          </button>
        </div>
      </form>
      <br></br>

      <form className="row gy-2 gx-3 align-items-center">
        <div className="col-auto">
          <label>End Time</label>
        </div>
        <div className="col-auto">
          <label className="visually-hidden" htmlfor="autoSizingSelect">
            Preference
          </label>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="10:00AM"
            />
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-danger">
            cancel
          </button>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Done
          </button>
        </div>
      </form>
    </div>
  );
}

export default AttendanceSetting;
