import { ComponentProps, FC, PropsWithChildren } from "react";

import "./Button.scss";

interface ButtonProps extends PropsWithChildren, ComponentProps<"button"> {}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="button" data-testid="button" {...props}>
      {children}
    </button>
  );
};
