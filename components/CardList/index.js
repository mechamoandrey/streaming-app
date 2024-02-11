import Heading from "../Heading";
import Card from "./Card";
import classnames from "classnames";

import "./CardList.scss";

const CardList = ({ moviesArr, title, trending }) => {
  const listClass = classnames("cardList", {
    ["cardList--trending"]: trending,
  });

  const listContentClass = classnames({
    ["trendingContent"]: trending,
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
