import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
export default function ProductList(props) {
    
    const slug = props.title.replaceAll(" ", "-")
    const handleClick = props.linkAction

    const price = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR", maximumFractionDigits: 0}).format(props.price)
    return (
      <div className="bg-white rounded-2xl">
        <figure className="relative pt-[120%] rounded-t-2xl overflow-hidden">
          <Image
            src={props.thumb || `/img/products/product1.jpg`}
            fill
            className="object-cover"
            alt=""
          />
        </figure>
        <div className="p-3 lg:p-5">
          <div className="font-bold line-clamp-2 overflow-hidden text-xs lg:text-sm">
            {props.title ||
              `Fashionista Code Example Title Long Name Long Name Long Name A Number 2 [Limited Edition]`}
          </div>
          <div className="lg:text-xl text-primary font-bold">
            {price || `Rp 550.000,-`}
          </div>
        </div>
        <div className="p-3 -mt-3 lg:p-5 lg:-mt-5">
          <Button className="w-full"  onClick={handleClick} asChild>
            <Link href={`/product/${slug}`}>
              <ShoppingBag className="mr-3" /> Beli Sekarang
            </Link>
          </Button>
        
        </div>
      </div>
    );
}