import { ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // Only used internally for checking, usually not exposed but kept here for local simulation
}

export interface ServiceCardProps {
  type: 'image' | 'icon' | 'simple';
  title: string;
  subtitle?: string;
  imageUrl?: string;
  avatarUrl?: string;
  authorName?: string;
  icon?: ReactNode;
  logo?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}