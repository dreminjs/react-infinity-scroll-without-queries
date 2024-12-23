import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";

interface IItem {
  title: string;
}

type Items = IItem[];

function App() {
  const LIMIT = 2;

  const { ref: refInView, inView } = useInView();

  const data: Items = [
    { title: "1" },
    { title: "2" },
    { title: "3" },
    { title: "4" },
    { title: "5" },
    { title: "6" },
    { title: "7" },
    { title: "8" },
    { title: "9" },
    { title: "10" },
    { title: "11" },
    { title: "12" },
    { title: "13" },
    { title: "14" },
    { title: "15" },
    { title: "16" },
    { title: "17" },
    { title: "18" },
    { title: "19" },
    { title: "20" },
    { title: "21" },
    { title: "22" },
    { title: "23" },
    { title: "24" },
    { title: "25" },
    { title: "26" },
    { title: "27" },
    { title: "28" },
    { title: "29" },
    { title: "30" },
    { title: "31" },
    { title: "32" },
    { title: "33" },
    { title: "34" },
    { title: "35" },
    { title: "36" },
    { title: "37" },
    { title: "38" },
    { title: "39" },
    { title: "40" },
    { title: "41" },
    { title: "42" },
    { title: "43" },
    { title: "44" },
    { title: "45" },
    { title: "46" },
    { title: "47" },
    { title: "47" },
    { title: "47" },
    { title: "47" },
    { title: "1" },
    { title: "2" },
    { title: "3" },
    { title: "4" },
    { title: "5" },
    { title: "6" },
    { title: "7" },
    { title: "8" },
    { title: "9" },
    { title: "10" },
    { title: "11" },
    { title: "12" },
    { title: "13" },
    { title: "14" },
    { title: "15" },
    { title: "16" },
    { title: "17" },
    { title: "18" },
    { title: "19" },
    { title: "20" },
    { title: "21" },
    { title: "22" },
    { title: "23" },
    { title: "24" },
    { title: "25" },
    { title: "26" },
    { title: "27" },
    { title: "28" },
    { title: "29" },
    { title: "30" },
    { title: "31" },
    { title: "32" },
    { title: "33" },
    { title: "34" },
    { title: "35" },
    { title: "36" },
    { title: "37" },
    { title: "38" },
    { title: "39" },
    { title: "40" },
    { title: "41" },
    { title: "42" },
    { title: "43" },
    { title: "44" },
    { title: "45" },
    { title: "46" },
    { title: "47" },
    { title: "47" },
    { title: "47" },
    { title: "47" },
    { title: "1" },
    { title: "2" },
    { title: "3" },
    { title: "4" },
    { title: "5" },
    { title: "6" },
    { title: "7" },
    { title: "8" },
    { title: "9" },
    { title: "10" },
    { title: "11" },
    { title: "12" },
    { title: "13" },
    { title: "14" },
    { title: "15" },
    { title: "16" },
    { title: "17" },
    { title: "18" },
    { title: "19" },
    { title: "20" },
    { title: "21" },
    { title: "22" },
    { title: "23" },
    { title: "24" },
    { title: "25" },
    { title: "26" },
    { title: "27" },
    { title: "28" },
    { title: "29" },
    { title: "30" },
    { title: "31" },
    { title: "32" },
    { title: "33" },
    { title: "34" },
    { title: "35" },
    { title: "36" },
    { title: "37" },
    { title: "38" },
    { title: "39" },
    { title: "40" },
    { title: "41" },
    { title: "42" },
    { title: "43" },
    { title: "44" },
    { title: "45" },
    { title: "46" },
    { title: "47" },
    { title: "47" },
    { title: "47" },
    { title: "47" },
  ];

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
  }, [data, inView, index]);

  return (
    <ul className="list">
      {currentArrays.map((items, itemIndex) =>
        items.map((item, index) => (
          <li key={index} className="item">
            {`${itemIndex} item.title`}
          </li>
        ))
      )}
      <li ref={refInView} />
    </ul>
  );
}

export default App;
