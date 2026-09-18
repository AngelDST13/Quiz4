

export default function Header({ onTriggerSync, isSyncing }) {
  return (
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
      <button 
        onClick={onTriggerSync}
        disabled={isSyncing}
        className="px-4 py-2 rounded-lg bg-sky-500 text-slate-950 hover:bg-sky-400 font-semibold text-xs flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50"
      >
        <span className={`material-symbols-outlined text-[16px] ${isSyncing ? 'animate-spin' : ''}`}>sync</span>
        <span>{isSyncing ? 'Sincronizando con n8n...' : 'Sincronizar Flujo'}</span>
      </button>
    </header>
  );
}