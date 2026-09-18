
import { Activity, ShieldAlert, HelpCircle } from 'lucide-react';

const CharacterCard = ({ character, onSelect }) => {
  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'alive':
        return <span className="badge alive"><Activity size={14} /> Vivo</span>;
      case 'dead':
        return <span className="badge dead"><ShieldAlert size={14} /> Muerto</span>;
      default:
        return <span className="badge unknown"><HelpCircle size={14} /> Desconocido</span>;
    }
  };

  return (
    <div className="character-card glassmorphism" onClick={() => onSelect(character)}>
      <div className="card-image-wrapper">
        <img src={character.image} alt={character.name} loading="lazy" />
      </div>
      <div className="card-content">
        <h3>{character.name}</h3>
        <div className="card-status">{getStatusBadge(character.status)}</div>
        <p className="species-info"><strong>Especie:</strong> {character.species}</p>
      </div>
    </div>
  );
};

export default CharacterCard;