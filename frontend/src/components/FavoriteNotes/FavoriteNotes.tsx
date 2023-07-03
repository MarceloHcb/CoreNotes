'use client';

import React, { useState } from 'react';
import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';
import NoteCard from '../NoteCard/NoteCard';
import { useClient } from '../../Context/store';
import { Note } from '../../types/Note';
import Loading from '../Loading/Loading';

function FavoriteNotes() {
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(true);
  const { favorites, loading } = useClient();

  const toggleNotes = () => {
    setIsFavoritesOpen(!isFavoritesOpen);
  };

  return (
    <div className=" flex flex-col  justify-center md:self-start w-96 md:w-full">
      <div className="flex items-center ml-14 md:ml-32 mb-2 gap-4">
        <h2>Favoritas</h2>
        <div className="flex items-center ml-6 mb-3 gap-4">
          <button
            onClick={ toggleNotes }
            aria-label="Toggle Navigation"
          >
            {isFavoritesOpen ? <DownCircleOutlined
              className=" text-2xl h-6 w-6 self-end "
              aria-hidden="true"
            /> : <UpCircleOutlined
              className="text-2xl h-6 w-6 "
              aria-hidden="true"
            />}
          </button>
        </div>
      </div>
      {isFavoritesOpen && (
        <div
          className="flex flex-wrap gap-8 items-center flex-col-reverse
        md:flex-row-reverse justify-center w-full "
        >
          {loading ? (
            <Loading />
          ) : (
            favorites?.map((note: Note) => (
              <NoteCard key={ note.id } note={ note } />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default FavoriteNotes;
