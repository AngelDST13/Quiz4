
export default function App() {
  const items = [
    { id: "PROD-001", nombre: "Aceite Sintético 10W40", categoria: "Mantenimiento Vehicular", ubicacion: "Bay 14-B", stock: 5, minimo: 15, estado: "REORDEN URGENTE", accion: "PO #8904 Auto-Drafted" },
    { id: "PROD-002", nombre: "Filtro de Aire Universal", categoria: "Repuestos Básicos", ubicacion: "Bay 09-C", stock: 42, minimo: 10, estado: "Suficiente", accion: "Healthy - Monitoring" },
    { id: "PROD-003", nombre: "Bujía de Iridio", categoria: "Encendido & Eléctrico", ubicacion: "Bay 03-A", stock: 2, minimo: 20, estado: "REORDEN URGENTE", accion: "Vendor Notified (API)" },
    { id: "PROD-004", nombre: "Pastillas de Freno", categoria: "Sistema de Frenos", ubicacion: "Bay 22-E", stock: 18, minimo: 8, estado: "Suficiente", accion: "Healthy - Monitoring" }
  ];

  const alertasCriticas = items.filter(item => item.stock <= item.minimo);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans p-6">
      {/* Header Bar */}
      <header className="flex justify-between items-center pb-6 mb-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <span className="material-symbols-outlined text-[22px]">hub</span>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wider text-sky-400 uppercase">AetherLogix Orchestrator</h1>
            <p className="text-xs text-slate-400">Control de Inventario & Alertas de Stock Bajo (Integración n8n)</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> n8n Engine Active
          </span>
        </div>
      </header>

      {/* Floating Alert Banner */}
      <div className="glass-card rounded-2xl p-4 border border-sky-500/30 automation-glow mb-6 flex justify-between items-center">
        <div className="flex items-center gap-3.5">
          <span className="material-symbols-outlined text-sky-400 text-2xl">notifications_active</span>
          <div>
            <div className="text-xs text-sky-400 font-semibold tracking-wider">EJECUCIÓN N8N WORKFLOW</div>
            <div className="text-sm font-semibold text-slate-200">{alertasCriticas.length} Productos críticos detectados por debajo del stock mínimo</div>
          </div>
        </div>
        <span className="text-xs text-slate-400 font-mono">Status 200 OK</span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="glass-card rounded-2xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 uppercase font-semibold">Total Monitoreados</span>
          <h2 className="text-3xl font-bold mt-1 text-slate-100 font-mono">{items.length} SKUs</h2>
        </div>
        <div className="glass-card rounded-2xl p-5 border border-rose-500/30 critical-pulse-glow">
          <span className="text-xs text-rose-400 uppercase font-semibold">Stock Bajo (Alertas)</span>
          <h2 className="text-3xl font-bold mt-1 text-rose-400 font-mono">{alertasCriticas.length} Críticos</h2>
        </div>
        <div className="glass-card rounded-2xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 uppercase font-semibold">Frecuencia de Evaluación</span>
          <h2 className="text-3xl font-bold mt-1 text-emerald-400 font-mono">Cron Daily</h2>
        </div>
      </div>

      {/* Main Table */}
      <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/40 font-semibold text-slate-300 text-sm">
          Watchlist de Umbral de Inventario
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase bg-slate-900/60">
                <th className="p-4">ID Producto</th>
                <th className="p-4">Descripción</th>
                <th className="p-4">Stock Actual</th>
                <th className="p-4">Stock Mínimo</th>
                <th className="p-4">Estado</th>
                <th className="p-4">Acción Automatizada</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {items.map((item) => {
                const esCritico = item.stock <= item.minimo;
                return (
                  <tr key={item.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 font-mono text-sky-400 font-semibold">{item.id}</td>
                    <td className="p-4">
                      <div className="font-semibold text-slate-200">{item.nombre}</div>
                      <div className="text-[11px] text-slate-500">{item.categoria} • {item.ubicacion}</div>
                    </td>
                    <td className="p-4 font-mono font-bold text-sm">
                      <span className={esCritico ? "text-rose-400" : "text-emerald-400"}>{item.stock} unidades</span>
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
    </div>
  );
}