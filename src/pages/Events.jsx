import React from "react";
import brainstorm from "../assets/events/brainstorm.jpeg";
import microexplorer from "../assets/events/microexplorer.jpeg";
import websethunt from "../assets/events/websethunt.jpeg";
import aristotle from "../assets/events/aristotle.jpeg";

const events = [
  {
    title: "Brainstorm",
    content:
      "Join the Microbus Society's exhilarating Brainstorm Quiz event, a thrilling exploration of creativity and intellect. The competition challenges teams to go beyond traditional quiz formats, fostering critical thinking and lateral problem-solving. With diverse rounds covering general knowledge, entertainment , sports, science and current affairs related questions participants can anticipate a dynamic atmosphere that encourages collaboration and intellectual curiosity. Open to all Microbus Society members and beyond, Brainstorm Quiz promises not only exciting prizes and recognition for outstanding performances but also a unique opportunity to connect with like-minded individuals. Don't miss out on this chance to ignite your intellectual spark and be part of a memorable quiz experience.",
    image: brainstorm
  },
  {
    title: "Microexplorer",
    content:
      "A ride unlike any other, an uncharted territory, and an unmatched journey surrounded by several competitors. Good times start here, don't they? Microbus wants to take you on such a ride and for that, we present to you - MICROEXPLORER!! Along a journey to the final finish line, you and your buddy robot communicate using a wireless transmitter and overcome the struggles. Where the opponent has maneuvered, you gotta buckle up! Does your bot have what it takes to win this mega event? The journey only gets tougher when your bot gets damaged in the rough terrain with sharp turnes, obstacles , rotating platforms and what not! You have to design a backup, make the bot efficient and bring it back safely in the minimum possible time. After all, buddies are super precious. Aren't they? Microbus family invites you to participate and grace this event with your presence. Let us all show our zeal and enthusiasm through this fabulous opportunity.",
    image: microexplorer
  },
  {
    title: "Web Set Hunt",
    content:
      "Got that curious explorer inside you who can run to seek answers. MICROBUS presents WEBSETHUNT to test your knowledge skills and ability to solve riddles. Get your team and mind ready for solving queries through the augmented routes of web servers 🌐. WEBSETHUNT consists of internet based round with cryptic questions that make you run against clock ⏱️and expand your creative thinking. Let the pursuit of answers begin!🚥 Get ready to use those search engines in your own creative way to hunt for facts or information to acquire the solutions.",
    image: websethunt
  },
  {
    title: "Aristotle",
    content:
      "Going through the recruitment process is The first step in the corporate world. It's the first station in a journey that will span over decades. It tests your ability to stay calm, composed and present yourself when it matters the most. Microbus presents “ Aristotle ”, an exciting opportunity To take a Peak into one of the most nerve Wrecking and significant phases of life. A test of your wits and soft skills as you navigate through the recruitment process. Three rounds, each more competitive than the other. Aptitude test, group discussion, personal interview-Each to test the various skills that you will have to show during a placement process and to help you understand your strength and weaknesses. So put your best self on, and get ready for an experience of a lifetime.",
    image: aristotle
  }
];

const Event = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8 uppercase">
        Events
      </h1>

      {events.map((event, index) => (
        <div
          key={index}
          className="bg-gradient-to-b from-purple-200 to-indigo-200 shadow-lg rounded-lg p-6 mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
            {event.title}
          </h2>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <img
              src={event.image}
              alt={event.title}
              className={`w-full md:w-1/2 h-auto rounded-lg transition-transform transform ${
                index % 2 === 0 ? "order-1 md:order-none" : "md:order-last"
              } hover:scale-105`}
            />
            <p className="text-gray-200 text-base leading-7">{event.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
