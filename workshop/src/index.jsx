import '../assets/stylesheets/application.scss';

import ReactDOM from "react-dom";
import React from "react";
import App from './components/App';

const root = document.querySelector("#root");

// Funtional component
// rsc + tab
// const Hello = ({ name, flag }) => {
//   return (
//     <div>
//       <h1>Hello {name}! {flag}</h1>
//     </div>
//   );
// };

// Class component
// class Hello extends React.Component {
//   render() {
//     const { name, flag } = this.props;
//     return (
//       <div>
//         <h1>Hello {name} {flag}</h1>
//       </div>
//     )
//   }
// }

ReactDOM.render(<App />, root);
