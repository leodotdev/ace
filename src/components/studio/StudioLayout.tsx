'use client';

import { LeftPanel } from './LeftPanel';
import { RightPanel } from './RightPanel';
import { Canvas } from './Canvas';

/**
 * Main studio layout with three-panel design:
 * - Left panel: AI chat, component tree, pages, assets
 * - Center: Resizable canvas with smooth zoom
 * - Right panel: Properties inspector for selected elements
 */
export function StudioLayout() {
  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Left Panel - Fixed width with tabs */}
      <div className="w-80 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex-shrink-0">
        <LeftPanel />
      </div>

      {/* Main Canvas Area - Flexible width */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Canvas Toolbar */}
        <div className="h-12 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 flex items-center px-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Canvas - 100% zoom
          </div>
        </div>
        
        {/* Canvas Container */}
        <div className="flex-1 relative overflow-hidden">
          <Canvas />
        </div>
      </div>

      {/* Right Panel - Fixed width */}
      <div className="w-80 bg-gray-50 dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 flex-shrink-0">
        <RightPanel />
      </div>
    </div>
  );
}