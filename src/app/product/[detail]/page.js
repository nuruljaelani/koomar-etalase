'use client'
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
import { useEffect,useState } from "react";
import Image from "next/image";
import ProductSlider from "@/components/Product/ProductSlider";
import { ArrowLeft, ShoppingBag, ShoppingCart } from "lucide-react";
import Layout from "@/components/Layout";
export default function Page({params}) {
    const router = useRouter();
    const [openDetail, setOpenDetail] = useState(false);

    const onModalClosed = () => {
        if(openDetail == true) {
            setOpenDetail(false)
            setTimeout(()=>{
                router.push("/");

                // if (scrollPosition) {
                //     window.scrollTo(0, parseInt(scrollPosition));
                //     // sessionStorage.removeItem("scrollPosition");
                // }        
            },100)
        }
    }
    const addToCart = () => {
        setOpenDetail(false);
        setTimeout(() => {
          router.push("/cart");

          // if (scrollPosition) {
          //     window.scrollTo(0, parseInt(scrollPosition));
          //     // sessionStorage.removeItem("scrollPosition");
          // }
        }, 100);
    }
    useEffect(()=>{
        setOpenDetail(true)
        const scrollPosition = sessionStorage.getItem("scrollPosition");

        if (scrollPosition) {
          window.scrollTo(0, parseInt(scrollPosition));
        //   sessionStorage.removeItem("scrollPosition");
        }
    },[])
    return (
      <Layout>
        {/* <Home params={params} /> */}
        <div className="-m-6 p-3 flex flex-col gap-3">
          <div className="flex gap-3 py-3 sticky top-0 z-20 inset-x-0 bg-white mb-4 sm  mx-[-10px] px-[10px] rounded-b-2xl">
            <Button onClick={()=>router.back()} variant="ghost ">
              <ArrowLeft className="mr-1"/> Kembali
            </Button>
          </div>
          <ProductSlider className="-m-3" />
          <div className="p-5 flex flex-col gap-5">
            <div className="lg:text-xl text-primary font-bold text-4xl">
              Rp 550.000,-
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                ea laudantium quidem repellat quos, esse sapiente. Numquam ad
                corrupti quo, ipsam, possimus explicabo aperiam sit facilis,
                quam perferendis doloremque ut.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="w-full h-[50px]" onClick={addToCart}>
              <ShoppingBag className="mr-3" /> Tambah ke Keranjang
            </Button>
            <Button variant="outline" className="border-primary h-[50px]">
              <ShoppingCart /> +1
            </Button>
          </div>
        </div>
      </Layout>
    );
}
