import React, { useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropWrapper from "./components/DropWrapper";
import Col from "./components/Col";
import Item from "./components/Item";
import useStore from "../../store/store";

const CarearPlaning = () => {
  const statuses = useStore((state) => state.statuses);
  const updateItemStatus = useStore((state) => state.updateItemStatus);
  const swapItemsById = useStore((state) => state.swapItemsById);

  const handleUpdateItemStatus = useCallback(
    (itemId, currentStatus, newStatus) => {
      if (currentStatus !== newStatus) {
        updateItemStatus(itemId, currentStatus, newStatus);
      }
    },
    [updateItemStatus]
  );

  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <div>
          <div className="flex justify-center  p-5">
            <p className="text-3xl font-semibold">Dashboard</p>
          </div>
        </div>
        <div className="flex justify-center">
          {statuses.map((s) => {
            console.log("s::: ", s);
            return (
              <div key={s.status} className="flex flex-col m-4 p-4 rounded-lg">
                <div className="flex justify-between">
                  <h2
                    className="text-center text-xl"
                    style={{ color: s.color }}
                  >
                    {s.status.toUpperCase()}
                  </h2>
                </div>
                <DropWrapper onDrop={handleUpdateItemStatus} status={s.status}>
                  <Col>
                    {s.items
                      .filter((i) => i.status === s.status)
                      .map((i, idx) => (
                        <Item
                          key={i.id}
                          item={i}
                          index={idx}
                          swapItemsById={swapItemsById}
                          status={s}
                        />
                      ))}
                  </Col>
                </DropWrapper>
              </div>
            );
          })}
        </div>
      </DndProvider>
    </div>
  );
};

export default CarearPlaning;
