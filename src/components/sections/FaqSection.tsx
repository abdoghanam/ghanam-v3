import { Section } from "@/components/Section";
import { FAQS } from "@/content/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <Section className="py-14">
      <div className="text-right">
        <h2 className="text-2xl font-extrabold">أسئلة شائعة</h2>
        <p className="mt-2 text-slate-600">إجابات مباشرة… بدون لف ودوران.</p>
      </div>

      <div className="mt-8">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-right">{f.q}</AccordionTrigger>
              <AccordionContent className="text-right text-slate-700">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
