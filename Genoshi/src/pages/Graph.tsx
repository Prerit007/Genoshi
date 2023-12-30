import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import GraphDetails from '../components/Graph/GraphDetails';

const Graph: React.FC = () => {
  const { graphId } = useParams();
  const [isGraphDetailsOpen, setIsGraphDetailsOpen] = useState(false);

  return (
    <div>
      {/* ... other content */}
      {graphId && (
        <GraphDetails graphId={graphId} onClose={() => setIsGraphDetailsOpen(false)} />
      )}
    </div>
  );
};

export default Graph;
