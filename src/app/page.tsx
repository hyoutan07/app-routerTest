'use client'

import ChildComponent from "@/components/ChildComponent";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState<string[]>([]);
  const [visible, setVisible] = useState<boolean>(false);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    let newItems = [...items, newItem];

    // itemsが5個を超える場合、先頭のアイテムを削除
    if (newItems.length > 5) {
      newItems = newItems.slice(1);
    }

    setItems(newItems);
    setVisible(true);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ChildComponent items={items} visible={visible} setVisible={setVisible} />
    </div>
  );
}
