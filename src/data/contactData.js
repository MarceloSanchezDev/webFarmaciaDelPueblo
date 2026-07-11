export const pharmacyContact = {
  name: 'Farmacia Del Pueblo',
  address: 'Agregar dirección real',
  city: 'Agregar barrio o ciudad',
  province: 'Buenos Aires',
  country: 'Argentina',

  phone: '+54 000 0000-0000',
  whatsappNumber: '5490000000000',
  whatsappMessage: 'Hola Farmacia Del Pueblo, quiero hacer una consulta.',

  email: '',
  instagramUrl: '',
  mapsUrl: 'https://maps.google.com/',

  openingHours: [
    {
      day: 'Lunes a viernes',
      hours: '08:00 a 20:00',
    },
    {
      day: 'Sábados',
      hours: '09:00 a 18:00',
    },
    {
      day: 'Domingos y feriados',
      hours: 'Consultar guardia',
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