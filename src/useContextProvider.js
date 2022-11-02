import { useEffect, useState } from "react";
import Create from "./useContext";

const CreateProvider = (props) => {
  const [count, setCount] = useState(0);
  // useMemo(() => time, [count]);
  useEffect(() => {
    const time = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  });
  const num = { count };

  return <Create.Provider value={num}>{props.children}</Create.Provider>;
};

export default CreateProvider;
