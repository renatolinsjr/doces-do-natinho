import { renderIcon } from './IconRegistry';
import { LinkItem } from '../types';

interface LinkButtonProps {
  item: LinkItem;
  onAction: (type: string, url?: string) => void;
}

export default function LinkButton({ item, onAction }: LinkButtonProps) {
  return (
    <button
      onClick={() => onAction(item.type, item.url)}
      id={`btn-link-${item.id}`}
      className="group relative w-full flex items-center gap-3 py-3.5 px-6 rounded-full bg-brand-blue border-[2.5px] border-brand-brown text-brand-brown font-sans text-xl font-extrabold leading-tight transition-all duration-200 hover:scale-[1.03] hover:bg-brand-blue-hover active:translate-x-[2px] active:translate-y-[2px] btn-shadow cursor-pointer pointer-events-auto"
    >
      <span className="shrink-0 text-brand-brown flex items-center justify-center">
        {renderIcon(item.icon)}
      </span>
      <span className="flex-1 text-center truncate">{item.label}</span>
    </button>
  );
}
