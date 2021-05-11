import React, { Component } from 'react';
import MenuCourse from './MenuCourse';
import ModalVideo from '../../components/ModalVideo';
import ModalImg from '../../components/ModalImg';
import Instruction from '../../components/Instruction';
// import ChatPhone from '../../components/ChatPhone';
import InteractiveAudio from '../../components/InteractiveAudio';
import InteractiveCircle from '../../components/InteractiveCircle';
import InteractiveCircle2 from '../../components/InteractiveCircle2';
// import InteractivePath from '../../components/InteractivePath';
// import InteractivePiramid from '../../components/InteractivePiramid';
// import InteractiveCircleModal from '../../components/InteractiveCircleModal';
import DraggableCircle from '../../components/DraggableCircle';
import DraggableZigZag from '../../components/DraggableZigZag';
// import DraggableWords from '../../components/DraggableWords';
import DraggableWordBox from '../../components/DraggableWordBox';
import ModalCircle from '../../components/ModalCircle';
// import ModalCircleInfo from '../../components/ModalCircleInfo';
import InteractiveFlip from '../../components/InteractiveFlip';
import InteractiveFlipIcon from '../../components/InteractiveFlipIcon';
// import Slides from '../../components/Slides';
import SlidesUpDown from '../../components/SlidesUpDown';
import SliderDot from '../../components/SliderDot';
// import Pairing from '../../components/Pairing';

import './Pages.scss';

class Cover extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  // isEnded = (end) => {
  //   const { checkEndActivity } = this.props;
  //   // console.log('Recibí: ' + end);
  //   checkEndActivity(0, end);
  // }

  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y EMPEZAR EL CURSO
  startCourse = e => {
    e.preventDefault();
    this.props.startCourse(e.target.id);
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  render() {
    const { dataPage } = this.props;
    // const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);

    //
    //

    return (
      <div className={ 'pageContent ' + (dataPage.type) + ' pL-4 animated fadeIn' }>
        <div className="box-bg-1">
          <img alt = 'Imagen Bg' className = 'pAbs bgGrid-1' src = { dataPage.background.bgGrid }/>
          <img alt = 'Imagen Bg' className = 'pAbs bgGrid-2' src = { dataPage.background.bgGrid }/>
          <img alt = 'Imagen Bg' className = 'pAbs bgGrid-3' src = { dataPage.background.bgGrid }/>
          <img alt = 'Imagen Bg' className = 'pAbs city' src = { dataPage.background.city }/>
          <img alt = 'Imagen Bg' className = 'pAbs semaforo' src = { dataPage.background.semaforo }/>
          <div className="pAbs redLight redL-1"></div>
          <div className="pAbs yellowLight yellowL-1"></div>
          <div className="pAbs greenLight greenL-1"></div>

          <img alt = 'Imagen Bg' className = 'pAbs bici move-1' src = { dataPage.background.bici }/>
        </div>

        <div className="c-45 dF-C-cs">
          <img
            alt = 'Imagen Corporativa'
            className = 'imageLogo mT-4 mB-3'
            src = { dataPage.logoCourse }/>

          <h1 className = 'mB-05 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h1>
          <h2 className = 'fw-4'>{ dataPage.subTitle }</h2>
          <hr className = 'line-2 mB-1' />
          <h3 className = 'mB-1 fw-7'>{ dataPage.module }</h3>
          <p className = 'mB-5 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.courseName }}></p>

          <button
            className = 'buttonStart pT-05 pB-05'
            id = 'btnStart'
            onClick = { this.startCourse }>
            { dataPage.buttonStart }
          </button>

          { /* Restricción de avance <div className = { 'restrict-3 ' + (endActivities === true ? 'dNone' : '') } /> */ }
        </div>

      </div>
    );
  }
}

class Page1 extends Component {

  render() {
    const { dataPage, goToPage, menuPosition, unitActual, updateActualUnit, unitFinal, enableUnit, iPosXBike, iPosYBike } = this.props;
    const { Units } = this.props.dataPage;
    // console.log(this.props.unitFinal);

    // <div className = 'section-1 dF-C-cc mB-2'>
    //   <hr className = 'line-2 mB-1' />
    //   <h1 className = 'mB-1 tCenter'>{ dataPage.title }</h1>
    //   <p className = 'tCenter'>{ dataPage.text }</p>
    // </div>
    return (
      <div className = { 'pageContent ' + (dataPage.type) + ' animated fadeIn'}>
        <div className="c-4 dF-C-cs mL-2 mT-3">
          <hr className = 'line-2 mB-1' />
          <h2 className = 'mB-05 fw-7'>{ dataPage.title }</h2>
          <p className = 'mB-1 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }}></p>
          <p className = 'fw-7' dangerouslySetInnerHTML = {{ __html: dataPage.text2 }}></p>

          { /* Restricción de avance <div className = { 'restrict-3 ' + (endActivities === true ? 'dNone' : '') } /> */ }
        </div>

        { /* LLAMADO DEL COMPONENTE MENU */ }
        <MenuCourse
          dataPage = { dataPage }
          goToPage = { goToPage }
          menuPosition = { menuPosition }
          Units = { Units }
          unitActual = { unitActual }
          updateActualUnit = { updateActualUnit }
          unitFinal = { unitFinal }
          enableUnit = { enableUnit }
          iPosXBike = { iPosXBike }
          iPosYBike = { iPosYBike } />

        <Instruction dataPage = { dataPage.instruction } />
      </div>
    );
  }
}

