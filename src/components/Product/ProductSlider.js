import Image from "next/image";
import React from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import p1 from "../../../public/img/products/product1.jpg"
export default class ProductSlider extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            productId: null,
        }
    }
    
    render() {
        return (
          <div>
            <div className={this.props.className}>
              <div className="relative pt-[80%]  max-h-[300px] rounded-2xl">
                <Image
                  src={this.props.image ?? p1}
                  fill
                  className="object-cover rounded-2xl mb-5"
                  alt=""
                />
                <div className="absolute left-0 bottom-0 right-0 bg-gradient-to-t from-black h-[200px] flex items-end text-white px-3 py-5 text-left font-bold">
                  <div>{this.props.name ?? "Product Name"}</div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center mt-4">
                {[...Array(3)].map((item, id) => (
                  <div className=" relative p-1 w-2/12" key={id}>
                    <Image
                      src="/img/products/product1.jpg"
                      fill
                      className="object-cover rounded-2xl !relative h-[80px] w-full"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
}