import { Search, Filter, Calendar } from 'lucide-react';

export function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <h2 className="header-title">Dashboard</h2>
          <p className="header-subtitle">Shipment overview and performance metrics</p>
        </div>

        <div className="header-actions">
          <div className="date-range">
            <Calendar className="icon" />
            Oct 18 - Nov 18
          </div>
          <div className="search-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search shipments..."
              className="search-input"
            />
          </div>
          <button className="filter-button">
            <Filter className="filter-icon" />
            Filter
          </button>
        </div>
      </div>
    </header>
  );
}