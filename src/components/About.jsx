import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen sm:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About
          </p>
        </div>
        <p className="text-xl mt-20">
          Passionné d’informatique , également créatif, rigoureux, autodidacte et dynamique.
          Je suis Développeur web en formation à webforce3, Paris.
          Actuellement en recherche d’alternance en entreprise, dans le cadre d’un contrat          d’apprentissage d’une durée de 11 mois (3 semaines en entreprise/une semaine à l’école)
        </p>
      </div>
    </div>
  );
};

export default About;
