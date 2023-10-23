import Layout from "@/components/Layout";
import ProductList from "@/components/ProductList";
import TopNav from "@/components/TopNav";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
        if(scrollPosition == 0) {

            window.addEventListener("scroll", handleScroll,{passive: true});
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        } else {
            window.scrollTo(0, parseInt(scrollPosition));
        }
    }, [currentScroll,dataProd]);
    
    return (
        <div>
            <TopNav />
            <div className="bg-slate-300 rounded-2xl col-span-full mb-5">
                <Image
                src="/img/banner/banner1.png"
                fill
                className="!relative w-full rounded-2xl"
                alt=""
                />
            </div>
            {/* <div>{props.params?.map((item,id)=>(item))}</div> */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {dataProd?.map((item, id) => {
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
                })}
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
