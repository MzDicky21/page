import React from 'react';

// Type definitions
interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

interface NavbarBrandProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
}

interface NavbarMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

interface NavbarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    active?: boolean;
    children: React.ReactNode;
}

interface NavbarToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isOpen?: boolean;
    onToggle?: () => void;
}

// Utility function
const cn = (...classes: (string | boolean | undefined)[]) => {
    return classes.filter(Boolean).join(' ');
};

// Navbar Root Component
export const Mnavbar = React.forwardRef<HTMLElement, NavbarProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <nav
                ref={ref}
                className={cn(
                    'bg-white border-b border-slate-200 px-4 py-3',
                    className
                )}
                {...props}
            >
                {children}
            </nav>
        );
    }
);

Mnavbar.displayName = 'Mnavbar';

// Navbar Container
export const MnavbarContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn('max-w-7xl mx-auto flex items-center justify-between', className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

MnavbarContainer.displayName = 'MnavbarContainer';

// Navbar Brand
export const MnavbarBrand = React.forwardRef<HTMLAnchorElement, NavbarBrandProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <a
                ref={ref}
                href="#"
                className={cn('text-xl font-bold text-slate-900 hover:text-slate-700', className)}
                {...props}
            >
                {children}
            </a>
        );
    }
);

MnavbarBrand.displayName = 'MnavbarBrand';

// Navbar Menu
export const MnavbarMenu = React.forwardRef<HTMLDivElement, NavbarMenuProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn('hidden md:flex items-center gap-6', className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

MnavbarMenu.displayName = 'MnavbarMenu';

// Navbar Item
export const MnavbarItem = React.forwardRef<HTMLAnchorElement, NavbarItemProps>(
    ({ className, active, children, ...props }, ref) => {
        return (
            <a
                ref={ref}
                className={cn(
                    'text-sm font-medium transition-colors hover:text-slate-900',
                    active ? 'text-slate-900' : 'text-slate-600',
                    className
                )}
                {...props}
            >
                {children}
            </a>
        );
    }
);

MnavbarItem.displayName = 'MnavbarItem';

// Navbar Toggle (Mobile Menu Button)
export const MnavbarToggle = React.forwardRef<HTMLButtonElement, NavbarToggleProps>(
    ({ className, isOpen, onToggle, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors',
                    className
                )}
                onClick={onToggle}
                aria-label="Toggle menu"
                {...props}
            >
                {isOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                )}
            </button>
        );
    }
);

MnavbarToggle.displayName = 'MnavbarToggle';

<code>
    {`import {
  Navbar,
  NavbarContainer,
  NavbarBrand,
  NavbarMenu,
  NavbarItem,
  NavbarToggle,
  NavbarMobileMenu,
} from '@/components/ui/navbar';
import { useState } from 'react';

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar>
      <NavbarContainer>
        <NavbarBrand>Brand</NavbarBrand>
        
        <NavbarMenu>
          <NavbarItem active href="#">Home</NavbarItem>
          <NavbarItem href="#">About</NavbarItem>
          <NavbarItem href="#">Services</NavbarItem>
          <NavbarItem href="#">Contact</NavbarItem>
        </NavbarMenu>

        <NavbarToggle 
          isOpen={isOpen} 
          onToggle={() => setIsOpen(!isOpen)} 
        />
      </NavbarContainer>

      <NavbarMobileMenu isOpen={isOpen}>
        <NavbarItem active href="#">Home</NavbarItem>
        <NavbarItem href="#">About</NavbarItem>
        <NavbarItem href="#">Services</NavbarItem>
        <NavbarItem href="#">Contact</NavbarItem>
      </NavbarMobileMenu>
    </Navbar>
  );
}`}
</code>