import React, { useState } from 'react';

interface SavedGraphItem {
  id: string;
  title: string;
  dateCreated: Date;
  thumbnailUrl: string;
}

const SavedGraphsList: React.FC<{}> = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showGraphDialog, setShowGraphDialog] = useState(null);

  const savedGraphs: SavedGraphItem[] = [
    {
      id: "1",
      title: "Graph A",
      dateCreated: new Date(),
      thumbnailUrl: "/thumbnails/graph-a.jpg",
    },
    {
      id: "2",
      title: "Graph B",
      dateCreated: new Date(),
      thumbnailUrl: "/thumbnails/graph-b.png",
    },
    {
      id: "3",
      title: "Graph C",
      dateCreated: new Date(),
      thumbnailUrl: "/thumbnails/graph-c.gif",},
      {
        id: "4",
        title: "Graph D",
        dateCreated: new Date(),
        thumbnailUrl: "/thumbnails/graph-d.gif",},
        {
          id: "5",
          title: "Graph E",
          dateCreated: new Date(),
          thumbnailUrl: "/thumbnails/graph-e.gif",}
  ];

  return (
    <div className="container mx-auto px-4 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Saved Graphs</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-1 gap-4">
        {savedGraphs.slice(0, isExpanded ? savedGraphs.length : 4).map((item) => (
          <li key={item.id} className="bg-white shadow rounded-lg p-4 ">
            <h3>{item.title}</h3>
            <p>Date Created: {item.dateCreated.toLocaleDateString()}</p>
            <div className="flex flex-row items-center justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => setShowGraphDialog(item.id)}
              >
                Preview
              </button>
              <button
                className="ml-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Share
              </button>
            </div>
          </li>
        ))}
        {savedGraphs.length > 4 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-full text-center bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300 ${
              isExpanded ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            {isExpanded ? 'Show Less' : 'View More'}
          </button>
        )}
      </ul>
      {showGraphDialog && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <button onClick={() => setShowGraphDialog(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default SavedGraphsList;
