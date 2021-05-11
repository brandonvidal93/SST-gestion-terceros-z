import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './Footer.scss';

// CREATING LIBRARY ICONS
library.add(fas, fab, far);

class Footer extends Component {

  // ENVIO DE ID PARA NAVEGAR EL CURSO
  navigationCourse = e => {
    // const { actualIndex, data, showLastPage } = this.props;
    const { actualIndex } = this.props;
    e.preventDefault();
    // if (Object.values(data)[actualIndex].endUnit !== true || e.target.id === 'btnNavLeft') {
    if (e.target.id === 'btnNavLeft' || e.target.id === 'btnNavRight') {
      console.log(actualIndex);
      switch (actualIndex) {
        case 2:
          this.props.clickNavigation(1);
          this.props.getPos(1);
          break;
        case 3:
          this.props.clickNavigation(1);
          this.props.getPos(2);
          break;
        case 10:
          this.props.clickNavigation(1);
          this.props.getPos(3);
          break;
        case 11:
          this.props.clickNavigation(1);
          this.props.getPos(4);
          break;
        case 14:
          this.props.clickNavigation(1);
          this.props.getPos(5);
          break;
        case 15:
          this.props.clickNavigation(e.target.id);
          this.props.getPos(6);
          break;
        default:
          this.props.clickNavigation(e.target.id);
          break;
      }
    } else {
      console.log('Ultima página');
      // showLastPage(true);
    }
  }

  // MOSTRAR EL LOGO CUANDO NO ESTÁ EN LA PÁGINA 1
  showLogo = () => {
    const { actualIndex, imageFooter } = this.props;

    if (actualIndex !== 0) {
      return(
        <img
          alt='Imagen Corporativa'
          className='imageFooter'
          src={ imageFooter }/>
      );
    } else {
      return null;
    }
  }

  // MOSTRAR EL MENU DE NAVEGACIÓN Y BLOQUEAR LOS BOTONES DEPENDIENDO DE LA PAGINA
  // className = { 'buttonNav ' + (actualIndex === 1 || Object.values(data)[actualIndex].startUnit === true ? 'disabled': '') }
  // className = { 'buttonNav ' + (actualIndex === 1 || actualIndex === limitNavigation || Object.values(data)[actualIndex].endCourse === true ? 'disabled ': '') + (actualIndex === 3 || actualIndex === 5 || actualIndex === 6  || actualIndex === 11 || actualIndex === 13 || actualIndex === 15 || actualIndex === 16 || actualIndex === 18 ? 'op-4' : '') }
  showNavigation = () => {
    const { actualIndex, limitNavigation, data } = this.props;

    if (actualIndex !== 0 && actualIndex !== 1 && actualIndex !== 16 && actualIndex !== 17) {
      return(
        <div className = 'buttonPannel'>
          <button
            className = { 'buttonNav ' + (actualIndex === 1 || Object.values(data)[actualIndex].startUnit === true ? 'disabled': '') }
            id = 'btnNavLeft'
            onClick = { this.navigationCourse }>
            <FontAwesomeIcon
              className = 'iconButton'
              icon = { ['fas', 'chevron-left'] }
              size = '2x' />
          </button>

          <button
            className = { 'buttonNav ' + (actualIndex === 1 || actualIndex === limitNavigation || Object.values(data)[actualIndex].endCourse === true ? 'disabled ': '') }
            id = 'btnNavRight'
            onClick = { this.navigationCourse }>
            <FontAwesomeIcon
              className = 'iconButton'
              icon = { ['fas', 'chevron-right'] }
              size = '2x' />
          </button>
        </div>
      );
    } else {
      return null;
    }
  }

  showLabel = () => {
    // const { actualIndex, limitNavigation, data, labelFooter } = this.props;
    const { actualIndex, labelFooter } = this.props;

    if (actualIndex !== 0 && actualIndex !== 1 && actualIndex !== 16 && actualIndex !== 17) {
      return(
        <p className = 'labelFooter fw-4' dangerouslySetInnerHTML = {{ __html: labelFooter }}></p>
      );
    }
  }

  showWave = () => {
    const { actualIndex } = this.props;
    if (actualIndex !== 0 && actualIndex !== 16 && actualIndex !== 17) {
      return(
        <div className = 'wave'></div>
      );
    }
  }

  render() {
    // const { labelFooter, actualIndex } = this.props;
    const { actualIndex, endActivities } = this.props;
    console.log(endActivities);

    return (
      <div className = { (actualIndex === 0 || actualIndex === 1 || actualIndex === 16 || actualIndex === 17 ? 'footer-desc' : 'footer') + ' animated fadeIn' }>
        <div className = { 'restrict ' + ((endActivities[actualIndex - 2]) === true ? 'dNone' : '') } />
        { this.showLogo() }
        { this.showLabel() }
        { this.showNavigation() }
        { /*OLAS DE FONDO*/ }
        { this.showWave() }
      </div>
    );
  }
}

export default Footer;

// <div className = 'footer animated fadeIn'>
//   <p className = 'labelFooter pL-3 fw-4'>{ labelFooter }</p>
//
//   { this.showLogo() }
//
//   { this.showNavigation() }
//
//   { /*OLAS DE FONDO*/ }
//   <div className = 'wave'></div>
//   <div className = 'wave'></div>
// </div>
