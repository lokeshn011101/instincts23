import { CollegeLogo, Footer, PageHead, Button } from "components";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "utils/hooks/use-translation";

export default function Home() {
  const title = useTranslation("page.title");
  const description = useTranslation("page.description");
  return (
    <>
      <PageHead title={title} description={description} />
      <div className="flex flex-col items-center justify-center max-w-2xl min-h-screen p-1 md:p-4 m-auto text-white font-main">
        <CollegeLogo />
        <div className="min-h-screen lg:w-[98%] sm:w-full flex flex-col items-center justify-center">
          <Image
            src="/images/Instincts.png"
            alt="Instincts 2023 - Lost Continent"
            height={0}
            width={700}
            className="mb-[4rem] lg:p-8 clubitem"
          />
          <h1 className="text-[3rem] lg:text-[6rem] leading-[4rem] lg:leading-[8rem] font-title font-bold text-center mb-8 shimmer">
            Registration Opens Soon
          </h1>
          <div className="md:p-4 shadow-lg rounded-br-3xl">
            <p className="text-white text-[1.5rem] lg:text-[2.5rem] text-center font-title">
              March 9, 10 <span className="text-2xl">&</span> 11
            </p>
            <p className="text-white text-[1.5rem] lg:text-[2.5rem] text-center font-title">
              Save the dates
            </p>
            <div className="map mt-12">
              <img src="/images/map.png" alt="" className="!w-[100vw] !h-[100vw] md:!w-[50vw] md:!h-[40vw] lg:!w-[30vw] lg:!h-[30vw]" />
              <Link href="/clubs/literary">
                <div id="pin-1" className="box">
                  <div className="pin-text">
                    <h3>Literary</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/classical" className="bxl">
                <div id="pin-2" className="box1">
                  <div className="pin-text">
                    <h3>Classical</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/tamil" className="bxl">
                <div id="pin-3" className="box2 bxl">
                  <div className="pin-text">
                    <h3>Tamil</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/design" className="bxl">
                <div id="pin-4" className="box3 bxl">
                  <div className="pin-text">
                    <h3>Design</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/gaming" className="bxl">
                <div id="pin-5" className="box4 bxl">
                  <div className="pin-text">
                    <h3>Gaming</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/theatre" className="bxl">
                <div id="pin-6" className="box5 bxl">
                  <div className="pin-text">
                    <h3>Thespian</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/quiz" className="bxl">
                <div id="pin-7" className="box6 bxl">
                  <div className="pin-text">
                    <h3>Quiz</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/film" className="bxl">
                <div id="pin-8" className="box7 bxl">
                  <div className="pin-text">
                    <h3>Film</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/music" className="bxl">
                <div id="pin-9" className="box8 bxl">
                  <div className="pin-text">
                    <h3>Music</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/photography" className="bxl">
                <div id="pin-10" className="box9 bxl">
                  <div className="pin-text">
                    <h3>Photography</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/art" className="bxl">
                <div id="pin-11" className="box10 bxl">
                  <div className="pin-text">
                    <h3>Arts</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/western" className="bxl">
                <div id="pin-12" className="box11 bxl">
                  <div className="pin-text">
                    <h3>Western</h3>
                  </div>
                </div>
              </Link>
              <Link href="/clubs/business" className="bxl">
                <div id="pin-13" className="box12 bxl">
                  <div className="pin-text">
                    <h3>Business</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex justify-center text-[3rem] lg:text-[3rem] text-center font-title">
              <Button href="/events" large>
                Explore our events
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <script src="https://hammerjs.github.io/dist/hammer.js"></script>
    </>
  );
}
