import React, { Component } from 'react';
import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './ModalImg.scss';

library.add(fas, fab, far);

class ModalVideo extends Component {
  //FUNCION PARA CERRAR LA MODAL Y CAMBIAR EL STATE DE COVER
  hideModal = () => {
    this.props.showModal();
    document.querySelector('.footer').classList.remove('dNone');
    this.props.isEnded(true);
  }

  render() {
    const { dataModal } = this.props;
    return (
      <div className = 'modalImg animated fadeIn'>
        <div className = 'showModal'>
          <img alt = '' className = '' src = { dataModal.modal.urlImg }/>

          { dataModal.modal.closedModal === true ?
            <button
              className = 'buttonClose'
              onClick = { this.hideModal }
              >
              <span className = 'fa-layers fa-fw iconButton' >
                <FontAwesomeIcon icon="circle" />
                <FontAwesomeIcon icon="times" inverse transform="shrink-6" />
              </span>
            </button> : null
          }
        </div>
      </div>
    );
  }
}

export default ModalVideo;
