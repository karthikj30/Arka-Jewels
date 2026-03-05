import necklace1 from '../assets/necklace1.jpg';
import ring1 from '../assets/ring1.jpg';
import earring1 from '../assets/earring1.jpg';
import bracelet1 from '../assets/bracelet1.jpg';
import pendant1 from '../assets/pendant1.jpg';
import earring2 from '../assets/earring2.jpg';
import bracelet2 from '../assets/bracelet2.jpg';
import ring2 from '../assets/ring2.jpg';

export const PRODUCTS = [
  { id: 1, name: 'Royal Kundan Necklace',    category: 'Necklaces', price: 45999, oldPrice: 52999, rating: 5, reviews: 128, badge: 'Bestseller', image: necklace1 },
  { id: 2, name: 'Diamond Solitaire Ring',   category: 'Rings',     price: 89999, oldPrice: null,  rating: 5, reviews: 96,  badge: 'New',        image: ring1 },
  { id: 3, name: 'Pearl Drop Earrings',      category: 'Earrings',  price: 12499, oldPrice: 15999, rating: 4, reviews: 74,  badge: 'Sale',       image: earring1 },
  { id: 4, name: 'Gold Bangle Set',          category: 'Bracelets', price: 34999, oldPrice: null,  rating: 4, reviews: 58,  badge: null,         image: bracelet1 },
  { id: 5, name: 'Emerald Gold Pendant',     category: 'Necklaces', price: 28500, oldPrice: 32000, rating: 4, reviews: 42,  badge: 'Sale',       image: pendant1 },
  { id: 6, name: 'Ruby Stud Earrings',       category: 'Earrings',  price: 18750, oldPrice: null,  rating: 5, reviews: 61,  badge: 'New',        image: earring2 },
  { id: 7, name: 'Sapphire Tennis Bracelet', category: 'Bracelets', price: 62000, oldPrice: 70000, rating: 5, reviews: 33,  badge: null,         image: bracelet2 },
  { id: 8, name: 'Antique Jadau Ring',       category: 'Rings',     price: 39900, oldPrice: 44500, rating: 4, reviews: 47,  badge: 'Bestseller', image: ring2 },
];
