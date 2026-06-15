import { LINKS } from '../data';
import LinkButton from './LinkButton';

interface LinkListProps {
  onAction: (type: string, url?: string) => void;
}

export default function LinkList({ onAction }: LinkListProps) {
  return (
    <div className="w-full flex flex-col gap-4 mt-2">
      {LINKS.map((item) => (
        <LinkButton key={item.id} item={item} onAction={onAction} />
      ))}
    </div>
  );
}
