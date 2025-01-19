import React from "react";
import Card from "../components/TeamCard";

// Developer Images
import MrityunjayImg from "../assets/team/mrityunjay.jpg";
import AdityaImg from "../assets/team/aditya.jpg";
import HimanshuImg from "../assets/team/himanshu.png";
import SaranshImg from "../assets/team/saransh.jpg";
import RaghavImg from "../assets/team/raghav.jpg";
import RishikaImg from "../assets/team/rishika.jpeg";
import DineshImg from "../assets/team/dinesh.jpg";

// Designer Images
import VidhishaImg from "../assets/team/vidhisha.jpg";
import TanishaImg from "../assets/team/tanisha.jpeg";
import AkhileshImg from "../assets/team/akhilesh.png";
import ChiragImg from "../assets/team/chirag.jpg";
import LokendraImg from "../assets/team/lokendar.jpg";

// Sponser Images
import AshishImg from "../assets/team/ashish.jpg";
import SparshImg from "../assets/team/sparsh.jpg";
import AnshulImg from "../assets/team/anshul.png";
import AryanImg from "../assets/team/aryan.jpg";

const developers = [
  { image: MrityunjayImg, name: "Mrityunjay", designation: "Developer", linkedinURL: "...", instaURL: "...", githubURL: "" },
  { image: AdityaImg, name: "Aditya", designation: "Developer", linkedinURL: "...", instaURL: "...", githubURL: "" },
  { image: HimanshuImg, name: "Himanshu", designation: "Developer", linkedinURL: "...", instaURL: "...", githubURL: "" },
  { image: SaranshImg, name: "Saransh", designation: "Developer", linkedinURL: "...", instaURL: "...", githubURL: "" },
  { image: RaghavImg, name: "Raghav", designation: "Developer", linkedinURL: "...", instaURL: "...", githubURL: "" },
  { image: RishikaImg, name: "Rishika", designation: "Developer", linkedinURL: "...", instaURL: "...", githubURL: "" },
  { image: DineshImg, name: "Dinesh", designation: "Developer", linkedinURL: "...", instaURL: "...", githubURL: "" },
];

const designers = [
  { image: VidhishaImg, name: "Vidhisha", designation: "Social Media", linkedinURL: "...", instaURL: "", githubURL: "" },
  { image: TanishaImg, name: "Tanisha", designation: "Social Media", linkedinURL: "", instaURL: "", githubURL: "" },
  { image: AkhileshImg, name: "Akhilesh", designation: "Social Media", linkedinURL: "...", instaURL: "...", githubURL: "" },
  { image: ChiragImg, name: "Chirag", designation: "Social Media", linkedinURL: "...", instaURL: "...", githubURL: "" },
  { image: LokendraImg, name: "Lokendra", designation: "Social Media", linkedinURL: "...", instaURL: "...", githubURL: "" },
];

const sponsers = [
  { image: AshishImg, name: "Ashish", designation: "Designer", linkedinURL: "...", instaURL: "", githubURL: "" },
  { image: SparshImg, name: "Sparsh", designation: "Designer", linkedinURL: "...", instaURL: "", githubURL: "" },
  { image: AnshulImg, name: "Anshul", designation: "Designer", linkedinURL: "...", instaURL: "", githubURL: "" },
  { image: AryanImg, name: "Aryan", designation: "Sponsy Lead", linkedinURL: "...", instaURL: "...", githubURL: "" },
];

const TeamPage = () => {
  return (
    <div className="team p-8">
      <h1 className="text-white text-center text-5xl font-extrabold tracking-wide uppercase mt-4">
        TEAMS
      </h1>
      <div className="team-container w-11/12 flex flex-col items-center justify-center">
        <h3 className="heading1 text-4xl font-semibold bg-gradient-to-l from-teal-400 to-blue-900 bg-clip-text text-transparent">
          Developers
        </h3>
        <div className="allCards flex flex-wrap items-start justify-center gap-4 w-full">
          {developers.map((member, index) => (
            <Card
              key={index}
              image={member.image}
              name={member.name}
              linkedinURL={member.linkedinURL}
              instaURL={member.instaURL}
              githubURL={member.githubURL}
            />
          ))}
        </div>
      </div>
      <div className="team-container w-11/12 flex flex-col items-center justify-center">
        <h3 className="heading1 text-4xl font-semibold bg-gradient-to-l from-teal-400 to-blue-900 bg-clip-text text-transparent">
          Social Media
        </h3>
        <div className="allCards flex flex-wrap items-start justify-center w-full">
          {designers.map((member, index) => (
            <Card
              key={index}
              image={member.image}
              name={member.name}
              linkedinURL={member.linkedinURL}
              instaURL={member.instaURL}
              githubURL={member.githubURL}
            />
          ))}
        </div>
      </div>
      <div className="team-container w-11/12 flex flex-col items-center justify-center">
        <h3 className="heading1 text-4xl font-semibold bg-gradient-to-l from-teal-400 to-blue-900 bg-clip-text text-transparent">
          Sponsy Team
        </h3>
        <div className="allCards flex flex-wrap items-start justify-center w-full">
          {sponsers.map((member, index) => (
            <Card
              key={index}
              image={member.image}
              name={member.name}
              linkedinURL={member.linkedinURL}
              instaURL={member.instaURL}
              githubURL={member.githubURL}
            />
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default TeamPage;