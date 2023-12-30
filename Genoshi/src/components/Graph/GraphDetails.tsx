import React, { useState, useEffect } from 'react';
import { GRAPH_DATA } from '../../constants/graphData';

interface GraphDetailsProps {
  graphId: string;
  onClose: () => void;
}

const GraphDetails: React.FC<GraphDetailsProps> = ({ graphId, onClose }) => {
  const [graphData, setGraphData] = useState<{
    name: string;
    dateCreated: string;
    description: string;
    papers: { id: string; name: string }[];
    image: string;
  }>({
    name: '',
    dateCreated: '',
    description: '',
    papers: [],
    image: '',
  });

  useEffect(() => {
    const graph = GRAPH_DATA[graphId];
    setGraphData(graph);
  }, [graphId]);

  return (
    <div className="graph-details-dialog">
      <h2>{graphData.name}</h2>
      <p>Created on: {graphData.dateCreated}</p>

      <img src={graphData.image} alt={graphData.name} />

      <p>{graphData.description}</p>

      <ul>
        {graphData.papers.map((paper) => (
          <li key={paper.id}>
            {paper.name}
          </li>
        ))}
      </ul>

      <div className="actions">
        <button onClick={() => onClose()}>Close</button>
        <button>Share</button>
        <button>Favorite</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default GraphDetails;
