'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * Canvas component with smooth zoom and BaseUI controls
 */
export function SimpleCanvas() {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  // Handle wheel zoom with smooth scaling
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    const delta = e.deltaY * -0.001;
    const newZoom = Math.min(Math.max(0.1, zoom + delta), 5);
    
    setZoom(newZoom);
  }, [zoom]);

  // Handle mouse pan
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button === 1 || (e.button === 0 && e.metaKey)) { // Middle click or Cmd+click
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  }, [pan]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Attach wheel event listener for smooth zoom
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('wheel', handleWheel, { passive: false });
      return () => canvas.removeEventListener('wheel', handleWheel);
    }
  }, [handleWheel]);

  return (
    <div 
      ref={canvasRef}
      className="w-full h-full bg-gray-100 dark:bg-gray-800 relative overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Canvas Grid Background */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: `${20 * zoom}px ${20 * zoom}px`,
          transform: `translate(${pan.x}px, ${pan.y}px)`,
        }}
      />

      {/* Canvas Content */}
      <div 
        className="absolute inset-0"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          transformOrigin: '0 0',
          transition: isDragging ? 'none' : 'transform 0.1s ease-out',
        }}
      >
        {/* Canvas Artboard */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 w-96 h-96 relative">
            <div className="p-6 h-full flex flex-col items-center justify-center text-center">
              <div className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                Canvas Ready
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Start building your NextJS app
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                • Wheel to zoom
                • Middle-click to pan
                • BaseUI components everywhere
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styled Zoom Controls (BaseUI doesn't have Button yet) */}
      <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 px-3 py-2">
        <button 
          onClick={() => setZoom(Math.max(0.1, zoom - 0.1))}
          className="w-6 h-6 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
        >
          −
        </button>
        <span className="text-xs text-gray-600 dark:text-gray-400 min-w-12 text-center">
          {Math.round(zoom * 100)}%
        </span>
        <button 
          onClick={() => setZoom(Math.min(5, zoom + 0.1))}
          className="w-6 h-6 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
        >
          +
        </button>
        <button 
          onClick={() => { setZoom(1); setPan({ x: 0, y: 0 }); }}
          className="ml-2 px-2 py-1 text-xs text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}