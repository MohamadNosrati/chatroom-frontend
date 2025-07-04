import { addToast } from "@heroui/react";

const successHandler = (message: string) => {
  addToast({
    title: "Toast title",
    description: message,
    color: "success",
  });
};

export default successHandler;
