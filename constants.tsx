import { AgendaItem, NavItem } from './types';
import React from 'react';

export const CONFERENCE_DATE = "Wednesday, 30 September 2026";
export const CONFERENCE_TIME = "0800 - 1300";
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
  { 
    time: "07:30 - 08:00", 
    title: "Registration", 
    location: "ACC, Level 4",
    type: "general" 
  },
  { 
    time: "08:00 - 09:00", 
    title: "Opening Ceremony", 
    location: "Auditorium",
    type: "general",
    details: [
      "National Anthem 'Negaraku', HRPB & KKM Songs",
      "Doa Recital",
      "Welcoming Speech by Dr. Fakhruddin Bin Amran (Director of HRPB)",
      "Officiating Speech by Dato' Dr. Feisul Idzwan Mustapha (Director of JKN Perak)",
      "PRC 2026 Officiating Launch Gimmick",
      "Photography Session"
    ]
  },
  { 
    time: "09:00 - 09:20", 
    title: "Morning Tea Break / Booth & Poster Exhibition", 
    location: "Auditorium / Foyer Level 4",
    type: "break" 
  },
  { 
    time: "09:20 - 10:20", 
    title: "Plenary Sessions", 
    location: "Auditorium",
    type: "session",
    details: [
      "Plenary 1: Prof. Dr. Rukman Bin Awang Hamat",
      "Plenary 2: Prof. Datin Dr. Sarinder Kaur Dhillon",
      "Plenary 3: Ms. Asha Thanabalan"
    ]
  },
  { 
    time: "10:20 - 11:35", 
    title: "Oral Presentations 1-5 & Concurrent Poster Evaluation", 
    location: "Auditorium / Foyer Level 4",
    type: "session" 
  },
  { 
    time: "11:35 - 12:00", 
    title: "CRC Research Achievements 2026", 
    location: "Auditorium",
    type: "session",
    details: [
      "Presentation 1: CRC HRPB",
      "Presentation 2: CRC Manjung",
      "Presentation 3: CRC Taiping"
    ]
  },
  { 
    time: "12:00 - 12:45", 
    title: "Prize Giving Ceremony", 
    location: "Auditorium",
    type: "general",
    details: [
      "Chief Judge's Review",
      "Presentation of Appreciation Tokens (Invited Speakers & Judges)",
      "Oral Presentation Awards",
      "Poster Presentation Awards",
      "CRC Research Award 2026"
    ]
  },
  { 
    time: "12:45 - 13:00", 
    title: "Closing Remarks", 
    location: "Auditorium",
    type: "general",
    details: [
      "Closing Speech by Dato' Dr. Philip Rajan Devesahayam (Organizing Chairman)"
    ]
  },
];

export const THEME_COLORS = {
  primaryGreen: "text-lime-600",
  bgGreen: "bg-lime-500",
  bgGreenLight: "bg-lime-50",
  primaryPink: "text-pink-500",
  bgPink: "bg-pink-100",
  bgPinkSoft: "bg-pink-50",
};
