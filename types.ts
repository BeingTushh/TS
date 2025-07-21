import React from 'react';

export interface TestCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  subTests?: { id: string; name: string; description: string }[]; // Made optional
  popularTests?: { id: string; name: string; }[]; // Added this new property
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  credentials?: string[];
}

export interface Testimonial {
  id:string;
  name: string;
  service: string;
  rating: number; // 1-5
  comment: string;
  date: string;
}

export interface TimeSlot {
  id: string;
  time: string; // e.g., "09:00 AM"
  available: boolean;
}

export interface PopularTest {
  id: string;
  name: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: number;
}
