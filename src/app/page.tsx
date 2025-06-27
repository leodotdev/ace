import { SimpleLeftPanel } from '@/components/studio/SimpleLeftPanel';
import { SimpleCanvas } from '@/components/studio/SimpleCanvas';

export default function Home() {
  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Left Panel with BaseUI Tabs */}
      <div className="w-80 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex-shrink-0">
        <SimpleLeftPanel />
      </div>

      {/* Main Canvas Area with BaseUI */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="h-12 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 flex items-center px-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Canvas - BaseUI Components
          </div>
        </div>
        <div className="flex-1 relative overflow-hidden">
          <SimpleCanvas />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-80 bg-gray-50 dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 flex-shrink-0">
        <div className="h-12 px-4 flex items-center border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Properties
          </h2>
        </div>
        <div className="p-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Right Panel Ready
          </div>
        </div>
      </div>
    </div>
  );
}