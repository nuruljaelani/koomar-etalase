"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import axios from "@/lib/axios";

export default function Page({ params }) {
  const router = useRouter();
  const [openDetail, setOpenDetail] = useState(false);
  const [toko, setToko] = useState();

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
  useEffect(() => {
    setOpenDetail(true);
    const scrollPosition = sessionStorage.getItem("scrollPosition");

    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      //   sessionStorage.removeItem("scrollPosition");
    }

    getToko().then(res => setToko(res.data))
  }, []);

  async function getToko() {
    const res = await axios.get("etalase/toko");
    return res.data;
  }

  console.log(toko);

  return (
    <div className="container max-w-2xl p-1 lg:px-0 bg-white">
      <div className="">
        <div className="flex flex-col gap-5 mb-4 h-full justify-start">
          <div className="flex gap-3 py-3 sticky top-0 z-20 inset-x-0 bg-white  mx-[-10px] px-[10px] rounded-b-2xl">
            <Button onClick={() => router.back()} variant="ghost ">
              <ArrowLeft className="mr-1" /> Kembali
            </Button>
          </div>
          <div>
            <div>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Tentang Kami
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                {
                  toko?.toko_deskripsi ??
                  `Once upon a time, in a far-off land, there was a very lazy king
                  who spent all day lounging on his throne. One day, his advisors
                  came to him with a problem: the kingdom was running out of
                  money.`
                }
              </p>
              {/* <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                The King's Plan
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                The king thought long and hard, and finally came up with{" "}
                <a
                  href="#"
                  className="font-medium text-primary underline underline-offset-4"
                >
                  a brilliant plan
                </a>
                : he would tax the jokes in the kingdom.
              </p>
              <blockquote className="mt-6 border-l-2 pl-6 italic">
                "After all," he said, "everyone enjoys a good joke, so it's only
                fair that they should pay for the privilege."
              </blockquote>
              <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                The Joke Tax
              </h3>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                The king's subjects were not amused. They grumbled and
                complained, but the king was firm:
              </p>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>1st level of puns: 5 gold coins</li>
                <li>2nd level of jokes: 10 gold coins</li>
                <li>3rd level of one-liners : 20 gold coins</li>
              </ul>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                As a result, people stopped telling jokes, and the kingdom fell
                into a gloom. But there was one person who refused to let the
                king's foolishness get him down: a court jester named Jokester.
              </p>
              <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                Jokester's Revolt
              </h3>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Jokester began sneaking into the castle in the middle of the
                night and leaving jokes all over the place: under the king's
                pillow, in his soup, even in the royal toilet. The king was
                furious, but he couldn't seem to stop Jokester.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                And then, one day, the people of the kingdom discovered that the
                jokes left by Jokester were so funny that they couldn't help but
                laugh. And once they started laughing, they couldn't stop.
              </p>
              <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                The People's Rebellion
              </h3>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                The people of the kingdom, feeling uplifted by the laughter,
                started to tell jokes and puns again, and soon the entire
                kingdom was in on the joke.
              </p>
              <div className="my-6 w-full overflow-y-auto">
                <table className="w-full">
                  <thead>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                        King's Treasury
                      </th>
                      <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                        People's happiness
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Empty
                      </td>
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Overflowing
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Modest
                      </td>
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Satisfied
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Full
                      </td>
                      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Ecstatic
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                The king, seeing how much happier his subjects were, realized
                the error of his ways and repealed the joke tax. Jokester was
                declared a hero, and the kingdom lived happily ever after.
              </p>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                The moral of the story is: never underestimate the power of a
                good laugh and always be careful of bad ideas.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
