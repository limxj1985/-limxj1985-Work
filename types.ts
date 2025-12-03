export interface NavItem {
  label: string;
  path: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  details?: string[];
  location: string;
  type: 'general' | 'break' | 'session' | 'keynote';
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  imageUrl?: string;
}
