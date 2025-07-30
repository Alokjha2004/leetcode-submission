const SubmissionsTable = ({ submissions, username, onDownload }) => {
  // Ensure submissions are sorted by timestamp
  const sortedSubmissions = [...submissions].sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="bg-gray-50 rounded-lg sm:rounded-xl shadow-inner p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sticky top-0 bg-gray-50 z-10 py-2 border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold text-indigo-800 mb-2 sm:mb-0">
          Submissions for {username}
        </h2>
        <button
          onClick={onDownload}
          className="w-full sm:w-auto relative bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 sm:px-5 py-2 rounded-lg font-semibold text-sm sm:text-base hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg group"
        >
          <span className="flex items-center justify-center">
            <svg
              className="h-4 sm:h-5 w-4 sm:w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download JSON
          </span>
          <span className="absolute inset-0 rounded-lg bg-green-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </button>
      </div>
      <div className="overflow-auto max-h-[45vh] sm:max-h-[55vh] border border-gray-200 rounded-lg">
        <table className="w-full text-left text-gray-700 text-xs sm:text-sm">
          <thead className="bg-gradient-to-r from-indigo-100 to-purple-100 sticky top-0 text-indigo-800 font-semibold z-10">
            <tr>
              <th className="px-2 sm:px-4 py-1.5 sm:py-3 rounded-tl-lg sm:rounded-tl-xl">Q.No</th>
              <th className="px-2 sm:px-4 py-1.5 sm:py-3">Title</th>
              <th className="px-2 sm:px-4 py-1.5 sm:py-3">Language</th>
              <th className="px-2 sm:px-4 py-1.5 sm:py-3 rounded-tr-lg sm:rounded-tr-xl">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {sortedSubmissions.map((sub, index) => (
              <tr
                key={index}
                className={`border-t border-gray-200 hover:bg-indigo-100 transition-colors duration-200 animate-fade-in ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-2 sm:px-4 py-1.5 sm:py-3">{sub.questionNo}</td>
                <td className="px-2 sm:px-4 py-1.5 sm:py-3">{sub.title}</td>
                <td className="px-2 sm:px-4 py-1.5 sm:py-3">
                  <span className="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">
                    {sub.lang}
                  </span>
                </td>
                <td className="px-2 sm:px-4 py-1.5 sm:py-3">
                  {new Date(sub.timestamp).toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SubmissionsTable;