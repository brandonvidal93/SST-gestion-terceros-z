import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './MenuCourse.scss';

library.add(fas, fab, far);

class MenuCourse extends Component {
  state = {
    actualUnit: this.props.unitActual,
    positionMenu: this.props.menuPosition,
    posXBike: 483,
    posYBike: -129,
    animation: ''
  }

  // FUNCION PARA IR A LA UNIDAD
  goToUnit = e => {
    const { dataPage, goToPage, updateActualUnit } = this.props;
    let numIdButton = e.currentTarget.id.substring(8);
    var posX, posY;
    updateActualUnit(numIdButton);
    switch (parseInt(numIdButton)) {
      case 1:
        this.setState({
          animation: 'bikeMenu-1'
        });
        setTimeout(() => {
          this.setState({
            posXBike: dataPage.background.position[1].posX,
            posYBike: dataPage.background.position[1].posY
          });

          goToPage(dataPage.Units[0].goTo);
        }, 2000);
        break;
      case 2:
        this.setState({
          animation: 'bikeMenu-2'
        });
        setTimeout(() => {
          this.setState({
            posXBike: dataPage.background.position[2].posX,
            posYBike: dataPage.background.position[2].posY
          });

          goToPage(dataPage.Units[1].goTo);
        }, 5000);
        break;
      case 3:
        this.setState({
          animation: 'bikeMenu-3'
        });
        setTimeout(() => {
          this.setState({
            posXBike: dataPage.background.position[3].posX,
            posYBike: dataPage.background.position[3].posY
          });

          goToPage(dataPage.Units[2].goTo);
        }, 3000);
        break;
      case 4:
        this.setState({
          animation: 'bikeMenu-4'
        });
        setTimeout(() => {
          this.setState({
            posXBike: dataPage.background.position[4].posX,
            posYBike: dataPage.background.position[4].posY
          });

          goToPage(dataPage.Units[3].goTo);
        }, 2000);
        break;
      case 5:
        this.setState({
          animation: 'bikeMenu-5'
        });
        setTimeout(() => {
          this.setState({
            posXBike: dataPage.background.position[5].posX,
            posYBike: dataPage.background.position[5].posY
          });

          goToPage(dataPage.Units[4].goTo);
        }, 6000);
        break;
      case 6:
        this.setState({
          animation: 'bikeMenu-6'
        });
        setTimeout(() => {
          this.setState({
            posXBike: dataPage.background.position[6].posX,
            posYBike: dataPage.background.position[6].posY
          });

          goToPage(dataPage.Units[5].goTo);
        }, 6000);
        break;
      default:
    }
  }

  render() {
    const { Units, unitFinal, enableUnit, dataPage } = this.props;
    // console.log(this.props.unitFinal);
    return (
      <div className = 'menuContent'>
        <div className = 'itemsContent'>
          {
            Units.map(unit =>
            <div className = {'pAbs menuItem ' + (unit.unit !== this.state.actualUnit ? 'ddisabledMenu' : '')} id={ 'Unit-' + (unit.unit) } key={ unit.unit } style={ {'left': unit.position.posX, 'top': unit.position.posY} }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { unit.imgBg }/>
            </div>
          ) }
        </div>

        <div className = 'itemsContent'>
          {
            Units.map(unit =>
            <button
              className = { 'buttonTheme pT-025 pB-025 pAbs ' + (unit.unit !== this.state.actualUnit ? 'ddisabledButton' : '') }
              id = { 'btnUnit-' + (unit.unit) }
              key = { unit.unit }
              onClick = { this.goToUnit }
              style={ {'left': unit.btnPosition.posX, 'top': unit.btnPosition.posY} }>
              <h3 className = 'color-2 fw-7'>Iniciar</h3>
            </button>)
          }
        </div>

        <img alt = 'Imagen Bg' className = {'pAbs bici ' + (this.state.animation)} src = { dataPage.background.bici } style={ {'left': this.state.posXBike, 'top': this.state.posYBike, 'width': dataPage.background.size } }/>

        <div className = 'itemsContent'>
          {
            Units.map(unit =>
            <div className = {'pAbs menuItem ' + (unit.unit !== this.state.actualUnit ? 'ddisabledMenu' : '')} key={ unit.unit } style={ {'left': unit.bgPos2.posX, 'top': unit.bgPos2.posY } }>
              {
                unit.imgBg2 ? <img alt = 'Imagen' className = '' src = { unit.imgBg2 }/> : null
              }
            </div>
          ) }
        </div>
      </div>
    );
  }
}

export default MenuCourse;

