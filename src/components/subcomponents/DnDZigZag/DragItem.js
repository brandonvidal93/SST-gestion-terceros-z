import React from 'react';
import { useDrag } from 'react-dnd';

const style = {
  // marginRight: '1.5rem',
  // marginBottom: '1.5rem',
  cursor: 'move',
  position: 'absolute'
}

const DragItem = ({ name, path, posY, posX, type, yTarget, xTarget, id, countDrag }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: type },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        console.log('ID recibido -> ' + id);
        if (id <= 4) {
          document.getElementById('infoDrop-' + (id + 1) ).classList.remove('dNone');
          if (id < 3 ) {
            document.getElementById('itemDrop' + (id + 2) ).classList.remove('disabledGray');
            document.getElementById('pathImg' + (id + 2)).classList.remove('disabledGray');
          }
          countDrag();
        }
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0.4 : 1

  let top = posY;
  let left = posX;

  return (
    <div ref = { drag } style = {{ ...style, opacity, 'top': top, 'left': left }} id = {'dragBox' } >
      <img
        alt = 'Drag'
        className = ''
        src = { path } />
    </div>
  )
}

export default DragItem;
