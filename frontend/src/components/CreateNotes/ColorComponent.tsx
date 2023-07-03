import { BgColorsOutlined } from '@ant-design/icons';
import React, { useRef } from 'react';

interface ColorComponentProps {
  setColor: (color: string) => void;
}

function ColorComponent({ setColor }: ColorComponentProps) {
  const colorInputRef = useRef<HTMLInputElement | null>(null);

  const handleColor = () => {
    if (colorInputRef.current) {
      colorInputRef.current.click();
    }
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColor = event.target.value;
    setColor(selectedColor);
  };

  return (
    <div>
      <BgColorsOutlined className="text-slate-500" onClick={ handleColor } />
      <input
        ref={ colorInputRef }
        type="color"
        className="absolute top-0 left-0 opacity-0 cursor-pointer"
        onChange={ handleColorChange }
      />
    </div>
  );
}

export default ColorComponent;
