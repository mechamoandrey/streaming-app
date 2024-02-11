import Image from "next/image";
import "./Search.scss";

const Search = ({ placeholder, setSearchValue }) => {
  return (
    <div className="search">
      <div className="search__icon">
        <Image
          src="/assets/icons/icon-search.svg"
          sizes="(min-width: 768px) 32px, 24px"
          alt="Icon Search"
          aria-hidden="true"
          fill
        />
      </div>

      <input
        className="search__input"
        name="search"
        placeholder={placeholder}
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
