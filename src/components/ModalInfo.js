import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './ModalInfo.scss';

// CREATING LIBRARY ICONS
library.add(fas, fab, far);

class ModalInfo extends Component {
  // FUNCION PARA MOSTRAR LA MODAL DEL FINAL
  componentDidMount() {

  }

  showModal = () => {

    const { dataPage, showModal, showInfo } = this.props;
    // console.log(dataPage, showInfo, showModal);

    if (showModal === true) {
      document.querySelector('.footer').classList.add('dNone');
      return (
        <div className = 'modalInfo animated fadeIn' style = {{'left': -462}}>
          <div className = 'bgCircle dF-R-cc showModal c-7'>
            <div className = 'boxInfo pT-3 pB-3 pL-3 pR-3 d-Flex j-C aI-C'>
              <div className = 'mR-2'>
                <h3 className = 'mB-025 dBlock color-2'>{ dataPage[showInfo - 1].info.title }</h3>
                <hr className = 'line-3 mB-1 c-1' />
                <div className = 'dF-C-cc' dangerouslySetInnerHTML = { { __html: dataPage[showInfo - 1].info.text } } />
              </div>
              <div>
                <img alt = 'Imagen' className = 'image' src = { dataPage[showInfo - 1].imgButton } />
              </div>
            </div>

            <button
              className = 'buttonClose pAbs'
              onClick = { this.hideModal }
              >
              <span className = 'fa-layers fa-fw iconButton' >
                <FontAwesomeIcon icon="circle" />
                <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
              </span>
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  hideModal = () => {
    this.props.hideModal(false)
    document.querySelector('.footer').classList.remove('dNone');
  }
// this.showModal()
  render() {
    return (
      this.showModal()
    );
  }
}

export default ModalInfo;

// import React, { Component } from 'react';
// import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';
//
// // IMPORT FONT AWESOME LIBRARY
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
//
// import './ModalInfo.scss';
//
// // CREATING LIBRARY ICONS
// library.add(fas, fab, far);
//
// class ModalInfo extends Component {
//   // FUNCION PARA MOSTRAR LA MODAL DEL FINAL
//   showModal = () => {
//     const { dataPage, showModal } = this.props;
//     // console.log(dataPage, showInfo,showModal);
//
//     if (showModal === true) {
//       return (
//         <div className = 'modalInfo animated fadeIn'>
//           <div className = 'bgCircle dF-R-cc showModal'>
//             <div className = 'boxInfo dF-C-cc pT-2 pB-2 pL-2 pR-2'>
//               <img
//                 alt = 'Imagen'
//                 className = 'image mB-2'
//                 src = { dataPage.modal.img }
//                 style = { { 'width': dataPage.modal.imgSize } }/>
//               <h2 className = 'mB-1 tCenter'>{ dataPage.modal.title }</h2>
//               <div className = 'dF-C-cc mB-1' dangerouslySetInnerHTML = { { __html: dataPage.modal.text } } />
//               {
//                 dataPage.modal.imgExample ? <img alt = 'Imagen' className = 'image' src = { dataPage.modal.imgExample } style = {{ "width": '100%' }}/> : null
//               }
//               <button
//                 className = 'buttonClose'
//                 onClick = { this.hideModal }
//                 >
//                 <span className = 'fa-layers fa-fw iconButton' >
//                   <FontAwesomeIcon icon="circle" />
//                   <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       );
//     } else {
//       return null;
//     }
//   }
//
//   hideModal = () => {
//     this.props.hideModal(false)
//   }
//
//   render() {
//     return (
//       this.showModal()
//     );
//   }
// }
//
// export default ModalInfo;
