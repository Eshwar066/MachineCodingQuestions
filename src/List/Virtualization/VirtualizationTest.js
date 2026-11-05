import { useState } from "react";
const VirtualizationTest = () => {
  const arr = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

  const Item_Height = 40;
  const Container_height = 400;
  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.floor(scrollTop / Item_Height);
  const visibleRange = Math.ceil(Container_height / Item_Height);
  const visibleItems = arr.slice(startIndex, startIndex + visibleRange);

  return (
    <div>
      <div
        style={{
          height: Container_height,
          overflowY: "auto",
        }}
        onScroll={(e) => {
          setScrollTop(e.target.scrollTop);
        }}
      >
        <div
          style={{
            height: arr.length * Item_Height,
            position: "relative",
          }}
        >
          {visibleItems.map((item, index) => {
            const actualIndex = startIndex + index;
            return (
              <div
                style={{
                  height: Item_Height,
                  position: "absolute",
                  top: actualIndex * Item_Height,
                }}
                key={actualIndex}
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

export default VirtualizationTest;
