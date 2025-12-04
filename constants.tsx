import { AgendaItem, NavItem } from './types';
import React from 'react';

export const CONFERENCE_DATE = "Wednesday, 9 September 2026";
export const CONFERENCE_TIME = "8.00 AM - 5.00 PM";
export const CONFERENCE_VENUE = "Auditorium, Level 4, Ambulatory Care Centre, Hospital Raja Permaisuri Bainun";
export const REGISTRATION_LINK = "https://forms.gle/kh2gB8AaHnTpxi5b9";
export const ABSTRACT_SUBMISSION_LINK = "https://forms.gle/5HjCutv7tKikJEKd9";
export const ABSTRACT_TEMPLATE_LINK = "https://docs.google.com/document/d/1X22ZpyxWKCvzyL6RlIoYXSRloC3Sgu0usITxAgYQnH8/edit?tab=t.0";
export const POSTER_TEMPLATE_LINK = "https://docs.google.com/presentation/d/1Q0QzIa1-CUTlZ_PAwiYNV56-qaORsSk9/edit?usp=sharing&ouid=102140745386971931896&rtpof=true&sd=true";
export const ABSTRACT_DEADLINE = "12 June 2026";
export const CONTACT_EMAIL = "prceditor@gmail.com";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Agenda', path: '/agenda' },
  { label: 'Speakers', path: '/speakers' },
  { label: 'Abstract Submission', path: '/abstract-submission' },
  { label: 'Oral Presentation', path: '/oral-presentation' },
  { label: 'Poster Presentation', path: '/poster-presentation' },
  { label: 'Registration', path: '/registration' },
];

export const AGENDA_DATA: AgendaItem[] = [
  { time: "7:30 - 8:30", title: "Registration & Arrival of VIPs", location: "Auditorium", type: "general" },
  { 
    time: "8:30 - 9:10", 
    title: "Opening Ceremony of PRC 2026", 
    location: "Auditorium", 
    type: "general",
    details: [
      "National Anthem 'Negaraku'",
      "Doa Recital",
      "Welcoming Speech",
      "Address by the Perak State Health Director",
      "Officiating Speech"
    ]
  },
  { time: "9:10 - 9:30", title: "Keynote Address", location: "Auditorium", type: "keynote" },
  { time: "9:30 - 9:50", title: "Tea Break / Poster Viewing / Booth Visiting", location: "Foyer", type: "break" },
  { time: "9:50 - 10:15", title: "Plenary 1", location: "Auditorium", type: "session" },
  { time: "10:15 - 10:40", title: "Plenary 2", location: "Auditorium", type: "session" },
  { time: "10:40 - 11:05", title: "Plenary 3", location: "Auditorium", type: "session" },
  { time: "11:05 - 11:30", title: "Plenary 4", location: "Auditorium", type: "session" },
  { time: "11:30 - 11:55", title: "CRM Sharing", location: "Auditorium", type: "session" },
  { time: "11:55 - 13:00", title: "Oral Presentation: Presenter No. 1-3", location: "Auditorium", type: "session" },
  { 
    time: "13:00 - 14:30", 
    title: "Lunch Break & Breakout Sessions", 
    location: "Foyer / Seminar Rooms", 
    type: "break",
    details: [
      "13:10 - 13:40: Lunch Talk (Seminar Room 1)",
      "13:45 - 14:15: Lunch Talk (Seminar Room 2)",
      "Concurrent Poster Viewing and Booth Visiting"
    ] 
  },
  { time: "14:30 - 16:30", title: "Oral Presentation: Presenter No. 4-10", location: "Auditorium", type: "session" },
  { time: "16:30 - 16:50", title: "Quiz & Lucky Draw", location: "Auditorium", type: "general" },
  { 
    time: "16:50 - 17:20", 
    title: "Prize Giving Ceremony", 
    location: "Auditorium", 
    type: "general",
    details: ["Poster Presentation Awards", "Best Case Report", "Oral Presentation Awards"]
  },
  { time: "17:20 - 17:30", title: "Closing Remarks", location: "Auditorium", type: "general" },
];

export const THEME_COLORS = {
  primaryGreen: "text-lime-600",
  bgGreen: "bg-lime-500",
  bgGreenLight: "bg-lime-50",
  primaryPink: "text-pink-500",
  bgPink: "bg-pink-100",
  bgPinkSoft: "bg-pink-50",
};
