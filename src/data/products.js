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
import p20 from '../assets/product20.jpg';
import p21 from '../assets/product21.png';
import p22 from '../assets/product22.jpg';
import p23 from '../assets/product23.webp';
import p30 from '../assets/product30.jpeg';
import p31 from '../assets/product31.jpeg';
import p32 from '../assets/product32.jpeg';
import p33 from '../assets/product33.jpeg';

const generateProduct = (id, name, price, image, category) => ({
  id: id.toString(),
  name,
  price: parseFloat(price.replace(/,/g, '')),
  image,
  category,
  material: "Marble stone",
  color: "White/Multicolor",
  dimensions: "Length 11 cms, Width 5 cms, Height 11 cms",
  diameter: "9 cms",
  weight: "620 gms",
  origin: "Agra",
  description: "This elegant floral pattern piece is a great addition to your home or an ideal house warming gift. The heavy inlay work gives a rich & impressive look wherever you place it."
});

export const products = [
  generateProduct(1, "Blue flower 6 pcs marble coaster set with stand", "9540.00", p1, "Table top"),
  generateProduct(2, "Marble inlay Jewelry Storage box", "17130.00", p2, "Utility"),
  generateProduct(3, "Handcrafted White Marble Inlay Vintage Plate Floral", "7550.00", p3, "Home decor"),
  generateProduct(4, "Handmade Marble Inlay table top", "179450.00", p4, "Table top"),
  generateProduct(5, "Handmade Marble Inlay storage box", "15390.00", p5, "Utility"),
  generateProduct(6, "Marble Inlay coaster set", "3590.00", p6, "Table top"),
  generateProduct(7, "Handcrafted White Marble Inlay Vintage Floral stand decor", "5350.00", p7, "Home decor"),
  generateProduct(8, "Handmade Marble Inlay bowl set", "9450.00", p8, "Gift sets"),
  generateProduct(9, "Floral Marble Decorative Tray", "12200.00", p9, "Table top"),
  generateProduct(10, "Vintage Marble Coaster Set Red", "8900.00", p10, "Home decor"),
  generateProduct(11, "Premium Marble Inlay Tabletop", "150000.00", p11, "Table top"),
  generateProduct(12, "Classic Marble Inlay Jewelry Box", "14500.00", p12, "Utility"),
  generateProduct(20, "Marble Gift Set Classic", "20000.00", p20, "Gift sets"),
  generateProduct(21, "Premium Marble Decor", "18500.00", p21, "Home decor"),
  generateProduct(22, "Table Top Utility Box", "9200.00", p22, "Table top"),
  generateProduct(23, "Elegant Marble Box", "11500.00", p23, "Gift sets"),
  generateProduct(30, "Marble Crafted Elegance", "22500.00", p30, "Utility"),
  generateProduct(31, "Traditional Motif Plate", "8600.00", p31, "Home decor"),
  generateProduct(32, "Royal Marble Stand", "13400.00", p32, "Table top"),
  generateProduct(33, "Parchin Kari Gift Set", "25000.00", p33, "Gift sets"),
];
