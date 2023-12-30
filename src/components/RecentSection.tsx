import React, { useState } from 'react';

interface RecentActivityItem {
    id: string;
    type: 'graph' | 'collection' | 'query';
    title: string,
    dateCreated: Date;
}

const RecentSection: React.FC<{}> = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const recentActivity: RecentActivityItem[] = [
    { id:"1", type: 'graph', title: 'Graph One', dateCreated: new Date()},
    { id:"2",type: 'collection', title: 'Collection Two', dateCreated: new Date()},
    { id:"3", type: 'query', title: 'Query Three', dateCreated: new Date()},
    { id:"4", type: 'graph', title: 'Graph Four', dateCreated: new Date()},
    { id:"5", type: 'collection', title: 'Collection Five', dateCreated: new Date()},
    { id:"6", type: 'query', title: 'Query Six', dateCreated: new Date()},
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Recent Activity</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {recentActivity.slice(0, isExpanded ? recentActivity.length : 4).map((item) => (
        <div key={item.id} className="bg-white shadow rounded-lg p-4">
          <h3>{item.title}</h3>
          <p>Type: {item.type}</p>
          <p>Date Created: {item.dateCreated.toLocaleDateString()}</p>
        </div>
      ))}
      {recentActivity.length > 4 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-full text-center bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300 ${
            isExpanded ? 'text-blue-600' : 'text-gray-400'
          }`}
        >
          {isExpanded ? 'Show Less' : 'View More'}
        </button>
      )}
    </div>
      </div>

  );
};

export default RecentSection;
