import React, { useState } from "react";

const CreateGraph: React.FC = () => {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [advancedSettingsExpanded, setAdvancedSettingsExpanded] =
    useState(false);

  const handleSliderChange = (newPosition: number) => {
    setSliderPosition(newPosition);
    setIsPreviewVisible(newPosition > 1);
  };

  return (
    <div className="bg-slate-900 dark:bg-slate-700 h-screen">
      <h1 className="text-3xl font-bold text-purple-400 mb-6 flex justify-center items-center">
        Creating Graph
      </h1>
      <div className="flex justify-center items-center mt-4">
        <div className="max-w-md bg-slate-800 p-8 rounded-lg shadow-xl">
          <button
            className={`bg-gray-700 px-6 py-2 mx-2 rounded-md text-white font-medium shadow-md transition-all duration-300 ${
              !isPreviewVisible
                ? "bg-purple-500 hover:bg-blue-700"
                : "hover:bg-blue-700"
            }`}
            onClick={() => handleSliderChange(0)}
          >
            <div className="slider-option">Form</div>
          </button>
          <button
            className={`bg-gray-700 px-4 py-2 mx-2 rounded-md text-white font-medium shadow-md transition-all duration-300 ${
              isPreviewVisible
                ? "bg-purple-500 hover:bg-blue-700"
                : "hover:bg-blue-700"
            }`}
            onClick={() => handleSliderChange(1.5)}
          >
            <div className="slider-option">Preview</div>
          </button>
        </div>
      </div>
      {isPreviewVisible ? (
        <div className="graph-preview flex items-center justify-center mt-12">
          {/* Render graph visualization here */}
          <svg
            className="w-64 h-64"
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
      ) : (
        <div className="form-container bg-slate-800 p-8 rounded-lg shadow-xl">
          <div className="form-section flex flex-col">
            <h2 className="section-heading text-blue-500 font-bold text-3xl mb-4">
              Graph Information
            </h2>
            <div className="p-6">
              <label className="text-white text-lg font-semibold">
                Graph Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Graph Title"
              />
            </div>
            <div>
              <label className="text-white text-lg font-semibold">
                Graph Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Graph Description"
              />
            </div>
          </div>
          <div className="form-section p-6">
            <h2 className="section-heading text-blue-500">Papers</h2>
            <button className="bg-blue-600 px-4 py-2 text-white rounded-md hover:bg-blue-700">Upload Papers</button>
          </div>
          <div className="form-section p-6">
            <h2 className="section-heading text-blue-500">Graph Settings</h2>
            <div className="p-4">
              <label className="block text-pink-700 text-sm font-bold mb-2">
                Layout:
              </label>

              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="radial">Radial</option>
                <option value="hierarchical">Hierarchical</option>
                <option value="force-directed">Force Directed</option>
              </select>
            </div>
            <div className="p-4">
              <label className="block text-pink-700 text-sm font-bold mb-2">
                Color Scheme:
              </label>

              <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="blue-green">Blue-Green</option>
                <option value="purple-yellow">Purple-Yellow</option>
                <option value="cool-warm">Cool-Warm</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-heading text-blue-500">
              Advanced Settings
              <i
                className={`fas fa-chevron-${
                  advancedSettingsExpanded ? "up" : "down"
                }`}
                onClick={() =>
                  setAdvancedSettingsExpanded(!advancedSettingsExpanded)
                }
              />
            </h2>
            {advancedSettingsExpanded && (
              <div className="p-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Node Size:
                </label>

                <input
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Edge Thickness:
                </label>

                <input
                  type="number"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}
          </div>

          <div className="flex justify-end mt-6">
            <button
              className="bg-pink-500 px-6 py-2 text-white rounded-md hover:bg-pink-700"
              onClick={() => handleSliderChange(1.5)}
            >
              Create Graph
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateGraph;
