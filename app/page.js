"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { BiPlus, BiMinus } from "react-icons/bi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import { Footer } from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    id: 1,
    question: "What types of video content can I create with Goldcast?",
    answer: [
      "Goldcast enables you to create multiple types of professional video content:",
      "Live and pre-recorded webinars with studio-quality production",
      "Virtual and hybrid events with multi-track capabilities",
      "Professional podcast recordings with separate speaker streams",
      "Customer interviews and testimonials",
      "Thought leadership content and product demos",
      "Training and educational sessions",
      "Plus, with Content Lab, you can instantly transform any long-form video into snackable content like social clips, video testimonials, and multi-modal blog posts.",
    ],
  },
  {
    id: 2,
    question: "Which type of virtual hybrid event Is your software best for?",
    answer: [
      "Goldcast is ideal for several types of virtual and hybrid events:",
      "Marketing webinars and product launches",
      "Sales enablement and training sessions",
      "Customer conferences and user summits",
      "Internal company meetings and all-hands",
      "Partner and channel events",
      "Recruiting and hiring events",
    ],
  },
  {
    id: 3,
    question: "How does Goldcast ensure high-quality video production?",
    answer: [
      "Goldcast provides studio-quality production through:",
      "Automatic video and audio optimization",
      "Professional-grade encoding and streaming",
      "AI-powered noise reduction and enhancement",
      "Multi-camera support for different angles",
      "Built-in lighting and background adjustments",
      "Real-time monitoring of stream quality",
    ],
  },
  {
    id: 4,
    question: "Can I integrate Goldcast with my marketing stack?",
    answer: [
      "Yes, Goldcast offers seamless integration with:",
      "CRM systems like Salesforce and HubSpot",
      "Marketing automation platforms",
      "Email marketing tools",
      "Analytics and tracking solutions",
      "Single sign-on (SSO) providers",
      "Custom API access for unique integrations",
    ],
  },
  {
    id: 5,
    question: "What analytics does Goldcast provide?",
    answer: [
      "Goldcast provides comprehensive analytics including:",
      "Real-time attendee engagement metrics",
      "Viewer attention and interaction data",
      "Poll and Q&A response analytics",
      "Content performance metrics",
      "Attendee journey and behavior tracking",
      "ROI measurement and attribution",
    ],
  },
  {
    id: 6,
    question: "How does Goldcast handle security and privacy?",
    answer: [
      "Goldcast takes security seriously with:",
      "Enterprise-grade encryption for all streams",
      "GDPR and CCPA compliance",
      "Secure attendee authentication options",
      "Role-based access controls",
      "Data residency options",
      "Regular security audits and penetration testing",
    ],
  },
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  const expandVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
    exit: { opacity: 0, height: 0 },
  };

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="w-full h-full flex flex-col bg-black">
      <Navbar />
      <main className="w-full h-full lg:min-h-[91vh] min-h-[500px] bg-[url('/heroBg.png')] bg-cover bg-center pt-[10vh] relative overflow-hidden flex items-start justify-center">
        <motion.img
          initial={{
            opacity: 0,
            y: -200,
            scale: 3,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            type: "tween",
            ease: "easeIn",
            duration: 1,
          }}
          src="/heroSphere.png"
          width={1000}
          height={1000}
          className="flex w-full h-full absolute lg:min-w-[1300px] lg:min-h-[1800px] xl:min-h-max xl:min-w-max min-w-[600px] min-h-[800px] md:top-[20vh] top-[20vh] left-1/2 z-[2] translate-x-[-59%] lg:scale-125"
          alt="sphere"
        />

        <motion.div className="flex flex-col justify-start w-full h-full items-center relative z-[5] text-white px-5">
          <motion.h1
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "tween",
              ease: "easeIn",
              duration: 0.6,
              delay: 0.5,
            }}
            className="lg:text-[8em] sm:text-[5em] text-[2.8em] font-medium tracking-tight m-0"
          >
            the <b className="italic">future</b> is AI.
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "tween",
              ease: "easeIn",
              duration: 0.6,
              delay: 0.6,
            }}
            className="lg:text-2xl md:text-xl text-base lg:max-w-[700px] sm:max-w-[500px] text-center text-white lg:mt-[-20px] mb-10"
          >
            Join the network educating enterprise marketing leaders on the
            practical application of AI in their day-to-day work.
          </motion.p>
          <motion.button
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "tween",
              ease: "easeIn",
              duration: 0.6,
              delay: 0.7,
            }}
            className="bg-gradient-to-b from-[#D01EDA] to-[#F65BFF] lg:h-[50px] lg:w-[190px] w-[140px] h-[40px] lg:text-xl text-base font-medium rounded-lg border-[1px] border-[#aa14b2] transition-all duration-100 hover:scale-[104%] hover:bg-[#F65BFF] flex flex-row gap-2 items-center justify-center"
          >
            Apply Now <HiOutlineChevronRight />
          </motion.button>
        </motion.div>
      </main>
      <div className="w-full h-full bg-black flex flex-col min-h-[300px] justify-start items-center pt-10 gap-5">
        <h3 className="uppercase lg:text-2xl text-xl  text-[#666C75] font-medium">
          brought to you by
        </h3>
        <span className="w-full h-full max-w-[1200px] lg:flex lg:flex-row grid grid-cols-2 lg:gap-10 justify-center items-center p-5">
          <span className="w-full h-fit flex justify-center items-center">
            <Image
              src={"/logos/goldcast.png"}
              width={200}
              height={100}
              alt="logo"
              className="w-full h-fit md:max-w-[220px] max-w-[130px]"
            />
          </span>
          <span className="w-full h-fit flex justify-center items-center">
            <Image
              src={"/logos/6Sense.png"}
              width={200}
              height={100}
              alt="logo"
              className="w-full h-fit md:max-w-[220px] max-w-[170px]"
            />
          </span>
          <span className="w-full h-fit flex justify-center items-center">
            <Image
              src={"/logos/sendoso.svg"}
              width={200}
              height={100}
              alt="logo"
              className="w-full h-fit md:max-w-[220px] max-w-[170px]"
            />
          </span>
          <span className="w-full h-fit flex justify-center items-center">
            <Image
              src={"/logos/intelligencedemand.svg"}
              width={200}
              height={100}
              alt="logo"
              className="w-full h-fit md:max-w-[220px] max-w-[170px]"
            />
          </span>
        </span>
        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "tween",
            ease: "easeIn",
            duration: 0.6,
          }}
          className="lg:text-[3rem] md:text-[2rem] text-xl text-white font-medium"
        >
          What is the AI Marketing Alliance ?
        </motion.h2>
      </div>

      <motion.div className="w-full h-full min-h-[70vh] bg-[url('/marketingBg.png')] bg-cover bg-center flex flex-col justify-start items-center text-white relative p-5">
        <motion.p
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "tween",
            ease: "easeIn",
            duration: 0.6,
          }}
          className="lg:max-w-[900px] md:max-w-[600px] mx-auto md:text-xl text-sm font-medium leading-relaxed text-center"
        >
          The AI Marketing Alliance is the essential resource and network for
          enterprise marketing leaders driven to integrate artificial
          intelligence into their strategies and operations. Our mission is
          clear: to educate every marketing leader on the practical applications
          of AI, helping them not only keep pace but also excel in a rapidly
          evolving space. 
        </motion.p>

        <div className="overflow-hidden whitespace-nowrap w-full h-full my-10">
          <div
            className={`animate-marquee pause-on-hover flex w-max h-full lg:text-[120px] text-[80px] uppercase font-medium text-[#c7c7c7] gap-5`}
          >
            <div className="w-full h-full lg:max-w-[500px] max-w-[400px] lg:min-h-[390px] min-h-[310px] bg-[url('/marketingCardBg.png')] bg-cover md:bg-top rounded-xl px-5 py-10">
              <Image
                src="/ceo1.webp"
                className="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] object-cover rounded-full object-left flex"
                alt=""
                width={200}
                height={200}
              />
              <span className="flex flex-col gap-2 lg:mt-10 mt-4">
                <h4 className="lg:text-xl text-lg font-medium">Jensen Huang</h4>
                <p className="text-sm text-gray-300">CEO of NVIDIA</p>
              </span>
              <p className="lg:text-base text-sm text-white mt-5 text-wrap">
                AI will be the most transformative technology of the 21st
                century. It will affect every industry and aspect of our lives.
              </p>
            </div>
            <div className="w-full h-full lg:max-w-[500px] max-w-[400px] lg:min-h-[390px] min-h-[310px] bg-[url('/marketingCardBg.png')] bg-cover md:bg-top rounded-xl px-5 py-10">
              <Image
                src="/ceo2.webp"
                className="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] object-cover rounded-full object-center flex"
                alt=""
                width={200}
                height={200}
              />
              <span className="flex flex-col gap-2 lg:mt-10 mt-4">
                <h4 className="lg:text-xl text-lg font-medium">
                  Yoshua Bengio
                </h4>
                <p className="text-sm text-gray-300">
                  Computer scientist and Turing Award laureate
                </p>
              </span>
              <p className="lg:text-base text-sm text-white mt-5 text-wrap">
                Artificial intelligence is not just about efficiency gains,
                it&apos;s about opening up new possibilities, unlocking human
                potential and solving some of society&apos;s biggest challenges
              </p>
            </div>
            <div className="w-full h-full lg:max-w-[500px] max-w-[400px] lg:min-h-[390px] min-h-[310px] bg-[url('/marketingCardBg.png')] bg-cover md:bg-top rounded-xl px-5 py-10">
              <Image
                src="/ceo3.webp"
                className="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] object-cover rounded-full object-center flex"
                alt=""
                width={200}
                height={200}
              />
              <span className="flex flex-col gap-2 lg:mt-10 mt-4">
                <h4 className="lg:text-xl text-lg font-medium">Andrew Ng</h4>
                <p className="text-sm text-gray-300">
                  AI Researcher (Google Brain)
                </p>
              </span>
              <p className="lg:text-base text-sm text-white mt-5 text-wrap">
                The automation revolution is arriving, and it will be as
                transformative for work as the industrial revolution was for
                manufacturing.
              </p>
            </div>
            <div className="w-full h-full lg:max-w-[500px] max-w-[400px] lg:min-h-[390px] min-h-[310px] bg-[url('/marketingCardBg.png')] bg-cover md:bg-top rounded-xl px-5 py-10">
              <Image
                src="/ceo1.webp"
                className="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] object-cover rounded-full object-left flex"
                alt=""
                width={200}
                height={200}
              />
              <span className="flex flex-col gap-2 lg:mt-10 mt-4">
                <h4 className="lg:text-xl text-lg font-medium">Jensen Huang</h4>
                <p className="text-sm text-gray-300">CEO of NVIDIA</p>
              </span>
              <p className="lg:text-base text-sm text-white mt-5 text-wrap">
                AI will be the most transformative technology of the 21st
                century. It will affect every industry and aspect of our lives.
              </p>
            </div>
            <div className="w-full h-full lg:max-w-[500px] max-w-[400px] lg:min-h-[390px] min-h-[310px] bg-[url('/marketingCardBg.png')] bg-cover md:bg-top rounded-xl px-5 py-10">
              <Image
                src="/ceo2.webp"
                className="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] object-cover rounded-full object-center flex"
                alt=""
                width={200}
                height={200}
              />
              <span className="flex flex-col gap-2 lg:mt-10 mt-4">
                <h4 className="lg:text-xl text-lg font-medium">
                  Yoshua Bengio
                </h4>
                <p className="text-sm text-gray-300">
                  Computer scientist and Turing Award laureate
                </p>
              </span>
              <p className="lg:text-base text-sm text-white mt-5 text-wrap">
                Artificial intelligence is not just about efficiency gains,
                it&apos;s about opening up new possibilities, unlocking human
                potential and solving some of society&apos;s biggest challenges
              </p>
            </div>
            <div className="w-full h-full lg:max-w-[500px] max-w-[400px] lg:min-h-[390px] min-h-[310px] bg-[url('/marketingCardBg.png')] bg-cover md:bg-top rounded-xl px-5 py-10">
              <Image
                src="/ceo3.webp"
                className="lg:w-[100px] lg:h-[100px] w-[70px] h-[70px] object-cover rounded-full object-center flex"
                alt=""
                width={200}
                height={200}
              />
              <span className="flex flex-col gap-2 lg:mt-10 mt-4">
                <h4 className="lg:text-xl text-lg font-medium">Andrew Ng</h4>
                <p className="text-sm text-gray-300">
                  AI Researcher (Google Brain)
                </p>
              </span>
              <p className="lg:text-base text-sm text-white mt-5 text-wrap">
                The automation revolution is arriving, and it will be as
                transformative for work as the industrial revolution was for
                manufacturing.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="w-full h-full bg-[url('/allianceBg.png')] bg-cover bg-center flex flex-col pt-20 relative">
        <motion.div 
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "tween",
          ease: "easeIn",
          duration: 0.6,
        }}
        className="w-full h-full gap-5 flex flex-col justify-center items-center px-5">
          <h2 className="lg:text-[3rem] md:text-[2rem] text-xl text-white font-medium">
            Who is the Alliance for ? 
          </h2>
          <p className="lg:max-w-[900px] md:max-w-[600px] mx-auto md:text-xl text-sm font-normal leading-relaxed text-center text-white">
            The Alliance is designed for marketing executives in
            enterprise-sized organizations across all industry verticals.
            Joining will allow you not just to stay current, but to actively
            shape the future of marketing in your organization; empowering your
            team to drive both pipeline and productivity.
          </p>
        </motion.div>

        <div className="w-full h-full lg:p-10 p-5 flex justify-center items-center max-w-[700px] mx-auto mt-5">
          <iframe
            className="w-full h-full lg:min-h-[450px] lg:min-w-[750px] md:min-h-[400px] md:min-w-[550px] min-h-[250px]"
            src="https://www.youtube.com/embed/AJeIWWGeXdg?si=RMAbKXGUfGr6HWXJ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>

        <div className="w-full h-full gap-5 flex px-5 flex-col justify-center items-center z-[2]">
          <h2 className="lg:text-[3rem] md:text-[2rem] text-xl text-white font-medium mt-5">
            What do alliance members get ? 
          </h2>

          <div className="w-full h-full flex flex-row flex-wrap gap-8 justify-center items-center max-w-[1200px] mx-auto px-5 mt-10 scale-100 mb-[-80px]">
            <motion.div 
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "tween",
              ease: "easeIn",
              duration: 0.6,
            }}
            className="w-full h-[350px] lg:min-w-[320px] lg:max-w-[350px] md:min-w-[300px] md:max-w-[400px] max-w-[400px] bg-[url('/allianceCardBg.png')] bg-cover md:bg-top rounded-xl px-10 py-5">
              <Image
                src="/alliance1.png"
                className="w-[70px] h-[70px] my-5 object-cover rounded-full object-left flex"
                alt=""
                width={200}
                height={200}
              />
              <h3 className="text-2xl font-semibold text-white w-2/3">
                Learning and Discovery
              </h3>
              <p className="lg:text-base text-sm text-white mt-2 text-wrap">
                Offers unparalleled access to the latest advancements in AI for
                B2B marketing, presented by forward-thinking, innovative brands.
              </p>
            </motion.div>
            <motion.div 
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "tween",
              ease: "easeIn",
              duration: 0.6,
              delay: 0.3,
            }}
            className="w-full h-[350px] lg:min-w-[320px] lg:max-w-[350px] md:min-w-[300px] md:max-w-[400px] max-w-[400px] bg-[url('/allianceCardBg.png')] bg-cover md:bg-top rounded-xl px-10 py-5">
              <Image
                src="/alliance2.png"
                className="w-[70px] h-[70px] my-5 object-cover rounded-full object-left flex"
                alt=""
                width={200}
                height={200}
              />
              <h3 className="text-2xl font-semibold text-white w-2/3">
                Networking
              </h3>
              <p className="lg:text-base text-sm text-white mt-2 text-wrap">
                Quarterly events for participants to connect, share insights,
                and foster professional relationships.
              </p>
            </motion.div>
            <motion.div 
             initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "tween",
              ease: "easeIn",
              duration: 0.6,
              delay: 0.6,
            }}
            className="w-full h-[350px] lg:min-w-[320px] lg:max-w-[350px] md:min-w-[300px] md:max-w-[400px] max-w-[400px] bg-[url('/allianceCardBg.png')] bg-cover md:bg-top rounded-xl px-10 py-5">
              <Image
                src="/alliance3.png"
                className="w-[70px] h-[70px] my-5 object-cover rounded-full object-left flex"
                alt=""
                width={200}
                height={200}
              />
              <h3 className="text-2xl font-semibold text-white w-full">
                Multi-Format Educational Content every month
              </h3>
              <p className="lg:text-base text-sm text-white mt-2 text-wrap">
                Available on demand, including webinars, articles, and more,
                catering to diverse learning preferences.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="w-full absolute bottom-0 min-h-[130px] bg-gradient-to-b from-[#0000] to-[#000000d5] z-0"></div>
      </div>

      <div className="w-full h-full lg:min-h-screen bg-[url('/formBg.png')] bg-cover bg-center flex flex-col p-5 pt-32">
        <h2 className="lg:text-[3rem] md:text-[2rem] text-3xl text-center py-10 text-white font-medium">
          Register
        </h2>

        <form className="w-full h-full max-w-[700px] bg-[#000d] mx-auto border-[1px] border-white rounded-2xl py-10 px-10 flex flex-col gap-5 mb-[-120px] z-[2]">
          <h3 className="lg:text-3xl text-2xl font-medium text-white lg:mb-5 mb-3">
            Sign Up
          </h3>

          <input
            type="text"
            name="fName"
            placeholder="First name"
            className="lg:text-lg text-base lg:p-5 p-2 border-[1px] border-[#ffffff6c] lg:rounded-[20px] rounded-lg text-[#ffffff9a]"
          />
          <input
            type="text"
            name="lName"
            placeholder="Last name"
            className="lg:text-lg text-base lg:p-5 p-2 border-[1px] border-[#ffffff6c] lg:rounded-[20px] rounded-lg text-[#ffffff9a]"
          />
          <input
            type="text"
            name="workEmail"
            placeholder="Work Email*"
            className="lg:text-lg text-base lg:p-5 p-2 border-[1px] border-[#ffffff6c] lg:rounded-[20px] rounded-lg text-[#ffffff9a]"
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="lg:text-lg text-base lg:p-5 p-2 border-[1px] border-[#ffffff6c] lg:rounded-[20px] rounded-lg text-[#ffffff9a]"
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            className="lg:text-lg text-base lg:p-5 p-2 border-[1px] border-[#ffffff6c] lg:rounded-[20px] rounded-lg text-[#ffffff9a]"
          />

          <button className="bg-gradient-to-b from-[#D01EDA] to-[#F65BFF] lg:h-[60px] w-full h-[40px] lg:text-xl text-white mt-5 text-base font-medium rounded-lg border-[1px] border-[#aa14b2] transition-all duration-100 hover:scale-[104%] hover:bg-[#F65BFF]">
            Apply for Invite
          </button>
        </form>
      </div>

      <div className="w-full h-full flex flex-col justify-start items-center bg-black pt-[200px] z-0">
        <h2 className="lg:text-[3rem] md:text-[2rem] text-2xl text-white font-medium mt-5">
          Hybrid event platform FAQs
        </h2>

        <motion.div onClick={() => setActiveFaq(1)}>
          <h1 className="text-white text-3xl font-medium">Kartik Mistry</h1>
          {activeFaq == 1 && (
            <p className="text-white">Hello kartik this side</p>
          )}
        </motion.div>

        <motion.div
          id="faq"
          className="w-full h-full flex flex-col gap-5 mt-10 max-w-[1000px] mx-auto text-white px-5 z-50 relative"
        >
          {faqItems.map(({ id, question, answer }) => (
            <div
              key={id}
              onClick={() => toggleFaq(id)}
              className="cursor-pointer flex flex-col p-5 gap-5 border-b-[1px] border-[#6f78888b] pb-3 relative bg-transparent pointer-events-auto"
            >
              <span className="absolute top-[20px] right-5 text-2xl">
                {activeFaq !== id ? <BiPlus /> : <BiMinus />}
              </span>
              <h4 className="lg:text-2xl text-lg font-medium pr-8">
                {question}
              </h4>

              <AnimatePresence initial={false}>
                {activeFaq === id && (
                  <motion.ul
                    key={`faq-${id}-content`}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={expandVariants}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden flex flex-col gap-1 text-[#595E68] text-lg"
                  >
                    {answer.map((point, index) => (
                      <li key={index} className={index === 0 ? "" : "mt-2"}>
                        {point}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        <span className="w-full max-w-[1000px] mx-auto lg:mt-16 mt-5 flex flex-col p-5 gap-5">
          <h4 className="lg:text-2xl text-lg font-medium text-white">
            More questions?
          </h4>
          <Link
            href="#"
            className="text-[#FF4200] flex font-semibold flex-row gap-1 items-center justify-center w-fit"
          >
            Visit Help Center{" "}
            <BsArrowRightShort className="text-2xl font-medium" />
          </Link>
        </span>
      </div>
      <Footer />
    </div>
  );
}
