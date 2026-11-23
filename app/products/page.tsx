import Link from "next/link";
import { products } from "./data";

type ProductPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const { category } = await searchParams;
  const selecetedCategory = Array.isArray(category) ? category[0] : category;
  const visibleProducts = selecetedCategory
    ? products.filter((product) => product.category === selecetedCategory)
    : products;

  return (
    <main>
      <h1>Mehsullar</h1>
      <nav aria-label="Mehsullar kateqoriyalari">
        <ul>
          <li>
            <Link href="/products">Hamisi</Link>
          </li>
          <li>
            <Link href="/products?category=tech">Texnologiya</Link>
          </li>
          <li>
            <Link href="/products?category=books">Kitablar</Link>
          </li>
        </ul>
      </nav>
      {visibleProducts.length === 0 ? (
        <p>Bu kateqoriya uygun mehsul tapilmadi</p>
      ) : (
        <ul>
          {visibleProducts.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
