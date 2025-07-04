"use client";

import { Input, InputProps } from "@heroui/react";

const CustomInput = (props:InputProps) => {
  return (
    <Input
    classNames={{
      mainWrapper:"w-full",
      ...props.classNames,
    }}
    {...props}
    />
  );
};

export default CustomInput;
