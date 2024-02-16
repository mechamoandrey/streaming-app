import Heading from "../Heading";
import Card from "./Card";
import classnames from "classnames";

import "./CardList.scss";

const CardList = ({ moviesArr, title, trending }) => {
  const listClass = classnames("card-list", {
    ["card-list--trending"]: trending,
  });

  const listContentClass = classnames({
    ["trending-content"]: trending,
  });

  return (
    <>
      <Heading title={title} />

      <div className={listContentClass}>
        <ul className={listClass}>
          {moviesArr.map((data, index) => (
            <Card trending={trending} key={index} {...data} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default CardList;
