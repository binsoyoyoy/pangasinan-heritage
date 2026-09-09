import React from 'react';

interface TypographyProps {
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  as: Component = 'p',
  children,
  className = '',
}) => {
  const styles = {
    h1: 'text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight',
    h2: 'text-2xl font-bold text-slate-800 tracking-tight',
    h3: 'text-xl font-semibold text-slate-800',
    p: 'text-base text-slate-600 leading-relaxed',
    span: 'text-sm text-slate-500 font-medium',
  };

  return <Component className={`${styles[Component]} ${className}`}>{children}</Component>;
};