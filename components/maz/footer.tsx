import React from 'react';

interface FooterProps {
  variant?: 'default' | 'center' | 'grid';
  className?: string;
  children?: React.ReactNode;
}

export const Mfooter: React.FC<FooterProps> = ({
  variant = 'default',
  className = '',
  children
}) => {
  const variants = {
    default: 'flex flex-wrap gap-8',
    center: 'flex flex-col items-center text-center gap-4',
    grid: 'grid grid-cols-2 md:grid-cols-4 gap-8'
  };

  return (
    <footer className={`bg-slate-900 text-slate-300 p-10 ${className}`}>
      <div className={`max-w-7xl mx-auto ${variants[variant]}`}>
        {children}
      </div>
    </footer>
  );
};

interface FooterTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const MfooterTitle: React.FC<FooterTitleProps> = ({ children, className = '' }) => (
  <span className={`text-white font-bold text-lg mb-3 block ${className}`}>
    {children}
  </span>
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const MfooterLink: React.FC<FooterLinkProps> = ({ href, children, className = '' }) => (
  <a
    href={href}
    className={`hover:text-white transition-colors cursor-pointer ${className}`}
  >
    {children}
  </a>
);


<code>{`// Basic Footer
<Footer variant="default">
  <nav className="flex flex-col gap-2">
    <FooterTitle>Services</FooterTitle>
    <FooterLink href="#">Branding</FooterLink>
    <FooterLink href="#">Design</FooterLink>
  </nav>
</Footer>

// Grid Footer
<Footer variant="grid">
  <nav>
    <FooterTitle>Products</FooterTitle>
    <FooterLink href="#">Web Design</FooterLink>
  </nav>
  <nav>
    <FooterTitle>Company</FooterTitle>
    <FooterLink href="#">About</FooterLink>
  </nav>
</Footer>

// Center Footer
<Footer variant="center">
  <div className="flex gap-4">
    <FooterLink href="#">About</FooterLink>
    <FooterLink href="#">Contact</FooterLink>
  </div>
  <p>© 2024 - All rights reserved</p>
</Footer>`}</code>