class Page2 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity, checkEnabledUnit } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(0, end);
    checkEnabledUnit(1);
  }

  render() {
    const { menuPosition } = this.props;
    // const { menuPosition, unitActual, updateActualUnit, unitFinal, enableUnit } = this.props;
    const { dataPage, endActivities } = this.props;
    const { Units } = this.props.dataPage.multimedia;
    console.log('Actividad finalizada: ' + endActivities);
    // console.log(this.state);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'pAbs' style={ {'left': dataPage.numberPage.posX, 'top': dataPage.numberPage.posY} }>
          <h2 className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.numberPage.text }} />
        </div>

        <div className='dF-C-ss'>
          <img alt = '' className = 'mL-7 c-5' src = { dataPage.bgTitle }/>
          <div className = 'section-title pL-2 pT-025 pB-025 mT-4 pAbs'>
            <h3 className = 'color-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
          </div>
          <img alt = '' className = 'pAbs' src = { dataPage.imgTitle } style={ {'left': dataPage.imgTitlePos.posX, 'top': dataPage.imgTitlePos.posY} }/>
        </div>

        <div className = 'two-column d-Flex j-S aI-C'>
          <div className = 'column-1 pL-2' dangerouslySetInnerHTML = {{ __html: dataPage.multimedia.text }}>

          </div>
          <div className = 'column-2'>
            <SliderDot
              dataPage = { dataPage }
              menuPosition = { menuPosition }
              Units = { Units }
              isEnded = { this.isEnded } />
          </div>
        </div>
        { /* Restricción de avance  <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />*/ }


        <Instruction dataPage = { dataPage.instruction } />
        <Instruction dataPage = { dataPage.instruction2 } />
      </div>
    );
  }
}

