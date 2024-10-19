const HomePage = () => {
  return (
    <div className="p-10 mx-auto">
      <h2 className="text-3xl font-bold text-center">
        Welcome! The website was created by student developer Mykola Putyata.
        Here you can store, add, delete, and edit a list of contacts.
      </h2>
      <h3 className="text-xl font-normal text-center">
        Registration is required before use. Tailwind was used for styling.
      </h3>
      <p className="text-sm text-red-500 mt-4 text-center">
        Your data is not saved or transferred to third parties
      </p>
    </div>
  );
};

export default HomePage;
