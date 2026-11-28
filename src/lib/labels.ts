export const pillarLabels = {
  basics: 'საფუძვლები',
  safety: 'უსაფრთხოება',
  'responsible-use': 'პასუხისმგებლიანი გამოყენება',
  practice: 'პრაქტიკა',
  framework: '4D ჩარჩო',
} as const;

const dateFormatter = new Intl.DateTimeFormat('ka-GE', { dateStyle: 'long' });

export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}
