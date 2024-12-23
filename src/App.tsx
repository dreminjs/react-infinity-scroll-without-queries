import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
import { data } from "./constants";


export interface IItem {
  title: string;
}

export type Items = IItem[];

function App() {
  const LIMIT = 1;

  const { ref: refInView, inView } = useInView();

  const [currentArrays, setCurrentArrays] = useState<Items[]>([]);

  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (inView && data.length > index + LIMIT) {
      setCurrentArrays((prev) => [
        ...prev,
        [...data.slice(index, index + LIMIT)],
      ]);
      setIndex((prevIndex) => prevIndex + LIMIT);
    }
  }, [inView, index]);

  return (
    <ul className="list">
      {currentArrays.map((items, itemIndex) =>
        items.map((item, index) => (
          <li key={index} className="item">
            {`${itemIndex + 1} ${item.title}`}
          </li>
        ))
      )}
      <li ref={refInView} />
    </ul>
  );
}

export default App;
