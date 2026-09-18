
import { X, Globe, MapPin, Tv } from 'lucide-react';

const CharacterModal = ({ character, onClose }) => {
  if (!character) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glassmorphism" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="modal-body">
          <img src={character.image} alt={character.name} className="modal-img" />
          <h2>{character.name}</h2>
          <div className="modal-details">
            <p><strong>Estado:</strong> {character.status}</p>
            <p><strong>Género:</strong> {character.gender}</p>
            <p><strong>Especie:</strong> {character.species}</p>
            <p><Globe size={16} /> <strong>Origen:</strong> {character.origin?.name}</p>
            <p><MapPin size={16} /> <strong>Ubicación actual:</strong> {character.location?.name}</p>
            <p><Tv size={16} /> <strong>Episodios:</strong> {character.episode?.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;