export default function Sidebar() {
  const menuItems = [
    { label: 'Save the Date', href: '#video' },
    { label: 'Ubicación', href: '#location' },
    { label: 'Nuestro Honda', href: '#emotional' },
    { label: 'Hospedaje', href: '#accommodation' },
  ];

  return (
    <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
      <div className="flex flex-col gap-6">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="group flex items-center gap-4"
          >
            <span className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {item.label}
            </span>
            <div className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-white transition-colors duration-200"></div>
          </a>
        ))}
      </div>
    </nav>
  );
} 