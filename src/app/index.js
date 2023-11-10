"use client";

import { Button } from "@/components/ui/button";
import { SearchX } from "lucide-react";
import "@splidejs/splide/css";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  return (
    // <div className="container max-w-2xl p-1 lg:px-0">
    //   <TopNav data={toko} tiktok={tiktok} instagram={instagram} />
    //   <div className="mt-28"></div>
    //   <div className="flex gap-5 bg-white mb-3 p-6 items-center rounded-2xl">
    //     <figure className="w-[100px] h-[100px] relative">
    //       <Image src="/img/welcome.svg" alt="" fill />
    //     </figure>
    //     <div>
    //       <div className="font-bold text-lg">
    //         Selamat datang di {toko?.toko_nama ?? "Nama Toko"}!
    //       </div>
    //       <div className="text-sm">
    //         {toko?.toko_deskripsi ??
    //           "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro rerum labore necessitatibus culpa quisquam molestiae est sit rem?"}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="bg-slate-300 rounded-2xl col-span-full mb-5">
    //     <Splide aria-label="My Favorite Images">
    //       {banner?.map((item, i) => (
    //         <div key={i}>
    //           <SplideSlide>
    //             <Image
    //               src={item.banner_file}
    //               fill
    //               className="!relative w-full rounded-2xl"
    //               alt=""
    //             />
    //           </SplideSlide>
    //           <SplideSlide>
    //             <Image
    //               src={item.banner_file}
    //               fill
    //               className="!relative w-full rounded-2xl"
    //               alt=""
    //             />
    //           </SplideSlide>
    //         </div>
    //       ))}
    //     </Splide>
    //   </div>
    //   <div className="grid grid-cols-3 gap-3 mb-3">
    //     <Button className="bg-green-500 hover:bg-green-300 border-black border">
    //       <Icon icon="ic:baseline-whatsapp" className="sm:mr-2" />{" "}
    //       <span className="hidden sm:inline">WA Kami</span>
    //     </Button>
    //     <Button className="bg-black hover:bg-gray-700 border-black border">
    //       <Icon icon="ic:baseline-tiktok" className="sm:mr-2" />{" "}
    //       <span className="hidden sm:inline">@{tiktok ?? "namatoko"}</span>
    //     </Button>
    //     <Button className="bg-purple-500 hover:bg-purple-300 border-black border">
    //       <Icon icon="mdi:instagram" className="sm:mr-2" />{" "}
    //       <span className="hidden sm:inline">@{instagram ?? "namatoko"}</span>
    //     </Button>
    //   </div>
    //   {/* <div>{props.params?.map((item,id)=>(item))}</div> */}
    //   <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
    //     {dataProd && dataProd.length > 0 ? (
    //       dataProd?.map((item, id) => {
    //         return (
    //           <ProductList
    //             key={id}
    //             thumb={item.images.length > 0 ? item.images[0]?.gambar_file : null}
    //             title={item.produk_nama}
    //             price={item.produk_harga}
    //             openModalDetail={true}
    //             linkAction={handleClick}
    //           />
    //         );
    //       })
    //     ) : (
    //       <div className="col-span-full bg-white flex p-6 rounded-2xl">
    //         <div className="m-auto text-center flex-none">
    //           <SearchIcon className="mb-3 mx-auto w-[120px] h-auto" />
    //           <div className="text-center text-2xl font-bold text-primary">
    //             Looking for item
    //           </div>
    //           <div className="text-center text-lg">Please Wait..</div>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    //   <div className="fixed bottom-[10px] right-[10px]">
    //     <Button className="w-[50px] h-[50px] rounded-full" asChild>
    //       <Link href="/cart" onClick={handleClick}>
    //         <ShoppingCart />
    //       </Link>
    //     </Button>
    //   </div>
    // </div>
    <div className="flex flex-col gap-4 w-full justify-center items-center h-screen">
      <SearchX className="" size={150} />
      <div className="text-center font-semibold text-lg lg:text-xl">Toko tidak ada!</div>
      <Button onClick={() => router.refresh()}>Muat Ulang Halaman</Button>
    </div>
  );
}
