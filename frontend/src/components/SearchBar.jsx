import "./SearchBar.css";

const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Buscar nota"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="search-bar__button search-bar__button--all">
        Todas
      </button>
      <button className="search-bar__button search-bar__button--theme">
        N
      </button>
    </div>
  );
};

export default SearchBar;
