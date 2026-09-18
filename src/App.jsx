import { useState, useEffect } from 'react';
import { getCharacters } from './services/api';
import SearchBar from './components/SearchBar';
import CharacterCard from './components/CharacterCard';
import CharacterModal from './components/CharacterModal';
import Pagination from './components/Pagination';
import Loader from './components/Loader';
import './styles/App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const fetchCharactersData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCharacters(currentPage, searchTerm, statusFilter);
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    } catch (err) {
      setCharacters([]);
      setTotalPages(0);
      setError('No se encontraron personajes que coincidan con los criterios.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharactersData();
  }, [currentPage, statusFilter]);

  const handleSearch = () => {
    setCurrentPage(1);
    fetchCharactersData();
  };

  return (
    <div className="app-container">
      <h1 className="header-title">Rick & Morty Multiverse</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        onSearch={handleSearch}
      />

      {loading && <Loader />}

      {!loading && error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="characters-grid">
            {characters.map((char) => (
              <CharacterCard key={char.id} character={char} onSelect={setSelectedCharacter} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}

export default App;