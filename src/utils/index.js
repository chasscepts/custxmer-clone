export const paths = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
};

/**
 * Format path to application specification
 * @param {string} path windows path to fromat
 */
export const formatPath = (path) => {
  if (path === paths.HOME) {
    return '/Home';
  }

  const parts = path.split('/').filter((p) => p);

  return `/${parts.map((p) => `${p[0].toUpperCase()}${p.substring(1).toLowerCase()}`).join('/')}`;
};
