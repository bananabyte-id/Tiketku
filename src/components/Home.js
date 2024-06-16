import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import bangkokImage from "../images/bangkok.svg";
import { IoIosWoman } from "react-icons/io";
import { MdOutlineMan } from "react-icons/md";
import { FaBaby } from "react-icons/fa6";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import {
  MdOutlineDateRange,
  MdOutlineAirlineSeatReclineNormal,
} from "react-icons/md";
import { MdAirplaneTicket } from "react-icons/md";
import { IoCalendarSharp } from "react-icons/io5";
import bannerImage from "../images/bannerIMG.jpg";
import { TbArrowsExchange } from "react-icons/tb";

const Home = () => {
  const [selectedButton, setSelectedButton] = useState("All");
  const [showReturnDate, setShowReturnDate] = useState(false);
  const [showPassengerModal, setShowPassengerModal] = useState(false);
  const [showClassModal, setShowClassModal] = useState(false);
  const [showFromCityModal, setShowFromCityModal] = useState(false);
  const [showToCityModal, setShowToCityModal] = useState(false);
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [fromCitySearch, setFromCitySearch] = useState("");
  const [toCitySearch, setToCitySearch] = useState("");
  const [passengers, setPassengers] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });
  const handleClick = (button) => {
    setSelectedButton(button);
  };
  const [tempPassengers, setTempPassengers] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });
  const [seatClass, setSeatClass] = useState("Economy");
  const [tempSeatClass, setTempSeatClass] = useState("");

  const cities = [
    "Jakarta (JKTA)",
    "Surabaya (SBY)",
    "Bandung (BDO)",
    "Bali (DPS)",
    "Melbourne (MLB)",
  ];

  const seatClassPrices = {
    Economy: "IDR 1,500,000",
    "Premium Economy": "IDR 3,000,000",
    Business: "IDR 5,000,000",
    "First Class": "IDR 8,000,000",
  };

  const toggleReturnDate = () => {
    setShowReturnDate(!showReturnDate);
  };

  const handlePassengerChange = (type, value) => {
    setTempPassengers({
      ...tempPassengers,
      [type]: value,
    });
  };

  const handleSavePassengers = () => {
    setPassengers(tempPassengers);
    setShowPassengerModal(false);
  };

  const handleSaveClass = () => {
    setSeatClass(tempSeatClass);
    setShowClassModal(false);
  };

  const handleSelectFromCity = (city) => {
    setFromCity(city);
    setShowFromCityModal(false);
  };

  const handleSelectToCity = (city) => {
    setToCity(city);
    setShowToCityModal(false);
  };

  const displayPassengers = () => {
    const { adults, children, infants } = passengers;
    let display = [];
    if (adults > 0)
      display.push(`${adults} ${adults === 1 ? "Adult" : "Adult"}`);
    if (children > 0)
      display.push(`${children} ${children === 1 ? "Child" : "Children"}`);
    if (infants > 0)
      display.push(`${infants} ${infants === 1 ? "Infant" : "Infant"}`);
    return display.length > 0 ? display.join(", ") : "Passengers";
  };

  const filteredFromCities = cities.filter((city) =>
    city.toLowerCase().includes(fromCitySearch.toLowerCase())
  );

  const filteredToCities = cities.filter((city) =>
    city.toLowerCase().includes(toCitySearch.toLowerCase())
  );

  const today = new Date().toISOString().split("T")[0];

  return (
    <main className="flex flex-col items-center mt-14">
      <div className="-z-40 w-full max-w-8xl">
        <div className="-z-10 absolute bg-customBlue1 opacity-60  inset-0 top-48 h-40"></div>
        <div className="z-10 absolute bg-[#FFE9CA] opacity-100 rounded-[55px] inset-4 2xl:inset-32 top-24 h-80">
          <img
            src={bannerImage}
            alt="Bangkok"
            className="absolute rounded-[55px] opacity-55 h-80 right-0"
          />
        </div>
        <div className="z-20 relative flex justify-between items-center p-6 bg-customYellow rounded-lg min-h-[200px]">
          <div className="flex flex-col items-start">
            <span className="text-5xl font-bold text-black mb-2">
              Today's Discount
            </span>
            <span className="text-4xl font-extrabold text-customBlue2">
              85%!
            </span>
          </div>
        </div>
      </div>

      <div className="p-2">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-7xl mb-10">
        <div className="p-8 space-y-8 md:space-y-4">
          <h2 className="text-xl font-bold mb-4">
            Choose a special flight schedule at{" "}
            <span className="text-customBlue2">AirSeat!</span>
          </h2>

          <div className="flex flex-col md:flex-row p-2">
            <div className="flex flex-1 items-center justify-center">
              <div className="flex grid-cols-2 gap-4 items-center w-full">
                <div className="flex flex-none w-28 grid-cols-2 gap-4 items-center justify-center">
                  <FaPlaneDeparture className="text-xl" />
                  <label className="block text-gray-700">From</label>
                </div>
                <input
                  type="text"
                  value={fromCity}
                  onClick={() => setShowFromCityModal(true)}
                  readOnly
                  placeholder="Please select a location"
                  className="w-full border-b-2  border-t-white border-l-white border-r-white rounded cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-none w-full md:w-20 h-20  items-center justify-center ">
              <TbArrowsExchange className="rounded-full bg-black text-white w-7 h-7 p-1 cursor-pointer" />
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div className="flex grid-cols-2 gap-4 items-center w-full">
                <div className="flex flex-none w-28 grid-cols-2 gap-4 items-cente justify-center">
                  <FaPlaneArrival className="text-xl" />
                  <label className="block text-gray-700">To</label>
                </div>
                <input
                  type="text"
                  value={toCity}
                  placeholder="Please select a location"
                  onClick={() => setShowToCityModal(true)}
                  readOnly
                  className="w-full border-b-2  border-t-white border-l-white border-r-white rounded cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col 2xl:flex-row w-full space-y-0 md:space-y-4">
            <div className="flex flex-1 items-center justify-center w-full">
              <div className="flex w-full">
                <div className="flex flex-none w-32  items-center justify-center">
                  <div className="flex grid-cols-2 gap-4 items-center">
                    <IoCalendarSharp className="text-xl" />
                    <label className="block text-gray-700">Date</label>
                  </div>
                </div>
                <div className="grid w-full">
                  <div className="flex flex-col md:flex-row w-full">
                    <div className="flex flex-1 items-center justify-center  p-2">
                      <div className="flex flex-col w-full space-y-2">
                        <label className="block text-gray-700">Departure</label>
                        <input
                          type="date"
                          defaultValue={today}
                          min={today}
                          className="w-full border-b-2  border-t-white border-l-white border-r-white rounded"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 items-center justify-center  p-2">
                      <div className="flex flex-col w-full space-y-2">
                        <label className="block text-gray-700">Arrival</label>
                        <input
                          type="date"
                          disabled={!showReturnDate}
                          className={`w-full border rounded ${
                            showReturnDate
                              ? "border-b-2  border-t-white border-l-white border-r-white bg-white"
                              : "border-gray-300 bg-gray-200 cursor-not-allowed"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end items-start mt-2">
                      <input
                        type="checkbox"
                        className="toggle-checkbox"
                        id="returnToggle"
                        onChange={toggleReturnDate}
                      />
                      <label
                        htmlFor="returnToggle"
                        className="toggle-label"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center">
              <div className="flex w-full">
                <div className="flex flex-none w-32  items-center justify-center">
                  <div className="flex grid-cols-2 gap-4 items-center">
                    <MdOutlineAirlineSeatReclineNormal className="text-2xl" />
                    <label className="block text-gray-700">Seat</label>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row w-full">
                  <div className="flex flex-1  p-2 items-center justify-center">
                    <div className="flex flex-col w-full space-y-2">
                      <label className="block text-gray-700">Passengers</label>
                      <input
                        type="text"
                        value={displayPassengers()}
                        onClick={() => {
                          setTempPassengers(passengers);
                          setShowPassengerModal(true);
                        }}
                        readOnly
                        className="w-full border-b-2  border-t-white border-l-white border-r-white rounded cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 p-2 items-center justify-center">
                    <div className="flex flex-col w-full space-y-2">
                      <label className="block text-gray-700">Class</label>
                      <input
                        type="text"
                        value={seatClass}
                        onClick={() => {
                          setTempSeatClass("");
                          setShowClassModal(true);
                        }}
                        readOnly
                        className="w-full border-b-2  border-t-white border-l-white border-r-white roundedcursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            window.location.href = "/search";
          }}
          className="mt-6 w-full bg-customBlue2 hover:bg-customBlue1 text-white rounded py-3"
        >
          Search Flights
        </button>
      </div>
      </div>

      {showPassengerModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setShowPassengerModal(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">Select Passengers</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-5">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">
                    <MdOutlineMan />
                  </div>
                  <div>
                    <p>Dewasa</p>
                    <p>(12 Tahun Keatas)</p>
                  </div>
                </div>
                <div>
                  <input
                    type="number"
                    value={tempPassengers.adults}
                    onChange={(e) =>
                      handlePassengerChange("adults", parseInt(e.target.value))
                    }
                    className="w-full border border-gray-300 rounded py-2 px-4"
                    min="0"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center border-b pb-5 space-x-3">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">
                    <IoIosWoman />
                  </div>
                  <div>
                    <p>Anak</p>
                    <p>(2 - 11 Tahun Keatas) </p>
                  </div>
                </div>
                <div>
                  <input
                    type="number"
                    value={tempPassengers.children}
                    onChange={(e) =>
                      handlePassengerChange(
                        "children",
                        parseInt(e.target.value)
                      )
                    }
                    className="w-full border border-gray-300 rounded py-2 px-4"
                    min="0"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">
                    <FaBaby />
                  </div>
                  <div>
                    <p>Bayi</p>
                    <p>(Dibawah 2 Tahun)</p>
                  </div>
                </div>
                <div>
                  <input
                    type="number"
                    value={tempPassengers.infants}
                    onChange={(e) =>
                      handlePassengerChange("infants", parseInt(e.target.value))
                    }
                    className="w-full border border-gray-300 rounded py-2 px-4"
                    min="0"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={handleSavePassengers}
              className="mt-6 w-full bg-customBlue2 hover:bg-customBlue1 text-white rounded py-2"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {showClassModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-[98%]">
            <button
              onClick={() => setShowClassModal(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">Select Seat Class</h3>
            <div className="space-y-4">
              {Object.keys(seatClassPrices).map((cls) => (
                <div
                  key={cls}
                  className={`flex justify-between items-center p-2 border rounded cursor-pointer hover:bg-gray-200 ${
                    tempSeatClass === cls
                      ? "bg-customBlue2 text-white hover:text-black"
                      : ""
                  }`}
                  onClick={() => setTempSeatClass(cls)}
                >
                  <div>
                    <h4>{cls}</h4>
                    <p>{seatClassPrices[cls]}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleSaveClass}
              className="mt-6 w-full bg-customBlue2 hover:bg-customBlue1 text-white rounded py-2"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {showFromCityModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-[90%] max-h-[90%]">
            <div className="flex item-center relative gap-3">
              <button
                onClick={() => setShowFromCityModal(false)}
                className="absolute right-2 text-gray-700 text-3xl hover:text-gray-900"
              >
                &times;
              </button>
              <input
                type="text"
                value={fromCitySearch}
                onChange={(e) => setFromCitySearch(e.target.value)}
                placeholder="Please select a location"
                className="w-11/12 border border-gray-300 rounded py-2 px-4 mb-4"
              />
            </div>
            <div className="flex justify-between item-center mt-3 mb-3">
              <p className="font-bold">Pencarian Terikini</p>
              <button className="text-red-600 font-semibold">Hapus</button>
            </div>
            <bdiv className="space-y-4 max-h-60 overflow-y-auto">
              {filteredToCities.map((city) => (
                <div
                  key={city}
                  className="p-2 border-b rounded cursor-pointer hover:bg-customBlue2 hover:text-white"
                  onClick={() => handleSelectFromCity(city)}
                >
                  {city}
                </div>
              ))}
            </bdiv>
          </div>
        </div>
      )}

      {showToCityModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-[90%] max-h-[90%]">
            <div className="flex item-center relative gap-3">
              <button
                onClick={() => setShowToCityModal(false)}
                className="absolute right-2 text-gray-700 text-3xl hover:text-gray-900"
              >
                &times;
              </button>
              <input
                type="text"
                value={toCitySearch}
                onChange={(e) => setToCitySearch(e.target.value)}
                placeholder="Please select a location"
                className="w-11/12 border border-gray-300 rounded py-2 px-4 mb-4"
              />
            </div>
            <div className="flex justify-between item-center mt-3 mb-3">
              <p className="font-bold">Pencarian Terikini</p>
              <button className="text-red-600 font-semibold">Hapus</button>
            </div>
            <div className="space-y-4 max-h-60 overflow-y-auto">
              {filteredToCities.map((city) => (
                <div
                  key={city}
                  className="p-2 border-b rounded cursor-pointer hover:bg-customBlue2 hover:text-white"
                  onClick={() => handleSelectToCity(city)}
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 w-full max-w-7xl px-4">
        <h2 className="text-2xl font-bold mb-6">Favorite Destinations</h2>
        <div className="flex gap-2 mb-4">
          <button
            className={`px-4 py-2 flex items-center rounded-xl ${
              selectedButton === "All"
                ? "bg-customBlue1 text-white"
                : "bg-blue-100 text-black hover:bg-customBlue2 hover:text-white"
            }`}
            onClick={() => handleClick("All")}
          >
            <FiSearch className="mr-3" />
            All
          </button>
          <button
            className={`px-4 py-2 flex items-center rounded-xl ${
              selectedButton === "Asia"
                ? "bg-customBlue1 text-white"
                : "bg-blue-100 text-black hover:bg-customBlue2 hover:text-white"
            }`}
            onClick={() => handleClick("Asia")}
          >
            <FiSearch className="mr-3" />
            Asia
          </button>
          <button
            className={`px-4 py-2 flex items-center rounded-xl ${
              selectedButton === "North America"
                ? "bg-customBlue1 text-white"
                : "bg-blue-100 text-black hover:bg-customBlue2 hover:text-white"
            }`}
            onClick={() => handleClick("North America")}
          >
            <FiSearch className="mr-3" />
            North America
          </button>
          <button
            className={`px-4 py-2 flex items-center rounded-xl ${
              selectedButton === "South America"
                ? "bg-customBlue1 text-white"
                : "bg-blue-100 text-black hover:bg-customBlue2 hover:text-white"
            }`}
            onClick={() => handleClick("South America")}
          >
            <FiSearch className="mr-3" />
            South America
          </button>
          <button
            className={`px-4 py-2 flex items-center rounded-xl ${
              selectedButton === "Australia"
                ? "bg-customBlue1 text-white"
                : "bg-blue-100 text-black hover:bg-customBlue2 hover:text-white"
            }`}
            onClick={() => handleClick("Australia")}
          >
            <FiSearch className="mr-3" />
            Australia
          </button>
          <button
            className={`px-4 py-2 flex items-center rounded-xl ${
              selectedButton === "Europe"
                ? "bg-customBlue1 text-white"
                : "bg-blue-100 text-black hover:bg-customBlue2 hover:text-white"
            }`}
            onClick={() => handleClick("Europe")}
          >
            <FiSearch className="mr-3" />
            Europe
          </button>
          <button
            className={`px-4 py-2 flex items-center rounded-xl ${
              selectedButton === "Africa"
                ? "bg-customBlue1 text-white"
                : "bg-blue-100 text-black hover:bg-customBlue2 hover:text-white"
            }`}
            onClick={() => handleClick("Africa")}
          >
            <FiSearch className="mr-3" />
            Africa
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 grid-item relative mb-10"
            >
              <img
                src={bangkokImage}
                alt="Bangkok"
                className="rounded-t-lg w-full"
              />
              <span className="bg-customBlue2 text-white px-2 py-1 rounded absolute top-0 right-0 mt-2 mr-2">
                Limited!
              </span>
              <div className="mt-2 text-sm">
                <h3 className="mt-2 text-lg font-bold">
                  Jakarta &rarr; Bangkok
                </h3>
                <p>AirAsia</p>
                <p>20 - 30 March 2023</p>
                <p className="text-red-600 font-bold">Start from IDR 950.000</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
    .toggle-checkbox:checked + .toggle-label {
        background-color: #4c51bf;
    }

    .toggle-checkbox:checked + .toggle-label::after {
        transform: translateX(100%);
    }

    .toggle-checkbox {
        display: none;
    }

    .toggle-label {
        display: block;
        width: 40px;
        height: 20px;
        background-color: #e2e8f0;
        border-radius: 9999px;
        cursor: pointer;
        position: relative;
        transition: background-color 0.2s;
    }

    .toggle-label::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 16px;
        height: 16px;
        background-color: white;
        border-radius: 9999px;
        transition: transform 0.2s;
    }

    .cursor-not-allowed {
        cursor: not-allowed;
    }

    .hover\\:bg-gray-200:hover {
        background-color: #e2e8f0;
    }

    .grid-item:hover {
      transform: scale(1.05);
      transition: transform 0.35s ease-in-out, box-shadow 0.35s ease-in-out;
    }

    @media (max-width: 768px) {
      .grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .grid-cols-3 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .grid-cols-4 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .grid-cols-5 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .flex.gap-2.mb-4 {
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .flex.gap-2.mb-4 > button {
        flex: 1 1 calc(50% - 0.5rem);
        margin-bottom: 0.5rem;
      }
    }

    @media (max-width: 480px) {
      .grid-cols-2 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }

      .grid-cols-3 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }

      .grid-cols-4 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }

      .grid-cols-5 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }

      .flex.gap-2.mb-4 {
        flex-direction: column;
        gap: 0.5rem;
      }

      .flex.gap-2.mb-4 > button {
        flex: 1 1 100%;
        margin-bottom: 0.5rem;
      }
    }
  `}
      </style>
    </main>
  );
};

export default Home;
