import React from 'react';
import { 
  Palette,          // Graphics
  Globe,            // Marketing
  Feather,          // Writing
  Film,             // Video
  Music,            // Music
  Code2,            // Programming
  Database,         // Data
  Building2,        // Business
  TrendingUp,       // Finance
  Sprout,           // Personal Growth
  Aperture,         // Photography
  Cpu,              // AI
  Sparkles,
  MousePointer2,
  LayoutTemplate,
  Video,
  Briefcase,
  Camera,
  User
} from 'lucide-react';
import { FooterSection, ServiceCardProps } from './types';

// All categories now use 'type: icon' for consistent "Tech/Graphic" look.
// Colors are handled by the ServiceCard component to ensure the black/green theme.

export const SERVICE_CATEGORIES: ServiceCardProps[] = [
  {
    type: 'icon',
    title: 'Graphics & Design',
    subtitle: 'Brand Identity & Art',
    icon: <Palette size={40} />,
    logo: <Palette size={20} />
  },
  {
    type: 'icon',
    title: 'Digital Marketing',
    subtitle: 'SEO & Growth',
    icon: <Globe size={40} />,
    logo: <MousePointer2 size={20} />
  },
  {
    type: 'icon',
    title: 'Writing & Translation',
    subtitle: 'Copy, Editing & Blogs',
    icon: <Feather size={40} />,
    logo: <LayoutTemplate size={20} />
  },
  {
    type: 'icon',
    title: 'Video & Animation',
    subtitle: 'Motion Graphics & VFX',
    icon: <Film size={40} />,
    logo: <Video size={20} />
  },
  {
    type: 'icon',
    title: 'Music & Audio',
    subtitle: 'Sonic Branding & Mix',
    icon: <Music size={40} />,
    logo: <Music size={20} />
  },
  {
    type: 'icon',
    title: 'Programming & Tech',
    subtitle: 'Web, App & Software',
    icon: <Code2 size={40} />,
    logo: <Code2 size={20} />
  },
  {
    type: 'icon',
    title: 'Data',
    subtitle: 'Analytics & Mining',
    icon: <Database size={40} />,
    logo: <Database size={20} />
  },
  {
    type: 'icon',
    title: 'Business',
    subtitle: 'Strategy & Legal',
    icon: <Building2 size={40} />,
    logo: <Briefcase size={20} />
  },
  {
    type: 'icon',
    title: 'Finance',
    subtitle: 'Accounting & Wealth',
    icon: <TrendingUp size={40} />,
    logo: <TrendingUp size={20} />
  },
  {
    type: 'icon',
    title: 'Personal Growth',
    subtitle: 'Coaching & Lifestyle',
    icon: <Sprout size={40} />,
    logo: <User size={20} />
  },
  {
    type: 'icon',
    title: 'Photography',
    subtitle: 'Image Editing & Shooting',
    icon: <Aperture size={40} />,
    logo: <Camera size={20} />
  },
  {
    type: 'icon',
    title: 'AI Services',
    subtitle: 'Agents & Generative AI',
    icon: <Cpu size={40} />,
    logo: <Sparkles size={20} />
  }
];

export const FOOTER_LINKS: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'FAQ', href: '#' },
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Careers', href: '#' },
      { label: 'Customer Support', href: '#' },
    ]
  },
  {
    title: 'Contact Us',
    links: [
      { label: 'Work with us', href: '#' },
      { label: 'Partnerships', href: '#' },
    ]
  }
];