'use client';

import { useClient } from '@/Context/store';
import NoteCreator from '@/components/CreateNotes/NoteCreator';
import FavoriteNotes from '@/components/FavoriteNotes/FavoriteNotes';
import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/NavBar/NavBar';
import OtherNotes from '@/components/Notes/OtherNotes';

export default function Home() {
  const { bgColor } = useClient();
  return (
    <body style={ { background: bgColor } }>
      <header className="w-full ">
        <NavBar />
      </header>
      <main className="flex text-2xl w-full flex-col items-center justify-start gap-6 h-auto p-4">
        <NoteCreator />
        <FavoriteNotes />
        <hr className="border-t-2 w-full border-gray-200  mx-auto my-4" />
        <OtherNotes />
        <Footer />
      </main>
    </body>
  );
}