class Page3 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity, checkEnabledUnit } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(1, end);
    checkEnabledUnit(2);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    const { boxInfo } = this.props.dataPage;

    return (
      <div className = 'pageContent animated fadeIn'>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'pAbs' style={ {'left': dataPage.numberPage.posX, 'top': dataPage.numberPage.posY} }>
          <h2 className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.numberPage.text }} />
        </div>

        <div className='dF-C-ss'>
          <img alt = '' className = 'mL-7 c-5' src = { dataPage.bgTitle }/>
          <div className = 'section-title pL-2 pT-025 pB-025 mT-4 pAbs'>
            <h3 className = 'color-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
          </div>
          <img alt = '' className = 'pAbs' src = { dataPage.imgTitle } style={ {'left': dataPage.imgTitlePos.posX, 'top': dataPage.imgTitlePos.posY} }/>
        </div>

        <div className = 'two-column d-Flex j-S aI-C pL-2 pR-2'>
          <div className = 'column-1 d-Flex d-C j-S' dangerouslySetInnerHTML = {{ __html: dataPage.text2 }} />

          <div className = 'column-2 dF-C-cc'>
            <button className = 'buttonVideo' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>

          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction3 } />
        <Instruction dataPage = { dataPage.instruction4 } />
        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page4 extends Component {
  state = {

  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(2, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    console.log('Actividad finalizada: ' + endActivities);
    // console.log(this.state);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'pAbs' style={ {'left': dataPage.numberPage.posX, 'top': dataPage.numberPage.posY} }>
          <h2 className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.numberPage.text }} />
        </div>

        <div className='dF-C-ss'>
          <img alt = '' className = 'mL-7 c-5' src = { dataPage.bgTitle }/>
          <div className = 'section-title pL-2 pT-025 pB-025 mT-4 pAbs'>
            <h3 className = 'color-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
            <p className = '' dangerouslySetInnerHTML = {{ __html: dataPage.text }} />
          </div>
          <img alt = '' className = 'pAbs' src = { dataPage.imgTitle } style={ {'left': dataPage.imgTitlePos.posX, 'top': dataPage.imgTitlePos.posY} }/>
        </div>

        <div className = 'two-column d-Flex j-S aI-C pL-2 pR-2'>


          <div className = 'column-2 dF-C-cc c-5'>
            <DraggableCircle multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />
          </div>

          <div className = 'column-1 d-Flex d-C j-S c-4' dangerouslySetInnerHTML = {{ __html: dataPage.text2 }} />
        </div>

        <Instruction dataPage = { dataPage.instruction2 } />
        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page5 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(3, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'pAbs' style={ {'left': dataPage.numberPage.posX, 'top': dataPage.numberPage.posY} }>
          <h2 className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.numberPage.text }} />
        </div>

        <div className='dF-C-ss mB-2'>
          <img alt = '' className = 'mL-7 c-5' src = { dataPage.bgTitle }/>
          <div className = 'section-title pL-2 pT-025 pB-025 mT-4 pAbs'>
            <h3 className = 'color-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          </div>
          <p className = 'pAbs c-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }} style = {{ 'top': 115, 'left': 32 }} />
          <img alt = '' className = 'pAbs' src = { dataPage.imgTitle } style={ {'left': dataPage.imgTitlePos.posX, 'top': dataPage.imgTitlePos.posY} }/>
        </div>

        <InteractiveFlip dataPage = { dataPage.multimedia } isEnded = { this.isEnded } />

        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page6 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(4, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'pAbs' style={ {'left': dataPage.numberPage.posX, 'top': dataPage.numberPage.posY} }>
          <h2 className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.numberPage.text }} />
        </div>

        <div className='dF-C-ss'>
          <img alt = '' className = 'mL-7 c-5' src = { dataPage.bgTitle }/>
          <div className = 'section-title pL-2 pT-025 pB-025 mT-4 pAbs'>
            <h3 className = 'color-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          </div>
          <p className = 'pAbs c-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }} style = {{ 'top': 115, 'left': 32 }} />
          <img alt = '' className = 'pAbs' src = { dataPage.imgTitle } style={ {'left': dataPage.imgTitlePos.posX, 'top': dataPage.imgTitlePos.posY} }/>
        </div>

        <DraggableZigZag multimedia = { dataPage.multimedia } isEnded = { this.isEnded } />

        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page7 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(5, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);
    // <Instruction dataPage = { dataPage.instruction } />

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'pAbs' style={ {'left': dataPage.numberPage.posX, 'top': dataPage.numberPage.posY} }>
          <h2 className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.numberPage.text }} />
        </div>

        <div className='dF-C-ss'>
          <img alt = '' className = 'mL-7 c-5' src = { dataPage.bgTitle }/>
          <div className = 'section-title pL-2 pT-025 pB-025 mT-4 pAbs'>
            <h3 className = 'color-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          </div>
          <p className = 'pAbs c-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }} style = {{ 'top': 115, 'left': 32 }} />
          <img alt = '' className = 'pAbs' src = { dataPage.imgTitle } style={ {'left': dataPage.imgTitlePos.posX, 'top': dataPage.imgTitlePos.posY} }/>
        </div>

        <InteractiveAudio dataPage={ dataPage.multimedia } isEnded = { this.isEnded } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page8 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(6, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'pAbs' style={ {'left': dataPage.numberPage.posX, 'top': dataPage.numberPage.posY} }>
          <h2 className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.numberPage.text }} />
        </div>

        <div className='dF-C-ss'>
          <img alt = '' className = 'mL-7 c-5' src = { dataPage.bgTitle }/>
          <div className = 'section-title pL-2 pT-025 pB-025 mT-4 pAbs'>
            <h3 className = 'color-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          </div>
          <p className = 'pAbs c-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }} style = {{ 'top': 115, 'left': 32 }} />
          <img alt = '' className = 'pAbs' src = { dataPage.imgTitle } style={ {'left': dataPage.imgTitlePos.posX, 'top': dataPage.imgTitlePos.posY} }/>
        </div>

        <InteractiveCircle dataPage = { dataPage } isEnded = { this.isEnded } />

        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page9 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(7, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'pAbs' style={ {'left': dataPage.numberPage.posX, 'top': dataPage.numberPage.posY} }>
          <h2 className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.numberPage.text }} />
        </div>

        <div className='dF-C-ss'>
          <img alt = '' className = 'mL-7 c-5' src = { dataPage.bgTitle }/>
          <div className = 'section-title pL-2 pT-025 pB-025 mT-4 pAbs'>
            <h3 className = 'color-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          </div>
          <p className = 'pAbs c-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }} style = {{ 'top': 115, 'left': 32 }} />
          <img alt = '' className = 'pAbs' src = { dataPage.imgTitle } style={ {'left': dataPage.imgTitlePos.posX, 'top': dataPage.imgTitlePos.posY} }/>
        </div>

        <SlidesUpDown dataPage = { dataPage.multimedia } isEnded = { this.isEnded } />

        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page10 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity, checkEnabledUnit } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(8, end);
    checkEnabledUnit(3)
  }

  render() {
    const { dataPage, endActivities } = this.props;
    const { boxInfo } = this.props.dataPage;
    // console.log('Actividad finalizada: ' + endActivities);
    // <div className = 'column-1 d-Flex d-C j-S' dangerouslySetInnerHTML = {{ __html: dataPage.text2 }} />

    return (
      <div className = 'pageContent animated fadeIn'>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalVideo dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'pAbs' style={ {'left': dataPage.numberPage.posX, 'top': dataPage.numberPage.posY} }>
          <h2 className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.numberPage.text }} />
        </div>

        <div className='dF-C-ss'>
          <img alt = '' className = 'mL-7 c-5' src = { dataPage.bgTitle }/>
          <div className = 'section-title pL-2 pT-025 pB-025 mT-4 pAbs'>
            <h3 className = 'color-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          </div>
          <p className = 'pAbs c-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }} style = {{ 'top': 115, 'left': 32 }} />
          <img alt = '' className = 'pAbs' src = { dataPage.imgTitle } style={ {'left': dataPage.imgTitlePos.posX, 'top': dataPage.imgTitlePos.posY} }/>
        </div>

        <div className = 'two-column d-Flex j-C aI-C pR-2'>

          <div className = 'column-2 dF-C-cc'>
            <button className = 'buttonVideo' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>

          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page11 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity, checkEnabledUnit } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(9, end);
    checkEnabledUnit(4)
  }

  render() {
    const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'pAbs' style={ {'left': dataPage.numberPage.posX, 'top': dataPage.numberPage.posY} }>
          <h2 className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.numberPage.text }} />
        </div>

        <div className='dF-C-ss'>
          <img alt = '' className = 'mL-7 c-5' src = { dataPage.bgTitle }/>
          <div className = 'section-title pL-2 pT-025 pB-025 mT-4 pAbs c-4'>
            <h3 className = 'color-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          </div>
          <p className = 'pAbs c-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }} style = {{ 'top': 115, 'left': 32 }} />
          <img alt = '' className = 'pAbs' src = { dataPage.imgTitle } style={ {'left': dataPage.imgTitlePos.posX, 'top': dataPage.imgTitlePos.posY} }/>
        </div>

        <InteractiveCircle2 dataPage = { dataPage } isEnded = { this.isEnded } />

        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page12 extends Component {
  state = {
    showModal: false,
    showInfo: 0
  }

  handleClick = () => {
    this.setState({
      showModal: !this.state.showModal,
      showInfo: 0
    });
  }

  hideModal = (closeModal) => {
    this.setState({
      showModal: closeModal,
      showInfo: 0
    });

    document.querySelector('.footer').classList.remove('dNone');
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(10, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'pAbs' style={ {'left': dataPage.numberPage.posX, 'top': dataPage.numberPage.posY} }>
          <h2 className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.numberPage.text }} />
        </div>

        <div className='dF-C-ss mB-4'>
          <img alt = '' className = 'c-5' src = { dataPage.bgTitle } style = {{ 'marginLeft': 350 }}/>
          <div className = 'section-title pL-2 pT-025 pB-025 mT-4 pAbs c-5'>
            <h3 className = 'color-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          </div>
          <p className = 'pAbs c-4' dangerouslySetInnerHTML = {{ __html: dataPage.text }} style = {{ 'top': 115, 'left': 32 }} />
          <img alt = '' className = 'pAbs' src = { dataPage.imgTitle } style={ {'left': dataPage.imgTitlePos.posX, 'top': dataPage.imgTitlePos.posY} }/>
        </div>

        <DraggableWordBox multimedia = { dataPage.multimedia } handleClick = { this.handleClick } isEnded = { this.isEnded } />

        <Instruction dataPage = { dataPage.instruction } />

        <ModalCircle dataPage = { dataPage.multimedia.content } hideModal = { this.hideModal } showInfo = { this.state.showInfo } showModal = { this.state.showModal }/>

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page13 extends Component {
  state = {
    openModal: false,
    warningAnimation: true
  }

  // FUNCION PARA ABRIR MODAL
  showModal = () => {
    this.setState({
      openModal: !this.state.openModal,
      warningAnimation: !this.state.warningAnimation
    });
    document.querySelector('.footer').classList.add('dNone');
  }

  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(11, end);
  }

  render() {
    const { dataPage, endActivities } = this.props;
    const { boxInfo } = this.props.dataPage;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        { /* MUESTRA LA MODAL DE ACUERDO AL ESTADO openModal */ }
        { this.state.openModal !== false ? <ModalImg dataModal={ dataPage } showModal={ this.showModal } isEnded = { this.isEnded } /> : null }

        <div className = 'pAbs' style={ {'left': dataPage.numberPage.posX, 'top': dataPage.numberPage.posY} }>
          <h2 className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.numberPage.text }} />
        </div>

        <div className='dF-C-ss'>
          <img alt = '' className = 'c-5' src = { dataPage.bgTitle } style = {{ 'marginLeft': 350 }} />
          <div className = 'section-title pL-2 pT-025 pB-025 mT-4 pAbs c-5'>
            <h3 className = 'color-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          </div>
          <p className = 'pAbs c-4' dangerouslySetInnerHTML = {{ __html: dataPage.text }} style = {{ 'top': 115, 'left': 32 }} />
          <img alt = '' className = 'pAbs' src = { dataPage.imgTitle } style={ {'left': dataPage.imgTitlePos.posX, 'top': dataPage.imgTitlePos.posY} }/>
        </div>

        <div className = 'two-column d-Flex j-S aI-C'>
          <div className = 'column-1 pL-2' dangerouslySetInnerHTML = {{ __html: dataPage.multimedia.text }}>

          </div>
          <div className = 'column-2 bg-circle-1 d-Flex j-C aI-C pT-7 pB-7'>
            <button className = 'buttonVideo' onClick = { this.showModal }>
              <img
                alt = 'Imagen Corporativa'
                className = 'imageFooter'
                src = { boxInfo.imgBg }/>
            </button>
          </div>
        </div>

        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page14 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  isEnded = (end) => {
    const { checkEndActivity, checkEnabledUnit } = this.props;
    // console.log('Recibí: ' + end);
    checkEndActivity(12, end);
    checkEnabledUnit(5)
  }

  render() {
    const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'pAbs' style={ {'left': dataPage.numberPage.posX, 'top': dataPage.numberPage.posY} }>
          <h2 className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.numberPage.text }} />
        </div>

        <div className='dF-C-ss mB-4'>
          <img alt = '' className = 'c-5' src = { dataPage.bgTitle } style = {{ 'marginLeft': 350 }} />
          <div className = 'section-title pL-2 pT-025 pB-025 mT-4 pAbs c-5'>
            <h3 className = 'color-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          </div>
          <p className = 'pAbs c-4' dangerouslySetInnerHTML = {{ __html: dataPage.text }} style = {{ 'top': 115, 'left': 32 }} />
          <img alt = '' className = 'pAbs' src = { dataPage.imgTitle } style={ {'left': dataPage.imgTitlePos.posX, 'top': dataPage.imgTitlePos.posY} }/>
        </div>

        <InteractiveFlipIcon dataPage = { dataPage.multimedia } isEnded = { this.isEnded } />

        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page15 extends Component {
  // FUNCION QUE RECIBE EL TRUE CUANDO FINALIZA LA ACTIVIDAD
  // isEnded = (end) => {
  //   const { checkEndActivity } = this.props;
  //   // console.log('Recibí: ' + end);
  //   checkEndActivity(4, end);
  // }

  render() {
    const { dataPage, endActivities } = this.props;
    // console.log('Actividad finalizada: ' + endActivities);
    // <Instruction dataPage = { dataPage.instruction } />

    return (
      <div className = 'pageContent animated fadeIn'>
        <div className = 'pAbs' style={ {'left': dataPage.numberPage.posX, 'top': dataPage.numberPage.posY} }>
          <h2 className = 'fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.numberPage.text }} />
        </div>

        <div className='dF-C-ss'>
          <img alt = '' className = 'mL-7 c-5' src = { dataPage.bgTitle }/>
          <div className = 'section-title pL-2 pT-025 pB-025 mT-4 pAbs c-3'>
            <h3 className = 'color-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }} />
          </div>
          <p className = 'pAbs c-3' dangerouslySetInnerHTML = {{ __html: dataPage.text }} style = {{ 'top': 115, 'left': 32 }} />
          <img alt = '' className = 'pAbs' src = { dataPage.imgTitle } style={ {'left': dataPage.imgTitlePos.posX, 'top': dataPage.imgTitlePos.posY} }/>
        </div>

        <div className = 'two-column d-Flex j-S aI-C'>
          <div className = 'column-1 pL-2' dangerouslySetInnerHTML = {{ __html: dataPage.multimedia.text }} />
          <div className = 'column-2 d-Flex j-C aI-C' dangerouslySetInnerHTML = {{ __html: dataPage.multimedia.text2 }} />
        </div>

        <Instruction dataPage = { dataPage.instruction } />

        { /* Restricción de avance */ }
        <div className = { 'restrict ' + (endActivities === true ? 'dNone' : '') } />
        <div className = { 'restrict-2 ' + (endActivities === true ? 'dNone' : '') } />
      </div>
    );
  }
}

