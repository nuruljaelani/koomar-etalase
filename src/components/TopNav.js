import Image from "next/image";
import { Menu,Search } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Icon } from "@iconify/react";
export default function TopNav() {
    const menu = [
        { text: "About", link: "", },
        { text: "Product", link: "", },
        { text: "My Cart", link: "", },
    ]
    return (
        <>
            <div className="h-[100px] flex items-center gap-4 fixed left-0 top-0 right-0 max-w-2xl mx-auto font-bold z-20 bg-white">
                <Sheet>
                    <Button variant="ghost" size="icon" className="p-0" asChild>
                        <SheetTrigger>
                                <Menu size={25}/>
                        </SheetTrigger>
                    </Button> 
                    <SheetContent side="left" className="bg-white p-0">                        
                        <SheetDescription className="p-0 flex flex-col h-full">
                            <div className="flex flex-col gap-3 p-5">
                                <Image src="/img/store.svg" width={70} height={70} className="object-center" alt="" />
                                <div>NAMA TOKO</div>
                            </div>
                            <div className="flex flex-col divide-y">
                                {
                                    menu?.map((item,id)=>(
                                        <Link key={id} href={item.link} className=" hover:bg-slate-100 px-5 py-5">{item.text}</Link>
                                    ))
                                }
                            </div>
                            <div className="flex flex-col gap-3 p-6 mt-auto">
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
                        </SheetDescription>
                    </SheetContent>
                </Sheet>
                    
                <Link href="/" className="flex gap-4 items-center">
                    <Image src="/img/store.svg" width={50} height={50} className="object-center" alt="" />
                    <div>Nama Store</div>
                </Link>
                <div className="flex ml-auto">
                    <Button variant="ghost" size="icon" className="p-1" asChild>
                        <Link href="/search">
                            <Search size={25}/>
                        </Link>
                    </Button> 
                </div>
            </div>
            <div className="mb-[100px]"></div>
        </>
    );
}