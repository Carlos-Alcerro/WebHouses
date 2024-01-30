"use client";

import { Error404 } from "@/components/Error404/Error404";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { dataProperties } from "@/components/Properties/Properties.data";
import { Property } from "@/components/Property/Property";
import { TransitionPage } from "@/components/TransitionPage/TransitionPage";
import { useParams } from "../../../../../node_modules/next/navigation";

export default function Page() {
  const router = useParams();
  const propertyId = router.page;
  const filteredPage = dataProperties.find(
    (property) => property.id === Number(propertyId)
  );
  console.log(filteredPage);

  return (
    <>
      <TransitionPage />
      <Header />
      {filteredPage ? <Property house={filteredPage} /> : <Error404 />}
      <Footer />
    </>
  );
}
