import React, { useState } from 'react';

import Modal from './modal';

class Card extends React.Component {
  state = { isModalOpen: false };

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
    console.log('!!!!!!!!handleModalClose');
  };

  handleClick = () => {
    this.setState({ isModalOpen: true });
    setTimeout(() => this.handleModalClose(), 10000);
  };

  render() {
    const { text } = this.props;
    return (
      <div
        role="textbox"
        tabIndex={0}
        className="card"
        title={text}
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
      >
        <div className="card_text">
          {text}
        </div>
        {this.state.isModalOpen && <Modal closeModal={this.handleModalClose} />}
      </div>
    );
  }
}

export default Card;


// const Card = (props) => {
//   const { text } = props;
//   const [isModalOpen, setModalOpen] = useState(false);

//   const handleModalClose = () => {
//     console.log('!!!!!!!!handleModalClose');
//     setModalOpen(false);
//   };

//   const handleClick = () => {
//     setModalOpen(true);
//     setTimeout(() => handleModalClose(), 10000);
//   };

//   return (
//     <div
//       role="textbox"
//       tabIndex={0}
//       className="card"
//       title={text}
//       onClick={handleClick}
//       onKeyDown={handleClick}
//     >
//       <div className="card_text">
//         {text}
//       </div>
//       {isModalOpen && <Modal closeModal={handleModalClose} />}
//     </div>
//   );
// };