class Page16 extends Component {
  // FUNCION PARA ENVIAR EL INDEX ACTUALIZADO Y FINALIZAR EL CURSO
  endCourse = e => {
    e.preventDefault();
    this.props.endCourse();
  }

  startCourse = e => {
    e.preventDefault();
    this.props.startCourse(17);
  }

  render() {
    const { dataPage } = this.props;
    // const { boxInfo } = this.props.dataPage;

    return (
      <div className={ 'pageContent ' + (dataPage.type) + ' pL-4 animated fadeIn' }>
        <div className="box-bg-1">
          <img alt = 'Imagen Bg' className = 'pAbs bgGrid-1' src = { dataPage.background.bgGrid }/>
          <img alt = 'Imagen Bg' className = 'pAbs bgGrid-2' src = { dataPage.background.bgGrid }/>
          <img alt = 'Imagen Bg' className = 'pAbs bgGrid-3' src = { dataPage.background.bgGrid }/>
          <img alt = 'Imagen Bg' className = 'pAbs city' src = { dataPage.background.city }/>
          <img alt = 'Imagen Bg' className = 'pAbs semaforo' src = { dataPage.background.semaforo }/>
          <div className="pAbs redLight redL-1"></div>
          <div className="pAbs yellowLight yellowL-1"></div>
          <div className="pAbs greenLight greenL-1"></div>

          <img alt = 'Imagen Bg' className = 'pAbs bici move-1' src = { dataPage.background.bici }/>
        </div>

        <div className="c-45 dF-C-cs">
          <img
            alt = 'Imagen Corporativa'
            className = 'imageLogo mT-3 mB-2'
            src = { dataPage.logoCourse }/>

          <h1 className = 'mB-05 fw-4' dangerouslySetInnerHTML = {{ __html: dataPage.title }}></h1>
          <h2 className = 'fw-4'>{ dataPage.subTitle }</h2>
          <hr className = 'line-2 mB-1' />
          <p className = 'mB-5 fw-3' dangerouslySetInnerHTML = {{ __html: dataPage.courseName }}></p>

          <button
            className = 'buttonStart pT-05 pB-05'
            id = 'btnStart'
            onClick = { this.startCourse }>
            { dataPage.buttonStart }
          </button>

          { /* Restricción de avance <div className = { 'restrict-3 ' + (endActivities === true ? 'dNone' : '') } /> */ }
        </div>

      </div>
    );
  }
}

