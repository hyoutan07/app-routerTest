'use client'

import React, { SetStateAction, useEffect } from 'react';

interface Props {
  items: string[];
  visible: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>
}

const ChildComponent = ({ items, visible, setVisible }: Props) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      // コンポーネントがアンマウントされるときにタイマーをクリアする
      return () => clearTimeout(timer);
    }
  }, [visible, setVisible]);

  return (
    <>
      {visible && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ChildComponent;
