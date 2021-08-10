import { useState, useReducer, useEffect, useRef } from "react";
import { Article, Box } from "./styled/Article";
import Child from "./styled/Child";
import Button from "../Button/Button";
import Center from "../styled/Center";

import { value as initialValue, reducer } from "../Display/reducer/reducer";
import Form from "../Form/Form";
import Input from "../Form/Input";
import Select from "../Select/Select";

const BoxDisplay = ({ count, index, setOption, self, isReset }) => {
  const [{ flexGrow, flexShrink, flexBasis }, dispatch] = useReducer(
    reducer,
    initialValue,
    init => {
      const obj = JSON.parse(localStorage.getItem(`flex${index}`));
      return JSON.parse(localStorage.getItem(`flex${index}`)) || init;
    }
  );
  const renderCount = useRef(0);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch({ type: "UPDATE", payload: { name, value } });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
    localStorage.clear();
  };

  useEffect(() => {
    if (renderCount.current > 2) reset();
  }, [isReset]);

  useEffect(() => {
    localStorage.setItem(
      `flex${index}`,
      JSON.stringify({ flexGrow, flexShrink, flexBasis })
    );
  }, [flexGrow, flexShrink, flexBasis, index]);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <>
      {+count === +index && (
        <Child>
          <Form>
            <Input
              type="number"
              value={flexGrow}
              name="flexGrow"
              onChange={handleChange}
            />
            <Input
              type="number"
              value={flexShrink}
              name="flexShrink"
              onChange={handleChange}
            />
            <Input
              type="text"
              value={flexBasis}
              name="flexBasis"
              onChange={handleChange}
            />
          </Form>
        </Child>
      )}
      <Box
        flexGrow={flexGrow}
        flexShrink={flexShrink}
        flexBasis={flexBasis}
        current={count == index}
        onClick={() => setOption(index)}
      >
        {index}
      </Box>
    </>
  );
};

const useToggle = () => {
  const [bool, setBool] = useState(false);
  const toggle = () => setBool(prevBool => !prevBool);
  return [bool, toggle];
};

const Container = ({ count, reset, setCount, ...rest }) => {
  const counts = Array.from({ length: count });
  const options = Array.from({ length: count }, (_, num) => ({
    value: num + 1,
    id: num + 1,
  }));
  const [option, setOption] = useState(1);
  const onChange = num => setOption(num);
  const [bool, toggle] = useToggle();
  const fullreset = () => {
    reset();
    toggle();
  };
  useEffect(() => {
    //needed when current option is 2, but count gets set to 1
    //then flex options UI vanishes since 1 === 2 is false
    //so when count gets updated to 1, setOption is called and changes option to 1 as well
    setOption(count);
  }, [count]);
  return (
    <>
      <Center>
        <Button onClick={fullreset}>Reset</Button>
      </Center>
      <Select
        value={option}
        options={options}
        type="Select Flex item:"
        onChange={onChange}
      />
      <Article {...rest}>
        {counts.map((_, key) => {
          return (
            <BoxDisplay
              count={option}
              index={key + 1}
              key={key}
              self={rest.self}
              isReset={bool}
              setOption={setOption}
            />
          );
        })}
      </Article>
    </>
  );
};

export default Container;
