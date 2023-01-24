// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// class WalletForm extends Component {
//   render() {
//     const { currencies } = this.props;
//     return (
//       <div>
//         <input
//           data-testid="value-input"
//           placeholder="Despesa"
//         />
//         <input
//           data-testid="description-input"
//           placeholder="Descrição"
//         />
//         <div>
//           <select data-testid="currency-input">
//             {
//               currencies.map((item, index) => (
//                 <option key={ index } value={ currencies }>{currencies}</option>
//               ))

//             }

//           </select>
//         </div>
//         <input
//           data-testid="value-input"
//           placeholder="Digite sua Despesa"

//         />
//         <input
//           data-testid="value-input"
//           placeholder="Digite sua Despesa"
//         />
//       </div>
//     );
//   }
// }

// WalletForm.propTypes = {
//   currencies: PropTypes.arrayOf.isRequired,

// };

// const mapStateToProps = (state) => ({
//   wallet: state.wallet,
// });

// export default connect(mapStateToProps)(WalletForm);
