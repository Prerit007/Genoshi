import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import GraphDetails from '../components/Graph/GraphDetails';

const Graph: React.FC = () => {
  const { graphId } = useParams();
  const [isGraphDetailsOpen, setIsGraphDetailsOpen] = useState(false);

  return (
    <div>
      {/* ... other content on the Graph page, such as navigation, headings, etc. */}

      {graphId && (
        <GraphDetails graphId={graphId} onClose={() => setIsGraphDetailsOpen(false)} />
      )}

      {/* Trigger to open the GraphDetails dialog, e.g., a button or link */}
      {!graphId && (
        <button onClick={() => setIsGraphDetailsOpen(true)}>
          View Graph Details
        </button>
      )}
    </div>
  );
};

export default Graph;
