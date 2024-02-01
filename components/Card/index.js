import "./Card.module.scss";

const Card = ({
  title = "Lorem Ipsum",
  date = "1997",
  parentalRating = "+18",
  isMovie = true,
  isbBookmarked = false,
}) => {
  const categoryType = {
    title: isMovie ? "Movie" : "TV Series",
    icon: isMovie ? "movie" : "tv",
  };

  const colorBookmarkSVG = isbBookmarked ? "white" : "none";

  return (
    <li className={styles.card}>
      <div className={styles.imgContent}>
        <Image
          src="/a.png"
          width={164}
          height={110}
          alt="Picture of the author"
        />

        <div className={styles.hoveredContent}>
          <button className={styles.play} aria-label="Clique para assistir">
            <Image
              src="/icon-play.svg"
              width={30}
              height={30}
              alt="Picture of the author"
              className={styles.iconPlay}
            />
            Play
          </button>
        </div>
      </div>
      <button className={styles.favorite} aria-label="Adicionar aos favoritos">
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          xmlns="http://www.w3.org/2000/svg"
          fill={colorBookmarkSVG}
        >
          <path
            d="M10.7112 0.771005L10.7215 0.775484L10.7319 0.779653C10.7992 0.806575 10.8386 0.840492 10.8705 0.886923C10.9032 0.934576 10.9167 0.977859 10.9167 1.03635V12.9636C10.9167 13.0221 10.9032 13.0654 10.8705 13.1131C10.8386 13.1595 10.7992 13.1934 10.7319 13.2203L10.7237 13.2236L10.7156 13.2271C10.7107 13.2292 10.6807 13.2407 10.6094 13.2407C10.5085 13.2407 10.4397 13.2142 10.3686 13.15L6.3572 9.2346L5.83333 8.72327L5.30946 9.2346L1.29754 13.1505C1.21287 13.2276 1.14206 13.25 1.05729 13.25C1.02004 13.25 0.988249 13.2433 0.955471 13.229L0.945175 13.2245L0.934749 13.2203C0.867434 13.1934 0.828051 13.1595 0.796199 13.1131C0.763509 13.0654 0.75 13.0221 0.75 12.9636V1.03635C0.75 0.977859 0.763509 0.934576 0.796198 0.886924C0.828051 0.840491 0.867435 0.806574 0.93475 0.779653L0.945175 0.775484L0.95547 0.771004C0.988248 0.756743 1.02004 0.75 1.05729 0.75H10.6094C10.6466 0.75 10.6784 0.756743 10.7112 0.771005Z"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      </button>

      <div className={styles.texts}>
        <div className={styles.movieDetails}>
          <span className={styles.detail}>{date}</span>

          <span className={styles.detail}>
            <Image
              className={styles.categoryIcon}
              src={`/icon-category-${categoryType.icon}.svg`}
              width={10}
              height={10}
              alt="Picture of the author"
            />

            {categoryType.title}
          </span>
          <span className={styles.detail}>{parentalRating}</span>
        </div>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </li>
  );
};

export default Card;
