import { HiOutlineChevronRight } from 'react-icons/hi'

export const Footer = () => {
  return (
    <footer className="w-full h-full flex bg-[url('/footerBg.png')] bg-cover bg-top min-h-[400px]">
      <div className="w-full h-full flex flex-col justify-start items-start lg:p-10 p-5">
        <h3 className="lg:text-[60px] md:text-[40px] text-2xl text-white font-medium tracking-tight m-0">
          Be Part of the Future
        </h3>
        <p className="lg:text-lg text-base lg:max-w-[600px] sm:max-w-[500px] text-start text-white mb-10 mt-2">
          Ready to transform your marketing with AI? Join as a member for
          exclusive access to our content and community, or partner with us to
          shape the future of B2B marketing.
        </p>
        <button className="bg-gradient-to-b from-[#D01EDA] to-[#F65BFF] lg:h-[50px] lg:w-[190px] w-[160px] h-[40px] lg:text-lg text-base font-medium text-white rounded-lg border-[1px] border-[#aa14b2] transition-all duration-100 hover:scale-[104%] hover:bg-[#F65BFF] flex flex-row justify-center gap-1 items-center">
          Apply for Invite <HiOutlineChevronRight className='text-xl font-bold'/>
        </button>
      </div>
    </footer>
  );
};
