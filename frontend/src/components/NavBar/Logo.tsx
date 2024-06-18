import Image from 'next/image';

export function Logo() {
  return (
    <div
      className="flex items-center flex-col md:flex-row
    justify-center gap-1 md:gap-4 flex-shrink-0"
    >
      <Image width={ 35 } height={ 35 } src="/images/logo.png" alt="Note" />
      <h2>McloNotes</h2>
    </div>
  );
}
