import { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  type: 'phone' | 'email' | 'location';
  value: string;
  href?: string;
}