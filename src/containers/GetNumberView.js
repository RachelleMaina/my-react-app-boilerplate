import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNumber } from '../store/actions';
import GetNumber from '../components/GetNumber';

export class GetNumberView extends Component {
  state = {
    month: '01',
    day: '01',
    dateString: '01/01',
  };

  componentDidMount() {
    const { getNumber } = this.props;
    const { month, day } = this.state;
    getNumber({ month, day });
  }

  dateInputValidation = (month, day) => {
    const { getNumber } = this.props;
    if (month < 13 && month > 0 && day > 0) {
      if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (day < 30) {
          this.setState({ month, day });
          getNumber({ month, day });
        }
      } else if (month === 2) {
        if (day < 29) {
          this.setState({ month, day });
          getNumber({ month, day });
        }
      } else if (day < 31) {
        this.setState({ month, day });
        getNumber({ month, day });
      }
    }
  };

  dayIncreamentValidation = (dayNumber, monthNumber) => {
    const { getNumber } = this.props;
    if (
      monthNumber === 4
      || monthNumber === 6
      || monthNumber === 9
      || monthNumber === 11
    ) {
      if (dayNumber < 30) {
        dayNumber += 1;
      }
    } else if (monthNumber === 2) {
      if (dayNumber < 29) {
        dayNumber += 1;
      }
    } else if (dayNumber < 31) {
      dayNumber += 1;
    }
    const dayString = dayNumber.toString();
    const dayPadded = dayString.padStart(2, '0');
    this.setState({ day: dayPadded }, () => {
      const { month, day } = this.state;
      getNumber({ month, day });
    });
  };

  dayDecreament = () => {
    const { day } = this.state;
    const { getNumber } = this.props;
    let dayNumber = parseInt(day, 10);

    if (dayNumber !== 1) {
      dayNumber -= 1;
      const dayString = dayNumber.toString();
      const dayPadded = dayString.padStart(2, '0');
      this.setState({ day: dayPadded }, () => {
        const { month, day } = this.state;
        getNumber({ month, day });
      });
    }
  };

  dayIncreament = () => {
    const { month, day } = this.state;
    const dayNumber = parseInt(day, 10);
    const monthNumber = parseInt(month, 10);
    this.dayIncreamentValidation(dayNumber, monthNumber);
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { dateString } = this.state;
    if (dateString) {
      const dateArray = dateString.split('/', 2);
      const month = dateArray[0].substring(0, 2).padStart(2, '0');
      const day = dateArray[1].substring(0, 2).padStart(2, '0');
      this.dateInputValidation(month, day);
    }
  };

  onChange = (e) => {
    const dateString = e.target.value;
    this.setState({ dateString });
  };

  render() {
    const { dateString, month, day } = this.state;
    const { number, errorMessage } = this.props;
    let displayMessage;
    if (number.getNumber.data.length > 0) {
      displayMessage = number.getNumber.data;
    } else {
      displayMessage = errorMessage.getNumber.errorMessage;
    }

    return (
      <GetNumber
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        number={displayMessage}
        dateString={dateString}
        dayIncreament={this.dayIncreament}
        dayDecreament={this.dayDecreament}
        month={month}
        day={day}
      />
    );
  }
}
export const mapStateToProps = (state) => ({
  number: state,
  errorMessage: state,
});

export const mapDispatchToProps = {
  getNumber,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GetNumberView);
