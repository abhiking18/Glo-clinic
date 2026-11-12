export interface ClinicInfo {
  name: string;
  tagline: string;
  subtitle: string;
  logoUrl: string;
  address: string;
  locality: string;
  city: string;
  state: string;
  pincode: string;
  rating: number;
  reviewCount: number;
  whatsappNumber: string;
  displayWhatsapp: string;
  phoneNumber: string;
  email: string;
  openingHours: {
    weekdays: string;
    sunday: string;
  };
  googleMapsUrl: string;
}

export type ServiceCategory = 'skin' | 'hair' | 'laser' | 'additional';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  summary: string;
  details: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}
