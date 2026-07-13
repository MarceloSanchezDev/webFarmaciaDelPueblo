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
  mapsUrl: 'https://www.google.com/maps/place/Farmacia+del+Pueblo/@-34.6647452,-58.5251617,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc8f168665cdf:0x356d8487ab220e6a!8m2!3d-34.6647452!4d-58.5251617!16s%2Fg%2F1tdvqy97!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D',

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