import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Product } from "@prisma/client";
import React from "react";
import SubmitButton from "../small/submit-button";
import { updateProductPrice } from "@/actions/product";
import { toast } from "sonner";

type Props = {
  product: Product;
  children: React.ReactNode;
};

const EditProductModal = ({ product, children }: Props) => {
  const [price, setPrice] = React.useState(product.price.toString());
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    // Here you would typically call an API to update the product price
    console.log(`Updating price for ${product.name} to ${price}`);

    try {
      console.log("Updating price");
      const res = await updateProductPrice({
        id: product.id,
        price: parseFloat(price),
      });

      console.log(res);

      toast.success("Product price updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update product price");
    }

    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-[95%] bg-purple-50 rounded-xl">
        <DialogHeader>
          <DialogTitle>
            {product.manufacturer} {product.name}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid  items-center gap-4">
              <Label htmlFor="price" className="text-lg">
                Price
              </Label>
              <Input
                required
                id="price"
                name="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="col-span-3"
                step="0.01"
                min="0"
              />
            </div>
          </div>
          <DialogFooter>
            <SubmitButton disabled={loading} className="w-full" type="submit">
              Save changes
            </SubmitButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProductModal;
