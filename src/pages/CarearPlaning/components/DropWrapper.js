import React, { useState, useCallback } from "react";
import { useDrop } from "react-dnd";
import useStore from "../../../store/store";

const DropWrapper = ({ onDrop, children, status }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const addItem = useStore((state) => state.addItem);

  const handleAddItem = useCallback(
    (text) => {
      const newItem = {
        id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
        status: status,
        content: text,
        title: "New item!!",
        date: Date.now(),
      };
      addItem(newItem); 
    },
    [status, addItem]
  );

  const handleOnClick = () => {
    handleAddItem(inputValue);
    setIsAdding(false);
    setInputValue("");
  };

  const handleCancel = () => {
    setIsAdding(false);
    setInputValue("");
  };

  const [, drop] = useDrop({
    accept: "ITEM",
    drop: (item) => {
      onDrop(item.id, item.status, status);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className="min-h-80">
   

      {React.cloneElement(children)}

      {isAdding ? (
        <div className="flex" style={{ height: "26px" }}>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="mr-2 border-none w-40 rounded-md h-10"
          />
          <button
            className="border-none bg-white text-black w-14 mr-2 h-10"
            onClick={handleOnClick}
          >
            Add
          </button>
          <button
            className="border-none bg-white text-black w-20 h-10"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="w-full text-black border-dashed border-1 border-black mt-2"
          onClick={() => setIsAdding(true)}
        >
          Add item
        </button>
      )}
    </div>
  );
};

export default DropWrapper;
