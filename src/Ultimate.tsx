import React, { useState,ReactNode } from 'react';
import LeftContent from './leftContent';
import RightContent from './RightContent';

interface UltimateModalProps {
  onClose: () => void;
  leftContent: ReactNode;
  rightContent: ReactNode;
}

function UltimateModal({ onClose, leftContent, rightContent }: UltimateModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-4/5 max-w-5xl rounded-md shadow-2xl flex flex-row">
        <div className="flex-1 p-6 m-2 shadow-lg bg-gray-200 rounded-lg">
          {leftContent}
        </div>
        <div className="flex-1 p-6 m-2 shadow-lg bg-blue rounded-lg">
          {rightContent}
        </div>
      </div>
      <button onClick={onClose} className="absolute top-4 right-4 text-white text-xl">✖</button>
    </div>
  );
}

function Ultimate() {
  const [isModalOpen, setIsModalOpen] = useState(true); // Set modal to open by default

  return (
    <div>
      {isModalOpen && (
        <UltimateModal 
          onClose={() => setIsModalOpen(false)}
          leftContent={<LeftContent />}
          rightContent={<RightContent />}
        />
      )}
    </div>
  );
}

export default Ultimate;
