import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [submissions, setSubmissions] = useState([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [step, setStep] = useState("login");

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const handleScrape = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${backendURL}/api/login`);
      setUsername(res.data.username);
      setFetched(true);
      setStep("fetch");
    } catch {
      alert("❌ Login & Scrape failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleFetchSubmissions = async () => {
    if (!username) return alert("Login first.");
    setLoading(true);
    try {
      const res = await axios.get(`${backendURL}/api/submissions?username=${username}`);
      // Sort submissions by timestamp (latest first)
      const sortedSubs = res.data.submissions.sort((a, b) => b.timestamp - a.timestamp);
      setSubmissions(sortedSubs);
      setStep("login");
    } catch {
      alert("❌ Fetch failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(submissions, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `${username}_submissions.json`);
    dlAnchor.click();
  };

  // Ensure submissions are sorted by timestamp when rendering
  const sortedSubmissions = [...submissions].sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 flex flex-col items-center justify-start p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-indigo-900 mb-6 sm:mb-8 tracking-tight animate-pulse">
          LeetCode Submission Scraper
        </h1>

        {/* Control Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
          {step === "login" && (
            <button
              onClick={handleScrape}
              className="w-full sm:w-auto relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
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
                onClick={handleFetchSubmissions}
                className="w-full sm:w-auto relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
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

        {/* Submissions Section */}
        {submissions.length > 0 && (
          <div className="bg-gray-50 rounded-lg sm:rounded-xl shadow-inner p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sticky top-0 bg-gray-50 z-10 py-2">
              <h2 className="text-lg sm:text-xl font-semibold text-indigo-800 mb-2 sm:mb-0">
                Submissions for {username}
              </h2>
              <button
                onClick={handleDownloadJSON}
                className="w-full sm:w-auto relative bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 sm:px-5 py-2 rounded-lg font-semibold text-sm sm:text-base hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 group"
              >
                Download JSON
                <span className="absolute inset-0 rounded-lg bg-green-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </button>
            </div>
            <div className="overflow-auto max-h-[50vh] sm:max-h-[60vh] border border-gray-200 rounded-lg">
              <table className="w-full text-left text-gray-700 text-xs sm:text-sm">
                <thead className="bg-gradient-to-r from-indigo-100 to-purple-100 sticky top-0 text-indigo-800 font-semibold z-10">
                  <tr>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 rounded-tl-lg sm:rounded-tl-xl">Q.No</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3">Title</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3">Language</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 rounded-tr-lg sm:rounded-tr-xl">Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedSubmissions.map((sub, index) => (
                    <tr
                      key={index}
                      className="border-t border-gray-200 hover:bg-indigo-50 transition-colors duration-200 animate-fade-in"
                    >
                      <td className="px-3 sm:px-4 py-2 sm:py-3">{sub.questionNo}</td>
                      <td className="px-3 sm:px-4 py-2 sm:py-3">{sub.title}</td>
                      <td className="px-3 sm:px-4 py-2 sm:py-3">
                        <span className="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">
                          {sub.lang}
                        </span>
                      </td>
                      <td className="px-3 sm:px-4 py-2 sm:py-3">
                        {new Date(sub.timestamp).toLocaleString("en-IN")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Placeholder */}
        {submissions.length === 0 && (
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
        )}

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
    </div>
  );
};

export default App;