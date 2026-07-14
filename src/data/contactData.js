export const pharmacyContact = {
  name: 'Farmacia Del Pueblo',
  address: 'Av. Brig. Gral. Juan Manuel de Rosas 523',
  city: 'Lomas del Mirador, Cdad. Autónoma de Buenos Aires',
  province: 'Buenos Aires',
  country: 'Argentina',

  phone: '+54 1146990180',
  whatsappNumber: '5491146990180',
  whatsappMessage: 'Hola Farmacia Del Pueblo, quiero hacer una consulta.',

  email: '',
  instagramUrl: '',
  mapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.6023081885623!2d-58.5251617!3d-34.6647452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc8f168665cdf%3A0x356d8487ab220e6a!2sFarmacia%20del%20Pueblo!5e0!3m2!1ses!2sar!4v1784046157971!5m2!1ses!2sar',

  openingHours: [
    {
      day: 'Lunes a viernes',
      hours: '09:00 a 13:00 16:30 a 21:00',
    },
    {
      day: 'Sábados',
      hours: '09:00 a 13:00',
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

export const pharmacySeo = {
  siteUrl: 'https://web-farmacia-del-pueblo.vercel.app',
  title: 'Farmacia Del Pueblo | Farmacia en [Barrio o Ciudad]',
  description:
    'Farmacia Del Pueblo ofrece atención farmacéutica, medicamentos, perfumería, obras sociales, control de presión y asesoramiento profesional.',
  image: '/og-image.jpg',
};

