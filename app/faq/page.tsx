import { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getData } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about my work, tech stack, and availability.",
};

type FAQ = { question: string; answer: string };

export default function FAQPage() {
  const faqs = getData<FAQ[]>("faq.json");

  return (
    <Container className="py-12">
      <PageHeader
        title="FAQ"
        description="Common questions about my work, tech stack, and availability."
      />

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
