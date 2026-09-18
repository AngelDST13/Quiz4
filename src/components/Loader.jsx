
import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="loader-container">
      <Loader2 className="spinner-icon" size={48} />
      <p>Abriendo portal interdimensional...</p>
    </div>
  );
};

export default Loader;