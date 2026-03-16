import { Product } from "@/types/product"

const API = "https://fakestoreapi.com/products"

// GET ALL PRODUCTS
export async function getProducts(): Promise<Product[]> {

  const res = await fetch(API)

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}


// GET SINGLE PRODUCT
export async function getProduct(id: string): Promise<Product> {

  const res = await fetch(`${API}/${id}`)

  if (!res.ok) {
    throw new Error("Failed to fetch product")
  }

  return res.json()
}