// // FUNCION PARA DESPLAZAR EL MENÚ
// moveMenu = e => {
//   const { dataPage } = this.props;
//   let numIdButton = e.currentTarget.id.substring(8);
//   // updateActualUnit(numIdButton);
//   switch (parseInt(numIdButton)) {
//     case 1:
//       this.setState({
//         actualUnit: parseInt(numIdButton),
//         positionMenu: dataPage.Units[0].position
//       });
//       break;
//     case 2:
//       this.setState({
//         actualUnit: parseInt(numIdButton),
//         positionMenu: dataPage.Units[1].position
//       });
//       break;
//     case 3:
//       this.setState({
//         actualUnit: parseInt(numIdButton),
//         positionMenu: dataPage.Units[2].position
//       });
//       break;
//     case 4:
//       this.setState({
//         actualUnit: parseInt(numIdButton),
//         positionMenu: dataPage.Units[3].position
//       });
//       break;
//     case 5:
//       this.setState({
//         actualUnit: parseInt(numIdButton),
//         positionMenu: dataPage.Units[4].position
//       });
//       break;
//     case 6:
//       this.setState({
//         actualUnit: parseInt(numIdButton),
//         positionMenu: dataPage.Units[5].position
//       });
//       break;
//     case 7:
//       this.setState({
//         actualUnit: parseInt(numIdButton),
//         positionMenu: dataPage.Units[6].position
//       });
//       break;
//     case 8:
//       this.setState({
//         actualUnit: parseInt(numIdButton),
//         positionMenu: dataPage.Units[7].position
//       });
//       break;
//     default:
//   }
// }

// <div className = 'itemsContent'>
//   {
//     Units.map(unit =>
//     <div className = {'pAbs menuItem ' + (unit.unit !== this.state.actualUnit ? 'disabledMenu' : '')} id={ 'Unit-' + (unit.unit) } key={ unit.unit } style={ {'left': unit.position.posX, 'top': unit.position.posY} }>
//       <img
//         alt = 'Imagen Corporativa'
//         className = 'imageFooter'
//         src = { unit.imgBg }/>
//
//         <img
//           alt = 'Imagen Corporativa'
//           className = 'imageFooter'
//           src = { unit.imgButton }
//           style={ {'left': unit.imgBtnPos.posX, 'top': unit.imgBtnPos.posY} }/>
//     </div>
//   ) }
// </div>

// <button
//   className = 'buttonTheme pT-025 pB-025 pAbs'
//   id = { 'btnUnit-' + (unit.unit) }
//   onClick = { this.goToUnit }
//   style={ {'left': unit.imgBtnPos.posX, 'top': unit.imgBtnPos.posY} }>
//   <img
//     alt = 'Imagen Corporativa'
//     className = 'imageFooter'
//     src = { unit.imgButton }/>
// </button>



// icon = { unit.unit === this.state.actualUnit ? ['fas', 'circle'] : ['far', 'circle'] }

// <div className = 'scrollMenu dF-R-cc'>
//   {
//     Units.map((unit, i) =>
//       <button
//         className = { 'buttonTheme ' + (this.state.actualUnit === unit.unit ? 'actived ' : '') + (unitFinal[i] === true ? 'visited ': '') +(enableUnit[i] === false ? 'disabled': '') }
//         id = { 'btnMenu-' + (unit.unit) }
//         key = { unit.unit }
//         onClick = { this.moveMenu }>
//         <FontAwesomeIcon
//           className = 'iconButton'
//           icon = { ['fas', 'circle'] }
//           size = '1x' />
//       </button>
//     )
//   }
// </div>

// <div className = 'menuInfo dF-C-cs bg-color-2'>
//   <h3 className = 'color-4 mB-1'>{ unit.title }</h3>
//   <hr className = 'line-1 mB-1'/>
//   <p className = 'color-4 mB-2'>{ unit.text }</p>
//
//   <button
//     className = 'buttonTheme pT-025 pB-025'
//     id = { 'btnUnit-' + (unit.unit) }
//     onClick = { this.goToUnit }>
//     <img
//       alt = 'Imagen Corporativa'
//       className = 'imageFooter'
//       src = { unit.imgButton }/>
//   </button>
//
// </div>

// <div className = 'itemsContent dF-R-cc' style={ {'left': this.state.positionMenu} }>
//   {
//     Units.map(unit =>
//     <div className = {'menuItem ' + (unit.unit !== this.state.actualUnit ? 'disabledMenu' : '')} id={ 'Unit-' + (unit.unit) } key={ unit.unit }>
//       <button
//         className = 'buttonTheme pT-025 pB-025'
//         id = { 'btnUnit-' + (unit.unit) }
//         onClick = { this.goToUnit }>
//         <img
//           alt = 'Imagen Corporativa'
//           className = 'imageFooter'
//           src = { unit.imgButton }/>
//       </button>
//       <img
//         alt = 'Imagen Corporativa'
//         className = 'imageFooter'
//         src = { unit.imgBg }/>
//     </div>
//   ) }
// </div>
