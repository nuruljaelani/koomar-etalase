"use client";
import Home from "@/app";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProductSlider from "@/components/Product/ProductSlider";
import { MinusCircle, PlusCircle, ShoppingBag } from "lucide-react";
export default function Page({ params }) {
  const router = useRouter();
  const [openDetail, setOpenDetail] = useState(false);

  const onModalClosed = () => {
    if (openDetail == true) {
      setOpenDetail(false);
      setTimeout(() => {
        router.push("/");

        // if (scrollPosition) {
        //     window.scrollTo(0, parseInt(scrollPosition));
        //     // sessionStorage.removeItem("scrollPosition");
        // }
      }, 100);
    }
  };
 router.events?.on("routeChangeStart", () => {
   console.log(router.asPath())
 });
  useEffect(() => {
    setOpenDetail(true);
    const scrollPosition = sessionStorage.getItem("scrollPosition");

    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      //   sessionStorage.removeItem("scrollPosition");
    }
  }, []);
  return (
    <>
      <Home params={params} />
      <Sheet open={openDetail} onOpenChange={onModalClosed}>
        {/* <SheetTrigger>Open</SheetTrigger> */}
        <SheetContent className="" side="bottom">
          <SheetHeader>
             <SheetTitle>My Cart</SheetTitle>
          </SheetHeader>
          <div className="pt-3">
            <div className="flex flex-col gap-5 mb-4">
                <div className="border border-gray-300 p-2 flex gap-3 items-center">
                    <Image src="/img/products/product1.jpg" className="object-cover rounded-2xl" width={70} height={70} alt="" />
                    <div>
                        <div>Product Name</div>
                        <div><strong className="text-primary">1</strong> x Rp 500.000</div>
                    </div>
                    <div className="ml-auto flex gap-1">
                        <Button variant="ghost" className="py-1 px-3">
                            <MinusCircle/>
                        </Button>
                        <Button variant="ghost" className="py-1 px-3">
                            <PlusCircle/>
                        </Button>
                    </div>
                </div>
            </div>
            <Button className="w-full h-[50px] bg-green-500 hover:bg-green-400">
                Buy now via Whatsapp
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
