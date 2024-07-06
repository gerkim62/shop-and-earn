// ProductsTable.tsx (Client Component)
"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Edit } from "lucide-react";
import { Product } from "@prisma/client";

export function ProductsTable({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleProductUpdate = (updatedProduct: Product) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null);
    // In a real app, you'd also make an API call to update the product on the server
  };

  return (
    <Table>
      <TableCaption>A list of all products</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Manufacturer</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          {/* <TableHead>Stock</TableHead> */}
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.manufacturer}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>${product.price.toFixed(2)}</TableCell>
            {/* <TableCell>{product.stock}</TableCell> */}
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEditingProduct(product)}
                  >
                    <Edit className="w-4 h-4 mr-2" /> Edit
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit Product</DialogTitle>
                  </DialogHeader>
                  {editingProduct && (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleProductUpdate(editingProduct);
                      }}
                    >
                      <div className="grid gap-4 py-4">
                        <Input
                          value={editingProduct.name}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              name: e.target.value,
                            })
                          }
                          placeholder="Product Name"
                        />
                        <Input
                          type="number"
                          value={editingProduct.price}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              price: parseFloat(e.target.value),
                            })
                          }
                          placeholder="Price"
                        />
                        <Input
                          type="number"
                          value={editingProduct.stock}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              stock: parseInt(e.target.value),
                            })
                          }
                          placeholder="Stock"
                        />
                        <Textarea
                          value={editingProduct.description}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              description: e.target.value,
                            })
                          }
                          placeholder="Description"
                        />
                      </div>
                      <Button type="submit">Save changes</Button>
                    </form>
                  )}
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
