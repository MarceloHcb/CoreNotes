'use client';

import randomColor from 'randomcolor';
import React, { ChangeEvent, createContext,
  useContext, useEffect, useState } from 'react';
import api from '../axios/config';
import { Note } from '../types/Note';

type ContextProps = {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  favorites: Note[],
  setFavorites: React.Dispatch<React.SetStateAction<Note[]>>
  globalChange: boolean,
  setGlobalChange: React.Dispatch<React.SetStateAction<boolean>>
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
  search: string
  size: {
    width: string,
    height: string,
    open: boolean
  }
  setSize: React.Dispatch<React.SetStateAction<{
    width: string;
    height: string;
    open: boolean;
  }>>
  bgColor: string;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  changeBackground: () => void;
  toggleColorMode: () => void;
};
const Context = createContext<ContextProps>({} as ContextProps);
export const ContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [favorites, setFavorites] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [bgColor, setBgColor] = useState('slate-950');
  const [mode, setMode] = useState('light');
  const [globalChange, setGlobalChange] = useState(false);
  const [search, setSearch] = useState('');

  const [size, setSize] = useState({
    width: '520px',
    height: '550px',
    open: false,
  });

  const changeBackground = () => {
    const randomColorValue = randomColor({ luminosity: mode === 'light' ? 'dark'
      : 'light',
    count: 2 });
    const randomGradient = `linear-gradient(to right, ${randomColorValue[0]}, ${randomColorValue[1]})`;
    setBgColor(randomGradient);
  };
  const toggleColorMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getAllNotes = async () => {
    setLoading(true);
    const result = await api.get('/notes');
    setFavorites(result.data.filter((note: Note) => note.favorite === 0));
    setNotes(result.data.filter((note: Note) => note.favorite === 1));
    setLoading(false);
  };

  useEffect(() => {
    getAllNotes();
  }, [globalChange]);

  return (
    <Context.Provider
      value={ {
        notes,
        setNotes,
        loading,
        setLoading,
        favorites,
        setFavorites,
        globalChange,
        setGlobalChange,
        handleSearch,
        search,
        size,
        setSize,
        bgColor,
        setBgColor,
        changeBackground,
        toggleColorMode,
      } }
    >
      {children}
    </Context.Provider>
  );
};

export const useClient = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useClient must be used within a ClientProvider');
  }

  return context;
};
