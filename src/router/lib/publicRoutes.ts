export const publicRoute = {
  home: "/",
  categories: "/categories",
  category: "/category/:name",
  categoryByAlias: (alias: string): string => `/category/${alias}`,
};
