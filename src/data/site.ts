import type { ImageMetadata } from 'astro';
import capPutGradina from '../assets/foto/cap-put-gradina.jpg';
import piloni from '../assets/foto/piloni.jpg';
import fantana from '../assets/foto/fantana.jpg';
import pompaIrigatii from '../assets/foto/pompa-irigatii.jpg';
import echipaUtilaj from '../assets/foto/echipa-utilaj.jpg';
import guraPutului from '../assets/client/gura-putului.jpg';
import golireLingura from '../assets/client/golire-lingura.jpg';
import lingura from '../assets/client/lingura.jpg';
import troliu from '../assets/client/troliu.jpg';
import capPut from '../assets/client/cap-put.jpg';

// BASE_URL este "/" pe un domeniu propriu și "/nume-repo/" pe GitHub Pages.
// u() lipește prefixul pe fișierele din public/, ca să meargă în ambele cazuri.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (cale: string) => `${base}${cale}`;

// Tot conținutul editabil stă aici. Ce e provizoriu e listat în README-DEMO.md.
export const site = {
  // TODO(real): numele real al firmei.
  name: 'Foraje Puțuri',
  tagline: 'București · Ilfov',
  // Numărul de pe afișul și clipurile clientului.
  phone: '0729 782 533',
  phoneHref: 'tel:+40729782533',
  // TODO(real): de confirmat pe ce număr e WhatsApp-ul (lead-ul a scris de pe alt număr, vezi _client-media/lead.md).
  whatsapp: '40729782533',
  // TODO(real): programul real.
  hours: 'L–D · 07:00–20:00',
  address: 'Sector 1, București',
  // Varianta de logo din header (variantele se văd pe /logo): 'turla' | 'picatura' | 'text'.
  logoVariant: 'turla' as const,
};

export const waLink = (text = 'Bună ziua! Aș vrea o ofertă pentru un puț. Localitatea: ') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: '#top', label: 'Acasă' },
  { href: '#despre', label: 'Despre noi' },
  { href: '#servicii', label: 'Servicii' },
  { href: '#preturi', label: 'Prețuri' },
  { href: '#contact', label: 'Contact' },
];

// Rândul de cifre de sub hero (ca la forajesiputuri.ro). TODO(real): cifrele clientului.
export const stats = [
  { value: '1–40 m', label: 'adâncimea puțurilor pe care le forăm' },
  { value: '24 luni', label: 'garanție scrisă la foraj' },
  { value: '0 lei', label: 'avans, plătiți la final' },
];

export type Shot = { img: ImageMetadata; alt: string; caption: string };

// Cadre din clipul clientului.
export const shots: Shot[] = [
  { img: troliu, alt: 'Troliul cu cablu folosit la denisipare', caption: 'Troliul pentru lingura de denisipare' },
  { img: guraPutului, alt: 'Membru al echipei la gura puțului', caption: 'Denisipare puț, la gura puțului' },
  { img: lingura, alt: 'Lingura de foraj scoasă din puț', caption: 'Lingura scoasă din coloană' },
  { img: capPut, alt: 'Pietriș în jurul capului de puț', caption: 'Pietriș în jurul capului de puț' },
];

export type Service = { title: string; text: string; img: ImageMetadata; alt: string };

export const services: Service[] = [
  {
    title: 'Foraje puțuri apă',
    text: 'Forăm puțuri de apă pentru case, grădini și ferme, de la 1 la 40 m adâncime. Tubăm cu PVC albastru pentru apă potabilă, punem filtru și pietriș margaritar, apoi denisipăm până iese apa limpede.',
    img: capPutGradina,
    alt: 'Cap de puț forat într-o grădină, cu țevi albastre și portocalii',
  },
  {
    title: 'Denisipări puțuri',
    text: 'Puțul trage nisip sau apa vine tulbure? Scoatem nisipul și mâlul din coloană cu lingura, până apa curge limpede. Denisipăm și puțuri forate de alte firme.',
    img: golireLingura,
    alt: 'Lingura de denisipare golită într-o găleată',
  },
  {
    title: 'Prelungiri puțuri',
    text: 'Când nivelul apei a scăzut și pompa trage aer, adâncim puțul existent cu câțiva metri și prelungim tubulatura, fără să forăm unul nou.',
    img: echipaUtilaj,
    alt: 'Muncitori lângă o instalație de foraj',
  },
  {
    title: 'Curățare fântâni',
    text: 'Curățăm fântâni săpate și fântâni de nisip: scoatem mâlul de pe fund și refacem stratul de pietriș, ca apa să se limpezească.',
    img: fantana,
    alt: 'Fântână veche din piatră, într-o curte',
  },
  {
    title: 'Piloni forați',
    text: 'Forăm găuri pentru piloni de beton la garduri, terase, foișoare și extinderi, la diametrul și adâncimea din proiect.',
    img: piloni,
    alt: 'Utilaj de foraj pentru piloni',
  },
  {
    title: 'Puțuri pentru irigații și puțuri absorbante',
    text: 'Puțuri cu debit mai mare pentru grădină, livadă sau solar și puțuri absorbante pentru apa de ploaie și drenaj.',
    img: pompaIrigatii,
    alt: 'Pompă cu furtun verde la marginea unui câmp',
  },
];

