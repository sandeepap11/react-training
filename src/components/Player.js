import React, { Component } from "react";
/**
 * Shows Player details.
 *
 * @component
 * @example
 *
 * const firstName = "James"
 * const lastName = "Harden"
 * const age = 30
 * const team = "Houston Rockets"
 * return (
 *   <Player firstName={firstName} lastName={lastName} age={age} team={team}/>
 * )
 */

class Player extends Component {
  /**
   * return full name of the user
   * @param   {string} firstName  First Name of the User
   * @param   {string} lastName   Last Name of the User
   * @return  {string}            Full Name of the user
   */
  getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

  render() {
    const { firstName, lastName, age, team } = this.props;
    return (
      <>
        <div>Hello, my name is {this.getFullName(firstName, lastName)}.</div>
        <div>
          I'm {age} years old and I play for the {team}.
        </div>
      </>
    );
  }
}

export default Player;
