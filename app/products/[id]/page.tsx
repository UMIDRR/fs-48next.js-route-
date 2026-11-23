import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../data";
import LikeButton from "./LikeButton";

type ProdctPageProps = {
  params: Promise<{ id: string }>;
};
export default async function ProductPage({ params }: ProdctPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <main>
      <h1>{product.name}</h1>;<p>Mehsulun idsi:{product.id}</p>;
      <LikeButton />
      <p>
        <Link href="/products">Mehsullara qayit</Link>
      </p>
    </main>
  );
}
