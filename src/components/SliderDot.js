import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';
import ModalInfo from './ModalInfo';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './SliderDot.scss';

library.add(fas, fab, far);

class SliderDot extends Component {
  state = {
    item: 1,
    showModal: false,
    showInfo: 0
  }

  // FUNCION PARA DESPLAZAR EL MENÚ
  moveMenu = e => {
    let numIdButton = e.currentTarget.id.substring(8);
    // updateActualUnit(numIdButton);
    // console.log(e.currentTarget.id.substring(8));

    this.setState({
      item: parseInt(numIdButton)
    });
    // console.log(this.state.item);
  }

  handleClick = (e) => {
    const { dataPage } = this.props;

    this.setState({
      showModal: !this.state.showModal,
      showInfo: parseInt(e.currentTarget.id.substring(5))
    });

    // console.log(parseInt(e.currentTarget.id) === dataPage.multimedia.Units.length);
    // console.log(parseInt(e.currentTarget.id) === 3);

    // document.getElementById(e.currentTarget.id).classList.add('visited');

    if (parseInt(e.currentTarget.id.substring(5)) === dataPage.multimedia.Units.length) {
      // CUANDO NO SE ENVIA A COMPONENTES INTERNOS LA FUNCION SE PASA DE LA PROP
      console.log('Finalizada');
      this.props.isEnded(true); // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
    }
  }

  hideModal = (closeModal) => {
    this.setState({
      showModal: closeModal,
      showInfo: 0
    });
  }

  render() {
    const { Units } = this.props;
    const { dataPage } = this.props;
    return (
      <div className = 'sliderDot'>

        <div className = 'itemsContent dF-R-cc mB-1 bg-slideP'>
          {
            Units.map(unit =>
            <div className = {'Item' + (unit.unit !== this.state.item ? ' dNone' : '')} id={ 'Unit-' + (unit.unit) } key={ unit.unit } onClick = { this.handleClick }>
              <div className = 'menuInfo dF-C-cs'>
                <img
                  alt = 'Imagen'
                  className = 'imageFooter'
                  id = { 'btnUnit-' + (unit.unit) }
                  src = { unit.imgButton }/>
              </div>
            </div>
          ) }
        </div>

        <div className = 'scrollMenu dF-R-cc'>
          {
            Units.map((unit, i) =>
              <button
                className = { 'buttonTheme' + (unit.unit === this.state.item ? ' actived' : '') }
                id = { 'btnMenu-' + (unit.unit) }
                key = { unit.unit }
                onClick = { this.moveMenu }>
                <FontAwesomeIcon
                  className = 'iconButton'
                  icon = { ['fas', 'circle'] }
                  size = '1x' />
              </button>
            )
          }
        </div>

        <ModalInfo dataPage = { dataPage.multimedia.Units } hideModal = { this.hideModal } showInfo = { this.state.showInfo } showModal = { this.state.showModal }/>
      </div>
    );
  }
}

export default SliderDot;
// icon = { unit.unit === this.state.actualUnit ? ['fas', 'circle'] : ['far', 'circle'] }

