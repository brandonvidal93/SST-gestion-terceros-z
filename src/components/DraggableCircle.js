import React, {Component} from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoxDrop from './subcomponents/DnD/BoxDrop';
import DragItem from './subcomponents/DnD/DragItem';
import ModalInfo from './ModalInfo2';

import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './DraggableCircle.scss';

library.add(fas, fab, far);

class DraggableCircle extends Component {
  state = {
    showItem: false,
    actualItem: 0,
    showModal: false,
    showInfo: 0
  }

  hideModal = (e) => {
    // console.log(e.currentTarget.id);
    // let idButton = parseInt(e.currentTarget.id);

    document.getElementById('infoDrop-' + (this.state.actualItem + 1)).classList.add('dNone');

    if (this.state.actualItem === 4) {
      this.setState({
        showModal: !this.state.showModal
      });

      document.querySelector('.footer').classList.add('dNone');
    }
  }

  countDrag = () => {
    this.setState({
      actualItem: this.state.actualItem + 1
    });

    console.log(this.state.actualItem);

    if (this.state.actualItem === 4) {
      // this.setState({
      //   showModal: !this.state.showModal
      // });

      this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
    }
  }

  hideModalFinal = (closeModal) => {
    this.setState({
      showModal: closeModal,
      showInfo: 0
    });
    document.querySelector('.footer').classList.remove('dNone');
  }
  render() {
    const { multimedia } = this.props;
    // console.log(this.state);
    return (
      <div className = 'draggableCircle c-10'>
        <DndProvider backend={HTML5Backend}>
          <div>
            {
              multimedia.dragItems.map( (item, i) => {
                return(
                  <div key = { item.drag } className = { this.state.actualItem + 1 !== item.drag ? 'disabledGray' : '' }>
                    <DragItem
                      id = { item.drag }
                      name = { item.data }
                      path = { item.img }
                      posY = { item.posY }
                      posX = { item.posX }
                      type = { item.type }
                      yTarget = { item.posYTarget }
                      xTarget = { item.posXTarget }
                      countDrag = { this.countDrag } />

                    {/*<div className = 'dragBg' style = { { 'top': item.posY, 'left': item.posX } }>
                      <img
                        alt = 'Drag'
                        className = ''
                        src = { item.img } />
                    </div>*/}
                  </div>
                )
              })
            }
          </div>
          <div>
            {
              multimedia.dropZone.map( (item, i) => {
                return(
                  <div key = { item.drop }>
                    <BoxDrop
                      data ={ item.data }
                      path = { item.img }
                      pathTarget = { item.imgTarget }
                      posY = { item.posY }
                      posX = { item.posX }
                      type = { item.type } />

                    <div
                      className = { 'infoGloble dF-C-cs animated dNone triang-izq fadeInRight' }
                      id = { 'infoDrop-' + (this.state.actualItem + 1) } style = {{ 'width': item.infoBox[this.state.actualItem].width, 'top': item.infoBox[this.state.actualItem].posY, 'left': item.infoBox[this.state.actualItem].posX }}>

                      <h1 className = 'color-4 mB-05 titleCircle tCenter' style = {{ 'backgroundColor': item.infoBox[this.state.actualItem].colorTitle }} >{ item.infoBox[this.state.actualItem].title }</h1>
                      <hr className = 'line-3 c-10 mB-1'></hr>
                      <div className = 'dF-C-cs' dangerouslySetInnerHTML = { {__html: item.infoBox[this.state.actualItem].text} }/>
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
          <ModalInfo dataPage = { multimedia.InfoFinal } hideModal2 = { this.hideModalFinal } showInfo = { this.state.showInfo } showModal = { this.state.showModal }/>
        </DndProvider>
      </div>
    );
  }
}

export default DraggableCircle;
