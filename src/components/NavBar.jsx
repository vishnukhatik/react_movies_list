// import React, { Component } from "react";


// stateless fuctional component

const NavBar = ({ totalCounters }) => {
    return (
        <header className=" container mt-4 d-flex align-items-center justify-content-between pb-3 mb-5 border-bottom">
          <span className="fs-4">Dashboard</span>
          {/* <div className="position-relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="currentColor"
              className="bi bi-minecart"
              viewBox="0 0 30 30"
            >
              <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7H1.102z" />
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              { totalCounters }
              <span className="visually-hidden">unread messages</span>
            </span>
            </div> */}
        </header>
      );
}

// class NavBar extends Component {
//   state = {};
//   render() {
//     return (
//       <header className=" container mt-4 d-flex align-items-center justify-content-between pb-3 mb-5 border-bottom">
//         <span className="fs-4">Mock data</span>
//         <div className="position-relative">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="30px"
//             height="30px"
//             fill="currentColor"
//             className="bi bi-minecart"
//             viewBox="0 0 30 30"
//           >
//             <path d="M4 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 1a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM.115 3.18A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 14 12H2a.5.5 0 0 1-.491-.408l-1.5-8a.5.5 0 0 1 .106-.411zm.987.82 1.313 7h11.17l1.313-7H1.102z" />
//           </svg>
//           <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//             { this.props.totalCounters }
//             <span className="visually-hidden">unread messages</span>
//           </span>
//           </div>
//       </header>
//     );
//   }
// }

export default NavBar;
