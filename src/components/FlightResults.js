import React, { useState } from "react";
import LongArrowIcon from "../icons/long_arrow.svg";
import Modal from "./modal";

import { FiBox } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { FiDollarSign } from "react-icons/fi";
import { LuArrowUpDown } from "react-icons/lu";

const FlightResults = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedOrder, setSelectedOrder] = useState({
    month: "January",
    bookingCode: "6723y2GHK",
    totalTime: "4h 0m",
    departureAirportId: "JKT",
    departureTime: "07.00",
    departureAirportName: "Soekarno Hatta - Terminal 1A Domestik",
    arrivalAirportId: "CGK",
    arrivalTime: "11.00",
    arrivalAirportName: "11.00 International Airport",
    flight: "Jet Air-Economy",
    flightNumber: "JT-203",
  });
  const [selectedOrderId, setSelectedOrderId] = useState(1);

  const flightdetails = [
    {
      id: 1,
      totalTime: "4h 0m",
      departureAirportId: "JKT",
      departureTime: "07.00",
      arrivalAirportId: "DPS",
      arrivalTime: "12.00",
      arrivalAirportName: "11.00 International Airport",
      flight: "Jet Air-Economy",
      flightNumber: "JT-203",
    },
    {
      id: 2,
      month: "January",
      bookingCode: "6756232OG",
      totalTime: "1h 15m",
      departureAirportId: "JKT",
      departureTime: "07.00",
      departureAirportName: "Soekarno Hatta - Terminal 1A Domestik",
      arrivalAirportId: "MLB",
      arrivalTime: "17.00",
      arrivalAirportName: "Bali International Airport",
      flight: "Jet Air-Business",
      flightNumber: "JT-205",
    },
  ];

  const handleCardClick = (order) => {
    setSelectedOrder(order);
    setSelectedOrderId(order.id);
  };

  return (
    <div className="grid p-8 space-y-4">
      <button
      onClick={toggleModal}
        type="button"
        className="border-2 border-customBlue2 text-customBlue2 px-8 py-2 rounded-full justify-self-end"
      >
        <span className="flex items-center gap-1">
          {<LuArrowUpDown />}
          Termurah
        </span>
      </button>
      {/* Modal Filter */}
      <Modal showModal={showModal} toggleModal={toggleModal} />

      

      <div className="flex">
        <div className="p-4">
          <div className="p-5 bg-background shadow-[0_3px_15px_-3px_rgba(0,0,0,0.3)] aspect-square w-60 rounded-2xl">
            <div className="self-center space-y-2">
              <div className="mt-3 mb-5">
                <p className="font-semibold text-lg">Filter</p>
              </div>
              <div className="flex items-center gap-2 border-b pb-2 text-xl">
                <FiBox />
                <p>Transit</p>
              </div>
              <div className="flex items-center gap-2 border-b pb-2 text-xl">
                <CiHeart />
                <p>Fasilitas</p>
              </div>
              <div className="flex items-center gap-2 border-b pb-2 text-xl">
                <FiDollarSign />
                <p>Harga</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          {/* Tickets */}
          <p>Hello world</p>
          Hello world
        </div>
      </div>
    </div>
    // <>
    //   <div className="container mx-auto px-[15.5rem]">
    //     <div className="grid grid-cols-12 gap-5 mt-5">
    //       <div className="col-span-9 justify-end">
    //         {" "}
    //         <div className="mb-3">
    //           <div className="ms-0">
    //             {flightdetails
    //               .filter((order) => order.month === "January")
    //               .map((order) => (
    //                 <div
    //                   key={order.id}
    //                   className={`mx-4 mb-2 ring-1 shadow-md rounded-xl px-4 py-3 cursor-pointer border-2 ${
    //                     selectedOrderId === order.id ? "border-customBlue2" : ""
    //                   }`}
    //                   onClick={() => handleCardClick(order)}
    //                 >

    //                   <div className="grid grid-cols-12 my-4 gap-12 place-content-between justify-between">
    //                     <div className="col-span-4 flex items-start justify-center">
    //                       <span className="ms-2 -mt-[2px]">
    //                         <h5 className="font-bold ">
    //                           {order.departureTime.split(" - ")[0]}
    //                         </h5>
    //                         <p className="text-sm">{order.departureAirportId}</p>
    //                       </span>
    //                     </div>
    //                     <div className="col-span-4 flex flex-col items-center justify-center">
    //                       <span>{order.totalTime}</span>
    //                       <img src={LongArrowIcon} alt="" />
    //                       <span>Direct</span>
    //                     </div>

    //                     <div className="col-span-4 flex items-start justify-center">
    //                       <span className="ms-2 -mt-[2px]">
    //                         <h5 className="font-bold ">
    //                           {order.arrivalTime.split(" - ")[0]}
    //                         </h5>
    //                         <p className="text-sm">{order.arrivalAirportId}</p>
    //                       </span>
    //                     </div>
    //                   </div>
    //                 </div>
    //               ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default FlightResults;
