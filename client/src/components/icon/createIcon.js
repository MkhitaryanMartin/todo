import { Player } from '@lordicon/react';
import {useEffect, useRef, useState} from 'react';
import "./style.css"

export default function CreateIcon({
  icon,
  size=25,
  color="",
  event= "mouseEnter",
  checked= false,
  className=""
}) {
const playerRef = useRef(null);

const [direction, setDirection] = useState(checked ? 1:-1);

useEffect(() => {
  playerRef.current?.play();
}, [direction]);

const onIconClick = () => {
  setDirection(direction === 1 ? -1 : 1);
}

return (
    <div
    className={`icon-default icon-${className}`}
    onMouseEnter={event === "mouseEnter" ? onIconClick : undefined}
    onClick={event === "click" ? onIconClick : undefined}
    >
      <Player
        ref={playerRef}
        size={size}
        icon={icon}
        state=""
       colorize={color}
      direction={direction}
      />
    </div>
);
}

