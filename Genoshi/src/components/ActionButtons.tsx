import React from "react";

interface ActionButtonsProps {
  onCreateGraphClick: () => void;
  onViewSharedGraphsClick: () => void;
  onManagePapersClick: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onCreateGraphClick,
  onViewSharedGraphsClick,
  onManagePapersClick,
}) => {
  return (
    <div className="flex justify-center items-center mt-6">
      <button
        className="p-4 bg-blue-400 text-white text-bold text-md rounded-md hover:bg-blue-500"
        onClick={onCreateGraphClick}
      >
        {/* <svg
          className="w-6 h-6 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          </svg> */}
        Create Graph
      </button>
      <button
        className="p-4 ml-4 bg-green-400 text-white text-bold text-md rounded-md hover:bg-green-500"
        onClick={onViewSharedGraphsClick}
      >
        {/* <svg
          className="w-6 h-6 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          </svg> */}
        View Shared Graphs
      </button>
      <button
        className="p-4 ml-4 bg-purple-400 text-white text-bold text-md rounded-md hover:bg-purple-500"
        onClick={onManagePapersClick}
      >
        {/* <svg
          className="w-6 h-6 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          </svg> */}
        Manage Papers
      </button>
    </div>
  );
};

export default ActionButtons;
