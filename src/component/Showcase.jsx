import { useEffect, useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { coins } from "../coins";
import axios from "axios";

const Showcase = () => {
  const [pay, setPay] = useState(false);
  const [recieve, setRecieve] = useState(false);
  const [stage, setStage] = useState(1);
  const [payCoinSearch, setPayCoinSearch] = useState("");
  const [payCoinRecieve, setPayCoinRecieve] = useState("");
  const [firstCoin, setFirstCoin] = useState(coins[0]);
  const [secondCoin, setSecondCoin] = useState(coins[2]);

  const [exchangeRate, setExchangeRate] = useState(0);
  const [fees, setFees] = useState(0);

  // INPUT
  const [youPayInput, setYouPayInput] = useState(0);

  // CALLING API
  const getCoinData = async () => {
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${firstCoin.name}%2C${secondCoin.name}&vs_currencies=usd`
      );
      const firstToSecond =
        res.data[firstCoin.name].usd / res.data[secondCoin.name].usd;

      setFees(res.data[secondCoin.name].usd);
      setExchangeRate(firstToSecond);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoinData();
  }, [firstCoin, secondCoin]);

  const userRate =
    exchangeRate.toFixed(4) - (2.5 / 100) * exchangeRate.toFixed(4);
  const feeRate = fees - (99.999966 / 100) * fees;

  const charge = feeRate * fees;
  return (
    <div className="mt-[40px] px-4" id="swap">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <img src="./images/mm.png" alt="#" className="" />
          </div>
          <div className="backdrop-blur-3xl bg-[#1a1a1a] p-5 rounded-xl">
            {stage === 1 && (
              <div>
                <h2 className="text-red-600 text-3xl capitalize">exchanging</h2>
                <div className="mt-5">
                  <span className="capitalize text-white text-xl my-3 block">
                    you pay:
                  </span>
                  <div className="relative grid grid-cols-2 md:grid-cols-6 items-center bg-[#f0f0f0]">
                    <input
                      type="number"
                      placeholder="Amount....."
                      className="md:col-span-4 py-2 px-4 bg-transparent outline-none"
                      onChange={(e) => setYouPayInput(e.target.value)}
                      value={youPayInput}
                    />
                    <div
                      className="relative bg-red-300 h-full p-3 uppercase text-xl flex items-center justify-between md:col-span-2 cursor-pointer"
                      onClick={() => {
                        setRecieve(false);
                        setPay(!pay);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={firstCoin.img}
                          alt="#"
                          className="md:w-[30px] md:h-[30px] w-[20px] h-[20px] object-contain"
                        />
                        <span className="block text-[14px] md:text-[15px]">
                          {(firstCoin.name.length >= 6 &&
                            firstCoin?.displayName) ||
                            firstCoin.name}
                          {firstCoin.networks && (
                            <span> ({firstCoin?.selectedNetwork})</span>
                          )}
                        </span>
                      </div>
                      <RiArrowDropDownFill className="md:text-3xl text-xl block" />
                    </div>

                    <div
                      className={`absolute right-0 -bottom-[600%] bg-red-300 p-3 w-[300px] rounded-lg ${
                        pay ? "block" : "hidden"
                      } transition-all ease-in-out duration-300 z-10 h-[300px] overflow-y-scroll`}
                    >
                      <input
                        type="text"
                        placeholder="Search Coin...."
                        className="w-full p-2 outline-none"
                        onChange={(e) => setPayCoinSearch(e.target.value)}
                      />
                      {coins
                        .filter((item) => {
                          if (payCoinSearch === "") {
                            return item;
                          } else if (
                            item.name
                              .toLocaleLowerCase()
                              .includes(payCoinSearch.toLocaleLowerCase()) ||
                            item.symbol
                              .toLocaleLowerCase()
                              .includes(payCoinSearch.toLocaleLowerCase())
                          ) {
                            return item;
                          }
                        })
                        .map((coin, i) => {
                          if (coin.networks) {
                            return (
                              <div
                                className="flex items-center gap-3 mt-2 border-b pb-2"
                                key={i}
                              >
                                <img
                                  src={coin.img}
                                  alt="#"
                                  className="w-[20px] h-[20px] object-contain"
                                />
                                <select
                                  className="bg-transparent uppercase outline-none"
                                  onChange={(e) => {
                                    setPay(false);
                                    setFirstCoin({
                                      ...coin,
                                      selectedNetwork: e.target.value,
                                    });
                                  }}
                                >
                                  {coin.networks.map((network, i) => (
                                    <option
                                      value={coin.name + network.name}
                                      key={i}
                                    >
                                      {coin.name} ({network.name})
                                    </option>
                                  ))}
                                </select>
                              </div>
                            );
                          } else {
                            return (
                              <div
                                className="flex items-center gap-3 mt-2 border-b pb-2 cursor-pointer"
                                onClick={() => {
                                  setFirstCoin(coin);
                                  setPay(false);
                                }}
                              >
                                <img
                                  src={coin.img}
                                  alt="#"
                                  className="w-[20px] h-[20px] object-contain"
                                />
                                <span className="block uppercase">
                                  {coin.symbol}
                                </span>
                              </div>
                            );
                          }
                        })}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-white capitalize text-xl block">
                      min: 0.00001
                    </span>
                    <span className="text-white capitalize text-xl block">
                      max: 4.51606
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <span className="capitalize text-white text-xl my-3 block">
                    you recieve:
                  </span>
                  <div className="relative grid grid-cols-2 md:grid-cols-6 items-center bg-[#f0f0f0]">
                    <input
                      type="number"
                      placeholder="Amount....."
                      className="md:col-span-4 py-2 px-4 bg-transparent outline-none cursor-not-allowed"
                      disabled
                      value={youPayInput * userRate}
                    />
                    <div
                      className="relative bg-red-300 h-full p-3 uppercase text-xl flex items-center justify-between md:col-span-2 cursor-pointer"
                      onClick={() => {
                        setRecieve(!recieve);
                        setPay(false);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={secondCoin.img}
                          alt="#"
                          className="md:w-[30px] md:h-[30px] h-[20px] w-[20px] object-contain"
                        />
                        <span className="block text-[14px] md:text-[15px]">
                          {(secondCoin.name.length >= 6 &&
                            secondCoin?.displayName) ||
                            secondCoin.name}
                          {secondCoin.networks && (
                            <span> ({secondCoin?.selectedNetwork})</span>
                          )}
                        </span>
                      </div>
                      <RiArrowDropDownFill className="md:text-3xl text-xl block" />
                    </div>
                    <div
                      className={`absolute right-0 ${
                        secondCoin.networks
                          ? "-bottom-[600%]"
                          : "-bottom-[600%]"
                      } bg-red-300 p-3 w-[300px] rounded-lg ${
                        recieve ? "block" : "hidden"
                      } transition-all ease-in-out duration-300 h-[300px] overflow-y-scroll `}
                    >
                      <input
                        type="text"
                        placeholder="Search Coin...."
                        className="w-full p-2 outline-none"
                        onChange={(e) => setPayCoinRecieve(e.target.value)}
                      />
                      {coins
                        .filter((item) => {
                          if (payCoinRecieve === "") {
                            return item;
                          } else if (
                            item.name
                              .toLocaleLowerCase()
                              .includes(payCoinRecieve.toLocaleLowerCase()) ||
                            item.symbol
                              .toLocaleLowerCase()
                              .includes(payCoinRecieve.toLocaleLowerCase())
                          ) {
                            return item;
                          }
                        })
                        .map((coin, i) => {
                          if (coin.networks) {
                            return (
                              <div
                                className="flex items-center gap-3 mt-2 border-b pb-2"
                                key={i}
                              >
                                <img
                                  src={coin.img}
                                  alt="#"
                                  className="w-[20px] h-[20px] object-contain"
                                />
                                <select
                                  className="bg-transparent uppercase outline-none"
                                  onChange={(e) => {
                                    setRecieve(false);
                                    setSecondCoin({
                                      ...coin,
                                      selectedNetwork: e.target.value,
                                    });
                                  }}
                                >
                                  {coin.networks.map((network, i) => (
                                    <option value={network.name} key={i}>
                                      {coin.name} ({network.name})
                                    </option>
                                  ))}
                                </select>
                              </div>
                            );
                          } else {
                            return (
                              <div
                                className="flex items-center gap-3 mt-2 border-b pb-2 cursor-pointer"
                                onClick={() => {
                                  setSecondCoin(coin);
                                  setRecieve(false);
                                }}
                              >
                                <img
                                  src={coin.img}
                                  alt="#"
                                  className="w-[20px] h-[20px] object-contain"
                                />
                                <span className="block uppercase">
                                  {coin.symbol}
                                </span>
                              </div>
                            );
                          }
                        })}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-white capitalize text-xl block">
                      min: 0.00001
                    </span>
                    <span className="text-white capitalize text-xl block">
                      max: 4.51606
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <span className="text-red-600 uppercase text-xl">
                    {" "}
                    1 {firstCoin.symbol} ={userRate.toFixed(7)}{" "}
                    {secondCoin.symbol} (Fees: {feeRate.toFixed(10)}{" "}
                    {secondCoin.symbol} = ${charge.toFixed(1)})
                  </span>
                </div>
                <button
                  className="bg-red-600 w-full mt-6 p-3 text-xl hover:bg-red-200 hover:text-red-700 transition-all ease-in-out duration-500"
                  onClick={() => setStage(stage + 1)}
                >
                  Confirm Swap
                </button>
              </div>
            )}
            {stage === 2 && (
              <>
                <h2 className="text-red-600 text-3xl capitalize">
                  your details
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  <label className="capitalize text-red-500 font-medium">
                    your{" "}
                    {(secondCoin.name.length >= 6 && secondCoin?.displayName) ||
                      secondCoin.name}
                    {secondCoin.networks && (
                      <span> ({secondCoin?.selectedNetwork})</span>
                    )}{" "}
                    wallet address
                  </label>
                  <input
                    type="text"
                    placeholder="Wallet Address...."
                    className="shadow-md shadow-red-100 p-2 rounded-md outline-none"
                  />
                </div>
                <div className="mt-9 flex flex-col gap-3">
                  <label className="capitalize text-red-500 font-medium">
                    your Email address
                  </label>
                  <input
                    type="text"
                    placeholder="Email Address...."
                    className="shadow-md shadow-red-100 p-2 rounded-md outline-none"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    className="bg-red-600 w-full mt-6 p-3 text-xl hover:bg-red-200 hover:text-red-700 transition-all ease-in-out duration-500 capitalize rounded-lg"
                    onClick={() => setStage(stage - 1)}
                  >
                    back
                  </button>
                  <button
                    className="bg-red-600 w-full mt-6 p-3 text-xl hover:bg-red-200 hover:text-red-700 transition-all ease-in-out duration-500 capitalize rounded-lg"
                    onClick={() => setStage(stage + 1)}
                  >
                    Confirm order
                  </button>
                </div>
              </>
            )}
            {stage === 3 && (
              <>
                <span className="text-red-600 text-center font-semibold text-xl block uppercase">
                  {" "}
                  {firstCoin?.symbol} wallet
                </span>
                <div className="flex items-center justify-center mt-5">
                  <img
                    src={firstCoin?.scan}
                    alt="#"
                    className="h-[320px] w-[320px] object-contain"
                  />
                </div>
                <p className="text-gray-300 mt-5">
                  Wallet Address: <span className="text-red-600">{firstCoin?.address}</span>
                </p>
                <div className="flex items-center justify-between flex-wrap md:flex-nowrap">
                  <p className="text-gray-300 mt-5">
                    Amount:{" "}
                    <span className="text-red-600 uppercase">0.4500 btc</span>
                  </p>
                  <p className="text-gray-300 mt-5">
                    Recieve:{" "}
                    <span className="text-red-600 uppercase">0.4500 eth</span>
                  </p>
                  <p className="text-gray-300 mt-5">
                    Fees:{" "}
                    <span className="text-red-600 uppercase">
                      0.4500 eth ($1)
                    </span>
                  </p>
                </div>
                <button
                  className="bg-red-600 w-full mt-6 p-3 text-xl hover:bg-red-200 hover:text-red-700 transition-all ease-in-out duration-500 capitalize rounded-lg"
                  onClick={() => setStage(1)}
                >
                  Done
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
