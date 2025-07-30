const Placeholder = () => {
  return (
    <div className="text-center text-gray-500">
      <svg
        className="mx-auto h-12 sm:h-16 w-12 sm:w-16 text-indigo-400 mb-4 animate-bounce"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 17v-6h6v6m-6 0h6m4 0h-4m-6 0H5m4-6V5h6v6m4 6v-6h-4m-6 0H5"
        />
      </svg>
      <p className="text-sm sm:text-base">Start by logging in and fetching submissions.</p>
    </div>
  );
};

export default Placeholder;