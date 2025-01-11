import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropWrapper from "./components/DropWrapper";
import Col from "./components/Col";
import Item from "./components/Item";

const CarearPlaning = () => {
  //   const client = useApolloClient();

  //   const { data } = useQuery(GET_ITEMS);

  const data = {
    statuses: [
      {
        color: "#EB5A46",
        status: "open",
        items: [
          {
            id: 1,
            title: "Human Interest Form",
            status: "open",
            content: "Fill out human interest distribution form",
            date: 1,
          },
          {
            id: 2,
            title: "Purchase present",
            status: "open",
            content: "Get an anniversary gift",
            date: 2,
          },
          {
            id: 3,
            title: "Invest in investments",
            status: "open",
            content: "Call the bank to talk about investments",
            date: 3,
          },
        ],
      },
      {
        color: "#CC397B",
        status: "in progress",
        items: [
          {
            id: 5,
            title: "Purchase present",
            status: "in progress",
            content: "Get an anniversary gift",
            date: 1,
          },
        ],
      },
      {
        color: "#C377E0",
        status: "in review",
        items: [
          {
            id: 6,
            title: "Purchase present",
            status: "in review",
            content: "Get an anniversary gift",
            date: 1,
          },
        ],
      },
      {
        color: "#3981DE",
        status: "done",
        items: [
          {
            id: 7,
            title: "Purchase present",
            status: "done",
            content: "Get an anniversary gift",
            date: 1,
          },
        ],
      },
    ],
  };

  const handleUpdateItemStatus = (itemId, currentStatus, newStatus) => {
    if (!itemId || !currentStatus) {
      return;
    }
    if (currentStatus === newStatus) {
      return;
    }
    const currentIndex = data.statuses.findIndex(
      (status) => status.status === currentStatus
    );
    const itemToMove = data.statuses[currentIndex].items.find(
      (item) => item.id === itemId
    );
    const newItem = { ...itemToMove, status: newStatus };
    if (newItem) {
      const updatedItemsInCurrentStatus = data.statuses[
        currentIndex
      ].items.filter((item) => item.id !== itemId);
      const newIndex = data.statuses.findIndex(
        (status) => status.status === newStatus
      );
      if (newIndex !== -1) {
        const updatedItemsInNewStatus = [
          ...data.statuses[newIndex].items,
          newItem,
        ];
        const newData = data.statuses.map((status, index) => {
          if (index === currentIndex) {
            return { ...status, items: updatedItemsInCurrentStatus };
          } else if (index === newIndex) {
            return { ...status, items: updatedItemsInNewStatus };
          } else {
            return status;
          }
        });
        // client.writeQuery({
        //   query: GET_ITEMS,
        //   data: { statuses: newData },
        // });
      }
    }
  };

  const handleSwapItemsById = (dragIndex, hoverIndex, itemsStatus) => {
    const statusIndex = data.statuses.findIndex(
      (variants) => variants.status === itemsStatus
    );
    const updatedItems = [...data.statuses[statusIndex].items];
    const temp = updatedItems[dragIndex];
    if (!updatedItems[dragIndex] || !updatedItems[hoverIndex]) {
      return;
    }
    updatedItems[dragIndex] = updatedItems[hoverIndex];
    updatedItems[hoverIndex] = temp;
    const updatedStatuses = [...data.statuses];
    updatedStatuses[statusIndex] = {
      ...updatedStatuses[statusIndex],
      items: updatedItems,
    };
    // client.writeQuery({
    //   query: GET_ITEMS,
    //   data: { statuses: updatedStatuses },
    // });
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div>
          <div className="flex justify-center  p-5">
            <p className="text-3xl font-semibold">Dashboard</p>
          </div>
        </div>
        {/* qweqweqweqwqe */}
        <div className="flex justify-center">
          {data.statuses.map((s) => {
            console.log("data::: ", data);
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
                          swapItemsById={handleSwapItemsById}
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
    </>
  );
};

export default CarearPlaning;
