"use client";
import Layout from "@/components/Layout";
import ProductList from "@/components/ProductList";
import TopNav from "@/components/TopNav";
import { Button } from "@/components/ui/button";
import { Search, SearchIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@splidejs/splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Icon } from "@iconify/react";
import axios from "@/lib/axios";
export default function Home(props) {
  const [toko, setToko] = useState();
  const [banner, setBanner] = useState([]);
  const [marketplace, setMarketplace] = useState([]);
  const [sosmed, setSosmed] = useState([]);
  const [scroll, setScroll] = useState(0);
  const [dataProd, setDataProd] = useState([
    // {
    //     thumb: "img/products/product1.jpg",
    //     title: "Fashionista Code Example Title Long Name Long Name Long Name A Number 2 [Limited Edition]",
    //     price: "Rp 500.000,-",
    // },
    // {
    //     thumb: "img/products/product1.jpg",
    //     title: "Fashionista Code Example Title Long Name Long Name Long Name A Number 2 [Limited Edition]",
    //     price: "Rp 500.000,-",
    // },
    // {
    //     thumb: "img/products/product1.jpg",
    //     title: "Fashionista Code Example Title Long Name Long Name Long Name A Number 2 [Limited Edition]",
    //     price: "Rp 500.000,-",
    // },
    // {
    //     thumb: "img/products/product1.jpg",
    //     title: "Fashionista Code Example Title Long Name Long Name Long Name A Number 2 [Limited Edition]",
    //     price: "Rp 500.000,-",
    // },
    // {
    //     thumb: "img/products/product1.jpg",
    //     title: "Fashionista Code Example Title Long Name Long Name Long Name A Number 2 [Limited Edition]",
    //     price: "Rp 500.000,-",
    // },
  ]);
  const [params, setParams] = useState({
    page: 1,
    pageSize: 10
  })
  const [currentScroll, setCurrentScroll] = useState(0);
  const dummyProd = fetch("https://dummyjson.com/products?limit=10").then(
    (res) => res.json()
  );

  const handleClick = (e) => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
  };
  const handleScroll = () => {
    const position = window.scrollY;
    setCurrentScroll(position);
    //   console.log(currentScroll);
  };
  const sendData = () => {
    let dato = dummyProd.then((res) => {
      const { products } = res;
      const data = [];
      products?.map((item, id) => {
        data.push({
          thumb: item.thumbnail,
          title: item.title,
          price: item.price * 100,
        });
      });
      setDataProd([
        {
          thumb: "img/products/product1.jpg",
          title:
            "Fashionista Code Example Title Long Name Long Name Long Name A Number 2 [Limited Edition]",
          price: "Rp 500.000,-",
        },
      ]);
    });
    // console.log(data)
    // dummyProd.products?.map((item,id)=>{
    //     data.push({
    //         thumb: item.thumbnail,
    //         title: item.title,
    //         price: item.price*100

    //     })
    // })
    // return dummyProd.products
  };

  const getProducts = async () => {
    const res = await axios.get("etalase/produk/all", {
      params: params
    })

    return res.data
  }
  useEffect(() => {
    // if (dataProd) {
    //   if (dataProd.length < 1) {
    //     let dato = dummyProd.then((res) => {
    //       const { products } = res;
    //       const data = [];
    //       products?.map((item, id) => {
    //         data.push({
    //           thumb: item.thumbnail,
    //           title: item.title,
    //           price: item.price * 100,
    //         });
    //       });
    //       setDataProd([...data]);
    //     });
    //   }
    // }
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    // if(scrollPosition == 0) {

    //     window.addEventListener("scroll", handleScroll,{passive: true});
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // } else {
    //     window.scrollTo(0, parseInt(scrollPosition));
    // }
    getProducts().then(res => setDataProd(res.data))
  }, [currentScroll]);

  const getToko = async () => {
    const res = await axios.get("etalase/toko");
    return res.data;
  };

  const getBanners = async () => {
    const res = await axios.get("etalase/banner");
    return res.data;
  };
  useEffect(() => {
    getToko().then((res) => {
      setToko(res.data)
      setMarketplace(res.data.marketplace)
      setSosmed(res.data.sosmed)
    });
    getBanners().then((res) => setBanner(res.data));
  }, []);

  const a = sosmed.findIndex(el => el.sosmed_type == "tiktok")
  const b = sosmed.findIndex(el => el.sosmed_type == "instagram")
  let tiktok
  let instagram
  if (a > -1) {
    tiktok = sosmed[a].sosmed_name
  }

  if (b > -1) {
    instagram = sosmed[b].sosmed_name
  }

  return (
    <div className="container max-w-2xl p-1 lg:px-0">
      <TopNav data={toko} tiktok={tiktok} instagram={instagram} />
      <div className="mt-28"></div>
      <div className="flex gap-5 bg-white mb-3 p-6 items-center rounded-2xl">
        <figure className="w-[100px] h-[100px] relative">
          <Image src="/img/welcome.svg" alt="" fill />
        </figure>
        <div>
          <div className="font-bold text-lg">
            Selamat datang di {toko?.toko_nama ?? "Nama Toko"}!
          </div>
          <div className="text-sm">
            {toko?.toko_deskripsi ??
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro rerum labore necessitatibus culpa quisquam molestiae est sit rem?"}
          </div>
        </div>
      </div>
      <div className="bg-slate-300 rounded-2xl col-span-full mb-5">
        <Splide aria-label="My Favorite Images">
          {banner?.map((item, i) => (
            <div key={i}>
              <SplideSlide>
                <Image
                  src={item.banner_file}
                  fill
                  className="!relative w-full rounded-2xl"
                  alt=""
                />
              </SplideSlide>
              <SplideSlide>
                <Image
                  src={item.banner_file}
                  fill
                  className="!relative w-full rounded-2xl"
                  alt=""
                />
              </SplideSlide>
            </div>
          ))}
        </Splide>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-3">
        <Button className="bg-green-500 hover:bg-green-300 border-black border">
          <Icon icon="ic:baseline-whatsapp" className="sm:mr-2" />{" "}
          <span className="hidden sm:inline">WA Kami</span>
        </Button>
        <Button className="bg-black hover:bg-gray-700 border-black border">
          <Icon icon="ic:baseline-tiktok" className="sm:mr-2" />{" "}
          <span className="hidden sm:inline">@{tiktok ?? "namatoko"}</span>
        </Button>
        <Button className="bg-purple-500 hover:bg-purple-300 border-black border">
          <Icon icon="mdi:instagram" className="sm:mr-2" />{" "}
          <span className="hidden sm:inline">@{instagram ?? "namatoko"}</span>
        </Button>
      </div>
      {/* <div>{props.params?.map((item,id)=>(item))}</div> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {dataProd && dataProd.length > 0 ? (
          dataProd?.map((item, id) => {
            return (
              <ProductList
                key={id}
                thumb={item.images.length > 0 ? item.images[0]?.gambar_file : null}
                title={item.produk_nama}
                price={item.produk_harga}
                openModalDetail={true}
                linkAction={handleClick}
              />
            );
          })
        ) : (
          <div className="col-span-full bg-white flex p-6 rounded-2xl">
            <div className="m-auto text-center flex-none">
              <SearchIcon className="mb-3 mx-auto w-[120px] h-auto" />
              <div className="text-center text-2xl font-bold text-primary">
                Looking for item
              </div>
              <div className="text-center text-lg">Please Wait..</div>
            </div>
          </div>
        )}
      </div>
      <div className="fixed bottom-[10px] right-[10px]">
        <Button className="w-[50px] h-[50px] rounded-full" asChild>
          <Link href="/cart" onClick={handleClick}>
            <ShoppingCart />
          </Link>
        </Button>
      </div>
    </div>
  );
}
