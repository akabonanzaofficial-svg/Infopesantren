export type CategoryType = 
  | 'Semua'
  | 'Berita Utama'
  | 'Pendidikan & Beasiswa'
  | 'Kajian & Kitab'
  | 'Tokoh & Ulama'
  | 'Budaya & Santri'
  | 'Opini & Riset';

export type UserRoleType = 
  | 'Santri'
  | 'Alumni Pesantren'
  | 'Ustadz / Ustadzah'
  | 'Wali Santri'
  | 'Pembaca Umum';

export interface CommentReply {
  id: string;
  authorName: string;
  authorRole: UserRoleType;
  content: string;
  createdAt: string;
  likes: number;
  userLiked?: boolean;
}

export interface Comment {
  id: string;
  articleId: string;
  authorName: string;
  authorRole: UserRoleType;
  content: string;
  createdAt: string;
  likes: number;
  userLiked?: boolean;
  replies: CommentReply[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: Exclude<CategoryType, 'Semua'>;
  summary: string;
  content: string[];
  quote?: {
    text: string;
    author: string;
    arabicText?: string;
  };
  imageUrl: string;
  imageCaption: string;
  author: {
    name: string;
    role: string;
    pesantrenOrigin?: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
  views: number;
  likes: number;
  userLiked?: boolean;
  isFeatured?: boolean;
  isBreaking?: boolean;
  location?: string;
}

export interface AgendaEvent {
  id: string;
  title: string;
  pesantren: string;
  location: string;
  date: string;
  time: string;
  category: 'Bahtsul Masail' | 'Haul & Dzikir' | 'Wisuda & Khotmil' | 'Pelatihan Santri';
  contact: string;
}

export interface PrayerTimeData {
  subuh: string;
  terbit: string;
  dzuhur: string;
  ashar: string;
  maghrib: string;
  isya: string;
}
