import { Home, Package, BarChart3, Settings } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: Package, label: 'Shipments' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Settings, label: 'Settings' },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div>
          <p className="sidebar-brand">
            AGUA, INC.
          </p>
        </div>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`sidebar-link ${item.active ? 'active' : ''}`}
          >
            <item.icon className="sidebar-icon" />
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}