import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Product from "@/models/Product";

export async function GET() {
  try {
    await connectToDatabase();
    const products = await Product.find({}).sort({ createdAt: -1 });
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectToDatabase();
    
    // Accept array for bulk insert or single object
    if (Array.isArray(body)) {
      const newProducts = await Product.insertMany(body);
      return NextResponse.json(newProducts, { status: 201 });
    } else {
      const newProduct = await Product.create(body);
      return NextResponse.json(newProduct, { status: 201 });
    }
  } catch (error) {
    console.error("Error creating product(s):", error);
    return NextResponse.json(
      { error: "Failed to create product(s)" },
      { status: 500 }
    );
  }
}
