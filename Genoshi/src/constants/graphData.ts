export const GRAPH_DATA: { [key: string]: { name: string; dateCreated: string; description: string; papers: { id: string; name: string }[]; image: string } } = {
    'graph1': {
      name: 'Graph 1: Social Network Analysis',
      dateCreated: '2023-12-25',
      description: 'This graph visualizes connections between users on a social media platform.',
      papers: [
        { id: 'paper1', name: 'The Structure of Online Social Networks' },
        { id: 'paper2', name: 'Influence and Diffusion in Social Networks' },
      ],
      image: 'Genoshi/src/assets/Line-Graph1.png',
    },
    'graph2': {
        name: 'Graph 2: Hugging Face',
        dateCreated: '2023-12-28',
        description: 'This graph visualizes the accuracies of the Model.',
        papers: [
          { id: 'paper1', name: 'Hugging Face AI' },
          { id: 'paper2', name: 'CVPR' },
        ],
        image: 'Genoshi/src/assets/line-graph2.webp',
      },
  };
  