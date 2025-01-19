import React from "react";
import LinkedInLogo from "../assets/logos/linkedInBlack.png";
import InstaLogo from "../assets/logos/instaBlack.png";
import GitHubLogo from "../assets/logos/github.png";

const Card = ({ image, name, designation, linkedinURL, instaURL, githubURL }) => {
  return (
    <div className="bg-transperant rounded-lg overflow-hidden flex flex-col items-center p-4 m-1">
      <img src={image} alt={name} className="w-32 h-32 rounded-full object-cover mb-4" />
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{designation}</p>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        {linkedinURL && (
          <a href={linkedinURL} className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInLogo} alt="LinkedIn" className="w-6 h-6" />
          </a>
        )}
        {instaURL && (
          <a href={instaURL} className="hover:text-pink-500" target="_blank" rel="noopener noreferrer">
            <img src={InstaLogo} alt="Instagram" className="w-6 h-6" />
          </a>
        )}
        {githubURL && (
          <a href={githubURL} className="hover:text-gray-800" target="_blank" rel="noopener noreferrer">
            <img src={GitHubLogo} alt="GitHub" className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
