import ShoppingList from "@/components/shoppingList";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-primary items-center justify-start pt-4">
      <ShoppingList />
    </div>
  );
}
