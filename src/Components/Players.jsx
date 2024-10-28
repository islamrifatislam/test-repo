import React, { useEffect, useState } from 'react';
import { FaFlag } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { toast } from 'react-toastify';
export default function Players({ selectedPlayer, setSelectedPlayer, setClemCoin, clamCoin }) {
  const [allPlayers, setAllPlayers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  // load all players
  useEffect(() => {
    fetch("./players.json")
      .then(res => res.json())
      .then(data => setAllPlayers(data))
  }, [])

  // handel added player
  const handelSelected = (data) => {
    const isExsit = selectedPlayer?.find(plr => plr.playerId == data.playerId);
    if (isExsit) {
      return toast.warn("Player already added")
    }
    if (selectedPlayer.length == 6) {
      return toast.warn("Max player added")
    }
    if (clamCoin > data.biddingPrice) {
      setClemCoin(clamCoin - data.biddingPrice)
      setSelectedPlayer([...selectedPlayer, data])
      toast.success("Successfully added")
    }
    else {
      return toast.warn("Inefficient Balance")
    }
  }
  const handelDelete = (data) => {
    const plyer = selectedPlayer.find(p => p.playerId == data);
    const remining = selectedPlayer.filter(p => p.playerId !== data);
    setSelectedPlayer(remining);
    setClemCoin(clamCoin + plyer.biddingPrice)
    toast.success("Successfully delete")
  }


  return (
    <div className='mt-8'>

      <div className={modalOpen ? "block" : "hidden"}>
        <div className='flex justify-between items-center mb-6'>
          <h3 className='text-xl font-bold'>Selected Player ({selectedPlayer.length}/6)</h3>
          <div>
            <button

              className='bg-[#E7FE29] border-l border-y font-semibold px-4 py-2 rounded-l-lg'>Available</button>
            <button
              onClick={() => setModalOpen(!modalOpen)}
              className='border-r border-y font-semibold px-4 py-2 rounded-r-lg text-gray-900'>Selected({selectedPlayer.length})</button>
          </div>
        </div>

        {
          selectedPlayer?.map(p =>
            <div key={p.playerId} className='flex items-center justify-between border p-4 rounded-xl mb-4'>
              <div className='flex items-center gap-3'>
                <div><img className='size-[70px] rounded-xl' src={p.image} alt="" /></div>
                <div>
                  <h2 className='text-xl font-bold'>{p.name}</h2>
                  <p className='text-gray-800'>{p.battingType}</p>
                </div>
              </div>
              <MdDeleteForever onClick={() => handelDelete(p.playerId)} className='text-3xl text-red-600 cursor-pointer' />
            </div>
          )
        }


        <button
          onClick={() => setModalOpen(!modalOpen)}
          className='btn bg-[#E7FE29] font-bold hover:bg-[#E7FE29] rounded-xl'>Add More Player
        </button>
      </div>


      <div className={modalOpen ? "hidden" : "block"}>
        <div className='flex justify-between items-center'>
          <h3 className='text-xl font-bold'>Available Players</h3>
          <div>
            <button className='bg-[#E7FE29] border-l border-y font-semibold px-4 py-2 rounded-l-lg'>Available</button>
            <button
              onClick={() => setModalOpen(!modalOpen)}
              className='border-r border-y font-semibold px-4 py-2 rounded-r-lg text-gray-900'>Selected({selectedPlayer.length})</button>
          </div>
        </div>

        {/* player card */}
        <div className='grid grid-cols-3 gap-8 mt-8'>
          {
            allPlayers?.map(plr =>
              <div key={plr.playerId} className='p-6 border rounded-xl'>
                <img className='w-full h-[240px] rounded-lg ' src={plr?.image} alt="" />
                <div className='flex items-center gap-3 mt-3'>
                  <IoPersonSharp className='text-2xl' />
                  <h2 className='text-xl font-bold'>{plr?.name}</h2>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='flex items-center gap-3'>
                    <FaFlag className='text-xl' />
                    <p className='text-gray-800'>{plr?.country}</p>
                  </span>
                  <button className='border px-3 py-2 rounded-xl bg-[#1313130D]'>{plr?.role}</button>
                </div>

                <hr className='my-4' />

                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <h3 className='font-semibold'>Rating</h3>
                    <p></p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <h3 className='font-semibold'>Batting Type</h3>
                    <p className='text-gray-500'>{plr?.battingType}</p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <h3 className='font-semibold'>Bowling Type</h3>
                    <p className='text-gray-500'>{plr?.bowlingType}</p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <h3 className='font-semibold'>Price: {plr?.biddingPrice}</h3>
                    <button
                      onClick={() => handelSelected(plr)}
                      className='btn'>
                      Choose Player
                    </button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>


    </div>

  )
}
