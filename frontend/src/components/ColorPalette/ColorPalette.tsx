import { BgColorsOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useClient } from '../../Context/store';

interface ColorPalettProps {
  handleColorChange: (color: string) => void;
}

const ColorPalett: React.FC<ColorPalettProps> = ({ handleColorChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { size } = useClient();
  const CircleContainer: React.FC = () => {
    const colors = ['#BAE2FF', '#B9FFDD', '#FFE8AC', '#FFCAB9', '#F99494',
      '#9DD6FF', '#ECA1FF', '#DAFF8B', '#FFA285', '#CDCDCD', '#979797', '#A99A7C'];

    return (
      <div className="grid z-40 grid-cols-6 md:grid-cols-12 gap-2">
        {colors.map((color, index) => (
          <div
            key={ index }
            className={ `w-10 h-10 rounded-full bg-${color}` }
            onClick={ () => handleColorChange(color) }
            style={ { backgroundColor: color } }
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className={ `flex items-center w-full z-40 justify-start absolute 
    ${size.width !== '160px ' ? 'right-10' : 'text-2xl'} ` }
    onClick={ () => setIsOpen(!isOpen) }
    >
      <BgColorsOutlined key="ellipsis" />
      {isOpen && (
        <div className="absolute -left-8  top-8 md:top-9 p-2 bg- w-max 
    bg-white border border-gray-300 rounded-lg shadow" >
          <CircleContainer />
        </div>
      )}
    </div>
  );
};

export default ColorPalett;
