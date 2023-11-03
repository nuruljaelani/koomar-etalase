import axios from "@/lib/axios"

const { useState, useEffect } = require("react")

const useToko = () => {
  const [toko, setToko] = useState()

  const getToko = async () => {
    const res = await axios.get("etalase/toko")
    return res.data
}
  useEffect(() => {
    getToko().then(res => setToko(res.data))
  }, [])

  return toko
}

export default useToko