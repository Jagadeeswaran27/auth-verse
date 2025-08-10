import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  ReactFlow,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection,
  Controls,
  MiniMap,
  BackgroundVariant,
  Background,
} from '@xyflow/react';
import { useState, useCallback, useEffect } from 'react';
import '@xyflow/react/dist/style.css';
import { initialEdges, initialNodes } from '../utils/flow';

const ReactFlowExample = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  useEffect(() => {
    const timer = setTimeout(() => {
      // addNewNode();
      addNewEdge();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const onNodesChange = useCallback((changes: NodeChange[]) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, []);

  const onEdgesChange = useCallback((changes: EdgeChange[]) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  }, []);

  const onConnect = useCallback((connection: Connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, []);

  // const addNewNode = () => {
  //   const newNode: Node = {
  //     id: `node-${nodes.length + 1}`,
  //     position: { x: Math.random() * 400, y: Math.random() * 400 },
  //     data: { label: `New Node ${nodes.length + 1}` },
  //     style: {
  //       backgroundColor: '#f0f0f0',
  //       border: '2px solid #000',
  //       borderRadius: '8px',
  //       padding: '10px',
  //     },
  //   };
  //   setNodes((nds) => [...nds, newNode]);
  // };

  const addNewEdge = () => {
    const newEdge: Edge = {
      id: 'expire-login',
      source: 'token-expire',
      target: 'login',
      label: 'Redirect',
      style: {
        stroke: '#ef4444',
        strokeWidth: 3,
        strokeDasharray: '8,8',
      },
      // animated: true,
      className: 'animated-edge',
      labelStyle: { fill: '#ffffff', fontSize: '12px', fontWeight: '500' },
      labelBgStyle: { fill: 'rgba(0, 0, 0, 0.7)', fillOpacity: 0.8 },
    };
    setEdges((eds) => [...eds, newEdge]);
  };

  return (
    <div className="w-full h-1/2 bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <style>
        {`
          .react-flow__node {
            border-radius: 12px !important;
          }
          
          .react-flow__controls {
            background: rgba(0, 0, 0, 0.8) !important;
            border: 1px solid rgba(147, 51, 234, 0.3) !important;
            border-radius: 8px !important;
            backdrop-filter: blur(10px) !important;
          }
          
          .react-flow__controls button {
            background: rgba(147, 51, 234, 0.1) !important;
            border: 1px solid rgba(147, 51, 234, 0.3) !important;
            color: #ffffff !important;
            border-radius: 4px !important;
          }
          
          .react-flow__controls button:hover {
            background: rgba(147, 51, 234, 0.2) !important;
            box-shadow: 0 0 10px rgba(147, 51, 234, 0.3) !important;
          }
          
          .react-flow__minimap {
            background: rgba(0, 0, 0, 0.8) !important;
            border: 1px solid rgba(147, 51, 234, 0.3) !important;
            border-radius: 8px !important;
            backdrop-filter: blur(10px) !important;
          }
          
          .react-flow__attribution {
            background: rgba(0, 0, 0, 0.8) !important;
            color: rgba(255, 255, 255, 0.7) !important;
            border-radius: 4px !important;
            border: 1px solid rgba(147, 51, 234, 0.3) !important;
          }
          
          .animated-edge {
            opacity: 0;
            animation: fadeInEdge 1s ease-in-out forwards;
          }
          
          @keyframes fadeInEdge {
            from {
              opacity: 0;
              stroke-dashoffset: 100;
            }
            to {
              opacity: 1;
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>

      <div style={{ width: '100%', height: '80vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          attributionPosition="top-right"
          style={{ background: 'transparent' }}
        >
          <Controls />
          <MiniMap
            nodeColor={(node) => {
              if (node.style?.backgroundColor) {
                return node.style.backgroundColor as string;
              }
              return '#9333ea';
            }}
            maskColor="rgba(0, 0, 0, 0.8)"
          />
          <Background
            variant={BackgroundVariant.Dots}
            gap={20}
            size={2}
            color="rgba(147, 51, 234, 0.2)"
          />
        </ReactFlow>
      </div>
    </div>
  );
};

export default ReactFlowExample;
