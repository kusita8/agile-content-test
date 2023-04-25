import { FC } from "react";

import { IAnimal } from "src/types/Animal.interface";
import { getClassName } from "src/utils/getClassName";

import "./Result.scss";

interface ResullProps extends IAnimal {
  onClick?: () => void;
  activeDisplay?: boolean;
}

export const Result: FC<ResullProps> = ({
  url,
  title,
  description,
  activeDisplay,
  onClick,
}) => {
  const linkContent = (
    <>
      <div className="result__url">{url}</div>
      <h4>{title}</h4>
    </>
  );

  return (
    <div
      className={getClassName(
        "result",
        activeDisplay && "result--active-display"
      )}
    >
      {activeDisplay ? (
        <a
          className="result__link"
          href={url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {linkContent}
        </a>
      ) : (
        <button className="result__link" onClick={onClick}>
          {linkContent}
        </button>
      )}
      <div className="result__description">{description}</div>
    </div>
  );
};
