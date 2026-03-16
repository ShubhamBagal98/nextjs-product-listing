"use client"

import { useEffect, useState } from "react"
import { Product } from "@/types/product"
import { getProducts } from "@/services/productService"

import ProductCard from "@/components/ProductCard"
import SearchBar from "@/components/SearchBar"
import CategoryFilter from "@/components/CategoryFilter"
import SkeletonCard from "@/components/SkeletonCard"

export default function Home() {

  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1)
  const pageSize = 8

  useEffect(() => {

    async function fetchData() {
      const data = await getProducts()
      setProducts(data)
      setLoading(false)
    }

    fetchData()

  }, [])

  if (loading)
    return (
      <div className="p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )

  const categories = [...new Set(products.map(p => p.category))]

  const filtered = products.filter(p => {

    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      category ? p.category === category : true

    return matchesSearch && matchesCategory

  })

  const start = (page - 1) * pageSize
  const paginated = filtered.slice(start, start + pageSize)

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Product Store
      </h1>

      <div className="flex gap-4 mb-6">

        <SearchBar value={search} onChange={setSearch} />

        <CategoryFilter
          categories={categories}
          selected={category}
          onChange={setCategory}
        />

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {paginated.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

      {/* Pagination */}

      <div className="flex gap-4 mt-6">

        <button
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          className="px-4 py-2 border rounded"
        >
          Prev
        </button>

        <button
          onClick={() => setPage(p => p + 1)}
          className="px-4 py-2 border rounded"
        >
          Next
        </button>

      </div>

    </div>
  )
}
