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
export default function Home(props) {
    
    const [scroll,setScroll] = useState(0)
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
    const [currentScroll, setCurrentScroll] = useState(0);
    const dummyProd = fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      
    const handleClick = (e) => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };
    const handleScroll = () => {
      const position = window.scrollY;
      setCurrentScroll(position);
    //   console.log(currentScroll);
    };
    const sendData = () => {
        let dato = dummyProd.then((res)=>{
            const {products} = res
            const data = []
            products?.map((item,id)=> {
                data.push({
                  thumb: item.thumbnail,
                  title: item.title,
                  price: item.price * 100,
                });
            })
            console.log(data)
            setDataProd([
                {
                    thumb: "img/products/product1.jpg",
                    title: "Fashionista Code Example Title Long Name Long Name Long Name A Number 2 [Limited Edition]",
                    price: "Rp 500.000,-",
                },
                
            ])

        })
        // console.log(data)
        // dummyProd.products?.map((item,id)=>{
        //     data.push({
        //         thumb: item.thumbnail,
        //         title: item.title,
        //         price: item.price*100

        //     })
        // })
        // return dummyProd.products
    }
    useEffect(() => {
        // console.log(sendData())
        if(dataProd) {
            if(dataProd.length < 1) {
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
                    console.log(data);
                    setDataProd([
                        
                        ...data
                    ])
                });
                
            }
        }
        const scrollPosition =  sessionStorage.getItem("scrollPosition");
        // if(scrollPosition == 0) {

        //     window.addEventListener("scroll", handleScroll,{passive: true});
        //     return () => {
        //         window.removeEventListener("scroll", handleScroll);
        //     };
        // } else {
        //     window.scrollTo(0, parseInt(scrollPosition));
        // }
    }, [currentScroll,dataProd]);
    
    return (
        <div className="container max-w-2xl p-1 lg:px-0">
            <TopNav />
            <div className="mt-28"></div>
            <div className="flex gap-5 bg-white mb-3 p-6 items-center rounded-2xl">
                <figure className="w-[100px] h-[100px] relative">
                    <Image src="/img/welcome.svg" alt="" fill/>
                </figure>
                <div>
                    <div className="font-bold text-lg">Selamat datang di Nama Toko!</div>
                    <div className="text-sm">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro rerum labore necessitatibus culpa quisquam molestiae est sit rem?
                    </div>
                </div>
            </div>
            <div className="bg-slate-300 rounded-2xl col-span-full mb-5">
                <Splide aria-label="My Favorite Images">
                  <SplideSlide>
                    <Image
                    src="/img/banner/banner1.png"
                    fill
                    className="!relative w-full rounded-2xl"
                    alt=""
                    />
                  </SplideSlide>
                  <SplideSlide>
                    <Image
                    src="/img/banner/banner1.png"
                    fill
                    className="!relative w-full rounded-2xl"
                    alt=""
                    />
                  </SplideSlide>
                </Splide>
                
            </div>
            <div className="grid grid-cols-3 gap-3 mb-3">
                <Button className="bg-green-500 hover:bg-green-300 border-black border">
                    <Icon icon="ic:baseline-whatsapp" className="sm:mr-2" /> <span className="hidden sm:inline">WA Kami</span>
                </Button>
                <Button className="bg-black hover:bg-gray-700 border-black border">
                    <Icon icon="ic:baseline-tiktok" className="sm:mr-2" /> <span className="hidden sm:inline">@namatoko</span>
                </Button>
                <Button className="bg-purple-500 hover:bg-purple-300 border-black border">
                    <Icon icon="mdi:instagram" className="sm:mr-2" /> <span className="hidden sm:inline">@namatoko</span>
                </Button>
            </div>
            {/* <div>{props.params?.map((item,id)=>(item))}</div> */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {
                    dataProd && dataProd.length > 0 ?
                        dataProd?.map((item, id) => {
                        return (
                            <ProductList
                            key={id}
                            thumb={item.thumb}
                            title={item.title}
                            price={item.price}
                            openModalDetail={true}
                            linkAction={handleClick}
                            />
                        );
                        })
                    :
                        <div className="col-span-full bg-white flex p-6 rounded-2xl">
                            <div className="m-auto text-center flex-none">
                                <SearchIcon className="mb-3 mx-auto w-[120px] h-auto"/>
                                <div className="text-center text-2xl font-bold text-primary">
                                    Looking for item
                                </div>
                                <div className="text-center text-lg">
                                    Please Wait..
                                </div>
                            </div>
                        </div>

                }
            </div>
            <div className="fixed bottom-[10px] right-[10px]">
                <Button className="w-[50px] h-[50px] rounded-full" asChild>
                    <Link href="/cart" onClick={handleClick}>
                        <ShoppingCart/>
                    </Link>
                </Button>
            </div>
        </div>
    );
}
