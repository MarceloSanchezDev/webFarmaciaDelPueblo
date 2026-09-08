export const pharmacyContact = {
  name: 'Farmacia Del Pueblo',
  address: 'Av. Brig. Gral. Juan Manuel de Rosas 523',
  city: 'Lomas del Mirador',
  province: 'Buenos Aires',
  country: 'Argentina',

  phone: '+54 9 11 3358-8234',
  whatsappNumber: '5491133588234',
  whatsappMessage: 'Hola Farmacia Del Pueblo, quiero hacer una consulta.',

  email: 'farma.del.pueblo.ldm@gmail.com',
  instagramUrl: 'https://www.instagram.com/farmaciadelpuebloldm?igsi=bXYwYXIxZ2NsOWI1',
  mapsUrl: 'https://www.google.com/maps?cid=3849878974698229354&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAFKgSoqNcy',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.6023081885623!2d-58.5251617!3d-34.6647452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc8f168665cdf%3A0x356d8487ab220e6a!2sFarmacia%20del%20Pueblo!5e0!3m2!1ses!2sar!4v1784046157971!5m2!1ses!2sar',

  openingHours: [
    {
      day: 'Lunes a sábados',
      hours: '09:00 a 13:00',
    },
    {
      day: 'Lunes a viernes',
      hours: '16:00 a 19:30',
    },
    {
      day: 'Domingos',
      hours: 'Cerrado',
    },
  ],

  services: [
    'Atención farmacéutica',
    'Venta de medicamentos',
    'Perfumería',
    'Obras sociales',
    'Control de presión',
    'Asesoramiento personalizado',
  ],
};

export function getWhatsappUrl() {
  const encodedMessage = encodeURIComponent(pharmacyContact.whatsappMessage);

  return `https://wa.me/${pharmacyContact.whatsappNumber}?text=${encodedMessage}`;
}

export function getFullAddress() {
  return `${pharmacyContact.address}, ${pharmacyContact.city}, ${pharmacyContact.province}`;
}

export function getMapsUrl() {
  return pharmacyContact.mapsUrl;
}

export const pharmacySeo = {
  siteUrl: 'https://www.delpueblofarmacia.com.ar',
  title: 'Farmacia Del Pueblo en Lomas del Mirador | Medicamentos y obras sociales',
  description:
    'Farmacia Del Pueblo en Lomas del Mirador: medicamentos, obras sociales, perfumería, control de presión y atención farmacéutica personalizada.',
  image: '/logo.png',
};
