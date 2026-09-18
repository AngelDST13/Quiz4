

export default function KpiCards({ total, criticalCount }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="glass-card rounded-2xl p-5 border border-slate-800">
        <span className="text-xs text-slate-400 uppercase font-semibold">Total Monitoreados</span>
        <h2 className="text-3xl font-bold mt-1 text-slate-100 font-mono">{total} SKUs</h2>
      </div>
      <div className="glass-card rounded-2xl p-5 border border-rose-500/30 critical-pulse-glow">
        <span className="text-xs text-rose-400 uppercase font-semibold">Stock Bajo (Alertas)</span>
        <h2 className="text-3xl font-bold mt-1 text-rose-400 font-mono">{criticalCount} Críticos</h2>
      </div>
      <div className="glass-card rounded-2xl p-5 border border-slate-800">
        <span className="text-xs text-slate-400 uppercase font-semibold">Frecuencia de Evaluación</span>
        <h2 className="text-3xl font-bold mt-1 text-emerald-400 font-mono">Cron Daily</h2>
      </div>
    </div>
  );
}