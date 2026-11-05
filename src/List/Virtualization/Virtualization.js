import { useState } from "react";

const Virtualization = () => {
  const arr = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  const ITEM_HEIGHT = 40;
  const CONTAINER_HEIGHT = 400;

  const [scrollTop, setScrollTop] = useState(0);

  // 1. Find first visible item
  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);

  // 2. Find how many items can fit
  const visibleCount = Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT);

  // 3. Get only visible items
  const visibleItems = arr.slice(startIndex, startIndex + visibleCount);

  return (
    <div>
      {/* <h2>Virtualization</h2> */}

      <div
        style={{
          height: CONTAINER_HEIGHT,
          overflowY: "auto",
        }}
        onScroll={(e) => setScrollTop(e.target.scrollTop)}
      >
        {/* Fake full list height */}
        <div
          style={{
            height: arr.length * ITEM_HEIGHT,
            position: "relative",
          }}
        >
          {visibleItems.map((item, index) => {
            const actualIndex = startIndex + index;

            return (
              <div
                key={actualIndex}
                style={{
                  height: ITEM_HEIGHT,
                  position: "absolute",
                  top: actualIndex * ITEM_HEIGHT,
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Virtualization;
