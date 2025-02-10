export default function Home() {
  return (
    <div className="">

      <div className="flex">
        <div className="h-screen w-1/2 bg-[#f3f4f6]"></div>
        <div className="h-screen w-1/2 bg-[#0f141e]"></div>
      </div>

      <div>
        <div className="w-[340px] h-[340px]  border-red-500 rounded-full"></div>
      </div>

      <div className="absoulte flex w-92 bg-pink-400 px-6 py-4 rounded-lg justify-start h-">
        <img src="/assets/search.svg" className="w-6 h-6 ml-4" />
        <input className="" placeholder="Search" />

      </div>

    </div>
  );
}
