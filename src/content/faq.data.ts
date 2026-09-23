export interface FaqItem {
  id: string;
  questionKey: string;
  answerKey: string;
  defaultQuestion: string;
  defaultAnswer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: 'faq-female-only',
    questionKey: 'faqQ1',
    answerKey: 'faqA1',
    defaultQuestion: 'Is Shraddha Beauty Parlour exclusively for women?',
    defaultAnswer:
      'Yes. Shraddha Beauty Parlour is a dedicated female-only beauty parlour exclusively serving women and girls in a comfortable, private environment.',
  },
  {
    id: 'faq-hours',
    questionKey: 'faqQ2',
    answerKey: 'faqA2',
    defaultQuestion: 'What are your working hours and days?',
    defaultAnswer:
      'We are open all days from 9:00 AM to 9:00 PM (Monday through Sunday).',
  },
  {
    id: 'faq-location',
    questionKey: 'faqQ3',
    answerKey: 'faqA3',
    defaultQuestion: 'Where is the parlour located in Amravati?',
    defaultAnswer:
      'We are located at Plot No. 7, House No. 2270, Vrundavan Vasahat, Badnera Road, MH MSH 6, Dande Colony, Guruchhaya Colony, Sai Nagar, Amravati, Maharashtra 444607.',
  },
  {
    id: 'faq-appointment',
    questionKey: 'faqQ4',
    answerKey: 'faqA4',
    defaultQuestion: 'How do I inquire about an appointment?',
    defaultAnswer:
      'You can easily send an inquiry via our interactive WhatsApp enquiry builder or click the WhatsApp button with your preferred service, date, and time slot.',
  },
  {
    id: 'faq-confirmation',
    questionKey: 'faqQ5',
    answerKey: 'faqA5',
    defaultQuestion: 'Is an appointment automatically confirmed when I send a WhatsApp message?',
    defaultAnswer:
      'No. Sending an inquiry does not automatically confirm your booking. All appointment requests are subject to schedule availability and confirmation by the parlour.',
  },
  {
    id: 'faq-pricing',
    questionKey: 'faqQ6',
    answerKey: 'faqA6',
    defaultQuestion: 'Why are service prices not displayed on the website?',
    defaultAnswer:
      'Our service prices have not been finalized and vary based on individual hair length, skin type, and specific client requirements. We provide full details upon inquiry or consultation.',
  },
];

