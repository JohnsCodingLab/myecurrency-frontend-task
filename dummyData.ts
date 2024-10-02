interface ProductReviewProp {
  id: number;
  desc: string;
  name: string;
  img: string;
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
