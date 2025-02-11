export default function Home() {
  return (
    <div className="relative overflow-hidden">

      <div className="flex">
        <div className="flex-1 h-screen bg-[#F3F4F6]"></div>
        <div className="flex-1 h-screen bg-[#0F141E]"></div>
      </div>

      <div className="flex absolute justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-[170px] h-[170px] bg-white rounded-full ">
        <svg width="103" height="86" viewBox="0 0 103 86" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1296 7.58989L2.54477 32.8821C0.849461 36.0473 0 39.5213 0 43C0 46.4791 0.849461 49.9523 2.54477 53.1179L16.1296 78.4105C18.6335 83.0823 23.5304 86 28.8593 86H43.2889V78.835H43.2842C40.622 78.835 38.1737 77.3781 36.9216 75.0428L23.3418 49.7455C22.2069 47.6366 21.6413 45.3208 21.6413 43C21.6413 40.6788 22.2069 38.363 23.3418 36.2549L36.9216 10.9577C38.1737 8.62162 40.622 7.16533 43.2842 7.16533H43.2889V0H28.8593C23.5304 0 18.6335 2.91825 16.1296 7.58989Z" fill="#111111" />
          <path d="M99.7442 32.882L86.1599 7.58993C83.6554 2.91778 78.7591 0 73.43 0H59V7.16486H59.0051C61.6673 7.16486 64.1156 8.62166 65.3673 10.9572L78.9469 36.2543C80.0827 38.3633 80.647 40.679 80.647 42.9999C80.647 45.3211 80.0827 47.6368 78.9469 49.7454L65.3673 75.0423C64.1156 77.3783 61.6673 78.8345 59.0051 78.8345H59V85.9999H73.43C78.7591 85.9999 83.6554 83.0821 86.1599 78.41L99.7442 53.1177C101.439 49.9526 102.289 46.4785 102.289 42.9999C102.289 39.5211 101.439 36.0475 99.7442 32.882Z" fill="#111111" />
        </svg>
      </div>

      <div className="flex absolute justify-center items-center opacity-10 inset-0">
        <div className="bg-transparent border-2 border-gray-500 rounded-full w-[1340px] h-[1340px] flex justify-center items-center">
          <div className="bg-transparent border-2 border-gray-500 rounded-full w-[940px] h-[940px] flex justify-center items-center">
            <div className="bg-transparent border-2 border-gray-500 rounded-full w-[540px] h-[540px] flex justify-center items-center">
              <div className="bg-transparent border-2 border-gray-500 rounded-full w-[340px] h-[340px]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex absolute">
        <div className="flex-1 h-screen"></div>
        <div className="flex-1 h-screen"></div>
      </div>

    </div>

  );
}

// <div className="flex box-border">

//   <div className="h-screen w-1/2 bg-[#f3f4f6]">
//     <input className="rounded" placeholder="Search" />
//     <div className="mx-auto mt-32 h-2/3 w-2/3 rounded-sm backdrop-blur-sm flex flex-col justify-center align-middle">
//     <p className="font-medium text-gray-400 text-sm">February 11, 2025</p>
//       <div className="flex">
//       <h3 className="text-3xl font-extrabold">Ulaanbaatar</h3>
//       <img src="assets/pin.svg"/>
//       </div>
//       <img src="assets/sun.svg" className="h-64 w-64"/>
//       <h1 className="text-5xl font-extrabold">-16.6</h1>
//       <p className="text-orange-500 text-sm font-extrabold">Freezing fog</p>
//       <div className="flex">
//         <img src="assets/home-icon.svg" className="w-8 h-8" />
//         <img src="assets/pin.svg" className="w-8 h-8" />
//         <img src="assets/heart-icon.svg" className="w-8 h-8" />
//         <img src="assets/user.svg" className="w-8 h-8" />
//       </div>
//     </div>
//   </div>

//   <div className="h-screen w-1/2 bg-[#0f141e]">
//   <div className="mx-auto h-2/3 w-2/3 rounded-sm backdrop-blur-sm flex flex-col justify-center align-middle" >
//     <p className="font-medium text-gray-400 text-sm">February 11, 2025</p>
//       <div className="flex">
//       <h3 className="text-3xl font-extrabold">Ulaanbaatar</h3>
//       <img src="assets/pin.svg"/>
//       </div>
//       <img src="assets/moon.svg" className="h-64 w-64"/>
//       <h1 className="text-5xl font-extrabold">-26.7</h1>
//       <p className="text-indigo-500 text-sm font-extrabold">Freezing fog</p>
//       <div className="flex ">
//         <img src="assets/home-icon.svg" />
//         <img src="assets/pin.svg" />
//         <img src="assets/heart-icon.svg" />
//         <img src="assets/user.svg" />
//       </div>
//     </div>
//   </div>

// </div>
