import { PageProps } from "@/interfaces";
import Header from "./Header";

export default function Page({ children }: PageProps) {
  return (
    <div>
      <Header />
      <h2>Page Component</h2>
      {children}
    </div>
  );
}
