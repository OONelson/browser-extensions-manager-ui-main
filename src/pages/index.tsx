import Header from "@/components/HeaderSection";
import ExtensionList from "@/components/ExtensionsList";

export default function IndexPage() {
  return (
    <main className="px-4 py-6 bg-light-gradient h-full md:px-12 lg:px-24 dark:bg-dark-gradient">
      <Header />
      <ExtensionList />
    </main>
  );
}
