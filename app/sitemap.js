const URL = 'https://boundlessbolt.com';

export default async function sitemap() {
  const routes = ['', '/service', '/projects', '/blog', '/contact', '/about'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  // TODO: Add blog posts

  return routes;
}
