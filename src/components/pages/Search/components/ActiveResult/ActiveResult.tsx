import { FC } from "react";

import { Result } from "src/components/pages/Search/components/Result/Result";
import { IAnimal } from "src/types/Animal.interface";

import "./ActiveResult.scss";

export const ActiveResult: FC<IAnimal> = (props) => {
  return (
    <div className="activeresult">
      <div className="activeresult__image">
        <img src={props.image} alt={props.title} />
      </div>
      <Result activeDisplay {...props} />
    </div>
  );
};
