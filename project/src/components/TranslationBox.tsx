import React from 'react';

interface TranslationBoxProps {
  value: string;
  onChange?: (value: string) => void;
  onTranslate?: () => void;
  placeholder?: string;
  readOnly?: boolean;
  actions?: React.ReactNode;
}

export default function TranslationBox({
  value,
  onChange,
  onTranslate,
  placeholder,
  readOnly = false,
  actions,
}: TranslationBoxProps) {
  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey && onTranslate) {
            e.preventDefault();
            onTranslate();
          }
        }}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`w-full h-48 p-4 bg-gray-50 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 outline-none transition-all ${
          readOnly ? 'cursor-default' : ''
        }`}
      />
      
      <div className="absolute bottom-4 right-4 flex items-center space-x-2">
        {actions}
      </div>
    </div>
  );
}