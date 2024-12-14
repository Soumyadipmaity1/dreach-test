export default function ReadyToTalk() {
  return (
    <div className="flex justify-center items-center mt-16 sm:mb-16 mb-8 mx-4 sm:mx-16 lg:mx-24  px-4">
      <div className="w-full lg:w-[1112px] h-auto  flex flex-col gap-4 justify-center items-center rounded-lg shadow-md shadow-[#9fa3a3] about-herobox text-white p-8 py-10 xl:pb-16 ">
        <h1 className="text-[28px] md:text-[34px] lg:text-[40px] text-center">
          Ready To Talk?
        </h1>
        <h3 className="text-[18px] md:text-[21px] lg:text-[23px] text-center">
          Let’s find a time that’s convenient for you.
        </h3>
        <button className="border-2 xl:border-4 border-orange-500 hover:bg-transparent  mt-6 rounded-3xl bg-[#F97316]  text-[16px] md:text-[18px] lg:text-[20px] font-semibold xl:text-[22px] px-6 py-1 sm:px-8 xl:px-12 xl:py-1.5 xl:pb-2.5 xl:mt-8 xl:rounded-full pb-2">
          Get Started
        </button>
      </div>
    </div>
  );
}
