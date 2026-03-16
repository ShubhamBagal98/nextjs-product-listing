import { getProduct } from "@/services/productService"

interface Props {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: Props) {

  const { id } = await params

  const product = await getProduct(id)

  const stars = Math.round(product.rating.rate)

  return (

    <div className="p-10 max-w-6xl mx-auto">

      <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-lg">

        {/* Product Image */}

        <div className="flex items-center justify-center bg-gray-50 rounded-lg p-6">

          <img
            src={product.image}
            alt={product.title}
            className="h-96 object-contain hover:scale-105 transition duration-300"
          />

        </div>

        {/* Product Info */}

        <div>

          {/* Category */}

          <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">

            {product.category}

          </span>

          {/* Title */}

          <h1 className="text-3xl font-bold mt-4 text-gray-800">

            {product.title}

          </h1>

          {/* Star Rating */}

          <div className="flex mt-4">

            {Array.from({ length: 5 }).map((_, i) => (

              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={i < stars ? "#facc15" : "#e5e7eb"}
                className="w-6 h-6"
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

          <p className="text-3xl font-bold text-green-600 mt-6">

            ${product.price}

          </p>

          {/* Description */}

          <p className="text-gray-600 mt-6 leading-relaxed">

            {product.description}

          </p>

         

        </div>

      </div>

    </div>

  )
}
