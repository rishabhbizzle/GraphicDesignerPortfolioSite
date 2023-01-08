import React from 'react'


function Video() {
  return (
    <div className="w-full bg-black">
      <div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div className='flex justify-center items-center'>
            <iframe width="400" height="265" src="https://youtube.com/embed/QDdoOk_bB6Y" title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen></iframe>
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div className='flex justify-center items-center'>
            <iframe width="400" height="265" src="https://www.youtube.com/embed/QkIu4Owp5g8" title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen></iframe>
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div className='flex justify-center items-center'>
            <iframe width="400" height="265" src="https://www.youtube.com/embed/0wUQRen9SII" title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen></iframe>
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div className='flex justify-center items-center'>
            <iframe width="400" height="265" src="https://www.youtube.com/embed/BU6l4vzEkdE" title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen></iframe>
            </div>
          </div>
          <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div className='flex justify-center items-center'>
            <iframe width="400" height="265" src="https://www.youtube.com/embed/nxyAJBfcL_w" title="YouTube video player" frameborder="0" allow="autoplay" allowfullscreen></iframe>
            </div>
          </div>
          {/* <div className="basis-1/3 flex-1 p-8 bg-[#181818]">
            <div>
              <video controls autoPlay={true} muted className="rounded-sm" src={test} alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Video