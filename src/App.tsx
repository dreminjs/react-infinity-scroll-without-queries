import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";

interface IItem {
  title: string;
}

type Items = IItem[];

function App() {
  const LIMIT = 1;

  const { ref: refInView, inView } = useInView();

  const data: Items = [
    { title: "Home" },
    { title: "Work" },
    { title: "Play" },
    { title: "Learn" },
    { title: "Read" },
    { title: "Write" },
    { title: "Code" },
    { title: "Design" },
    { title: "Plan" },
    { title: "Build" },
    { title: "Explore" },
    { title: "Travel" },
    { title: "Dream" },
    { title: "Grow" },
    { title: "Reflect" },
    { title: "Relax" },
    { title: "Focus" },
    { title: "Connect" },
    { title: "Share" },
    { title: "Think" },
    { title: "Help" },
    { title: "Give" },
    { title: "Learn" },
    { title: "Teach" },
    { title: "Discover" },
    { title: "Create" },
    { title: "Inspire" },
    { title: "Solve" },
    { title: "Play" },
    { title: "Work" },
    { title: "Act" },
    { title: "Rest" },
    { title: "Start" },
    { title: "Finish" },
    { title: "Lead" },
    { title: "Follow" },
    { title: "Adapt" },
    { title: "Invent" },
    { title: "Smile" },
    { title: "Laugh" },
    { title: "Love" },
    { title: "Care" },
    { title: "Run" },
    { title: "Jump" },
    { title: "Walk" },
    { title: "Climb" },
    { title: "Think" },
    { title: "Read" },
    { title: "Write" },
    { title: "Grow" },
    { title: "Learn" },
    { title: "Explore" },
    { title: "Dream" },
    { title: "Plan" },
    { title: "Build" },
    { title: "Reflect" },
    { title: "Relax" },
    { title: "Focus" },
    { title: "Connect" },
    { title: "Share" },
    { title: "Discover" },
    { title: "Inspire" },
    { title: "Create" },
    { title: "Help" },
    { title: "Lead" },
    { title: "Follow" },
    { title: "Adapt" },
    { title: "Invent" },
    { title: "Solve" },
    { title: "Act" },
    { title: "Smile" },
    { title: "Laugh" },
    { title: "Love" },
    { title: "Care" },
    { title: "Rest" },
    { title: "Run" },
    { title: "Jump" },
    { title: "Walk" },
    { title: "Climb" },
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
            {`${itemIndex + 1} ${item.title}`}
          </li>
        ))
      )}
      <li ref={refInView} />
    </ul>
  );
}

export default App;
