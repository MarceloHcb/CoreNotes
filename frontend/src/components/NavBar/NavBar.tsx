import { useState } from 'react';
import { DownCircleOutlined, FormatPainterOutlined, UpCircleOutlined,
  ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import { useClient } from '../../Context/store';
import { SearchBar } from './SearchBar';
import { Logo } from './Logo';

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { handleSearch, changeBackground, globalChange, setGlobalChange,
    toggleColorMode, setSize, size } = useClient();

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleBackGround = () => {
    changeBackground();
    toggleColorMode();
  };

  const handleSize = () => {
    setSize((prevSize) => {
      let newWidth;
      let newHeight;
      if (prevSize.width === '520px') {
        newWidth = '390px';
        newHeight = '438px';
      } else if (prevSize.width === '390px') {
        newWidth = '160px';
        newHeight = '180px';
      } else if (prevSize.width === '160px') {
        newWidth = '520px';
        newHeight = '550px';
      } else {
        newWidth = '450px';
        newHeight = '530px';
      }
      const newOpen = !prevSize.open;
      return {
        width: newWidth,
        height: newHeight,
        open: newOpen,
      };
    });
    setGlobalChange(!globalChange);
  };

  return (
    <nav
      className={ `w-full p-6 md:p-0 bg-opacity-80 z-50 
  fixed top-0 ${!isNavbarOpen ? 'bg-white'
        : 'bg-transparent'} shadow-5xl` }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={ `flex items-center  flex-col  justify-between h-28 md:h-16 w-full
      ${isNavbarOpen ? 'flex-row-reverse ' : 'flex md:flex-row'}` }
        >
          <Logo />
          <div
            className={ `flex-1 flex justify-start ${isNavbarOpen ? 'hidden'
              : 'block'}` }
          >
            <SearchBar handleSearch={ handleSearch } />
          </div>
          <ul
            className="flex items-center absolute top-4 self-end md:self-center
      gap-3 md:gap-6 right-3 md:right-20"
          >
            <button onClick={ handleSize }>
              {size.width === '160px' ? (
                <li className="text-2xl">
                  <ZoomInOutlined />
                </li>
              ) : (
                <li className="text-2xl">
                  <ZoomOutOutlined />
                </li>
              )}
            </button>
            <FormatPainterOutlined className="text-2xl" onClick={ handleBackGround } />
            <button onClick={ toggleNavbar }>
              {isNavbarOpen ? (
                <DownCircleOutlined className="text-2xl h-6 w-6 self-end" />
              ) : (
                <UpCircleOutlined className="text-2xl h-6 w-6" />
              )}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
