"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, MinusCircle, PlusCircle } from "lucide-react";

export default function Page({ params }) {
  const router = useRouter();
  const [openDetail, setOpenDetail] = useState(false);
  const [cartLists, setCartLists] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

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
    console.log(router.asPath());
  });

  const subQty = (id) => {
    const i = cartLists.findIndex((element) => element.id === id);
    console.log(i);
    let newArray = [...cartLists];
    newArray[i] = { ...newArray[i], qty: newArray[i].qty - 1 };
    if (newArray[i].qty == 0) {
      newArray.splice(i, 1);
    }
    localStorage.setItem("carts", JSON.stringify(newArray));
    setIsUpdated((state) => !state);
  };

  const addQty = (id) => {
    const i = cartLists.findIndex((element) => element.id === id);
    let newArray = [...cartLists];
    newArray[i] = { ...newArray[i], qty: newArray[i].qty + 1 };
    localStorage.setItem("carts", JSON.stringify(newArray));
    setIsUpdated((state) => !state);
  };

  useEffect(() => {
    setOpenDetail(true);
    const scrollPosition = sessionStorage.getItem("scrollPosition");

    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      //   sessionStorage.removeItem("scrollPosition");
    }

    const carts = localStorage.getItem("carts");
    if (carts == undefined) {
      setCartLists([]);
    } else {
      setCartLists(JSON.parse(carts));
    }
  }, [isUpdated]);

  return (
    <div className="container max-w-2xl p-1 lg:px-0 bg-white">
      <div className="h-[98vh]">
        <div className="flex flex-col gap-5 mb-4 h-full justify-start">
          <div className="flex gap-3 py-3 sticky top-0 z-20 inset-x-0 bg-white  mx-[-10px] px-[10px] rounded-b-2xl">
            <Button onClick={() => router.back()} variant="ghost ">
              <ArrowLeft className="mr-1" /> Kembali
            </Button>
          </div>
          {cartLists?.map((item, i) => (
            <div
              key={i}
              className="border border-gray-300 p-2 flex overflow-y-auto gap-3 items-center"
            >
              <Image
                src={item.image}
                className="object-cover rounded-2xl"
                width={70}
                height={70}
                alt=""
              />
              <div>
                <div>{item.name}</div>
                <div>
                  <strong className="text-primary">{item.qty}</strong> x{" "}
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0,
                  }).format(item.price)}
                </div>
              </div>
              <div className="ml-auto flex gap-1">
                <Button
                  variant="ghost"
                  className="py-1 px-3"
                  onClick={() => subQty(item.id)}
                >
                  <MinusCircle />
                </Button>
                <Button variant="ghost" className="py-1 px-3" onClick={() => addQty(item.id)}>
                  <PlusCircle />
                </Button>
              </div>
            </div>
          ))}
          <Button className="w-full h-[50px] bg-green-500 hover:bg-green-400 mt-auto">
            Buy now via Whatsapp
          </Button>
        </div>
      </div>
    </div>
  );
}
