interface CardProductHomeProps {
  productName: string;
  productPrice: number;
}

export function CardProductHome({
  productName,
  productPrice,
}: CardProductHomeProps) {
  return (
    <div className="group mt-12 relative">
      <img src="./store-model.webp" alt="foto de roupa" />
      <div className="flex flex-col gap-2 mt-2">
        <span className="text-zinc-400 text-sm">{productName}</span>
        <span className="text-zinc-700 font-bold">
          {productPrice.toLocaleString("BRL", {
            currency: "BRL",
            style: "currency",
          })}
        </span>
      </div>

      <div className="flex-col absolute text-zinc-700 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out left-1/2 bottom-40 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex gap-2 bg-white py-2 justify-center">
          {["P", "M", "G"].map((size, index) => (
            <div
              key={index}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-200 hover:bg-zinc-300 cursor-pointer transition-all"
            >
              <span className="text-zinc-800 font-light">{size}</span>
            </div>
          ))}
        </div>
        <button className="bg-zinc-900 py-3 px-8">
          <span className="text-zinc-200 font-light">Adicionar a sacola</span>
        </button>
      </div>
    </div>
  );
}
