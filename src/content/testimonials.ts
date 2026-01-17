export type Testimonial = {
  name: string;
  role: string;
  content: string;
  rating?: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "أحمد",
    role: "عميل (شراء شقة)",
    content: "التعامل كان واضح ومحترم، والأهم إنهم قالوا الحقيقة في السوق قبل أي كلام عن البيع.",
    rating: 5,
  },
  {
    name: "محمود",
    role: "عميل (إيجار)",
    content: "وصلت لعقار مناسب بسرعة، والمتابعة كانت ممتازة لحد استلام المفتاح.",
    rating: 5,
  },
  {
    name: "محمد",
    role: "عميل (بيع)",
    content: "تسعير واقعي وتفاوض كويس… وبدون وعود مبالغ فيها.",
    rating: 5,
  },
  {
    name: "هالة",
    role: "عميلة (معاينة)",
    content: "الرد سريع، والمعاينة كانت مرتبة… وشرح كل التفاصيل بوضوح.",
    rating: 5,
  },
];
