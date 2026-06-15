export interface AppConfig {
  profileName: string;
  profileSubtitle: string;
  profileImage: string;
  whatsappNumber: string;
  instagramUrl: string;
  facebookUrl: string;
  ifoodUrl: string;
  address: string;
  addressMapUrl: string;
  openingHours: string;
}

export type LinkType = 'url' | 'whatsapp' | 'encomendas' | 'location';

export type IconName =
  | 'Instagram'
  | 'WhatsApp'
  | 'Store'
  | 'ShoppingBag'
  | 'ThumbsUp'
  | 'MapPin'
  | 'BackRoute';

export interface LinkItem {
  id: string;
  label: string;
  icon: IconName;
  type: LinkType;
  url?: string;
}
