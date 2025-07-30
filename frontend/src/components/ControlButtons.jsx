const ControlButtons = ({ step, username, loading, onScrape, onFetch }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
      {step === "login" && (
        <button
          onClick={onScrape}
          className="w-full sm:w-auto relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin h-4 sm:h-5 w-4 sm:w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
                ></path>
              </svg>
              Logging in...
            </span>
          ) : (
            "Login to LeetCode"
          )}
          <span className="absolute inset-0 rounded-lg bg-indigo-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </button>
      )}
      {step === "fetch" && (
        <>
          <p className="text-indigo-700 font-semibold text-sm sm:text-base text-center">
            ✅ {username}
          </p>
          <button
            onClick={onFetch}
            className="w-full sm:w-auto relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-4 sm:h-5 w-4 sm:w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
                  ></path>
                </svg>
                Fetching...
              </span>
            ) : (
              "Fetch Submissions"
            )}
            <span className="absolute inset-0 rounded-lg bg-blue-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </button>
        </>
      )}
    </div>
  );
};

export default ControlButtons;