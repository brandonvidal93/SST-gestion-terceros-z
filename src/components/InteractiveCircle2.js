import React, {
  Component
} from 'react';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
import {
  library
} from '@fortawesome/fontawesome-svg-core';
import {
  fas
} from '@fortawesome/free-solid-svg-icons';
import {
  fab
} from '@fortawesome/free-brands-svg-icons';
import {
  far
} from '@fortawesome/free-regular-svg-icons';

import './InteractiveCircle2.scss';

library.add(fas, fab, far);

class InteractiveCircle2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      actualItem: 0,
      countItem: 0,
      openGlobe: false
    }
  }

  // <div className = 'circleItems' key = { i } style = { { 'top': item.pos.top, 'left': item.pos.left } }>

  showItems = () => {
    const {
      dataPage
    } = this.props;
    const ITEM = dataPage.multimediaCircular.map((item, i) => {
      return ( <
        div className = 'circleItems'
        key = {
          i
        } >
        <
        button className = {
          'circleButton ' + (i + 1 !== 1 ? 'disabled2' : '')
        }
        id = {
          i + 1
        }
        onClick = {
          this.enableItem
        } > {
          item.text
        } < /button> <
        /div>
      );
    });
    return ITEM;
  }

  enableItem = (e) => {
    const {
      multimediaCircular
    } = this.props.dataPage;
    e.preventDefault();
    const IDITEM = e.target.id;
    let idItem = parseInt(IDITEM);

    document.getElementById(idItem).classList.add('visited');

    if (idItem <= multimediaCircular.length) {
      if (idItem !== this.state.actualItem) {
        this.setState({
          actualItem: idItem
        });
        if (idItem !== multimediaCircular.length) {
          let nextItem = document.getElementById(idItem + 1);
          nextItem.classList.remove('disabled2');
          this.setState({
            countItem: this.state.countItem + 1
          });
        } else {
          this.setState({
            countItem: this.state.countItem + 1
          });
          this.props.isEnded(true); // SI LLEGA EL FINAL DE LA ACT ENVÍA EL TRUE
        }
      }
    }

    if (this.state.countItem === multimediaCircular.length) {
      this.setState({
        countItem: multimediaCircular.length
      });
    }

    this.showGlobe();
  }

  showGlobe = () => {
    this.setState({
      openGlobe: !this.state.openGlobe
    });
  }

  //FUNCION PARA CERRAR LA MODAL Y CAMBIAR EL STATE DE COVER
  hideModal = () => {
    this.showGlobe();
  }

  render() {
    const {
      multimediaCircular
    } = this.props.dataPage;
    const {
      actualItem
    } = this.state;
    // console.log(this.state.countItem);
    return ( <
      div className = 'interactiveCircle2 d-Flex j-Ar aI-C bg-StoyrLine' > {
        // MOSTRAR LOS GLOBOS DE TEXTO
        this.state.openGlobe !== false ?
        <
        div className = 'bgItemGlobe' >
        <
        div
        className = {
          'itemGlobe animated dF-C-cs ' + (multimediaCircular[actualItem - 1].itemInfo.posTriang)
        }
        style = {
          {
            'width': multimediaCircular[actualItem - 1].itemInfo.posGlobe.size,
            'top': multimediaCircular[actualItem - 1].itemInfo.posGlobe.posY,
            'left': multimediaCircular[actualItem - 1].itemInfo.posGlobe.posX
          }
        } >

        <
        h3 className = 'mB-05 color-2' > {
          multimediaCircular[actualItem - 1].itemInfo.title
        } < /h3>

        <
        div className = 'scrollText' >
        <
        p className = 'mB-05'
        dangerouslySetInnerHTML = {
          {
            __html: multimediaCircular[actualItem - 1].itemInfo.text
          }
        }
        /> <
        /div> {
          multimediaCircular[actualItem - 1].itemInfo.img ? < img alt = 'Imagen'
          className = 'image'
          src = {
            multimediaCircular[actualItem - 1].itemInfo.img
          }
          style = {
            {
              "width": '100%'
            }
          }
          /> : null
        } {
          multimediaCircular[actualItem - 1].itemInfo.buttonClose.closedModal === true ?
            <
            button
          className = 'buttonClose'
          onClick = {
            this.hideModal
          }
          style = {
              {
                'top': multimediaCircular[actualItem - 1].itemInfo.buttonClose.posY,
                'right': multimediaCircular[actualItem - 1].itemInfo.buttonClose.posX
              }
            } >
            <
            span className = 'fa-layers fa-fw iconButton' >
            <
            FontAwesomeIcon icon = "circle" / >
            <
            FontAwesomeIcon icon = "times"
          inverse transform = "shrink-6" / >
            <
            /span> <
            /button> : null
        } <
        /div> <
        /div> : null
      }

      {
        this.showItems()
      } <
      /div>
    );
  }
}

export default InteractiveCircle2;