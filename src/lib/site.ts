/** საიტის ძირითადი გვერდების სათაურები და აღწერები: გამოიყენება გვერდებზე, SEO-სა და გაზიარების სურათებში. */

export const SITE = {
  name: 'AI Fluency',
  url: 'https://aifluency.ge',
  /** საიტის საწყისი კოდი */
  repo: 'https://github.com/levanijintcharadze/aifluency.ge',
  description:
    'ხელოვნური ინტელექტის გონივრული, უსაფრთხო და პასუხისმგებლიანი გამოყენება: მარტივად, მაგალითებით, ყველასთვის.',
};

/**
 * Google-ის ტეგის ID: Google Tag Manager-ის კონტეინერი ('GTM-...') ან GA4-ის Measurement ID ('G-...').
 * საჯარო იდენტიფიკატორია, საიდუმლო არ არის. სანამ ცარიელია, ანალიტიკა და ქუქი-ფაილების ბანერი გამორთულია.
 */
export const GOOGLE_TAG_ID = 'G-QW1RX27Z95';

export interface PageMeta {
  /** ბრაუზერის ჩანართისა და ძიების სათაური */
  title: string;
  /** ძიების შედეგებში და გაზიარებისას ნაჩვენები აღწერა (სასურველია 160 სიმბოლომდე) */
  description: string;
  /** გაზიარების სურათის სათაური */
  ogTitle: string;
  /** გაზიარების სურათის ზედა წარწერა */
  ogKicker: string;
}

export const PAGES = {
  index: {
    title: 'AI Fluency',
    description:
      'როგორ მუშაობს ხელოვნური ინტელექტი, სად დაგეხმარება და სად უნდა იყო ფრთხილად: მარტივად და მაგალითებით, ქართულად.',
    ogTitle: 'ხელოვნური ინტელექტი გონივრულად, უსაფრთხოდ და პასუხისმგებლობით',
    ogKicker: 'საგანმანათლებლო საიტი',
  },
  articles: {
    title: 'სტატიები',
    description:
      'სტატიები ხელოვნური ინტელექტის საფუძვლებზე, უსაფრთხოებაზე, ფაქტების გადამოწმებასა და პრაქტიკულ გამოყენებაზე.',
    ogTitle: 'სტატიები ხელოვნურ ინტელექტზე',
    ogKicker: 'სტატიები',
  },
  glossary: {
    title: 'ტერმინთა ლექსიკონი',
    description:
      'ხელოვნური ინტელექტის ძირითადი ტერმინები ქართულად, ინგლისური შესატყვისებით და მარტივი ახსნით.',
    ogTitle: 'ტერმინთა ლექსიკონი',
    ogKicker: 'ლექსიკონი',
  },
  framework: {
    title: '4D ჩარჩო: ხელოვნურ ინტელექტთან მუშაობის 4 უნარი',
    description:
      '4D ჩარჩო (AI Fluency Framework) ქართულად: დელეგირება, აღწერა, განსჯა და პასუხისმგებლობა. AI-თან გონივრული მუშაობის ოთხი უნარი, მაგალითებით.',
    ogTitle: '4D ჩარჩო: ხელოვნურ ინტელექტთან მუშაობის ოთხი უნარი',
    ogKicker: 'AI Fluency Framework',
  },
  about: {
    title: 'პროექტის შესახებ',
    description: 'AI Fluency-ის მიზანი და პრინციპები: მიუკერძოებლობა, ღია ლიცენზია, წყაროები და კონფიდენციალურობა.',
    ogTitle: 'პროექტის შესახებ',
    ogKicker: 'AI Fluency',
  },
  privacy: {
    title: 'კონფიდენციალურობა და ქუქი-ფაილები',
    description: 'რა მონაცემებს აგროვებს AI Fluency, რისთვის, და როგორ შეცვალოთ ქუქი-ფაილების (cookies) არჩევანი.',
    ogTitle: 'კონფიდენციალურობა და ქუქი-ფაილები',
    ogKicker: 'AI Fluency',
  },
} satisfies Record<string, PageMeta>;

export type PageKey = keyof typeof PAGES;

/** სტატიის გაზიარების სურათის სახელი (`/og/<key>.png`) */
export function articleOgKey(id: string): string {
  return `article-${id.replace(/\//g, '--')}`;
}
