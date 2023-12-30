import React from 'react';

const FavoriteSection: React.FC<{
  onFavouritesClick: () => void;
  onCollectionsClick: () => void;
}> = ({ onFavouritesClick, onCollectionsClick }) => {
  return (
    <div className="flex items-center justify-center mt-8 p-8">
      <button
        className="bg-pink-400 border border-rose-500 text-white px-4 py-2 rounded-md hover:bg-pink-500 hover:border-rose-600"
        onClick={onFavouritesClick}
      >
        Favourites
      </button>
      <button
        className="ml-4 bg-blue-400 border border-violet-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 hover:border-violet-500"
        onClick={onCollectionsClick}
      >
        Collections
      </button>
    </div>
  );
};

export default FavoriteSection;
