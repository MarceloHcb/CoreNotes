import { SearchOutlined } from '@ant-design/icons';
import { ChangeEvent } from 'react';

export function SearchBar({ handleSearch }
: { handleSearch: (event: ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="w-full max-w-sm ml-3 relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center ">
        <SearchOutlined className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        className="block w-full pl-10 pr-3 py-2 rounded-full text-gray-900
      placeholder-gray-500 focus:outline-none focus:placeholder-gray-400
        focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        type="text"
        placeholder="Pesquisar notas"
        onChange={ handleSearch }
      />
    </div>
  );
}
