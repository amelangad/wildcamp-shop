import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


export default function PhotoGllery() {
  const [productIds, setProductIds] = useState([2, 3, 4]);
  const [primaryProduct, setPrimaryProduct] = useState(1);

  function ProductImage({ id, onExpand }) {
    return (
      <motion.img
        src={`/kamp/kamp${id}.jpg`}
        alt="photo"
        onClick={() => onExpand(id)}
        layoutId={`product-${id}`}
      />
    );
  }


  function setAsPrimary(id) {
    const currentProductId = primaryProduct;
    const newProductIds = [
      ...productIds.filter((item) => item !== id),
      currentProductId
    ];
    setPrimaryProduct(id);
    setProductIds(newProductIds);
  }

  return (
    <div className="max-h-full flex flex-col justify-start items-center gap-0">
      <main className="w-full lg:w-1/2 flex justify-center items-start  h-full">
        <AnimatePresence>
          <motion.img
            key={primaryProduct}
            className="object-contain h-full w-auto "
            src={`/kamp/kamp${primaryProduct}.jpg`}
            alt="wildcamp"
            layoutId={`product-${primaryProduct}`}
          />
        </AnimatePresence>
      </main>
      <aside className="flex flex-row w-full lg:w-1/2 overflow-hidden cursor-pointer">
        <AnimatePresence>
          {productIds.map((id) => (
            <div className="h-auto w-1/3 overflow-hidden">
              <ProductImage
                className="object-cover"
                id={id}
                key={id}
                onExpand={setAsPrimary} />
            </div>
          ))}
        </AnimatePresence>
      </aside>
    </div>
  );
}