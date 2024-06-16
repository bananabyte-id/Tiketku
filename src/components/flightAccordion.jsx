import React from "react";
import { useState } from "react";
import thumbnail from "../icons/thumbnail.svg";
import baggage from "../icons/baggage.svg";

export default function FlightAccordion(props) {
  const {
    airline,
    flightClass,
    departureTime,
    arrivalTime,
    totalTime,
    type,
    departureAirportId,
    arrivalAirportId,
    price,
    date,
    dep_airport,
    code,
    arr_airport,
  } = props;
  const [accordionOpen, setAccordionOpen] = useState(false); // State untuk mengontrol status terbuka atau tertutupnya accordion

  function toggleAccordion() {
    setAccordionOpen(!accordionOpen); // Toggle state accordionOpen
  }

  return (
    <div>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className={`flex items-center w-full justify-between p-5 font-medium rtl:text-right ${
              accordionOpen
                ? "rounded-t-xl border border-t-customBlue2 border-l-customBlue2 border-r-customBlue2 border-b-none"
                : "rounded-xl border"
            } shadow-inner gap-3`}
            onClick={toggleAccordion}
            aria-expanded={accordionOpen ? "true" : "false"}
            aria-controls="accordion-collapse-body-1"
          >
            <span className="w-full">
              <div className="flex items-center gap-3">
                <img src={thumbnail} alt="" />
                <p>
                  {airline} - {flightClass}
                </p>
              </div>
              <div className="flex items-center justify-items-between gap-4">
                <div className="flex w-full items-center mt-5">
                  <div>
                    <p className="font-bold">{departureTime}</p>
                    <p className="font-semibold">{departureAirportId}</p>
                  </div>
                  <div className="flex-grow">
                    <p>{totalTime}</p>
                    <hr className="my-2 border-gray-200" />
                    <p>{type}</p>
                  </div>
                  <div>
                    <p className="font-bold">{arrivalTime}</p>
                    <p className="font-semibold">{arrivalAirportId}</p>
                  </div>
                  {/* <div className="px-8">
                    <img src={baggage} alt="" />
                  </div> */}
                </div>
                <div className="space-y-1">
                  <p className="text-customBlue1 font-bold text-xl">{price}</p>
                  <button className="bg-customBlue2 rounded-xl w-32 p-2 text-white">
                    Pilih
                  </button>
                </div>
              </div>
            </span>
            <svg
              data-accordion-icon=""
              className={`w-3 h-3 rotate-${
                accordionOpen ? "180" : "0"
              } shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>

        <div
          id="accordion-collapse-body-1"
          className={`px-10 py-5 rounded-b-xl  ${
            accordionOpen
              ? "border border-b-customBlue2 border-r-customBlue2 border-l-customBlue2 border-t-none"
              : "hidden border"
          }`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div>
            <div>
              <p className="font-bold text-customBlue2 text-lg">
                Detail Penerbangan
              </p>
            </div>
            <div className="flex justify-between mt-5">
              <div>
                <p className="font-bold">07:00</p>
                <p>{date}</p>
                <p className="font-semibold">{dep_airport}</p>
              </div>
              <div>
                <p className="font-bold text-lg text-customBlue3">
                  Keberangkatan
                </p>
              </div>
            </div>
            <div>
              <hr className="my-5 border-gray-300" />
            </div>
            <div className="flex items-center gap-5">
              <div>
                <img src={thumbnail} alt="" />
              </div>
              <div>
                <div>
                  <p className="font-bold">
                    {airline} - {flightClass}
                  </p>
                  <p className="font-bold">{code}</p>
                </div>
                <div className="mt-3">
                  <p className="font-bold">Informasi:</p>
                  <p>Baggage 20 kg</p>
                  <p>Cabin Baggage 7 kg</p>
                  <p>In Flight Entertaimet</p>
                </div>
              </div>
            </div>
            <div>
              <hr className="my-5 border-gray-300" />
            </div>
            <div className="flex justify-between mt-5">
              <div>
                <p className="font-bold">{arrivalTime}</p>
                <p>{date}</p>
                <p className="font-semibold">{arr_airport}</p>
              </div>
              <div>
                <p className="font-bold text-lg text-customBlue3">Kedatangan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
