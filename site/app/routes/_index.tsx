import type { MetaFunction } from "@remix-run/cloudflare";
import { Button } from "@/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Java Modules" },
    {
      name: "description",
      content: "Hello Java Modules!",
    },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix (with Vite and Cloudflare)</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://developers.cloudflare.com/pages/framework-guides/deploy-a-remix-site/"
            rel="noreferrer"
          >
            Cloudflare Pages Docs - Remix guide
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
        <li>
          <Button variant="outline">Yo!</Button>
        </li>
      </ul>
    </div>
  );
}