// Carduri de preț pe adâncimi (ca la forajesiputuri.ro). TODO(real): prețurile clientului; acum sunt orientative.
export const priceCards = [
  {
    title: 'Puț mică adâncime',
    range: '1–20 m',
    from: '140',
    unit: 'lei / ml',
    items: ['Pentru grădină sau casă de vacanță', 'Tub PVC Ø 110–125 mm inclus', 'Filtru și pietriș margaritar', 'Denisipare la final', 'Garanție 12 luni'],
  },
  {
    title: 'Puț pentru casă',
    range: '20–40 m',
    from: '160',
    unit: 'lei / ml',
    featured: true,
    items: ['Apă pentru toată casa', 'Tub PVC Ø 125–160 mm inclus', 'Izolarea apei de suprafață', 'Test de debit la predare', 'Garanție 24 luni'],
  },
  {
    title: 'Denisipare sau prelungire',
    range: 'puț existent',
    from: '500',
    unit: 'lei',
    items: ['Denisipare cu lingura până la apă limpede', 'Prelungire de la 150 lei / ml', 'Și pe puțuri făcute de alte firme', 'Intervenție în 1–2 zile', 'Garanție la lucrare'],
  },
];

export const steps = [
  { title: 'Consultanță la telefon', text: 'Ne spuneți localitatea și la ce adâncime au vecinii apă. Vă dăm un preț orientativ pe loc.' },
  { title: 'Vizită pe teren', text: 'Alegem locul puțului, departe de fosă, unde poate intra utilajul.' },
  { title: 'Foraj', text: 'Un puț de casă se forează de obicei într-o singură zi.' },
  { title: 'Tubare și denisipare', text: 'Montăm tubul și filtrul, punem pietrișul și scoatem nisipul până apa e limpede.' },
  { title: 'Predare și garanție', text: 'Măsurăm debitul, primiți certificatul de garanție și plătiți la final.' },
];

export const faq = [
  {
    q: 'Cât costă un foraj de puț de apă?',
    a: 'Prețul pornește de la 140 lei pe metru forat, cu tubul PVC inclus, și crește cu adâncimea și diametrul. Pentru un puț de casă de 25 m, cu tub de Ø 125 mm, ieșiți în jur de 3.500–4.000 lei. Vă spunem prețul exact la telefon, înainte să începem.',
  },
  {
    q: 'Cât costă denisiparea unui puț?',
    a: 'Denisiparea pornește de la 500 lei și depinde de adâncime și de cât nisip are coloana. Lucrarea durează de la câteva ore la o zi.',
  },
  {
    q: 'De unde știu că puțul meu trebuie denisipat?',
    a: 'Dacă apa iese tulbure, dacă vedeți nisip în filtre sau la robinet ori dacă pompa scade debitul și se oprește, puțul trebuie denisipat.',
  },
  {
    q: 'La ce adâncime găsesc apă?',
    a: 'În București și Ilfov stratul bun de apă e de obicei între 15 și 40 m, în funcție de zonă. Ne uităm la puțurile din vecini și vă spunem înainte de foraj.',
  },
  {
    q: 'Cereți avans?',
    a: 'Nu. Plătiți după ce puțul e gata și ați văzut apa curgând limpede.',
  },
];

// Zonele din listarea firmei (bucuresti365.ro).
export const zones = {
  bucuresti: ['Sector 1', 'Sector 2', 'Sector 3', 'Sector 4', 'Sector 5', 'Sector 6'],
  ilfov: ['Otopeni', 'Voluntari', 'Corbeanca', 'Snagov', 'Mogoșoaia', 'Buftea', 'Chitila', 'Chiajna', 'Bragadiru', 'Măgurele', 'Popești-Leordeni', 'Pantelimon'],
  judete: ['Dâmbovița', 'Prahova', 'Ialomița', 'Călărași', 'Giurgiu', 'Teleorman', 'Buzău', 'Constanța', 'Olt'],
};

export const workTypes = ['Foraj puț nou', 'Denisipare', 'Prelungire puț', 'Curățare fântână', 'Piloni forați', 'Altă lucrare'];
