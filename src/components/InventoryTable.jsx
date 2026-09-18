

export default function InventoryTable({ items, filter, setFilter, searchTerm, setSearchTerm, onUpdateStock }) {
  const filteredItems = items.filter(item => {
    const matchesSearch = item.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || item.id.toLowerCase().includes(searchTerm.toLowerCase());
    const isCritical = item.stock <= item.minimo;
    if (filter === 'critical') return matchesSearch && isCritical;
    if (filter === 'ok') return matchesSearch && !isCritical;
    return matchesSearch;
  });

  return (
    <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden">
      {/* Controles Interactivos */}
      <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/40 flex flex-wrap justify-between items-center gap-4">
        <div className="relative flex-1 min-w-[240px]">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-500 text-[18px]">search</span>
          <input
            type="text"
            placeholder="Buscar por producto o ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950/60 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-sky-500"
          />
        </div>
        <div className="flex gap-2">
          <button onClick={() => setFilter('all')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${filter === 'all' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' : 'text-slate-400 hover:bg-slate-800'}`}>Todos</button>
          <button onClick={() => setFilter('critical')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${filter === 'critical' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' : 'text-slate-400 hover:bg-slate-800'}`}>Críticos</button>
          <button onClick={() => setFilter('ok')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${filter === 'ok' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'text-slate-400 hover:bg-slate-800'}`}>Suficientes</button>
        </div>
      </div>

      {/* Tabla de Datos */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 uppercase bg-slate-900/60">
              <th className="p-4">ID Producto</th>
              <th className="p-4">Descripción</th>
              <th className="p-4">Stock Actual (Ajustar)</th>
              <th className="p-4">Stock Mínimo</th>
              <th className="p-4">Estado</th>
              <th className="p-4">Acción Automatizada</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filteredItems.map((item) => {
              const esCritico = item.stock <= item.minimo;
              return (
                <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-mono text-sky-400 font-semibold">{item.id}</td>
                  <td className="p-4">
                    <div className="font-semibold text-slate-200">{item.nombre}</div>
                    <div className="text-[11px] text-slate-500">{item.categoria} • {item.ubicacion}</div>
                  </td>
                  <td className="p-4 font-mono font-bold text-sm">
                    <div className="flex items-center gap-2">
                      <button onClick={() => onUpdateStock(item.id, -1)} className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center">-</button>
                      <span className={esCritico ? "text-rose-400" : "text-emerald-400"}>{item.stock}</span>
                      <button onClick={() => onUpdateStock(item.id, 1)} className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold flex items-center justify-center">+</button>
                    </div>
                  </td>
                  <td className="p-4 font-mono text-slate-400">{item.minimo} unidades</td>
                  <td className="p-4">
                    {esCritico ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-rose-500/15 text-rose-300 border border-rose-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span> REORDEN URGENTE
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                        Suficiente
                      </span>
                    )}
                  </td>
                  <td className="p-4 font-mono text-slate-300">{item.accion}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}