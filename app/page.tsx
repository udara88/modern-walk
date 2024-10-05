import { Suspense } from "react";
import Category from "./components/home/Category";
import FlashSale from "./components/home/Flashsale";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <FlashSale />
      <Category />
    </main>
  );
}
