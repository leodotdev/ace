'use client';

import { useState } from 'react';
import { Tabs } from '@base-ui-components/react/tabs';

/**
 * Left panel with tabbed interface for:
 * - AI Chat History: Previous conversations and prompts
 * - Component Tree: Hierarchical view of page structure
 * - Pages: List of pages in the project
 * - Assets: Images, icons, files, and reusable components
 */
export function LeftPanel() {
  const [activeTab, setActiveTab] = useState('ai');

  return (
    <div className="h-full flex flex-col">
      {/* Panel Header */}
      <div className="h-12 px-4 flex items-center border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Studio
        </h2>
      </div>

      {/* Tabs */}
      <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <Tabs.List className="flex border-b border-gray-200 dark:border-gray-800">
          <Tabs.Tab 
            value="ai"
            className="flex-1 px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 data-[selected]:text-blue-600 data-[selected]:border-b-2 data-[selected]:border-blue-600"
          >
            AI Chat
          </Tabs.Tab>
          <Tabs.Tab 
            value="tree"
            className="flex-1 px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 data-[selected]:text-blue-600 data-[selected]:border-b-2 data-[selected]:border-blue-600"
          >
            Tree
          </Tabs.Tab>
          <Tabs.Tab 
            value="pages"
            className="flex-1 px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 data-[selected]:text-blue-600 data-[selected]:border-b-2 data-[selected]:border-blue-600"
          >
            Pages
          </Tabs.Tab>
          <Tabs.Tab 
            value="assets"
            className="flex-1 px-3 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 data-[selected]:text-blue-600 data-[selected]:border-b-2 data-[selected]:border-blue-600"
          >
            Assets
          </Tabs.Tab>
        </Tabs.List>

        {/* Tab Content */}
        <div className="flex-1 overflow-hidden">
          <Tabs.Panel value="ai" className="h-full p-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              AI Chat History
              <p className="mt-2 text-xs">
                Previous conversations and prompts will appear here.
              </p>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="tree" className="h-full p-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Component Tree
              <p className="mt-2 text-xs">
                Hierarchical view of your page structure.
              </p>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="pages" className="h-full p-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Pages
              <p className="mt-2 text-xs">
                List of pages in your NextJS project.
              </p>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="assets" className="h-full p-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Assets
              <p className="mt-2 text-xs">
                Images, icons, files, and reusable components.
              </p>
            </div>
          </Tabs.Panel>
        </div>
      </Tabs.Root>
    </div>
  );
}