// Dynamically determine the base paths for subdirectory hosting (e.g. GitHub Pages)

export const getBasename = () => {
  if (import.meta.env.DEV) return '/';
  
  const path = window.location.pathname;
  if (!path || path === '/') return '/';
  
  // Extract the first path segment (e.g. 'artzone' or 'about')
  const firstSegment = path.split('/').filter(Boolean)[0];
  
  // Known routes in our React app
  const appRoutes = ['about', 'contact', 'portfolio', 'built-for-you', 'cart', 'shop', 'auth', 'checkout'];
  
  // If first segment is NOT a React Route, treat it as the subdirectory deployment basename
  if (firstSegment && !appRoutes.includes(firstSegment.toLowerCase())) {
    return `/${firstSegment}`;
  }
  
  return '/';
};

export const getAssetUrl = (path) => {
  if (!path) return '';
  
  // Strip leading slash if any
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  const basename = getBasename();
  if (basename === '/') {
    return `/${cleanPath}`;
  }
  
  return `${basename}/${cleanPath}`;
};
