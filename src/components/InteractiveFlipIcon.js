import React, { Component } from 'react';
// import { FontAwesomeIcon } from'@fortawesome/react-fontawesome';

// IMPORT FONT AWESOME LIBRARY
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

import './InteractiveFlipIcon.scss';

// CREATING LIBRARY ICONS
// library.add(fas, fab, far);

class InteractiveFlipIcon extends Component {
  state = {
    count: 1
  }

  flip = e => {
    const { dataPage } = this.props;

    let idBtn = parseInt(e.currentTarget.id);
    e.currentTarget.classList.add('animated', 'flipOutY');

    this.setState({ count: this.state.count + 1 });
    if (this.state.count === dataPage.length) {
      this.props.isEnded(true);
    }
    this.flipShow(idBtn, this.state.count);
  }

  flipShow = (item, count) => {
    setTimeout(function(){
      document.getElementById('info-' + item).classList.remove('dNone');
      document.getElementById('info-' + item).classList.add('animated', 'flipInY');
    }, 800);

    if (count === 3) {
      setTimeout(function(){
        document.getElementById('scrollBox').scrollLeft = 504;
      }, 1500);
    }
  }

  render() {
    const { dataPage } = this.props;
    return (
      <div className = 'interactiveFlipIcon c-8 mL-4' id='scrollBox'>
        {
          dataPage.map((item, i) => {
            return(
              <div className = 'mL-05 mR-05' key = { item.id }>
                <div
                className = 'buttonFlip dF-R-cc'
                id = { item.id }
                onClick = { this.flip } >
                  <div className = 'circleInfoFlip d-Flex j-C aI-C' style = { { 'backgroundColor': item.color } }>
                    <h2 className = 'tCenter color-4' dangerouslySetInnerHTML = {{ __html: item.title }}></h2>
                  </div>
                </div>

                <div className = 'infoFlip d-Flex d-C j-C aI-C dNone' id = { 'info-' + item.id } style = { { 'backgroundColor': item.color } } dangerouslySetInnerHTML = {{ __html: item.text }} />
              </div>

            );
          })
        }
      </div>
    );
  }
}

export default InteractiveFlipIcon;
