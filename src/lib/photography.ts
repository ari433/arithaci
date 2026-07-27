export type Photo = {
  id: string;
  title: string;
  category: "Travel" | "Street" | "People" | "Details";
  year: string;
  location: string;
  camera: string;
  aspect: "portrait" | "landscape" | "square";
  hue: number;
};

export const photos: Photo[] = [
  { id: "p1", title: "Alfama rooftops", category: "Travel", year: "2025", location: "Lisbon, Portugal", camera: "Fujifilm X100V", aspect: "landscape", hue: 28 },
  { id: "p2", title: "Shibuya at rain", category: "Street", year: "2025", location: "Tokyo, Japan", camera: "Fujifilm X100V", aspect: "portrait", hue: 210 },
  { id: "p3", title: "Desk, 2am", category: "Details", year: "2024", location: "Prishtina, Kosovo", camera: "iPhone 15 Pro", aspect: "square", hue: 40 },
  { id: "p4", title: "Backstage before the talk", category: "People", year: "2024", location: "Prishtina, Kosovo", camera: "Sony A7 III", aspect: "portrait", hue: 12 },
  { id: "p5", title: "Old town stairs", category: "Travel", year: "2025", location: "Lisbon, Portugal", camera: "Fujifilm X100V", aspect: "portrait", hue: 35 },
  { id: "p6", title: "Vending machine glow", category: "Street", year: "2025", location: "Tokyo, Japan", camera: "Fujifilm X100V", aspect: "landscape", hue: 260 },
  { id: "p7", title: "Notebook, mid-sprint", category: "Details", year: "2024", location: "Prishtina, Kosovo", camera: "iPhone 15 Pro", aspect: "square", hue: 45 },
  { id: "p8", title: "Hackathon, hour 40", category: "People", year: "2024", location: "Conference floor", camera: "Sony A7 III", aspect: "landscape", hue: 15 },
  { id: "p9", title: "River at dusk", category: "Travel", year: "2025", location: "Lisbon, Portugal", camera: "Fujifilm X100V", aspect: "landscape", hue: 24 },
  { id: "p10", title: "Ramen counter", category: "Street", year: "2025", location: "Tokyo, Japan", camera: "Fujifilm X100V", aspect: "portrait", hue: 8 },
  { id: "p11", title: "Family kitchen", category: "People", year: "2023", location: "Prishtina, Kosovo", camera: "iPhone 14", aspect: "square", hue: 30 },
  { id: "p12", title: "Whiteboard after midnight", category: "Details", year: "2024", location: "Home office", camera: "iPhone 15 Pro", aspect: "portrait", hue: 200 },
];

export const photoCategories = ["All", "Travel", "Street", "People", "Details"] as const;
