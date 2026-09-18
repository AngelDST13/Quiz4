import { useState } from 'react';
import Header from './components/Header';
import ToastAlert from './components/ToastAlert';
import KpiCards from './components/KpiCards';
import InventoryTable from './components/InventoryTable';
import { initialInventory } from './utils/mockData';
import './App.css';

export default function App() {
  const [items, setItems] = useState(initialInventory);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [toastVisible, setToastVisible] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);

  const alertasCriticas = items.filter(item => item.stock <= item.minimo);

  const handleUpdateStock = (id, delta) => {
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        const newStock = Math.max(0, item.stock + delta);
        return { ...item, stock: newStock };
      }
      return item;
    }));
  };

  const handleTriggerSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setToastVisible(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 font-sans p-6">
      <Header onTriggerSync={handleTriggerSync} isSyncing={isSyncing} />
      <ToastAlert count={alertasCriticas.length} visible={toastVisible} onClose={() => setToastVisible(false)} />
      <KpiCards total={items.length} criticalCount={alertasCriticas.length} />
      <InventoryTable 
        items={items} 
        filter={filter} 
        setFilter={setFilter} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        onUpdateStock={handleUpdateStock} 
      />
    </div>
  );
}