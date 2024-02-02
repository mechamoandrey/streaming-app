import Card from "./Card";
import styles from "./CardList.module.scss";

const CardList = ({ moviesArr }) => {
  return (
    <ul className={styles.list}>
      {moviesArr.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </ul>
  );
};

export default CardList;
