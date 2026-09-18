

export default function ToastAlert({ count, visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="glass-card rounded-2xl p-4 border border-sky-500/30 automation-glow mb-6 flex justify-between items-center transition-all">
      <div className="flex items-center gap-3.5">
        <span className="material-symbols-outlined text-sky-400 text-2xl">notifications_active</span>
        <div>
          <div className="text-xs text-sky-400 font-semibold tracking-wider">EJECUCIÓN N8N WORKFLOW</div>
          <div className="text-sm font-semibold text-slate-200">{count} Productos críticos detectados por debajo del stock mínimo</div>
        </div>
      </div>
      <button onClick={onClose} className="text-slate-400 hover:text-slate-200 p-1">
        <span className="material-symbols-outlined text-[18px]">close</span>
      </button>
    </div>
  );
}