import React from 'react';

const GetNumber = ({
  onSubmit,
  onChange,
  number,
  dateString,
  dayIncreament,
  dayDecreament,
  month,
  day,
}) => (
  <div className="wrapper">
    <div className="title">This day in history</div>
    <div className="container-card">
      <div className="card-title">
        <form onSubmit={onSubmit}>
          <label htmlFor="date" className="date-label">
            Date: (MM/DD)
          </label>
          <input
            type="text"
            name="dateInput"
            id="dateInput"
            value={dateString}
            onChange={onChange}
          />
          <button type="submit" id="submit" className="custom-btn">
            OK
          </button>
        </form>
      </div>
      <div className="card-body">
        <div className="card-message">{number}</div>
        <div className="counter-display">
          <div
            role="button"
            tabIndex="0"
            className="counter-outer-top"
            onClick={dayIncreament}
          >
            <i className="fa fa-sort-up" />
          </div>
          <div className="counter">
            <span className="dateDisplay" id="monthDisplay">
              {month}
            </span>

            <span className="dateDisplay" id="dayDisplay">
              {day}
            </span>
          </div>
          <div
            role="button"
            tabIndex="0"
            className="counter-outer-bottom"
            onClick={dayDecreament}
          >
            <i className="fa fa-sort-down" />
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  </div>
);

export default GetNumber;
