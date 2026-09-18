
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination-container">
      <button
        className="pagination-btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft size={20} /> Anterior
      </button>
      <span className="page-info">Página {currentPage} de {totalPages || 1}</span>
      <button
        className="pagination-btn"
        disabled={currentPage === totalPages || totalPages === 0}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Siguiente <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;