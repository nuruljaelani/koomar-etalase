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
import { ArrowLeft, MinusCircle, PlusCircle, ShoppingBag } from "lucide-react";
import Layout from "@/components/Layout";
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
    <div className="container max-w-2xl p-1 lg:px-0 bg-white">
      <div className="h-[98vh]">
        <div className="flex flex-col gap-5 mb-4 h-full justify-start">
          <div className="flex gap-3 py-3 sticky top-0 z-20 inset-x-0 bg-white  mx-[-10px] px-[10px] rounded-b-2xl">
            <Button onClick={() => router.back()} variant="ghost ">
              <ArrowLeft className="mr-1" /> Kembali
            </Button>
          </div>
          <div className="border border-gray-300 p-2 flex overflow-y-auto gap-3 items-center">
            <Image
              src="/img/products/product1.jpg"
              className="object-cover rounded-2xl"
              width={70}
              height={70}
              alt=""
            />
            <div>
              <div>Product Name</div>
              <div>
                <strong className="text-primary">1</strong> x Rp 500.000
              </div>
            </div>
            <div className="ml-auto flex gap-1">
              <Button variant="ghost" className="py-1 px-3">
                <MinusCircle />
              </Button>
              <Button variant="ghost" className="py-1 px-3">
                <PlusCircle />
              </Button>
            </div>
          </div>
          <Button className="w-full h-[50px] bg-green-500 hover:bg-green-400 mt-auto">
            Buy now via Whatsapp
          </Button>
        </div>
      </div>
    </div>
  );
}
