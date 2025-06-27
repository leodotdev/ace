'use client';

/**
 * Right panel properties inspector:
 * - Shows properties for currently selected element(s)
 * - Allows editing of styles, attributes, and content
 * - Supports multi-selection editing
 * - Tailwind class editor with autocomplete
 * - BaseUI component property editor
 */
export function RightPanel() {
  return (
    <div className="h-full flex flex-col">
      {/* Panel Header */}
      <div className="h-12 px-4 flex items-center border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Properties
        </h2>
      </div>

      {/* Properties Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {/* Selection Info */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <div className="font-medium mb-2">Selection</div>
            <div className="text-xs text-gray-500 dark:text-gray-500">
              No elements selected
            </div>
          </div>

          {/* Properties sections will be added here */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <div className="font-medium mb-2">Style Properties</div>
            <div className="text-xs text-gray-500 dark:text-gray-500">
              Select an element to edit its properties
            </div>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            <div className="font-medium mb-2">Component Properties</div>
            <div className="text-xs text-gray-500 dark:text-gray-500">
              BaseUI component properties will appear here
            </div>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            <div className="font-medium mb-2">Tailwind Classes</div>
            <div className="text-xs text-gray-500 dark:text-gray-500">
              Edit Tailwind classes directly
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}