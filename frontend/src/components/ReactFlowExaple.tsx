import {
  applyNodeChanges,
  ReactFlow,
  Node,
  NodeChange,
  Controls,
  MiniMap,
  BackgroundVariant,
  Background,
  useReactFlow,
} from '@xyflow/react';
import { useState, useCallback, useEffect } from 'react';
import '@xyflow/react/dist/style.css';
import { initialEdges, initialNodes } from '../core/utils/flow';
import { useAuthFlowContext } from '../store/AuthFlowContext';

const ReactFlowInner = ({ nodes }: { nodes: Node[] }) => {
  const { fitView } = useReactFlow();

  useEffect(() => {
    if (nodes.length > 0) {
      setTimeout(() => fitView({ padding: 0.2, duration: 800 }), 100);
    }
  }, [nodes, fitView]);

  return (
    <>
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
    </>
  );
};

const ReactFlowExample = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, _] = useState(initialEdges);
  const { startFlow, seconds } = useAuthFlowContext();

  useEffect(() => {
    if (!startFlow) {
      setNodes([]);
      return;
    }

    let currentIndex = 0;
    const intervalTime = seconds === 'auto' ? 1000 : (seconds * 1000) / 4;
    const interval = setInterval(() => {
      if (currentIndex < initialNodes.length) {
        setNodes((prevNodes) => [...prevNodes, initialNodes[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [startFlow, seconds]);

  const onNodesChange = useCallback((changes: NodeChange[]) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, []);

  return (
    <div className="w-full h-full bg-black relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div style={{ width: '100%', height: '100%' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          fitView
          fitViewOptions={{ padding: 0.2, duration: 800 }}
          attributionPosition="top-right"
          style={{ background: 'transparent' }}
        >
          <ReactFlowInner nodes={nodes} />
        </ReactFlow>
      </div>
    </div>
  );
};

export default ReactFlowExample;
