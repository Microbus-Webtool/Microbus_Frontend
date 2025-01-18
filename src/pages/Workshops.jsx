import vlsi from "../assets/workshop/vlsi_workshop.jpeg";
import myequation from "../assets/workshop/myequation.jpeg";
import iot2 from "../assets/workshop/iot2.jpg";

const Workshops = () => {
  return (
    <div className="flex flex-col items-center justify-center py-40">
      <div className="text-white text-center font-orbitron text-6xl font-extrabold uppercase mb-8">
        <h1>Workshop</h1>
      </div>
      <div className="flex flex-wrap justify-center w-[95%] p-4">
        {/* Card 1 */}
        <div className="w-[45%] m-4 text-center flex flex-col rounded-lg bg-gradient-to-b from-[#940cbb3d] via-[#55076c3d] to-[#8f2cf53d] shadow-md overflow-hidden">
          <div className="text-3xl font-akshar font-semibold bg-gradient-to-r from-[#00ffbd] to-[#025b8c] bg-clip-text text-transparent my-4">
            VLSI Workshop
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="relative w-full text-center">
              <img
                src={vlsi}
                alt=""
                className="w-[80%] mx-auto rounded-lg mb-4"
              />
              <div className="absolute bottom-0 w-full bg-white/90 text-center text-base font-roboto p-4 opacity-0 transition-opacity duration-500 hover:opacity-100">
                We are thrilled to announce an exclusive VLSI workshop hosted by
                Microbus, techno managerial society of NIT Kurukshetra in
                collaboration with Sumedha IT, a renowned VLSI institute,
                designed to spark innovation and creativity in all tech
                enthusiasts! Don't miss this golden opportunity to learn from
                the best and network with like-minded peers. Secure your spot
                now and take a leap towards enhancing your skills! 🚀
                <br />
                <a
                  href="https://unstop.com/o/IsheKC9?lb=wIvsgVX&utm_medium=Share&utm_source=shortUrl"
                  className="inline-block bg-[#025b8c] text-white font-akshar text-lg font-semibold py-2 px-4 rounded-lg mt-3 transition-transform transform hover:scale-105"
                >
                  Register Now !!!
                </a>
                <a
                  href="https://unstop.com/o/IsheKC9?lb=wIvsgVX&utm_medium=Share&utm_source=shortUrl"
                  className="inline-block bg-[#025b8c] text-white font-akshar text-lg font-semibold py-2 px-4 rounded-lg mt-3 transition-transform transform hover:scale-105"
                >
                  Brochure
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[45%] m-4 text-center flex flex-col rounded-lg bg-gradient-to-b from-[#940cbb3d] via-[#55076c3d] to-[#8f2cf53d] shadow-md overflow-hidden">
          <div className="text-3xl font-akshar font-semibold bg-gradient-to-r from-[#00ffbd] to-[#025b8c] bg-clip-text text-transparent my-4">
            Robotics and AI
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="relative w-full text-center">
              <img
                src={myequation}
                alt=""
                className="w-[80%] mx-auto rounded-lg mb-4"
              />
              <div className="absolute bottom-0 w-full bg-white/90 text-center text-base font-roboto p-4 opacity-0 transition-opacity duration-500 hover:opacity-100">
                Microbus Society, NIT Kurukshetra in collaboration with My
                Equation, is thrilled to announce a 3-Day Workshop on Robotics
                and AI. Don't miss this unique opportunity to dive into the
                world of Artificial Intelligence and Machine Learning, gain
                hands-on experience, and earn prestigious certificates!
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[45%] m-4 text-center flex flex-col rounded-lg bg-gradient-to-b from-[#940cbb3d] via-[#55076c3d] to-[#8f2cf53d] shadow-md overflow-hidden">
          <div className="text-3xl font-akshar font-semibold bg-gradient-to-r from-[#00ffbd] to-[#025b8c] bg-clip-text text-transparent my-4">
            IoT
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="relative w-full text-center">
              <img
                src={iot2}
                alt=""
                className="w-[80%] mx-auto rounded-lg mb-4"
              />
              <div className="absolute bottom-0 w-full bg-white/90 text-center text-base font-roboto p-4 opacity-0 transition-opacity duration-500 hover:opacity-100">
                Unleashing Creativity in the Our 'Internet of Things' workshop
                was a triumph of innovation, learning, and sheer FUN! From
                exploring the endless possibilities of IoT to crafting
                mind-blowing projects, our talented students transformed ideas
                into reality. Witnessing the joy on their faces as they
                conquered coding challenges and brought their IoT visions to
                life was truly magical. Each student added a unique spark to the
                workshop, turning it into a vibrant tapestry of ideas and
                enthusiasm.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="border border-solid border-black">this is the Workshops</div>
  );
};

export default Workshops;