class Page17 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      countCorrect: 0,
      raw: 0.0,
      winner: true,
      _color: "#FFFFFF",
      _isDraw: false,
      _showFeed: false,
      countCorrectPairing: 0
    }
    this.isChecked = this.isChecked.bind(this);
    this.sendRes = this.sendRes.bind(this);
    this.messageBox = this.messageBox.bind(this);

    this._canvas = null;
    this._root = null;
    this._ctx = null;
    this.draw = this.draw.bind(this);
    this.select = this.select.bind(this);
    this.deselect = this.deselect.bind(this);
    this._x = this._y = 0;
    this._count = 0;
    this._max = 0;
    this._snap = null;
    this._current = null;
  }

  closedPopUp() {
    let popUp = document.getElementById('popUpW');
    popUp.classList.add('closed');
  }

  closedPopUpInfo() {
    let popUp = document.getElementById('popUpInfo');
    popUp.classList.add('closed');
  }

  // SI ES EL PRIMER ELEMENTO APARECE
  firstChild( id ) {
    if ( id === 1) {
      return {
        left: 25
      }
    }
  }

  messageBox() {
    if (this.state.raw >= 80) {
      this.setState({ winner: this.state.winner });
    } else {
      this.setState({ winner: !this.state.winner });
    }
    let messageBox = document.getElementById('popUpW');
    messageBox.classList.remove('closed');
  }

  // recepción del checked
  isChecked(e) {
    let button = document.getElementById('btnSend');
    button.classList.remove('disabled');
    if (e.target.value === "true") { // validación del value como string
      this.setState({ countCorrect: this.state.countCorrect + 1 }); // contador de las preguntas correctas y conteo de seguimiento
    }
  }

  // envío de respuesta
  sendRes() {
    let button = document.getElementById('btnSend');
    button.classList.add('disabled');
    const QUESTS = document.getElementsByClassName('quest').length; // cantidad de preguntas
    let idQuest = 'quest-' + this.state.count; // captura el ID de la pregunta actual
    let idQuestN = 'quest-' + (this.state.count + 1); // captura el ID de la siguiente
    let actualQuest = document.getElementById(idQuest); // captura de objetos del DOM
    let nextQuest = document.getElementById(idQuestN);
    // si la pregunta actual es menor al numero de preguntas cambia a la siguiente pregunta
    if (this.state.count !== QUESTS) {
      actualQuest.style.left = '-100%';
      nextQuest.style.left = '25px';
      console.log('Siguiente pregunta: ' + nextQuest.id);
    } else {
      document.getElementById(idQuest).style['pointer-events'] = "none";
      // this.state.raw = Math.round((this.state.countCorrect / QUESTS) * 100);
      this.state.raw = ((this.state.countCorrect * 100) / QUESTS).toFixed(2);
      // this.state.raw = ((this.state.countCorrect / QUESTS) * 100).toFixed(2);
      const RAW = ((this.state.countCorrect * 100) / QUESTS).toFixed(2);
      // const RAW = ((this.state.countCorrect / QUESTS) * 100).toFixed(2);
      console.log("Calificacion: " + RAW);

      if (this.state.raw <= 100) {
        this.setState({ raw: this.state.raw });
      } else {
        this.setState({ raw: 100 });
      }

      this.props.setScore(RAW);
      this.messageBox(); // FUNCION PARA MOSTRAR EL MENSAJE
      // emitter.emit("final", "m16");
    }
    this.setState({ count: this.state.count + 1 });
  }

  // PAIR

  componentDidMount() {
    const { dataPage } = this.props;
    this._canvas = this.refs["lienzo"];
    this._root = this._canvas.parentNode.parentNode;
    this._canvas.width = this._canvas.offsetWidth;
    this._canvas.height = this._canvas.offsetHeight;
    this._ctx = this._canvas.getContext('2d');
    this._max = dataPage.quiz[4].info.labels.length;
    console.log("pair Máximo: " + this._max);
    // this.state.countCorrectPairing = 1;
  }

  draw(ev) {
    if (!this.state._isDraw)
      return;
    this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
    this.drawLine(ev);
  }

  drawLine(ev) {
    this._ctx.putImageData(this._snap, 0, 0);
    let client = this._canvas.getBoundingClientRect();
    this._ctx.beginPath();
    this._ctx.moveTo(1, this._y);
    this._ctx.lineTo(ev.pageX - client.left, ev.pageY - client.top);
    this._ctx.strokeStyle = this.state._color;
    this._ctx.stroke();
  }

  //////////////////////////////////

  select(ev) {
    console.log("Clic en la columna A");
    console.log(ev.target);
    if(ev.target.classList.contains("lock")) return;

    if(this.state._isDraw) {
      this.resetCanvas();
    }

    this._current = ev.target; // Current columna A
    this._current.style.background = this._current.dataset.color;

    let client = this._canvas.getBoundingClientRect();
    this._x = ev.pageX - client.left;
    this._y = ev.pageY - client.top;
    this.setState({_isDraw: true, _color:this._current.dataset.color});
    this._snap = this._ctx.getImageData(0,0, this._ctx.canvas.width, this._ctx.canvas.height);
  }

  //////////////////////////////////

  deselect(ev) {
    this._x = this._y = 0;
    console.log("Clic en la columna B");
    console.log(ev.target);

    // let isFinish = false;
    if (!this.state._isDraw) {
      return
    }

    // this.resetCanvas();

    this.setupAdvance(ev.target, this._current.id);

    this.setState({_isDraw: false});
  }

  resetCanvas() {
    this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
  }

  //////// cambio de color en las opciones cuando se seleccionan las correctas


  setupAdvance( tg, dtg ){
    console.log("Recibido columna B: " + tg.dataset.pair);
    console.log("Recibido columna A: " + dtg);
    let targetOptionParent=null
    let targetSelectParent =null;
    // let countPair = 0;


    tg.style.background=this.state._color;
    targetOptionParent = tg.parentNode.querySelector(".box-rounded");
    // targetOptionParent.style.background=this.state._color;
    // targetOptionParent.querySelector(".p-o").style.color = "white";
    targetOptionParent.classList.remove("border")

    targetSelectParent = this._current.parentNode.querySelector(".box-rounded");
    // targetSelectParent.style.background=this.state._color;
    // targetSelectParent.querySelector(".p-o").style.color = "white";
    targetSelectParent.classList.remove("border")

    this._current.classList.add("lock");
    this._count++;

    if (dtg === tg.dataset.pair) {
      if (this.state.countCorrectPairing === 0) {
        console.log("primera pareja");
        this.state.countCorrectPairing = 1
        // this.setState({ countCorrectPairing: countPair })
      } else {
        console.log("otras parejas");
        this.state.countCorrectPairing = this.state.countCorrectPairing + 1
        // this.setState({ countCorrectPairing: this.state.countCorrectPairing + 1 })
      }

      console.log("Empajeradas buenas: " + this.state.countCorrectPairing);
    }

    // SI ES EL MAXIMO ES PORQUE TERMINÓ
    if(this._count === this._max) {
      console.log(this._max);
      let button = document.getElementById('btnSend');
      button.classList.remove('disabled');
      if (this.state.countCorrectPairing === this._max) {
        this.setState({ countCorrect: this.state.countCorrect + 1 }); // contador de las preguntas correctas y conteo de seguimiento
        console.log("Se suma un punto");
      } else {
        console.log("Parejas buenas: " + this.state.countCorrectPairing);
        let puntoParcial = (this.state.countCorrectPairing * 1) / this._max;
        this.setState({ countCorrect: this.state.countCorrect + puntoParcial });
        console.log("Punto Parcial: " + puntoParcial);
        console.log("Suma Completa: " + (this.state.countCorrect + puntoParcial));
        console.log("Se suma una decima");
      }

    }
  }
  //
  // <div className="popUp-bg dflex-r-jc-vc" id="popUpInfo">
  //   <div className="popUp dflex-c-jc-vc">
  //     <h2 className="popUpTitle text-center mb-1">
  //       { dataPage.final.title }
  //     </h2>
  //     <hr className="popUpHr2 mb-2"/>
  //     <p className="desc_cont text-center" dangerouslySetInnerHTML={ {__html: dataPage.final.text} } />
  //
  //     <button className="popUp-Close" id="btn-close" onClick={ this.closedPopUpInfo }>
  //       X
  //     </button>
  //   </div>
  // </div>


  // <div className="quiz-section mb-3">
  //   <h3 className="title">
  //     { dataPage.info.title }
  //   </h3>
  // </div>

  render() {

    const { dataPage } = this.props;

    return(
      <div className = 'pageContent evaluation'>
        <div className='dF-C-ss mB-7'>
          <img alt = '' className = 'mL-7 c-5' src = { dataPage.bgTitle }/>
          <div className = 'section-title pL-2 pT-025 pB-025 mT-4 pAbs c-3'>
            <h3 className = 'color-4' dangerouslySetInnerHTML = {{ __html: dataPage.title2 }} />
          </div>
          <img alt = '' className = 'pAbs' src = { dataPage.imgTitle } style={ {'left': dataPage.imgTitlePos.posX, 'top': dataPage.imgTitlePos.posY} }/>
        </div>
        <div className="quiz-contg dflex-c-fs-fs mT-7 pL-3 pT-2">
          <div className="popUp-bg dflex-r-jc-vc closed" id="popUpW">
            <div className="popUp dflex-c-jc-vc">
              <h2 className="popUpTitle text-center mb-1">
                { this.state.winner ? dataPage.feed.winner.title : dataPage.feed.lose.title }
              </h2>
              <hr className="popUpHr mb-2"/>
              <div className={"popCircleRaw dflex-r-jc-vc mb-2 " + (this.state.winner ? 'winner' : 'lose') }>
                <p className="desc_cont text-certe popUpRaw">
                  { this.state.raw } %
                </p>
              </div>
              <p className="desc_cont text-center mb-2">
                { this.state.winner ? dataPage.feed.winner.text : dataPage.feed.lose.text }
              </p>
              <p className={ 'desc_cont text-center popUpInstruccion ' + (this.state.winner ? 'winner' : 'lose') }>
                { dataPage.feed.instruction.text }
              </p>
            </div>
          </div>



          <div className="quiz-section-quest dflex-c-fs-fs c-95">
            {
              dataPage.quiz.map( e =>
                <div
                  className="quest dflex-c-fs-fs"
                  id={"quest-" + e.id}
                  key={ e.id }
                  style={ this.firstChild( e.id ) }
                >
                  <div className="quiz-alert dflex-r-jc-vc mb-1">
                    <p className="text mr-1">{ e.instruccion.text }</p>
                  </div>



                  <div className="quest-col">
                    <div className="dflex-r-fs-fs mb-05">
                      <p className="quest-number mr-1">
                        { e.id }.
                      </p>

                      <p className="quest-statement">
                        { e.quest }
                      </p>
                    </div>

                    <hr className="mB-1"/>

                    {
                      e.id !== 5 ?
                      e.list.map( opt =>
                      <div className="quest-option mT-1 ml-3" id={ "qOption-" + opt.option } key={ opt.option }>

                        <label>
                          <p className=""> { opt.label } </p>
                          <input
                            className="quest-radio"
                            name={"quest-" + e.id}
                            value={ opt.correct }
                            onChange={ this.isChecked }
                          type="radio"/>
                          <span className="checkmark">
                            <p>{ opt.option }</p>
                          </span>
                        </label>

                      </div>) :
                      <div onMouseMove={this.draw} className="pairin-cont c-10 dflex-r-jb-vfs">
                        <div className="colum-1">
                          {
                            e.info.labels.map((el, ix) => {
                              return(
                                <div key={ix} className="option-cont dflex-r-jb-vc">
                                  <div className="p box-rounded border dflex-r-fs-vc">
                                    <p className="p-o">{el.p}</p>
                                  </div>
                                  <div className="point ml-1" id={el.pair} data-color={e.info.colors} onClick={this.select}></div>
                                </div>
                              )
                            })
                          }
                        </div>
                        <canvas ref="lienzo"  id="lienzo" ></canvas>
                        <div className="colum-2 c-4">
                          {
                            e.info.texts.map((el, ix) => {
                              return(
                                <div key={ix} className="option-cont dflex-r-jb-vc">
                                  <div className="point mr-1" data-pair={el.pair} onClick={this.deselect}></div>
                                  <div className="p box-rounded border"  >
                                    <p className="p-o">{el.p}</p>
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                    }
                  </div>
                </div> )
            }
          </div>
          <div className="quiz-section-button">
            <button
              className="buttonSend disabled"
              id="btnSend"
              onClick={ this.sendRes }
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export {
  Cover, Page1, Page2,
  Page3, Page4, Page5,
  Page6, Page7, Page8,
  Page9, Page10, Page11,
  Page12, Page13, Page14,
  Page15, Page16, Page17 };

  // style={ this.firstChild( e.id ) }
