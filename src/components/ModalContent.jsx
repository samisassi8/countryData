export default function ModalContent({ country, closeModal }) {
  console.log(Object.entries(country.languages));
  return (
    <div
      onClick={closeModal}
      className="fixed z-10 top-0 left-0 w-full h-full bg-gray-800/95 flex justify-center items-center"
    >
      <div
        // pour eviter la propagation de la fonction closeModal sur les enfants, il faut stopper la propagation
        onClick={(e) => e.stopPropagation()}
        className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] relative rounded p-7 bg-gray-50"
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded"
        >
          X
        </button>
        <h2 className="text-2xl mb-4">
          Here is {country.name.common}'s information
        </h2>
        <p className="text-lg mb-2">
          <span className="font-semibold">Language(s)</span>:{" "}
          {/* to display all the countries languages */}
          {Object.entries(country.languages).map((lang) => lang[1] + " ")}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Capital</span> : {country.capital[0]}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Population</span> :{" "}
          {country.population}
        </p>
      </div>
    </div>
  );
}
