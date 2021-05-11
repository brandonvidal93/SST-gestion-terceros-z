import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoxDrop from './subcomponents/DnDZigZag/BoxDrop';
import DragItem from './subcomponents/DnDZigZag/DragItem';
// import ModalInfo3 from './ModalInfo3';

import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './DraggableZigZag.scss';

library.add(fas, fab, far);

class DraggableZigZag extends Component {
  state = {
    showItem: false,
    actualItem: 0,
    showModal: false,
    showInfo: 0,
  }

  hideModal = (e) => {
    let idButton = parseInt(e.currentTarget.id);

    document.getElementById('infoDrop-' + idButton).classList.add('dNone');

    if (this.state.actualItem === 4) {
      this.setState({
        showModal: !this.state.showModal
      });
    }
  }

  countDrag = () => {
    this.setState({
      actualItem: this.state.actualItem + 1
    });

    if (this.state.actualItem === 4) {
      console.log('Fin');

      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    }
  }

  hideModalFinal = (closeModal) => {
    this.setState({
      showModal: closeModal,
      showInfo: 0
    });
  }
  render() {
    const { multimedia } = this.props;
    return (
      <div className = 'draggableZigZag c-10'>
        <DndProvider backend={HTML5Backend}>
          <div>
            {
              multimedia.dragItems.map( (item, i) => {
                return(
                  <div key = { item.drag } className = { this.state.actualItem !== item.drag ? '' : '' }>
                    <DragItem
                      id = { this.state.actualItem }
                      name = { item.data }
                      path = { item.img }
                      posY = { item.pos[this.state.actualItem].Y }
                      posX = { item.pos[this.state.actualItem].X }
                      type = { item.type }
                      yTarget = { item.posYTarget }
                      xTarget = { item.posXTarget }
                      countDrag = { this.countDrag } />
                  </div>
                )
              })
            }
          </div>
          <div>
            {
              multimedia.dropZone.map( (item, i) => {
                return(
                  <div key = { item.drop } >
                    <img
                      alt = 'Img'
                      className = { 'pathImg pAbs ' + (item.drop !== 1 ? 'disabledGray' : '')}
                      id = {'pathImg' + item.drop }
                      src = { item.bgDrop.url }
                      style = {{ 'top': item.bgDrop.posY, 'left': item.bgDrop.posX }} />

                    <BoxDrop
                      i = { item.drop }
                      data ={ item.data }
                      path = { item.img }
                      pathTarget = { item.imgTarget }
                      posY = { item.posY }
                      posX = { item.posX }
                      type = { item.type } />

                    <div
                      className = { 'infoGloble dF-C-cs animated dNone ' + (item.infoBox.posTriang === 'left' ? 'triang-izq fadeInRight' : 'triang-der fadeInLeft') }
                      id = { 'infoDrop-' + item.drop } style = {{ 'width': item.infoBox.width, 'top': item.infoBox.posY, 'left': item.infoBox.posX }}>

                      <h1 className = 'color-4 mB-05 titleCircle tCenter' style = {{ 'backgroundColor': item.infoBox.colorTitle }} >{ item.infoBox.title }</h1>
                      <hr className = 'line-3 c-10 mB-1'></hr>
                      <div className = 'dF-C-cs' dangerouslySetInnerHTML = { {__html: item.infoBox.text} }/>
                      <button
                        className = 'buttonClose'
                        onClick = { this.hideModal }
                        id = { item.drop }
                        >
                        <span className = 'fa-layers fa-fw iconButton' >
                          <FontAwesomeIcon icon="circle" />
                          <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
                        </span>
                      </button>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </DndProvider>
      </div>
    );
  }
}

// <ModalInfo3 dataPage = { multimedia.InfoFinal } hideModal2 = { this.hideModalFinal } showInfo = { this.state.showInfo } showModal = { this.state.showModal }/>

export default DraggableZigZag;
