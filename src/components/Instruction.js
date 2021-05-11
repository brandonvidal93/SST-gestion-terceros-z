import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './Instruction.scss';

library.add(fas, fab, far);

class Instruction extends Component {
  showInstruction = () => {
    const { dataPage } = this.props;

    // console.log(dataPage.type);
    switch (dataPage.type) {
      case 'img':
        return(
          <div className='instructionBox dF-R-cc' style={ {'top': dataPage.posY, 'left': dataPage.posX, 'width': dataPage.size} }>
            <div>
              <a href = { dataPage.link } target = '_blank' rel='noopener noreferrer'>
                <img alt = 'Imagen' className = 'mT-025 mB-025 mL-025 mR-1' src = { dataPage.imgURL }/>
              </a>
            </div>
            <div>
              <hr className = 'line-2 mB-05 c-2' />
              <h5 className = 'fw-7'><i dangerouslySetInnerHTML = {{ __html: dataPage.text }} /></h5>
            </div>
          </div>
        );
      case 'doc':
        return(
          <div className='instructionBox dF-R-cc' style={ {'top': dataPage.posY, 'left': dataPage.posX, 'width': dataPage.size} }>
            <div>
              <a href = { dataPage.link } target = '_blank' rel='noopener noreferrer'>
                <img alt = 'Imagen' className = 'c-7 mT-025 mB-025 mL-025 mR-1' src = { dataPage.imgURL }/>
              </a>
            </div>
            <div>
              <hr className = 'line-2 mB-05 c-2' />
              <h5 className = 'fw-7'><i dangerouslySetInnerHTML = {{ __html: dataPage.text }} /></h5>
            </div>
          </div>
        );
      case 'print':
        return (
          <div className='instructionBox dF-R-cc' style={ {'top': dataPage.posY, 'left': dataPage.posX, 'width': dataPage.size} }>
            <div>
              <a href = { dataPage.link } target = '_blank' rel='noopener noreferrer'>
                <span className = 'fa-layers icon mR-05' >
                  <FontAwesomeIcon icon="square" />
                  <FontAwesomeIcon icon="file-pdf" inverse transform="shrink-6" />
                </span>
              </a>
            </div>
            <div>
              <h5 className = 'fw-4'><i dangerouslySetInnerHTML = {{ __html: dataPage.text }} /></h5>
            </div>
          </div>
        );
      case 'link':
        return (
          <div className='instructionBox dF-R-cc' style={ {'top': dataPage.posY, 'left': dataPage.posX, 'width': dataPage.size} }>
            <div>
              <a href = { dataPage.link } target = '_blank' rel='noopener noreferrer' className = 'link-1'>
                <h5 className = 'fw-4 color-4' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
              </a>
            </div>
          </div>
        );
      default:
        return(
          <div className='instructionBox dF-R-cc' style={ {'top': dataPage.posY, 'left': dataPage.posX, 'width': dataPage.size} }>
            <div>
              <span className = 'fa-layers icon mR-05' >
                <FontAwesomeIcon icon="square" />
                <FontAwesomeIcon icon="info" inverse transform="shrink-6" />
              </span>
            </div>
            <div>
              <h5 className = 'fw-4'><i dangerouslySetInnerHTML = {{ __html: dataPage.text }} /></h5>
            </div>
          </div>
        );
    }
  }

  render() {
    // const { dataPage } = this.props;
    // console.log(dataPage);
    return (
      this.showInstruction()
    );
  }
}

export default Instruction;

// import React, { Component } from 'react';
// import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';
//
// // IMPORT FONT AWESOME LIBRARY
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
//
// import './Instruction.scss';
//
// library.add(fas, fab, far);
//
// class Instruction extends Component {
//   render() {
//     const { dataPage } = this.props;
//     // console.log(dataPage);
//     return (
//       <div className='instructionBox dF-R-cc' style={ {'top': dataPage.posY, 'left': dataPage.posX, 'width': dataPage.size} }>
//         <div>
//           {
//             switch (dataPage.type) {
//               case expression:
//
//                 break;
//               default:
//
//             }
//             dataPage.type !== 'print' ?
//              <span className = 'fa-layers icon mR-05' >
//               <FontAwesomeIcon icon="square" />
//               <FontAwesomeIcon icon="info" inverse transform="shrink-6" />
//             </span>:
//             <a href = { dataPage.link } target = '_blank' rel='noopener noreferrer'>
//               <span className = 'fa-layers icon mR-05' >
//                 <FontAwesomeIcon icon="square" />
//                 <FontAwesomeIcon icon="file-pdf" inverse transform="shrink-6" />
//               </span>
//             </a>
//           }
//         </div>
//         <div>
//           <h5 className = 'fw-4'><i>{ dataPage.text }</i></h5>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Instruction;
