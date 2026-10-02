import type { ComponentType } from 'react';

export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  pet: string;
  text: string;
  image: string;
  alt: string;
}

export interface NavLink {
  label: string;
  href: string;
  icon?: ComponentType<{ className?: string }>;
}
