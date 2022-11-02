import React, { useEffect, useMemo, useState } from "react";

const Create = React.createContext({
  count: 0
});

export default Create;

export const CreateProvider = (props) => {
  const [count, setCount] = useState(0);
  const numb = 100;
  const add = () => {
    setCount(count + numb);
  };
  useMemo(add, []);
  //add;//Too many re-renders
  useEffect(() => {
    const time = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  }, [count]);
  const num = { count };

  return (
    <Create.Provider value={ num }>
      {props.children}
    </Create.Provider>
  );
};
