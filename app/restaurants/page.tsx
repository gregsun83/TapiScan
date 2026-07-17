import { RestaurantsContent } from "@/components/pages/restaurants-content";

export const metadata = {
  title: "Restaurants | TapiScan",
  description:
    "NFC and QR menu access, table-aware ordering, POS app, kitchen flow, inventory, payments, and hardware for restaurants — one connected ecosystem."
};

export default function RestaurantsPage() {
  return <RestaurantsContent />;
}
