
import { Search, Filter } from 'lucide-react';

const SearchBar = ({ searchTerm, setSearchTerm, statusFilter, setStatusFilter, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form className="search-bar-container" onSubmit={handleSubmit}>
      <div className="input-group">
        <Search className="input-icon" size={20} />
        <input
          type="text"
          placeholder="Buscar personaje (ej. Rick, Morty)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="select-group">
        <Filter className="input-icon" size={20} />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">Todos los Estados</option>
          <option value="alive">Vivo (Alive)</option>
          <option value="dead">Muerto (Dead)</option>
          <option value="unknown">Desconocido (Unknown)</option>
        </select>
      </div>

      <button type="submit" className="search-btn">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;