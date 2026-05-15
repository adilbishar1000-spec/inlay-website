import p1 from '../assets/product-1.jpg';
import p2 from '../assets/product-2.png';
import p3 from '../assets/product-3.webp';
import p4 from '../assets/product-4.jpg';
import p5 from '../assets/product-5.jpg';
import p6 from '../assets/product-6.jpg';
import p7 from '../assets/product-7.webp';
import p8 from '../assets/product-8.JPG';
import p9 from '../assets/product-9.jpg';
import p10 from '../assets/product-10.jpg';
import p11 from '../assets/product-11.png';
import p12 from '../assets/product-12.jpg';

const generateProduct = (id, name, price, image) => ({
  id: id.toString(),
  name,
  price,
  image,
  material: "Marble stone",
  color: "White/Multicolor",
  dimensions: "Length 11 cms, Width 5 cms, Height 11 cms",
  diameter: "9 cms",
  weight: "620 gms",
  origin: "Agra",
  description: "This elegant floral pattern piece is a great addition to your home or an ideal house warming gift. The heavy inlay work gives a rich & impressive look wherever you place it."
});

export const products = [
  generateProduct(1, "Blue flower 6 pcs marble coaster set with stand", "9,540.00", p1),
  generateProduct(2, "Marble inlay Jewelry Storage box", "17,130.00", p2),
  generateProduct(3, "Handcrafted White Marble Inlay Vintage Plate Floral", "7,550.00", p3),
  generateProduct(4, "Handmade Marble Inlay table top", "179,450.00", p4),
  generateProduct(5, "Handmade Marble Inlay storage box", "15,390.00", p5),
  generateProduct(6, "Marble Inlay coaster set", "3,590.00", p6),
  generateProduct(7, "Handcrafted White Marble Inlay Vintage Floral stand decor", "5,350.00", p7),
  generateProduct(8, "Handmade Marble Inlay bowl set", "9,450.00", p8),
  generateProduct(9, "Floral Marble Decorative Tray", "12,200.00", p9),
  generateProduct(10, "Vintage Marble Coaster Set Red", "8,900.00", p10),
  generateProduct(11, "Premium Marble Inlay Tabletop", "150,000.00", p11),
  generateProduct(12, "Classic Marble Inlay Jewelry Box", "14,500.00", p12),
];
