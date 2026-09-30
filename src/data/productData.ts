export interface Ingredient {
  id: string;
  name: string;
  description: string;
  icon: string;
  tag: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  desc: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const PRODUCT_DATA = {
  name: 'SENSU Collagen Tea',
  slogan: 'Табигый курам — күн сайын өзүңүзгө кам көрүү.',
  shortDescription:
    'SENSU Collagen Tea — коллаген жана өсүмдүк компоненттери камтылган чай. Күнүмдүк рационго кошуп колдонууга ыңгайлуу, жагымдуу даамы жана өзгөчө жыты менен өзүңүзгө кам көрүү ритуалын күн сайын улантууга жардам берет.',
  price: 1800,
  currency: 'сом',
  count: '40 даана',
  period: '40 күнгө',
  deliveryBadge: 'Кыргызстан боюнча акысыз жеткирүү',

  // Contact Placeholders as requested
  phoneRaw: '+996700000000',
  phoneDisplay: '+996 ________',
  instagramHandle: '@________',
  instagramUrl: 'https://instagram.com',
  whatsappRaw: '996700000000',
  whatsappDisplay: '+996 ________',
  defaultWhatsAppMessage: 'Саламатсызбы! SENSU Collagen Tea заказ кылгым келет.',

  images: {
    hero: '/src/assets/images/sensu_vertical_hero_photo_1790775048641.jpg',
    boxStudio: '/src/assets/images/sensu_original_box_studio_1790773398984.jpg',
    ingredients: '/src/assets/images/sensu_natural_ingredients_1790771537946.jpg',
    moment: '/src/assets/images/sensu_tea_cup_original_1790774227049.jpg',
    teaCup: '/src/assets/images/sensu_tea_cup_original_1790774227049.jpg',
  },

  about: {
    title: 'SENSU жөнүндө',
    paragraph1: 'SENSU — табигыйлык менен сулуулукту айкалыштырган бренд.',
    paragraph2: 'Биз аялдардын күнүмдүк өзүнө кам көрүүсүн жөнөкөй жана жагымдуу кылууну көздөйбүз.',
    paragraph3: 'SENSU Collagen Tea — чай ичүү маданиятын сулуулук жана wellness багыты менен айкалыштырган продукт.',
  },

  features: [
    {
      id: 'f1',
      icon: '🌿',
      title: 'Табигый өсүмдүк компоненттери',
      desc: 'Тандалып алынган чөптөр, жемиштер жана жалбырактар.',
    },
    {
      id: 'f2',
      icon: '💎',
      title: 'Коллаген',
      desc: 'Сулуулукту жана күнүмдүк кам көрүүнү колдоочу деңиз коллагени.',
    },
    {
      id: 'f3',
      icon: '🌸',
      title: 'Витаминдер',
      desc: 'Табигый жемиштердин курамындагы пайдалуу микроэлементтер.',
    },
    {
      id: 'f4',
      icon: '✨',
      title: 'Антиоксиданттар',
      desc: 'Жашыл чай жана ботаникалык табигый компоненттер.',
    },
    {
      id: 'f5',
      icon: '🍃',
      title: 'Консервантсыз курам',
      desc: 'Жасалма боёкторсуз жана кошулмаларсыз таза курам.',
    },
  ] as Feature[],

  ingredients: [
    {
      id: 'ing1',
      name: 'Коллаген',
      description: 'Териге кам көрүү рационун толуктоочу жана сулуулукту колдоочу коллаген компоненти.',
      icon: '💎',
      tag: 'Сулуулук',
    },
    {
      id: 'ing2',
      name: 'Өсүмдүк чөптөрү',
      description: 'Тандалып алынган табигый өсүмдүк чөптөрү жана ботаникалык компоненттер.',
      icon: '🌿',
      tag: 'Табигыйлык',
    },
    {
      id: 'ing3',
      name: 'Витаминдер',
      description: 'Табигый өсүмдүк курамындагы пайдалуу микроэлементтер жана витаминдер.',
      icon: '🌸',
      tag: 'Баланс',
    },
    {
      id: 'ing4',
      name: 'Антиоксидант компоненттер',
      description: 'Күнүмдүк wellness-рационду колдоого көмөктөшүүчү табигый антиоксиданттар.',
      icon: '✨',
      tag: 'Сергектик',
    },
  ] as Ingredient[],

  ingredientNote: 'Продукттун курамы өндүрүүчүнүн расмий маалыматына ылайык берилди.',

  dailyRoutine: {
    title: 'Күнүмдүк рационуңузга кошуңуз',
    subtitle: 'Өзүңүзгө күн сайын убакыт бөлүп, чай ичүүнү пайдалуу адатка айлантыңыз',
    points: [
      'Териге кам көрүү рационун толуктоого жардам берет',
      'Күнүмдүк wellness-рационго кошууга ыңгайлуу',
      'Антиоксидант компоненттерди камтыйт',
      'Өзүңүзгө кам көрүү адатын калыптандырууга көмөктөшөт',
      'Жагымдуу чай ичүү ритуалын түзөт',
    ],
  },

  howToPrepare: [
    {
      step: '01',
      title: '1 пакет',
      action: 'Пакетти чыныга салыңыз.',
    },
    {
      step: '02',
      title: 'Ысык суу',
      action: '200–300 мл ысык суу куюңуз (80–90°C).',
    },
    {
      step: '03',
      title: '5–10 мүнөт',
      action: 'Демдеп, ичиңиз.',
    },
  ],

  course40: {
    title: '40 күндүк курс',
    subtitle: '40 даана пакетик — 40 күнгө жетет.',
    originalBadge: 'Оригиналдуу SENSU продукциясы',
    deliveryBadge: 'Кыргызстан боюнча жеткирүү — акысыз',
  },

  delivery: {
    title: 'Жеткирүү',
    subtitle: '🇰🇬 Кыргызстан боюнча жеткирүү бар.',
    items: [
      {
        title: 'Бишкек шаары',
        desc: '1 күндүн ичинде, дарегиңизге чейин',
      },
      {
        title: 'Аймактар',
        desc: '1–3 жумушчу күндүн ичинде',
      },
      {
        title: 'Жеткирүү баасы',
        desc: 'Кыргызстан боюнча акысыз',
      },
    ],
  },

  faqs: [
    {
      question: 'SENSU эмне?',
      answer: 'SENSU — коллаген жана өсүмдүк компоненттери камтылган чай.',
    },
    {
      question: 'Кантип даярдалат?',
      answer: '1 пакетти ысык сууга салып, 5–10 мүнөт демдеп ичесиз.',
    },
    {
      question: 'Күн сайын ичсе болобу?',
      answer: 'Өндүрүүчүнүн көрсөтмөсүнө ылайык колдонулат.',
    },
    {
      question: 'Кош бойлуулар иче алабы?',
      answer: 'Кош бойлуулук жана бала эмизүү мезгилинде дарыгер менен кеңешүү сунушталат.',
    },
    {
      question: 'Кайдан сатып алса болот?',
      answer: 'Сайт аркылуу онлайн заказ берсеңиз болот.',
    },
  ] as FaqItem[],

  finalCta: {
    headline: 'SENSU COLLAGEN TEA',
    text: 'Өзүңүзгө кам көрүү — күн сайын жасалган кичинекей кадамдан башталат. 🌸',
  },

  reviews: [
    {
      id: 'rev-1',
      image: '/src/assets/images/sensu_customer_review_1_1790775768680.jpg',
      alt: 'WhatsApp кардар пикири: дээрлик 7 кг минус',
      tag: 'WhatsApp пикири · -7 кг',
      caption: '«почти 7кг минус... и была в восторге 🥺»',
    },
    {
      id: 'rev-2',
      image: '/src/assets/images/sensu_review_2_result_1790775837208.jpg',
      alt: '3 жумалык жыйынтык кардар пикири',
      tag: 'Чыныгы натыйжа',
      caption: '«Результат за 3 недели»',
    },
    {
      id: 'rev-3',
      image: '/src/assets/images/sensu_review_3_days_1790775848971.jpg',
      alt: '10 күндүк жыйынтык До жана После',
      tag: '10 күндүк курс',
      caption: '«За 10 дней — До / После»',
    },
    {
      id: 'rev-4',
      image: '/src/assets/images/sensu_review_4_insta_1790775865113.jpg',
      alt: 'Instagram Direct кардар пикири',
      tag: 'Instagram Direct · -12.5 кг',
      caption: '«Реально вес сбрасывает, хороший чай! 👍»',
    },
  ],
};
