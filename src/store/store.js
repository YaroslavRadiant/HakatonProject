import { create } from "zustand";

const useStore = create((set) => ({
  statuses: [
    {
      color: "#EB5A46",
      status: "Відкриті",
      items: [
        {
          id: 1,
          title: "Human Interest Form",
          status: "Відкриті",
          content: "Fill out human interest distribution form",
          date: 1,
        },
        {
          id: 2,
          title: "Purchase present",
          status: "Відкриті",
          content: "Get an anniversary gift",
          date: 2,
        },
        {
          id: 3,
          title: "Invest in investments",
          status: "Відкриті",
          content: "Call the bank to talk about investments",
          date: 3,
        },
      ],
    },
    {
      color: "#CC397B",
      status: "В процессі",
      items: [
        {
          id: 5,
          title: "Purchase present",
          status: "В процессі",
          content: "Get an anniversary gift",
          date: 1,
        },
      ],
    },
    {
      color: "#C377E0",
      status: "Потребує перевірки",
      items: [
        {
          id: 6,
          title: "Purchase present",
          status: "Потребує перевірки",
          content: "Get an anniversary gift",
          date: 1,
        },
      ],
    },
    {
      color: "#3981DE",
      status: "Готово",
      items: [
        {
          id: 7,
          title: "Purchase present",
          status: "Готово",
          content: "Get an anniversary gift",
          date: 1,
        },
      ],
    },
  ],

  updateItemStatus: (itemId, currentStatus, newStatus) =>
    set((state) => {
      if (!itemId || !currentStatus || currentStatus === newStatus) return;

      const currentIndex = state.statuses.findIndex(
        (status) => status.status === currentStatus
      );
      const newIndex = state.statuses.findIndex(
        (status) => status.status === newStatus
      );

      if (currentIndex === -1 || newIndex === -1) return;

      const itemToMove = state.statuses[currentIndex].items.find(
        (item) => item.id === itemId
      );
      const newItem = { ...itemToMove, status: newStatus };

      const updatedStatuses = state.statuses.map((status, index) => {
        if (index === currentIndex) {
          return {
            ...status,
            items: status.items.filter((item) => item.id !== itemId),
          };
        } else if (index === newIndex) {
          return {
            ...status,
            items: [...status.items, newItem],
          };
        } else {
          return status;
        }
      });

      return { statuses: updatedStatuses };
    }),

  swapItemsById: (dragIndex, hoverIndex, itemsStatus) =>
    set((state) => {
      const statusIndex = state.statuses.findIndex(
        (status) => status.status === itemsStatus
      );
      const updatedItems = [...state.statuses[statusIndex].items];
      const temp = updatedItems[dragIndex];
      updatedItems[dragIndex] = updatedItems[hoverIndex];
      updatedItems[hoverIndex] = temp;

      const updatedStatuses = [...state.statuses];
      updatedStatuses[statusIndex] = {
        ...updatedStatuses[statusIndex],
        items: updatedItems,
      };

      return { statuses: updatedStatuses };
    }),

  addItem: (newItem) =>
    set((state) => {
      const updatedStatuses = state.statuses.map((status) => {
        if (status.status === newItem.status) {
          return {
            ...status,
            items: [...status.items, newItem],
          };
        }
        return status;
      });

      return { statuses: updatedStatuses };
    }),

  sortItemsByStatus: (sortType, rowStatus) =>
    set((state) => {
      const updatedStatuses = state.statuses.map((status) => {
        if (status.status === rowStatus) {
          let sortedItems;
          if (sortType === "date") {
            sortedItems = [...status.items].sort((a, b) => a.date - b.date);
          } else if (sortType === "content") {
            sortedItems = [...status.items].sort(
              (a, b) => a.content.length - b.content.length
            );
          } else {
            sortedItems = status.items;
          }

          return {
            ...status,
            items: sortedItems,
          };
        }
        return status;
      });

      return { statuses: updatedStatuses };
    }),
}));

export default useStore;
