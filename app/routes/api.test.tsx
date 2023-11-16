import { useLoaderData } from "@remix-run/react";
import { prisma } from "../prisma";
import { defer, type LoaderFunctionArgs } from "@vercel/remix";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const org1 = prisma.organisation.findFirst();
  return defer({ org1 });
};
