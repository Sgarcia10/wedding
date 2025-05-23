interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { label: 'Save the Date', href: '#video' },
    { label: 'Ubicación', href: '#location' },
    { label: 'Nuestro Honda', href: '#emotional' },
    { label: 'Hospedaje', href: '#accommodation' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40">
      <div className="h-full flex flex-col items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
        <nav className="flex flex-col items-center gap-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={onClose}
              className="text-white/80 hover:text-white text-2xl font-light tracking-wider transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
} 