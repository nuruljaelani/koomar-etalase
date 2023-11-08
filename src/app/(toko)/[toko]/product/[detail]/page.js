"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProductSlider from "@/components/Product/ProductSlider";
import { ArrowLeft, ShoppingBag, ShoppingCart } from "lucide-react";
import Layout from "@/components/Layout";
import axios from "@/lib/axios";
export default function Page({ params }) {
  console.log(params.toko);
  const router = useRouter();
  const [openDetail, setOpenDetail] = useState(false);
  const [product, setProduct] = useState()

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
  const addToCart = () => {
    setOpenDetail(false);
    const data = {
      id: product?.produk_id,
      name: product?.produk_nama,
      price: product?.produk_harga,
      image: product?.images[0]?.gambar_file,
      qty: 1
    }

    const item = localStorage.getItem("carts")
    let cartLists = [];
    if (item == undefined) {
      cartLists = []
    } else {
      cartLists = JSON.parse(item)
    }

    const idx = cartLists.findIndex(el => el.id == data.id)
    if (idx != undefined && idx > -1) {
      cartLists[idx] = {...cartLists[idx], qty: cartLists[idx].qty + 1}
    } else {
      cartLists.push(data)
    }

    localStorage.setItem("carts", JSON.stringify(cartLists))
    setTimeout(() => {
      router.push(`/${params.toko}/cart`);

      // if (scrollPosition) {
      //     window.scrollTo(0, parseInt(scrollPosition));
          // sessionStorage.removeItem("scrollPosition");
      // }
    }, 100);
  };

  
  useEffect(() => {
    setOpenDetail(true);
    const scrollPosition = sessionStorage.getItem("scrollPosition");

    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      //   sessionStorage.removeItem("scrollPosition");
    }

    const getProductDetail = async () => {
      const res = await axios.get("etalase/produk", {
        params: {
          slug: params.detail
        }
      })
  
      return res.data
    }

    getProductDetail().then(res => setProduct(res.data))
  }, []);

  const price = new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR", maximumFractionDigits: 0}).format(product?.produk_harga)
  return (
    <Layout>
      {/* <Home params={params} /> */}
      <div className="-m-6 p-3 flex flex-col gap-3">
        <div className="flex gap-3 py-3 sticky top-0 z-20 inset-x-0 bg-white mb-4 sm  mx-[-10px] px-[10px] rounded-b-2xl">
          <Button onClick={() => router.back()} variant="ghost ">
            <ArrowLeft className="mr-1" /> Kembali
          </Button>
        </div>
        <ProductSlider className="-m-3" name={product?.produk_nama} image={product?.images[0]?.gambar_file} />
        <div className="p-5 flex flex-col gap-5">
          <div className="lg:text-xl text-primary font-bold text-4xl">
            {
              price ?? "Rp 550.000,-"
            }
          </div>
          <div>
            <p>
              {
                product?.produk_deskripsi ?? 
                `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                  ea laudantium quidem repellat quos, esse sapiente. Numquam ad
                  corrupti quo, ipsam, possimus explicabo aperiam sit facilis, quam
                  perferendis doloremque ut.`
              }
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
