import { MouseEventHandler, useState } from "react";

interface ListGroupProps {
  ncr: string[];
  heading: string;
  onSelected: (item: string) => void;
}

function ListGroup({ ncr, heading, onSelected }: ListGroupProps) {
  // Bas practice
  // const props.ncr = [];

  const getMessage = () => {
    // return ncr.length === 0 ? <p>No items available</p> : null;
    return ncr.length === 0 && <p>No items available</p>;
  };

  const handleClick = (itemName: String) => {
    console.log(`Clicked ${itemName}`);
  };

  const handleEvent = (event: MouseEventHandler) => console.log(event);

  // React state hook
  // => updates the value(present on left side)
  // on invoking the function(present on right side)
  // by the value passed in the function itself
  const [selectedItemIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {ncr.map((item, index) => (
          <li
            className={
              selectedItemIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => handleClick(item)}
            onClick={() => {
              setSelectedIndex(index);
              onSelected(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
