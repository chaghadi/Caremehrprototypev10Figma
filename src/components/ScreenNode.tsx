import { ReactNode } from 'react';

interface ScreenNodeProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  color: 'blue' | 'teal' | 'purple' | 'orange' | 'green';
  onClick: () => void;
  details?: string[];
  size?: 'normal' | 'large';
}

const colorStyles = {
  blue: {
    bg: 'bg-blue-100',
    border: 'border-blue-400',
    iconBg: 'bg-blue-500',
    hover: 'hover:bg-blue-200',
    text: 'text-blue-700'
  },
  teal: {
    bg: 'bg-teal-100',
    border: 'border-teal-400',
    iconBg: 'bg-teal-500',
    hover: 'hover:bg-teal-200',
    text: 'text-teal-700'
  },
  purple: {
    bg: 'bg-purple-100',
    border: 'border-purple-400',
    iconBg: 'bg-purple-500',
    hover: 'hover:bg-purple-200',
    text: 'text-purple-700'
  },
  orange: {
    bg: 'bg-orange-100',
    border: 'border-orange-400',
    iconBg: 'bg-orange-500',
    hover: 'hover:bg-orange-200',
    text: 'text-orange-700'
  },
  green: {
    bg: 'bg-green-100',
    border: 'border-green-400',
    iconBg: 'bg-green-500',
    hover: 'hover:bg-green-200',
    text: 'text-green-700'
  }
};

export function ScreenNode({ icon, title, subtitle, color, onClick, details, size = 'normal' }: ScreenNodeProps) {
  const styles = colorStyles[color];
  const width = size === 'large' ? 'w-72' : 'w-64';

  return (
    <button
      onClick={onClick}
      className={`${width} ${styles.bg} ${styles.border} ${styles.hover} border-2 rounded-2xl p-4 shadow-md transition-all hover:shadow-lg hover:scale-105 cursor-pointer`}
    >
      <div className="flex items-start gap-3">
        <div className={`${styles.iconBg} text-white p-2 rounded-lg flex-shrink-0`}>
          {icon}
        </div>
        <div className="flex-1 text-left">
          <h3 className={`${styles.text}`}>{title}</h3>
          {subtitle && (
            <p className="text-xs text-slate-600 mt-1">{subtitle}</p>
          )}
        </div>
      </div>
      
      {details && details.length > 0 && (
        <div className="mt-3 pt-3 border-t border-slate-300">
          {details.map((detail, index) => (
            <div key={index} className="flex items-start gap-2 mt-1">
              <div className={`w-1.5 h-1.5 ${styles.iconBg} rounded-full mt-1.5 flex-shrink-0`}></div>
              <p className="text-xs text-slate-700">{detail}</p>
            </div>
          ))}
        </div>
      )}
    </button>
  );
}
