import { ReactNode } from 'react';
import { FaSquareInstagram } from 'react-icons/fa6';
import { IoLogoWhatsapp, IoMdArrowRoundBack } from 'react-icons/io';
import { SiGooglemaps, SiIfood } from 'react-icons/si';
import { FaFacebookSquare } from 'react-icons/fa';
import { GiCupcake } from 'react-icons/gi';

import type { IconName } from '../types';

const iconMap: Record<IconName, (size: number) => ReactNode> = {
  Instagram: (size) => <FaSquareInstagram size={size} color="#C13584" />,
  WhatsApp: (size) => <IoLogoWhatsapp size={size} color="green" />,
  Store: (size) => <GiCupcake size={size} color="#8B4513" />,
  ShoppingBag: (size) => <SiIfood size={size} color="red" />,
  ThumbsUp: (size) => <FaFacebookSquare size={size} color="#1877F2" />,
  MapPin: (size) => <SiGooglemaps size={size} color="#4285F4" />,
  BackRoute: (size) => <IoMdArrowRoundBack size={size} color="#4285F4" />,
};

export function renderIcon(name: IconName, size = 26): ReactNode {
  return iconMap[name](size);
}
