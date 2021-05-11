import React, { Component } from 'react';
// import Header from './Header';
import Footer from './Footer';

import './Content.scss'

// IMPORTAR LOS COMPONENTES DE CADA PÁGINA
import {
  Cover, Page1, Page2,
  Page3, Page4, Page5,
  Page6, Page7, Page8,
  Page9, Page10, Page11,
  Page12, Page13, Page14,
  Page15, Page16, Page17 } from './pages/Pages';

class Content extends Component {

  state = {
    iPosYBike: 0,
    iPosXBike: 0
  }

  getPos = (i) => {
    console.log('recibo de Footer: ' + i);
    this.setState({
      iPosYBike: i,
      iPosXBike: i
    });
  }

  showContent = () => {
    const { iPosYBike, iPosXBike } = this.state;
    const { actualIndex, clickNavigation, data, goToPage, menuPosition, checkEnabledUnit, unitActual, updateActualUnit, showEndModal, unitFinal, enableUnit, endActivities, checkEndActivity } = this.props;
    switch (actualIndex) {
      case 0:
        // COVER
        return (
          <Cover dataPage = { data.coverPage } startCourse = { clickNavigation } />
        );

      case 1:
        // MENU
        return (
          <Page1
            dataPage = { data.page1 }
            goToPage = { goToPage }
            menuPosition = { menuPosition }
            unitActual = { unitActual }
            updateActualUnit = { updateActualUnit }
            unitFinal = { unitFinal }
            enableUnit = { enableUnit }
            iPosYBike = { iPosYBike }
            iPosXBike = { iPosXBike } />
        );

      case 2:
        // PAGINA INICIO
        // PAGINA FINAL
        return (
          <Page2 dataPage = { data.page2 } goToPage = { goToPage } endActivities = { endActivities[0] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } />
        );

      case 3:
      // PAGINA INICIO
      // PAGINA FINAL
        return (
          <Page3 dataPage = { data.page3 } goToPage = { goToPage } endActivities = { endActivities[1] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } />
        );

      case 4:
        // PAGINA INICIO
        return (
          <Page4 dataPage = { data.page4 } goToPage = { goToPage } endActivities = { endActivities[2] } checkEndActivity = { checkEndActivity } />
        );
      case 5:
        return (
          <Page5 dataPage = { data.page5 } goToPage = { goToPage } endActivities = { endActivities[3] } checkEndActivity = { checkEndActivity } />
        );
      case 6:
        return (
          <Page6 dataPage = { data.page6 } goToPage = { goToPage } endActivities = { endActivities[4] } checkEndActivity = { checkEndActivity } />
        );
      case 7:
        return (
          <Page7 dataPage = { data.page7 } goToPage = { goToPage } endActivities = { endActivities[5] } checkEndActivity = { checkEndActivity } />
        );
      case 8:
        return (
          <Page8 dataPage = { data.page8 } goToPage = { goToPage } endActivities = { endActivities[6] } checkEndActivity = { checkEndActivity } />
        );
      case 9:
        return (
          <Page9 dataPage = { data.page9 } goToPage = { goToPage } endActivities = { endActivities[7] } checkEndActivity = { checkEndActivity } />
        );
      case 10:
      // PAGINA FINAL
        return (
          <Page10 dataPage = { data.page10 } goToPage = { goToPage } endActivities = { endActivities[8] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } />
        );

      case 11:
      // PAGINA INICIO
      // PAGINA FINAL
        return (
          <Page11 dataPage = { data.page11 } goToPage = { goToPage } endActivities = { endActivities[9] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } />
        );

      case 12:
      // PAGINA INICIO
        return (
          <Page12 dataPage = { data.page12 } goToPage = { goToPage } endActivities = { endActivities[10] } checkEndActivity = { checkEndActivity } />
        );
      case 13:
        return (
          <Page13 dataPage = { data.page13 } goToPage = { goToPage } endActivities = { endActivities[11] } checkEndActivity = { checkEndActivity } />
        );
      case 14:
        // PAGINA FINAL
        return (
          <Page14 dataPage = { data.page14 } goToPage = { goToPage } endActivities = { endActivities[12] } checkEndActivity = { checkEndActivity } checkEnabledUnit = { checkEnabledUnit } />
        );

      case 15:
      // PAGINA INICIO
      // PAGINA FINAL
        return (
          <Page15 dataPage = { data.page15 } goToPage = { goToPage } checkEndActivity = { checkEndActivity } />
        );

      case 16:
        // PAGINA FINAL CURSO
        return (
          <Page16 dataPage = { data.page16 } startCourse = { clickNavigation } goToPage = { goToPage } endCourse = { showEndModal } />
        );

      case 17:
        // PAGINA EXAMEN
        return (
          <Page17 dataPage = { data.page17 } goToPage = { goToPage } endCourse = { showEndModal } setScore = { this.props.setScore }/>
        );

      default:
        break;
    }
  }

  render() {
    return (
      <div className='content'>

        { /* CARGA EL COMPONENTE HEADER
          <Header
            actualIndex = { this.props.actualIndex }
            DataCourse = { this.props.data }
            goToPage = { this.props.goToPage }
            menuPosition = { this.props.menuPosition }
            unitActual = { this.props.unitActual }
            nextUnit = { this.props.nextUnit }
            updateActualUnit = { this.props.updateActualUnit }
            updateNextUnit = { this.props.updateNextUnit }
            lastPage = { this.props.lastPage }
            checkEndUnit = { this.props.checkEndUnit }
            checkEnabledUnit = { this.props.checkEnabledUnit } />
          */ }


        { /* LLAMADO DE LA FUNCION QUE RETORNA EL CONTENT */ }
        { this.showContent() }

        {/* CARGA DEL COMPOMENTE FOOTER */}
        <Footer
          actualIndex = { this.props.actualIndex }
          clickNavigation = { this.props.clickNavigation }
          data = { this.props.data }
          imageFooter = { this.props.imageFooter }
          labelFooter = { this.props.labelFooter }
          limitNavigation = { this.props.limitNavigation }
          showLastPage = { this.props.showLastPage }
          getPos = { this.getPos }
          endActivities = { this.props.endActivities }/>
      </div>
    );
  }
}

export default Content;