// import React, { Component } from 'react';
// import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';
//
// // IMPORT FONT AWESOME LIBRARY
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
//
// import './SliderDot.scss';
//
// library.add(fas, fab, far);
//
// class MenuCourse extends Component {
//   state = {
//     actualUnit: this.props.unitActual,
//     positionMenu: this.props.menuPosition
//   }
//
//   // FUNCION PARA DESPLAZAR EL MENÚ
//   moveMenu = e => {
//     const { dataPage } = this.props;
//     let numIdButton = e.currentTarget.id.substring(8);
//     // updateActualUnit(numIdButton);
//     switch (parseInt(numIdButton)) {
//       case 1:
//         this.setState({
//           actualUnit: parseInt(numIdButton),
//           positionMenu: dataPage.Units[0].position
//         });
//         break;
//       case 2:
//         this.setState({
//           actualUnit: parseInt(numIdButton),
//           positionMenu: dataPage.Units[1].position
//         });
//         break;
//       case 3:
//         this.setState({
//           actualUnit: parseInt(numIdButton),
//           positionMenu: dataPage.Units[2].position
//         });
//         break;
//       case 4:
//         this.setState({
//           actualUnit: parseInt(numIdButton),
//           positionMenu: dataPage.Units[3].position
//         });
//         break;
//       case 5:
//         this.setState({
//           actualUnit: parseInt(numIdButton),
//           positionMenu: dataPage.Units[4].position
//         });
//         break;
//       case 6:
//         this.setState({
//           actualUnit: parseInt(numIdButton),
//           positionMenu: dataPage.Units[5].position
//         });
//         break;
//       case 7:
//         this.setState({
//           actualUnit: parseInt(numIdButton),
//           positionMenu: dataPage.Units[6].position
//         });
//         break;
//       case 8:
//         this.setState({
//           actualUnit: parseInt(numIdButton),
//           positionMenu: dataPage.Units[7].position
//         });
//         break;
//       default:
//     }
//   }
//
//   // FUNCION PARA IR A LA UNIDAD
//   goToUnit = e => {
//     const { dataPage, goToPage, updateActualUnit } = this.props;
//     let numIdButton = e.currentTarget.id.substring(8);
//     updateActualUnit(numIdButton);
//     switch (parseInt(numIdButton)) {
//       case 1:
//         goToPage(dataPage.Units[0].goTo);
//         break;
//       case 2:
//         goToPage(dataPage.Units[1].goTo);
//         break;
//       case 3:
//         goToPage(dataPage.Units[2].goTo);
//         break;
//       case 4:
//         goToPage(dataPage.Units[3].goTo);
//         break;
//       case 5:
//         goToPage(dataPage.Units[4].goTo);
//         break;
//       case 6:
//         goToPage(dataPage.Units[5].goTo);
//         break;
//       case 7:
//         goToPage(dataPage.Units[6].goTo);
//         break;
//       case 8:
//         goToPage(dataPage.Units[7].goTo);
//         break;
//       default:
//     }
//   }
//
//   render() {
//     const { Units, unitFinal, enableUnit } = this.props;
//     // console.log(this.props.unitFinal);
//     return (
//       <div className = 'menuContent'>
//
//         <div className = 'itemsContent dF-R-cc' style={ {'left': this.state.positionMenu} }>
//           {
//             Units.map(unit =>
//             <div className = {'menuItem ' + (unit.unit !== this.state.actualUnit ? 'disabledMenu' : '')} id={ 'Unit-' + (unit.unit) } key={ unit.unit }>
//               <img
//                 alt = 'Imagen Corporativa'
//                 className = 'imageFooter'
//                 src = { unit.imgBg }/>
//
//               <div className = 'menuInfo dF-C-cs bg-color-2'>
//                 <h3 className = 'color-4 mB-1'>{ unit.title }</h3>
//                 <hr className = 'line-1 mB-1'/>
//                 <p className = 'color-4 mB-2'>{ unit.text }</p>
//
//                 <button
//                   className = 'buttonTheme pT-025 pB-025'
//                   id = { 'btnUnit-' + (unit.unit) }
//                   onClick = { this.goToUnit }>
//                   Ir al Tema
//                 </button>
//
//               </div>
//
//             </div>
//           ) }
//         </div>
//
//         <div className = 'scrollMenu dF-R-cc'>
//           {
//             Units.map((unit, i) =>
//               <button
//                 className = { 'buttonTheme ' + (this.state.actualUnit === unit.unit ? 'actived ' : '') + (unitFinal[i] === true ? 'visited ': '') +(enableUnit[i] === false ? 'disabled': '') }
//                 id = { 'btnMenu-' + (unit.unit) }
//                 key = { unit.unit }
//                 onClick = { this.moveMenu }>
//                 <FontAwesomeIcon
//                   className = 'iconButton'
//                   icon = { ['fas', 'circle'] }
//                   size = '1x' />
//               </button>
//             )
//           }
//         </div>
//       </div>
//     );
//   }
// }
//
// export default MenuCourse;
// // icon = { unit.unit === this.state.actualUnit ? ['fas', 'circle'] : ['far', 'circle'] }
