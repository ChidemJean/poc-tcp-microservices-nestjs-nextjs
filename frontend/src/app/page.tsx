'use client'
import VehicleCard from "./components/VehicleCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useState } from "react";
import WebsocketTest from "@/components/WebsocketTest";

export default function Home() {
  const [icon, setIcon] = useState('green')

  return (
    <>
      <WebsocketTest></WebsocketTest>
      <div className="hidden">
        <button className="text-red-500" onClick={e => setIcon(icon => (icon == 'green' ? 'red' : 'green'))}>Teste color icon</button>
        <div className="p-16 pt-8">
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            // autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="border-l-2 border-red-600 mb-10 min-h-64 pl-12 pr-9 pt-[1.2rem]"
          >
            <SwiperSlide>
              <VehicleCard metaAtingida={35} color="red" type={0} isEmpty={0} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={85} color="red" type={0} isEmpty={1} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={35} color="red" type={0} isEmpty={0} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={85} color="red" type={0} isEmpty={1} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={35} color="red" type={0} isEmpty={0} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={35} color="red" type={0} isEmpty={1} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={85} color="red" type={0} isEmpty={0} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={35} color="red" type={0} isEmpty={1} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={85} color="red" type={0} isEmpty={0} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={35} color="red" type={0} isEmpty={1} />
            </SwiperSlide>
          </Swiper>
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="border-l-2 border-yellow-600 mb-10 min-h-64 pl-12 pr-9 pt-[1.2rem]"
          >
            <SwiperSlide>
              <VehicleCard metaAtingida={35} color="yellow" type={1} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={85} color="yellow" type={1} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={35} color="yellow" type={1} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={85} color="yellow" type={1} />
            </SwiperSlide><SwiperSlide>
              <VehicleCard metaAtingida={35} color="yellow" type={1} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={85} color="yellow" type={1} />
            </SwiperSlide><SwiperSlide>
              <VehicleCard metaAtingida={35} color="yellow" type={1} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={85} color="yellow" type={1} />
            </SwiperSlide><SwiperSlide>
              <VehicleCard metaAtingida={35} color="yellow" type={1} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={85} color="yellow" type={1} />
            </SwiperSlide><SwiperSlide>
              <VehicleCard metaAtingida={35} color="yellow" type={1} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={85} color="yellow" type={1} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={35} color="yellow" type={1} />
            </SwiperSlide>
          </Swiper>
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="border-l-2 border-green-600 mb-10 min-h-64 pl-12 pr-9 pt-[1.2rem]"
          >
            <SwiperSlide>
              <VehicleCard metaAtingida={35} color={icon} type={0} isEmpty={1} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={85} color="green" type={0} isEmpty={0} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={35} color="green" type={0} isEmpty={1} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={85} color="green" type={0} isEmpty={0} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={35} color="green" type={0} isEmpty={1} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={85} color="green" type={0} isEmpty={0} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={35} color="green" type={0} isEmpty={1} />
            </SwiperSlide>
            <SwiperSlide>
              <VehicleCard metaAtingida={85} color="green" type={0} isEmpty={0} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
