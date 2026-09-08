import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pharmacySeo } from '../../data/contactData';

const pages = {
  '/': {
    title: pharmacySeo.title,
    description: pharmacySeo.description,
  },
  '/historia': {
    title: 'Historia de Farmacia Del Pueblo | Más de 100 años en Lomas del Mirador',
    description: 'Conocé la historia de Farmacia Del Pueblo, una farmacia familiar que acompaña al barrio de Lomas del Mirador desde 1922.',
  },
  '/servicios': {
    title: 'Servicios farmacéuticos y obras sociales | Farmacia Del Pueblo',
    description: 'Consultá los servicios de Farmacia Del Pueblo: medicamentos, obras sociales, perfumería, ortopedia, dermocosmética y asesoramiento profesional.',
  },
  '/contacto': {
    title: 'Contacto y horarios | Farmacia Del Pueblo en Lomas del Mirador',
    description: 'Encontrá la dirección, horarios, teléfono, WhatsApp y ubicación de Farmacia Del Pueblo en Lomas del Mirador.',
  },
  '/comunidad': {
    title: 'Comunidad y 100 años | Farmacia Del Pueblo',
    description: 'Conocé las acciones, consejos e historia comunitaria de Farmacia Del Pueblo junto a las familias de Lomas del Mirador.',
  },
};

function setMeta(selector, content) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute('content', content);
}

function Seo() {
  const { pathname } = useLocation();
  const page = pages[pathname];

  useEffect(() => {
    const canonical = `${pharmacySeo.siteUrl}${pathname === '/' ? '/' : pathname}`;

    if (!page) {
      document.title = 'Página no encontrada | Farmacia Del Pueblo';
      setMeta('meta[name="robots"]', 'noindex, nofollow');
      return;
    }

    document.title = page.title;
    setMeta('meta[name="description"]', page.description);
    setMeta('meta[property="og:title"]', page.title);
    setMeta('meta[property="og:description"]', page.description);
    setMeta('meta[property="og:url"]', canonical);
    setMeta('meta[name="twitter:title"]', page.title);
    setMeta('meta[name="twitter:description"]', page.description);
    setMeta('meta[name="robots"]', 'index, follow');

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.setAttribute('href', canonical);
  }, [page, pathname]);

  return null;
}

export default Seo;
