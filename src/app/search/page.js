"use client";
import Home from "@/app";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProductSlider from "@/components/Product/ProductSlider";
import {
  ArrowLeft,
  ArrowRightCircle,
  MinusCircle,
  PlusCircle,
  ShoppingBag,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import axios from "@/lib/axios";
import img from "../../../public/img/products/product1.jpg";
import img2 from "../../../public/img/7887410_3793094.svg"
export default function Page({ params }) {
  const router = useRouter();
  const [openDetail, setOpenDetail] = useState(false);
  const [products, setProducts] = useState([]);
  const [param, setParam] = useState({
    page: 1,
    pageSize: 10,
    name: ""
  });

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

  const getProducts = async () => {
    const res = await axios.get("etalase/produk/all", {
      params: param,
    });
    return res.data;
  };

  const handleChangeSearch = (e) => {
    setTimeout(() => {
      setParam(state => ({...state, name: e.target.value}))
    }, 1000);
  }
  useEffect(() => {
    setOpenDetail(true);
    const scrollPosition = sessionStorage.getItem("scrollPosition");

    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      //   sessionStorage.removeItem("scrollPosition");
    }

    getProducts().then((res) => setProducts(res.data));
  }, [param]);
  return (
    <div className="container max-w-2xl p-1 lg:px-0 bg-white">
      <div className="">
        <div className="flex flex-col gap-5 mb-4 h-full justify-start">
          <div className="flex gap-3 py-3 sticky top-0 z-20 inset-x-0 bg-white  mx-[-3px] px-[10px] rounded-b-2xl">
            <div className="flex gap-3 items-center w-full">
              <Button
                variant="ghost"
                size="icon"
                className="p-0"
                onClick={() => router.back()}
              >
                <ArrowLeft />
              </Button>
              <div className="flex-grow">
                <Input className="w-full" onChange={handleChangeSearch} />
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col gap-3">
            {products.length > 0 ?
              products?.map((item, id) => (
              <div
                key={id}
                className="border border-gray-300 p-2 flex overflow-y-auto gap-3 items-center"
              >
                <Image
                  src={item.images[0]?.gambar_file ?? img}
                  className="object-cover rounded-2xl"
                  width={70}
                  height={70}
                  alt=""
                />
                <div>
                  <div>{item.produk_nama ?? "Product Name"}</div>
                  <div>
                    <strong className="text-primary">1</strong> x{" "}
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(item.produk_harga)}
                  </div>
                </div>
                <div className="ml-auto flex gap-1">
                  <Button variant="ghost" className="p-1" size="icon">
                    <ArrowRightCircle />
                  </Button>
                </div>
              </div>
            )):
            <div className="flex w-full justify-center">
              <Image src={img2} alt="" />
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
