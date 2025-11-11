import { useState } from 'react';
import { SitemapView } from './components/SitemapView';
import { ScreenDetail } from './components/ScreenDetail';

export default function App() {
  const [selectedScreen, setSelectedScreen] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-slate-900">CareMehr Prototype v1.0</h1>
            <p className="text-slate-600 text-sm mt-1">Interactive Sitemap & Navigation Flow</p>
          </div>
          {selectedScreen && (
            <button
              onClick={() => setSelectedScreen(null)}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-sm"
            >
              Back to Sitemap
            </button>
          )}
        </div>
      </header>

      <main className="p-6">
        {selectedScreen ? (
          <ScreenDetail screen={selectedScreen} onNavigate={setSelectedScreen} />
        ) : (
          <SitemapView onScreenClick={setSelectedScreen} />
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-600 text-sm">
          <p className="mb-2">CareMehr</p>
          <p className="text-xs text-slate-500">Click any screen to explore • Use connectors to navigate flows</p>
        </div>
      </footer>
    </div>
  );
}
