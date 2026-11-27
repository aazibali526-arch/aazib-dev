import type { IntroContent } from "@/data/types";

export interface Testimonial {
  name: string;
  company: string;
  review: string;
}

export interface TestimonialsSection {
  intro: IntroContent;
  labels: { carousel: string; previous: string; next: string };
}

export const testimonialsSection: TestimonialsSection = {
  intro: {
    eyebrow: "Client Feedback",
    title: "What Clients Say About Working With Me",
    lead: "Words from people I have built for.",
  },
  labels: {
    carousel: "Client testimonials",
    previous: "Previous testimonial",
    next: "Next testimonial",
  },
};

// OWNER: replace with real client quotes (their own words, 35 words or fewer). Never invent quotes.
const placeholder = "Add the client’s own words here, lightly trimmed to 35 words or fewer.";

export const testimonials: Testimonial[] = [
  { name: "Client Name One", company: "Company Name", review: placeholder },
  { name: "Client Name Two", company: "Company Name", review: placeholder },
  { name: "Client Name Three", company: "Company Name", review: placeholder },
  { name: "Client Name Four", company: "Company Name", review: placeholder },
  { name: "Client Name Five", company: "Company Name", review: placeholder },
];