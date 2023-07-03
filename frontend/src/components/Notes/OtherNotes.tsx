'use client';

import React, { useState } from 'react';
import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';
import NoteComponent from '../NoteCard/NoteCard';
import { useClient } from '../../Context/store';
import { Note } from '../../types/Note';
import Loading from '../Loading/Loading';

function OtherNotes() {
  const [notesOpen, setIsNotesOpen] = useState(true);
  const { notes, loading } = useClient();
  const toggleNotes = () => {
    setIsNotesOpen(!notesOpen);
  };

  return (
    <div className="flex flex-col  justify-center md:self-start mb-8 w-96 md:w-full">
      <div className="flex items-center ml-14 md:ml-32 mb-2 gap-4">
        <h2>Outras ...</h2>
        <div className="flex items-center ml-6 mb-3 gap-4">
          <button
            onClick={ toggleNotes }
            aria-label="Toggle Navigation"
          >
            {notesOpen ? <DownCircleOutlined
              className=" text-2xl  h-6 w-6 self-end"
              aria-hidden="true"
            /> : <UpCircleOutlined
              className="text-2xl h-6 w-6"
              aria-hidden="true"
            />}
          </button>
        </div>
      </div>
      {notesOpen && (
        <div className="flex flex-wrap gap-8 items-center justify-center w-full ">

          {loading ? (
            <Loading />
          ) : (
            notes?.map((note: Note) => (
              <NoteComponent key={ note.id } note={ note } />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default OtherNotes;
