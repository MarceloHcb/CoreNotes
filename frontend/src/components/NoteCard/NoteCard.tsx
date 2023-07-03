import { v4 as uuidv4 } from 'uuid';
import { CloseOutlined, EditOutlined, PlusCircleOutlined,
  StarFilled, StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React, { useState, useEffect, ChangeEvent,
  MouseEventHandler, FormEventHandler } from 'react';
import { Note } from '../../types/Note';
import api from '../../axios/config';
import { useClient } from '../../Context/store';
import ColorPalette from '../ColorPalette/ColorPalette';

function NoteComponent({ note }: { note: Note }) {
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const [favorite, setFavorite] = useState(note.favorite);
  const [edit, setEdit] = useState(false);
  const { globalChange, setGlobalChange, search } = useClient();
  const [color, setColor] = useState(note.color);
  const { size } = useClient();
  const [show, setShow] = useState<boolean>(true);
  const uuid: string = uuidv4();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleFavorite: MouseEventHandler<HTMLSpanElement> = async (e) => {
    const newFavoriteValue = favorite === 0 ? 1 : 0;
    setFavorite(newFavoriteValue);
    try {
      await api.put(`/notes/${note.id}`, {
        title,
        body,
        color,
        favorite: newFavoriteValue,
      });
      setGlobalChange(!globalChange);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit: MouseEventHandler<HTMLDivElement> = (e) => {
    setEdit(!edit);
  };

  const handleSubmit: FormEventHandler<unknown> = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/notes/${note.id}`, {
        title,
        body,
        color,
        favorite,
      });
      setGlobalChange(!globalChange);
    } catch (error) {
      console.log(error);
    }
    setTitle('');
    setBody('');
  };

  const deleteNote = async () => {
    try {
      await api.delete(`/notes/${note.id}`);
      setGlobalChange(!globalChange);
    } catch (error) {
      console.log(error);
    }
  };

  const { Meta } = Card;

  const handleColorChange = async (value: string) => {
    const selectedColor = value;
    setColor(selectedColor);
    try {
      await api.put(`/notes/${note.id}`, {
        title,
        body,
        color: selectedColor,
        favorite,
      });
      setGlobalChange(!globalChange);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (search !== null && note.title.includes(search)) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [search, note.title]);

  return (
    <div className="flex items-center w-80 justify-center md:w-auto">
      {show && (
        <Card
          style={ { background: note.color, width: size.width, height: size.height } }
          className="flex flex-col justify-between item-center card mb-4 gap-5
          rounded-3xl md:h-96 w-96 text-lg fade-in"
          actions={ [
            <div
              key={ uuid }
              className="flex ml-4 w-8 hover:text-green-500
            md:text-3xl text-2xl items-center justify-start"
            >
              {edit ? (
                <PlusCircleOutlined onClick={ handleSubmit } className="text-green-400" />
              ) : (
                size.width !== '160px' && <EditOutlined key="e" onClick={ handleEdit } />
              )}
            </div>,
            <div
              key={ uuid }
              className="text-2xl md:text-3xl justify-start
            flex hover:text-yellow-500"
            >
              <ColorPalette handleColorChange={ handleColorChange } />
            </div>,
            <div
              key={ uuid }
              className="flex justify-end text-xl md:text-3xl
              hover:text-red-500 mr-4"
            >
              <CloseOutlined
                key="ellipsis"
                className={ `${size.width === '160px' && 'text-xl'}` }
                onClick={ deleteNote }
              />
            </div>,
          ] }
        >
          {edit ? (
            <form onSubmit={ handleSubmit }>
              <input
                type="text"
                id="title"
                value={ title }
                onChange={ handleTitleChange }
                className="w-full mb-2 rounded-md bg-transparent py-2 px-3 border-none
                overflow-y-hidden resize-none focus:border-none outline-none focus:ring-0"
              />
              <textarea
                id="body"
                value={ body }
                maxLength={ 150 }
                onChange={ handleBodyChange }
                className="w-full h-52 bg-transparent overflow-y-hidden resize-none
                focus:border-none outline-none focus:ring-0"
              />
            </form>
          ) : (
            <Meta
              title={
                <>
                  <p
                    className={ `text-xl break-words ${size.width === '160px'
                  && 'flex mt-8 top-20 left-5 font-medium'}` }
                  >
                    {note.title}

                  </p>
                  <hr className={ `mt-4 w-full ${size.width === '160px' && 'hidden'}` } />
                </>
              }
              className="break-words"
              description={
                <p
                  className={ `${size.width === '160px' ? 'hidden'
                    : ''}` }
                >
                  {note.body}
                </p>
                }
              avatar={
                <button className="absolute right-5 top-3">
                  {favorite === 1 ? (
                    <StarOutlined
                      onClick={ handleFavorite }
                      className="text-xl text-yellow-300 "
                    />
                  ) : (
                    <StarFilled
                      onClick={ handleFavorite }
                      className="text-xl text-yellow-300"
                    />
                  )}
                </button>
              }
            />
          )}
        </Card>
      )}
    </div>
  );
}

export default NoteComponent;
