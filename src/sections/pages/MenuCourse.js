import React, { Component } from 'react';
// import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

import './MenuCourse.scss';

// library.add(fas, fab, far);

class MenuCourse extends Component {
  // state = {
  //   actualUnit: this.props.unitActual,
  //   positionMenu: this.props.menuPosition,
  //   posXBike: dataPage.background.position[iPosXBike].posX,
  //   posYBike: dataPage.background.position[iPosYBike].posY,
  //   animation: ''
  // }
  state = {
    actualUnit: this.props.unitActual,
    positionMenu: this.props.menuPosition,
    posXBike: 0,
    posYBike: 0,
    animation: ''
  }

  componentWillMount() {

    // const { dataPage, iPosXBike, iPosYBike } = this.props;
    // console.log(dataPage.background.position[iPosXBike + 1].posX, dataPage.background.position[iPosYBike + 1].posY);
    // this.setState({
    //   posXBike: dataPage.background.position[iPosXBike + 1].posX,
    //   posYBike: dataPage.background.position[iPosYBike + 1].posY
    // })
    this.actPos();
  }

  actPos = () => {
    const { dataPage, iPosXBike, iPosYBike } = this.props;
    let animation = 'bikeMenui-' + iPosXBike;
    // console.log(iPosXBike, iPosYBike);
    // console.log(dataPage.background.position[iPosXBike].posX, dataPage.background.position[iPosYBike].posY);
    setTimeout(() => {
      this.setState({
        animation: animation,
      })
    }, 0);
    this.setState({
      posXBike: dataPage.background.position[iPosXBike].posX,
      posYBike: dataPage.background.position[iPosYBike].posY
    })
  }

  // FUNCION PARA IR A LA UNIDAD
  goToUnit = e => {
    const { dataPage, goToPage, updateActualUnit } = this.props;
    let numIdButton = e.currentTarget.id.substring(8);
    // var posX, posY;
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
            // <div className = {'pAbs menuItem ' + (unit.unit !== this.state.actualUnit ? 'disabledMenu' : '')} id={ 'Unit-' + (unit.unit) } key={ unit.unit } style={ {'left': unit.position.posX, 'top': unit.position.posY} }>
            <div className = {'pAbs menuItem ' + (enableUnit[unit.unit - 1] === false ? 'disabledMenu' : '')} id={ 'Unit-' + (unit.unit) } key={ unit.unit } style={ {'left': unit.position.posX, 'top': unit.position.posY} }>
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
              className = { 'buttonTheme pT-025 pB-025 pAbs ' + (enableUnit[unit.unit - 1] === false ? 'disabledButton' : '') }
              id = { 'btnUnit-' + (unit.unit) }
              key = { unit.unit }
              onClick = { this.goToUnit }
              style={ {'left': unit.btnPosition.posX, 'top': unit.btnPosition.posY} }>
              <h3 className = 'color-2 fw-7'>Iniciar</h3>
            </button>)
          }
        </div>

        <div className = {'pAbs bici ' + (this.state.animation)} style={ {'left': this.state.posXBike, 'top': this.state.posYBike, 'width': dataPage.background.size } } />

        <div className = 'itemsContent'>
          {
            Units.map(unit =>
            <div className = {'pAbs menuItem ' + (enableUnit[unit.unit - 1] === false ? 'disabledMenu' : '')} key={ unit.unit } style={ {'left': unit.bgPos2.posX, 'top': unit.bgPos2.posY } }>
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

// <img alt = 'Imagen Bg' className = {'pAbs bici ' + (this.state.animation)} src = { dataPage.background.bici } style={ {'left': this.state.posXBike, 'top': this.state.posYBike, 'width': dataPage.background.size } }/>
