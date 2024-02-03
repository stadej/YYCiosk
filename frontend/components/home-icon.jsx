import React from 'react'

const HomeIconGroup = () => {
    return (
      <footer className="w-screen  self-stretch bg-crimson flex flex-row items-start justify-between pt-[45px] pb-11 pr-1.5 pl-[5px] box-border gap-[20px] max-w-full mq900:flex-wrap">
        <div className="h-[217px] w-[1024px] relative bg-crimson hidden max-w-full" />
        <div className="w-[197px] flex flex-row items-center justify-end relative">
          <img
            className="h-32 w-32 relative z-[1]"
            loading="eager"
            alt=""
            src="/home-icon-4.png"
          />
          <img
            className="h-[47px] w-[47px] absolute my-0 mx-[!important] bottom-[38px] left-[0px] object-contain z-[1]"
            loading="eager"
            alt=""
            src="/arrow_forward_ios.png"
          />
        </div>
        <div className="h-32 w-32 relative rounded-6xl bg-white z-[1]">
        <img
            className=" relative overflow-hidden shrink-0 object-contain z-[1]"
            loading="eager"
            alt=""
            src="/home-icon-5.png"
          />

          <div className="absolute top-[0px] left-[0px] rounded-6xl bg-white w-full h-full hidden" />
        </div>
        <div className="rounded-6xl bg-white flex flex-row items-center justify-center pt-[17px] pb-[22px] pr-5 pl-[19px] z-[1]">
          <div className="h-32 w-32 relative rounded-6xl bg-white hidden" />
          <img
            className="h-[89px] w-[89px] relative overflow-hidden shrink-0 object-contain z-[1]"
            loading="eager"
            alt=""
            src="/home-icon-6.png"
          />
        </div>
        <div className="w-32 rounded-6xl bg-white flex flex-row items-center justify-center pt-[18px] px-[18px] pb-[22px] box-border z-[1]">
          <div className="h-32 w-32 relative rounded-6xl bg-white hidden" />
          <img
            className="h-[88px] w-[88px] relative overflow-hidden shrink-0 z-[1]"
            loading="eager"
            alt=""
            src="/home-icon-7.png"
          />
        </div>
        <div className="w-[204px] flex flex-row items-center justify-start relative">
          <img
            className="h-32 w-32 relative z-[1]"
            loading="eager"
            alt=""
            src="/home-icon-8.png"
          />
          <img
            className="h-[47px] w-[47px] absolute my-0 mx-[!important] right-[0px] bottom-[38px] z-[1]"
            alt=""
            src="/arrow_backward_ios.png"
          />
        </div>
      </footer>
    );
  };
  export default HomeIconGroup;