interface ProductReviewProp {
  id: number;
  desc: string;
  name: string;
  img: string;
}

interface FaqsProps {
  id: number;
  question: string;
  answer: string;
}

export const productReview: ProductReviewProp[] = [
  {
    id: 1,
    desc: "Works great! Just use it and then relax, I fall asleep with no problem every time I use it.",
    name: "Rachel Dill",
    img: "/pen1.png",
  },
  {
    id: 2,
    desc: "It really helps me fall right to sleep compared to melatonin pills.",
    name: "Javier Mendez",
    img: "/pen2.png",
  },
  {
    id: 3,
    desc: "I've tried a lot of things to sleep but none of those worked, so I tried Cloudy and wow! I sleep like a baby now.",
    name: "Naomi Nwazurike",
    img: "/pen1.png",
  },
  {
    id: 4,
    desc: "I have been falling asleep faster and sleeping thru the night.",
    name: "Nate Jacobs",
    img: "/pen2.png",
  },
];

export const faqs: FaqsProps[] = [
  {
    id: 1,
    question: "Q1: How does it work?",
    answer:
      "Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect, and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.",
  },
  {
    id: 2,
    question: "Q2: Why inhale melatonin?",
    answer:
      "Take one serving (2 gummies) 30 minutes before bed. Chew thoroughly before swallowing.",
  },
  {
    id: 3,
    question: "Q3: How much melatonin is there per inhale?",
    answer:
      "Yes, Cloudy is safe to use every night. It is non-habit forming and does not contain any harmful ingredients.",
  },
  {
    id: 4,
    question: "Q4: Is it an e-cigarette or tobacco product?",
    answer:
      "Cloudy starts working within 30 minutes of taking it. You should start to feel relaxed and sleepy shortly after taking it.",
  },
  {
    id: 5,
    question: "Q5: What's in it?",
    answer:
      "If you are taking any other medications, you should consult your doctor before taking Cloudy. It is always best to consult with a healthcare professional before starting any new supplement.",
  },
  {
    id: 6,
    question: "Q6: What's not in it?",
    answer:
      "If you have a medical condition, you should consult your doctor before taking Cloudy. It is always best to consult with a healthcare professional before starting any new supplement.",
  },
  {
    id: 7,
    question: "Q7: How long does it last?",
    answer:
      "If you have a medical condition, you should consult your doctor before taking Cloudy. It is always best to consult with a healthcare professional before starting any new supplement.",
  },
  {
    id: 8,
    question: "Q8: How do I know it has run out/died?",
    answer:
      "If you have a medical condition, you should consult your doctor before taking Cloudy. It is always best to consult with a healthcare professional before starting any new supplement.",
  },
];
