import DocFooterLeft from "./DocFooterLeft";
import DocFooterRight from "./DocFooterRight";

const DocFooter = () => {
  return (
    <>
      <div className=" w-full lg:h-[542px] hidden lg:flex  ">
        <DocFooterLeft />
        <DocFooterRight />
      </div>
      <div className=" lg:hidden flex  mx-auto  ">
        <DocFooterRight />
      </div>
    </>
  );
};

export default DocFooter;
