import React from 'react';

interface GraphDetailsData {
  title: string;
  description: string;
  dateCreated: Date;
  // ... other graph data properties
  papers: string[];
}

const sampleGraphData: GraphDetailsData = {
  title: "Sample Graph",
  description: "This is a sample graph for demonstration purposes.",
  dateCreated: new Date(),
  papers: ["Paper 1", "Paper 2", "Paper 3"],
};

const GraphDetails: React.FC<{}> = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="col-span-1 lg:col-start-1">
          <h2 className="text-3xl font-bold mb-4">{sampleGraphData.title}</h2>
          <p className="text-lg text-gray-600 mb-4">
            Date Created: {sampleGraphData.dateCreated.toLocaleDateString()}
          </p>
          <p className="text-lg text-gray-600">{sampleGraphData.description}</p>
        </div>
        <div className="col-span-1 lg:col-start-2">
          <div className="mt-4 lg:mt-0">
            <h3 className="text-xl font-medium mb-2">Related Papers:</h3>
            <ul className="list-disc pl-4">
              {sampleGraphData.papers.map((paper, index) => (
                <li key={index} className="mb-2">
                  {paper}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex items-center justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Edit
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4"
            >
              Share
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphDetails;
