import { Menu, Search, Heart, ShoppingBag } from "lucide-react";
import Input from "./input";
export function Header() {
  return (
    <header className="bg-white flex items-center px-8 py-4 gap-6">
      <h1 className="hidden sm:flex whitespace-nowrap text-lg font-bold text-zinc-500">
        Villa
      </h1>
      <Menu className="flex w-8 h-8 text-zinc-400 sm:hidden" />
      <Input.Root>
        <Input.Control placeholder="Pesquise aqui." />
        <Input.Prefix>
          <Search className="w-6 h-6 text-zinc-400" />
        </Input.Prefix>
      </Input.Root>

      <button className="hidden sm:flex">
        <span className="text-md font-bold text-zinc-700 whitespace-nowrap">
          Entre ou Cadastre-se
        </span>
      </button>

      <div className="hidden sm:flex gap-4">
        <Heart className="w-6 h-6 text-zinc-400" />
        <ShoppingBag className="w-6 h-6 text-zinc-400" />
      </div>
    </header>
  );
}
