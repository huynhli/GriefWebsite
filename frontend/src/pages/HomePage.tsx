import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Header from "../components/Header"

export default function HomePage() {
  // Refs to track when sections are in view
  const { scrollYProgress } = useScroll()

  const teamRef = useRef(null)
  const aboutInView = useInView(teamRef, { once: true, margin: "-50px" })

  const headerRef = useRef(null)
  const headerTranslate = useTransform(scrollYProgress, [0.2, 0.5], [0, -50])
  const headerOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0])

  const mainBgRef = useRef(null)
  const mainBgScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.75])
  const mainBgOpacity = useTransform(scrollYProgress, [0.2, 0.7], [1, 0])
  const mainBgTranslate = useTransform(scrollYProgress, [0.2, 0.65], [0, -1000])

  return (
    <div className="bg-[#1e1e21] text-white h-[200vh] relative">
      
      <motion.div className="fixed top-0 bg-[#181818] left-0 w-full z-10 pointer-events-auto" ref={headerRef}
        style={{ y: headerTranslate, opacity: headerOpacity}}
      >
        <Header />
      </motion.div>
      
      {/* HERO */}
      <motion.section 
        ref={mainBgRef}
        style={{ y: mainBgTranslate, scale: mainBgScale, opacity: mainBgOpacity }}
        className="fixed top-0 left-0 w-full h-screen z-0 flex flex-col justify-center items-center pointer-events-auto"
      >
        <a
          className="relative bg-center bg-no-repeat w-[50%] h-[50%]"
          style={{ backgroundImage: "url(/GriefGame.jpg)" }}
          href="https://trachscor.itch.io/grief" target="_blank"
          
        >
        </a>
      </motion.section>
      

      <div className="absolute top-[140vh] w-full flex flex-col">
        {/* TEAM SECTION */}
        <motion.section
          ref={teamRef}
          id="Team"
          className="flex justify-center bg-[#181818]"
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        >
          <div
            className="my-6 p-8 w-[70%] mx-auto flex flex-col justify-center items-start rounded-lg"
          >
            <section id="team" className="flex-3 w-full p-3">
              <h1 className="text-5xl text-white">Meet the Team!</h1>
              <div className="h-1 my-3 bg-white"></div>

              <div className="flex flex-row text-2xl py-2">
                <div className="flex flex-col w-[50%] items-center">
                  <h2 className="mt-3 font-bold text-white">Andrew Wang</h2>
                  <h3 className="leading-tight text-white">Lead Composer</h3>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/tgw_wang/"
                    className="underline text-purple-700 hover:text-purple-500"
                  >
                    @tgw_wang
                  </a>

                  <h2 className="mt-5 font-bold text-white">Liam Huynh</h2>
                  <h3 className="leading-tight text-white">Programmer</h3>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/liam-huynh-91aa1a1a1/"
                    className="underline text-purple-700 hover:text-purple-500"
                  >
                    @liamhuynh
                  </a>
                </div>

                <div className="flex flex-col w-[50%] items-center">
                  <h2 className="mt-3 font-bold text-white">Felix (Tae Yeon) Ha</h2>
                  <h3 className="leading-tight text-white">Lead Designer</h3>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/taeyeonha/"
                    className="underline text-purple-700 hover:text-purple-500"
                  >
                    @taeyeonha
                  </a>

                </div>
              </div>
          </section>
          </div>
        </motion.section>

        {/* ABOUT SECTION */}
        <motion.section className="absolute top-[40vh] w-full h-[80vh] flex flex-col justify-around items-center bg-[#181818]"
          id="About"
        >
          <p className="text-3xl mb-[5%] w-[60%] justify-center">
          </p>
          <p className="text-3xl w-[60%] justify-center">
            Grief is a game about the five stages of grief, and some odd representations of them in the form of a boss rush. 
          </p>
          <p className="text-3xl mb-[5%] w-[60%] justify-center">
            Development continuing TBD.
          </p>
          <p className="text-3xl mb-[5%] w-[60%] justify-center">
          </p>
        </motion.section>
      </div>
    </div>
  )
}
