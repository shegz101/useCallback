import React, { useState } from "react";
import Title from "./Title";
import Button from "./Button";
import Display from "./Display";

const Parent = () => {
  const [salary, setSalary] = useState(2000);
  const [age, setAge] = useState(30);

  const incrementAge = () => {
    setAge(age + 5);
  };

  const incrementSalary = () => {
    setSalary(salary + 100);
  };
  return (
    <div>
      <Title />
      <Display text="age" displayvalue={age} />
      <Button handleClick={incrementAge}>Update Age</Button>
      <Display text="salary" displayvalue={salary} />
      <Button handleClick={incrementSalary}>Update Salary</Button>
    </div>
  );
};

export default Parent;
