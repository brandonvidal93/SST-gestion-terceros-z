import React from 'react';
import { useDrop } from 'react-dnd';

const style = {
  position: 'absolute'
}

const DropWord = ({ posY, posX, type, size, id, colorBorder }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: type,
    drop: () => ({ name: 'Artículos' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const isActive = canDrop && isOver
  if (isActive) {
  } else if (canDrop) {
  }
  return (
    <div className = 'dF-C-cc boxDrop' ref = { drop } style = {{ ...style, 'borderColor': colorBorder, 'top': posY, 'left': posX, 'width': size }} id = { 'boxDrop-' + type } >
      <p className = 'texBox'>Arrastre aquí el texto correspondiente</p>
    </div>
  )
}
export default DropWord;
