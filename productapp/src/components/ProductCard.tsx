import Link from "next/link"
import { Product } from "@/types/product"

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {

  const stars = Math.round(product.rating.rate)

  return (

    <Link href={`/product/${product.id}`}>

      <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 p-5 group cursor-pointer border">

        {/* Product Image */}

        <div className="h-44 flex items-center justify-center overflow-hidden">

          <img
            src={product.image}
            alt={product.title}
            className="h-40 object-contain group-hover:scale-110 transition duration-300"
          />

        </div>

        {/* Category */}

        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">

          {product.category}

        </span>

        {/* Product Title */}

        <h2 className="font-semibold mt-3 text-base leading-5 line-clamp-2 min-h-[44px] text-gray-800">

          {product.title}

        </h2>

        {/* Rating Stars */}

        <div className="flex mt-2">

          {Array.from({ length: 5 }).map((_, i) => (

            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={i < stars ? "#facc15" : "#e5e7eb"}
              className="w-5 h-5"
            >

              <path d="M12 17.27L18.18 21 16.54 13.97
                       22 9.24 14.81 8.63
                       12 2 9.19 8.63
                       2 9.24 7.46 13.97
                       5.82 21z"/>

            </svg>

          ))}

        </div>

        {/* Price */}

        <div className="mt-3">

          <p className="text-xl font-bold text-green-600">

            ${product.price}

          </p>

        </div>

      </div>

    </Link>

  )
}
