export type SupportedLocale = 'en' | 'mr' | 'hi';

export interface TranslationDictionary {
  localeName: string;
  nav: {
    home: string;
    about: string;
    services: string;
    gallery: string;
    offers: string;
    testimonials: string;
    faq: string;
    contact: string;
    inquireWhatsApp: string;
    menu: string;
    closeMenu: string;
  };
  common: {
    femaleOnlyBadge: string;
    openHoursBadge: string;
    openHoursValue: string;
    workingDays: string;
    getDirections: string;
    viewLocation: string;
    exploreServices: string;
    inquireViaWhatsApp: string;
    disclaimerSubjectToConfirmation: string;
    pricingNoticeTitle: string;
    pricingNoticeBody: string;
    callNow: string;
    sendEmail: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    locationNoteGeneral: string;
    quickLinks: string;
    allRightsReserved: string;
    placeholderPhoneNote: string;
  };
  home: {
    heroBadge: string;
    heroHeadline: string;
    heroSubheadline: string;
    introTitle: string;
    introSubtitle: string;
    introText1: string;
    introText2: string;
    categoriesTitle: string;
    categoriesSubtitle: string;
    highlightsTitle: string;
    highlightsSubtitle: string;
    highlight1Title: string;
    highlight1Desc: string;
    highlight2Title: string;
    highlight2Desc: string;
    highlight3Title: string;
    highlight3Desc: string;
    highlight4Title: string;
    highlight4Desc: string;
    galleryPreviewTitle: string;
    galleryPreviewSubtitle: string;
    galleryPreviewNotice: string;
    ctaBannerTitle: string;
    ctaBannerDesc: string;
    locationTitle: string;
    locationSubtitle: string;
  };
  about: {
    pageTitle: string;
    pageSubtitle: string;
    storyTitle: string;
    storyText1: string;
    storyText2: string;
    femaleOnlyTitle: string;
    femaleOnlyText: string;
    approachTitle: string;
    approachText: string;
    communityTitle: string;
    communityText: string;
  };
  servicesPage: {
    pageTitle: string;
    pageSubtitle: string;
    allServicesTab: string;
    inquireForService: string;
  };
  galleryPage: {
    pageTitle: string;
    pageSubtitle: string;
    noticeBadge: string;
    transparencyNotice: string;
    allFilter: string;
    filterHair: string;
    filterMakeup: string;
    filterBridal: string;
    filterNails: string;
    filterSaree: string;
    filterCertificates: string;
    placeholderBadge: string;
  };
  offersPage: {
    pageTitle: string;
    pageSubtitle: string;
    emptyTitle: string;
    emptyDescription: string;
    emptyAction: string;
  };
  testimonialsPage: {
    pageTitle: string;
    pageSubtitle: string;
    emptyTitle: string;
    emptyDescription: string;
    emptyAction: string;
  };
  faqPage: {
    pageTitle: string;
    pageSubtitle: string;
    moreQuestionsTitle: string;
    moreQuestionsDesc: string;
  };
  contactPage: {
    pageTitle: string;
    pageSubtitle: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    serviceSelectLabel: string;
    serviceSelectPlaceholder: string;
    dateLabel: string;
    timeLabel: string;
    timePlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitButton: string;
    mapSectionTitle: string;
    mapSectionSubtitle: string;
  };
}

