import type { MetaFunction } from "@vercel/remix";
import { Link } from "@remix-run/react";

export const config = { runtime: "nodejs" };

export const meta: MetaFunction = () => {
  return [{ title: "Vercel/Prisma/Remix issues" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <ul>
        <li>
          <Link to="/api/test">Serverless, standard</Link>
        </li>
        <li>
          <Link to="/api/test-edge">Edge, standard</Link>
        </li>
        <li>
          <Link to="/api/test-awaited">Serverless, awaited</Link>
        </li>
      </ul>
    </div>
  );
}
