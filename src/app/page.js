import { redirect } from "next/navigation"
import Home from "."

export default function Page() {
  redirect("/:toko")
  return <Home />
}
