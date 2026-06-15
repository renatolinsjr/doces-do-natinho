import { AppConfig } from './types';

export const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

const { VITE_WHATSAPP_NUMBER: envWhatsappNumber, VITE_ADDRESS: envAddress } = import.meta.env;

export const INITIAL_CONFIG: AppConfig = {
  profileName: 'Doces do Natinho',
  profileSubtitle: 'Alegria em Cada Mordida ✨',
  profileImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCZvA_jSCVMysZLZV_xIbPVX4coveXs9QT4qLiSVp7_vKDXFKtRmOlGrh661xOaz8g2hwE0zbVFKHeRbNBRVHhe5UZFQ04LPXSroDn8MW8EZ9jk4WRPRLEjf0IHXtKdqM3r9QiHzsMKo08gQbyny3gTacU5gcww3Tbjndcr8syju691eWnBpbOLcnv2jQ-XgcLyyJPuiX38uidddBwgLPwU9rceuX6llsK2gMHb789PtN_rzJs17190_llfGpAa3GLl-MCI3UKDgXh7',
  whatsappNumber: envWhatsappNumber,
  instagramUrl: 'https://instagram.com/docesdonatinho',
  facebookUrl: 'https://facebook.com/docesdonatinho',
  ifoodUrl: 'https://www.ifood.com.br',
  address: envAddress,
  addressMapUrl: envAddress
    ? `https://www.google.com/maps/search/${encodeURIComponent(envAddress)}`
    : 'https://maps.google.com',
  openingHours: 'Segunda a Sexta: 09h às 21h30',
};
