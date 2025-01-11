import React from "react";
// Основний компонент гармошки
const FiltersBar = ({
  techFilter,
  levelFilter,
  setTechFilter,
  setLevelFilter,
}) => {
  return (
    <div className="flex items-center space-x-4 p-4 border-b">
      {/* Фільтр по селекту */}
      <div>
        <label htmlFor="category" className="mr-2">
          Technology
        </label>
        <select
          id="category"
          className="border px-2 py-1 rounded-md"
          value={techFilter}
          onChange={(event) => setTechFilter(event.target.value)}
        >
          <option value="all">All</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Vue">Vue</option>
        </select>
      </div>

      {/* Фільтр по рейнджу */}
      <div>
        <label htmlFor="price-range" className="mr-2">
          Price Range
        </label>
        <input
          type="range"
          id="price-range"
          min="0"
          max="100"
          step="1"
          className="w-32"
          value={levelFilter}
          onChange={(event) => setLevelFilter(event.target.value)}
        />
        <span className="ml-2">{levelFilter}</span>
      </div>
    </div>
  );
};

export default FiltersBar;
