export const pillarLabels = {
  basics: 'საფუძვლები',
  safety: 'უსაფრთხოება',
  'responsible-use': 'პასუხისმგებლიანი გამოყენება',
  practice: 'პრაქტიკა',
  framework: '4D ჩარჩო',
} as const;

export type Pillar = keyof typeof pillarLabels;

/** თემების რიგი ნავიგაციასა და მთავარ გვერდზე */
export const pillarOrder: Pillar[] = ['basics', 'safety', 'responsible-use', 'practice', 'framework'];

/** თემის მოკლე აღწერა: მთავარ გვერდზე და სტატიების სიაში */
export const pillarDescriptions: Record<Pillar, string> = {
  basics: 'რა არის ხელოვნური ინტელექტი, როგორ მუშაობს ჩატბოტი და რატომ ცდება ის ზოგჯერ.',
  safety: 'პირადი მონაცემების დაცვა, დიპფეიკების ამოცნობა და ხმის კლონირებით თაღლითობა.',
  'responsible-use': 'ფაქტების გადამოწმება, კეთილსინდისიერება, მიკერძოება და საავტორო უფლებები.',
  practice: 'მზა ქართული პრომპტები სწავლისთვის, მუშაობისთვის და ყოველდღიური საქმეებისთვის.',
  framework: 'AI-თან მუშაობის ოთხი უნარი: Delegation, Description, Discernment, Diligence.',
};

const dateFormatter = new Intl.DateTimeFormat('ka-GE', { dateStyle: 'long' });

export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}
