import React, { useEffect, useRef } from "react";

const RangeFilter = ({
  min,
  max,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  prigeGap,
}) => {
  const progressRef = useRef(null);

  useEffect(() => {
    if (progressRef.current === null) return;
    if (maxPrice - minPrice < prigeGap) {
      progressRef.current.style.right = `${
        100 - ((minPrice - min) / (max - min)) * 100
      }%`;
      progressRef.current.style.left = `${
        ((maxPrice - min) / (max - min)) * 100
      }%`;
    } else {
      progressRef.current.style.right = `${
        100 - ((maxPrice - min) / (max - min)) * 100
      }%`;
      progressRef.current.style.left = `${
        ((minPrice - min) / (max - min)) * 100
      }%`;
    }
  }, [minPrice, maxPrice]);

  const handleMinPrice = (e) => {
    let value = parseInt(e.target.value);
    if (maxPrice - value >= 1000) {
      setMinPrice(value);
    }
  };

  const handleMaxPrice = (e) => {
    let value = parseInt(e.target.value);
    if (value - minPrice >= 1000) {
      setMaxPrice(value);
    }
  };
  return (
    <div className="mb-3">
      <h3 className="font-semibold">Price Range</h3>
      <div className="my-4">
        <div className="relative h-[4px] bg-gray-300 rounded-md">
          <div ref={progressRef} className="absolute bg-black h-[4px]"></div>
        </div>
        <div className="range_input">
          <input
            type="range"
            min={min}
            max={max}
            defaultValue={min}
            onChange={(e) => setMinPrice(parseFloat(e.target.value))}
          />
          <input
            type="range"
            min={min}
            max={max}
            defaultValue={max}
            onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <input
          className="min_max_price outline-none bg-transparent border border-gray-300 w-2/3 p-1 rounded-md text-sm"
          type="number"
          value={minPrice}
          onChange={handleMinPrice}
        />
        <input
          className="min_max_price outline-none bg-transparent border border-gray-300 w-2/3 p-1 rounded-md text-sm"
          type="number"
          value={maxPrice}
          onChange={handleMaxPrice}
        />
      </div>

      <div className="border-b border-card-color mt-4"></div>
    </div>
  );
};

export default RangeFilter;
