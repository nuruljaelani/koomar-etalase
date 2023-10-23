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
import { ShoppingBag, ShoppingCart } from "lucide-react";
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
      <>
        {/* <Home params={params} /> */}
        <Sheet open={openDetail} onOpenChange={onModalClosed}>
          {/* <SheetTrigger>Open</SheetTrigger> */}
          <SheetContent className="" side="bottom">
            <SheetHeader>
              <div className="-m-6 p-3 flex flex-col gap-3">
                <ProductSlider className="-m-3" />
                <div className="p-5 flex flex-col gap-5">
                  <div className="lg:text-xl text-primary font-bold text-4xl">
                    Rp 550.000,-
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum ea laudantium quidem repellat quos, esse sapiente.
                      Numquam ad corrupti quo, ipsam, possimus explicabo aperiam
                      sit facilis, quam perferendis doloremque ut.
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
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </>
    );
}
