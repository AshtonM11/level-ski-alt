// import React, { Component } from "react";
// import { withRouter } from "react-router";
// import { connect } from "react-redux";
// import axios from "axios";

// class Practice extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       reviews: [],
//       star: 0,
//       rating: 5
//     };
//   }

//    ratings = {
//     hotel_a: 2.8,
//     hotel_b: 3.3,
//     hotel_c: 1.9,
//     hotel_d: 4.3,
//     hotel_e: 4.74 };

//   // total number of stars
//    starTotal = 5;

//   for (var rating in ratings) {
//     var starPercentage = ratings[rating] / starTotal * 100;
//     var starPercentageRounded = Math.round(starPercentage / 10) * 10 + "%";
//     document.querySelector("." + rating + " .stars-inner").style.width = starPercentageRounded;
//   }

//   render() {
//     return (
//     <table>
//   <thead>
//     <tr>
//       <th>Hotel</th>
//       <th>Rating</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr class="hotel_a">
//       <td>Hotel A</td>
//       <td>
//         <div class="stars-outer">
//           <div class="stars-inner"></div>
//         </div>
//       </td>
//     </tr>
//     <tr class="hotel_b">
//       <td>Hotel B</td>
//       <td>
//         <div class="stars-outer">
//           <div class="stars-inner"></div>
//         </div>
//       </td>
//     </tr>
//     <tr class="hotel_c">
//       <td>Hotel C</td>
//       <td>
//         <div class="stars-outer">
//           <div class="stars-inner"></div>
//         </div>
//       </td>
//     </tr>
//     <tr class="hotel_d">
//       <td>Hotel D</td>
//       <td>
//         <div class="stars-outer">
//           <div class="stars-inner"></div>
//         </div>
//       </td>
//     </tr>
//     <tr class="hotel_e">
//       <td>Hotel E</td>
//       <td>
//         <div class="stars-outer">
//           <div class="stars-inner"></div>
//         </div>
//       </td>
//     </tr>
//   </tbody>
// </table>

// <a class="attribution" href="http://fontawesome.io/"><i class="fa fa-font-awesome"></i> fontawesome.io</a>

//   );
//   }
// }
