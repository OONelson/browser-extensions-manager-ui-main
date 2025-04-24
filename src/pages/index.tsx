import ExtensionList from "@/components/extensionList";
import Header from "@/components/header";

export default function IndexPage() {
  return (
    <main className="px-4 py-6 bg-light-gradient h-full">
      <Header />
      <ExtensionList />
    </main>
  );
}
