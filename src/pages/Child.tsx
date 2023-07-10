import { useEffect, useState } from "react";

export default function Child({onClick}:{onClick: React.MouseEventHandler<HTMLInputElement>}) {
    const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [color, setColor] = useState([red, green, blue]);

  const handleChange = () => {
    onClick(color)
  }

  useEffect(() => {
    setColor([red, green, blue]);
  }, [red, green, blue]);

  const minmax = {
    minValue: 0,
    maxValue: 255,
  };

  const handleChangeRangeRed: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setRed(Number(e.target.value));
  };
  const handleChangeRangeGreen: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setGreen(Number(e.target.value));
  };
  const handleChangeRangeBlue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setBlue(Number(e.target.value));
  };
    return (
        <div className="rebenok">
        <input
          type="text"
          onChange={(e) => handleChangeRangeRed(e)}
          value={red.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
        />
  
        <input
          type="range"
          min={minmax.minValue}
          max={minmax.maxValue}
          onChange={(e) => handleChangeRangeRed(e)}
          value={red}
        />
        <input
          type="text"
          onChange={(e) => handleChangeRangeGreen(e)}
          value={green.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
        />
  
        <input
          type="range"
          min={minmax.minValue}
          max={minmax.maxValue}
          onChange={(e) => handleChangeRangeGreen(e)}
          value={green}
        />
        <input
          type="text"
          onChange={(e) => handleChangeRangeBlue(e)}
          value={blue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} 
        />
  
        <input
          type="range"
          min={minmax.minValue}
          max={minmax.maxValue}
          onChange={(e) => handleChangeRangeBlue(e)}
          value={blue}
        />
        <div
          style={{
            backgroundColor: `rgb(${color})`,
            width: '100px',
            height: '100px',
          }}
        />
        <input type='button'
        onClick={handleChange} 
        value='Применить цвет' />
      </div>
    )
  }