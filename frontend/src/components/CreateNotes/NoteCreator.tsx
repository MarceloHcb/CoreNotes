'use client';

import { PlusCircleOutlined, StarFilled, StarOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Card, Space } from 'antd';
import api from '../../axios/config';
import { useClient } from '../../Context/store';
import ColorComponent from './ColorComponent';

const { Meta } = Card;

function NoteCreator() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [color, setColor] = useState('');
  const [favorite, setFavorite] = useState(1);
  const { globalChange, setGlobalChange } = useClient();

  const handleFavorite = (e: React.MouseEvent) => {
    setFavorite(favorite === 0 ? 1 : 0);
  };
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    const selectedColor = color || '#FFFFFF';
    try {
      await api.post('/notes', {
        title,
        body,
        color: selectedColor,
        favorite,
      });
      setGlobalChange(!globalChange);
      setTitle('');
      setBody('');
      setColor('');
    } catch (error:any) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex justify-center rounded-3xl md:rounded-lg mt-40
    items-center md:mt-24  p-1 gap-4 shadow-md "
      style={ { background: color } }
    >
      <Space direction="vertical" size={ 16 }>
        <Card
          className="md:w-128 z-10 rounded-3xl  md:rounded-lg"
          title={
            <input
              type="text"
              id="title"
              value={ title }
              maxLength={ 15 }
              onChange={ (e) => setTitle(e.target.value) }
              placeholder="Título"
              className="border-none  placeholder-black ml-3 text-lg w-full
              overflow-y-hidden resize-none focus:border-none outline-none focus:ring-0"
            />
      }
          extra={ favorite === 1 ? <StarOutlined
            onClick={ handleFavorite }
            className="text-xl flex items-end justify-end text-black"
          />
            : <StarFilled
                onClick={ handleFavorite }
                className="text-xl text-yellow-300  flex items-end justify-end"
            /> }
        >
          <textarea
            maxLength={ 150 }
            value={ body }
            onChange={ (e) => setBody(e.target.value) }
            className="border-none ml-3 placeholder-slate-400 text-lg h-11 w-full
            overflow-y-hidden resize-none focus:border-none outline-none focus:ring-0"
            placeholder={ body || 'Criar nota...' }
          />
          {title && body && (
            <div className="flex items-center justify-between text-xl mx-6 my-0">
              <ColorComponent setColor={ setColor } />
              <PlusCircleOutlined onClick={ handleSubmit } className=" text-green-400 " />
            </div>
          )}
        </Card>
      </Space>
    </div>
  );
}

export default NoteCreator;
