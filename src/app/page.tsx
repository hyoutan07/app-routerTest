'use client'

import ChildComponent from '@/components/ChildComponent';
import React, { useState } from 'react';

type Message = {
  id: number;
  text: string;
};

const ParentComponent = () => {
  const [items, setItems] = useState<string[]>([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    let newItems = [...items, newItem];

    if (newItems.length > 5) {
      newItems = newItems.slice(1);
    }

    setItems(newItems);
    setVisible(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now(), // 一意のIDをタイムスタンプで生成
        text: inputValue,
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  const handleAnimationEnd = (id: number) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  console.log(messages);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ChildComponent items={items} visible={visible} setVisible={setVisible} />
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Enter your message" 
        />
        <button type="submit">Send</button>
      </form>
      
      <div className="dammaku-container">
        <div className="dammaku-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className="dammaku-message"
              onAnimationEnd={() => handleAnimationEnd(message.id)}
            >
              {message.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParentComponent;
