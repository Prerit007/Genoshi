import React from 'react';
import { Bar } from 'react-chartjs-2';
interface GraphDetailsData {
  title: string;
  description: string;
  dateCreated: Date;
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
    <div className="container mx-auto p-4 bg-white rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="col-span-1 lg:col-start-1">
          <h2 className="text-2xl font-bold mb-4">{sampleGraphData.title}</h2>
          <p className="text-gray-700 mb-2">
            Date Created: {sampleGraphData.dateCreated.toLocaleDateString()}
          </p>
          <p className="text-gray-700">{sampleGraphData.description}</p>
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4">Related Papers:</h3>
            <ul className="list-disc pl-4">
              {sampleGraphData.papers.map((paper, index) => (
                <li key={index} className="mb-2 text-gray-600">{paper}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-1 lg:col-start-2 bg-gray-100 p-4 rounded-lg flex items-center justify-center">
        <svg
            className="w-72 h-72"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 512 512"
            id="graph"
          >
            <rect
              width="61.63"
              height="203.74"
              x="400.84"
              y="243.09"
              fill="#00acea"
            ></rect>
            <rect
              width="61.63"
              height="145.59"
              x="285.41"
              y="301.24"
              fill="#00acea"
            ></rect>
            <rect
              width="61.63"
              height="203.74"
              x="169.98"
              y="243.09"
              fill="#00acea"
            ></rect>
            <rect
              width="61.63"
              height="110.71"
              x="54.55"
              y="336.12"
              fill="#00acea"
            ></rect>
            <path
              fill="#fedb41"
              d="M280.971,175.548l-.16-.1L220.97,136.883c-.114-.072-.224-.149-.331-.229l3.8-5.148,3.035-4.71,59.86,38.576Z"
            ></path>
            <rect
              width="71.156"
              height="12"
              x="340.502"
              y="139.62"
              fill="#fedb41"
              transform="rotate(-39.959 376.08 145.62)"
            ></rect>
            <rect
              width="82.772"
              height="12"
              x="88.949"
              y="169.87"
              fill="#fedb41"
              transform="rotate(-44.35 130.336 175.871)"
            ></rect>
            <path
              fill="#00efd1"
              d="M188.85 83.15a42.031 42.031 0 1 0 41.99 42A42.042 42.042 0 0 0 188.85 83.15zM316.82 143.14a42 42 0 1 0 41.99 42A42.086 42.086 0 0 0 316.82 143.14zM432.13 59.17a41.99 41.99 0 1 0 41.99 41.99A42.038 42.038 0 0 0 432.13 59.17zM104.224 199.915A42 42 0 1 0 121.86 234.12 41.718 41.718 0 0 0 104.224 199.915z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md"
        >
          Edit
        </button>
        <button
          className="px-6 py-2 bg-gray-500 hover:bg-gray-700 text-white font-medium rounded-lg shadow-md"
        >
          Share
        </button>
        <button
          className="px-6 py-2 bg-red-500 hover:bg-red-700 text-white font-medium rounded-lg shadow-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default GraphDetails;
