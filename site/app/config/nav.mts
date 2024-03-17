const mainNavigation = [
  { name: "Dashboard", href: "/" },
  { name: "Artifacts", href: "/artifacts" },
  { name: "Docs", href: "/docs" },
  { name: "Resources", href: "/resources" },
];

export function buildNavigation(path: string = "/") {
  return mainNavigation.map((item) => {
    return { current: path === item.href, ...item };
  });
}
