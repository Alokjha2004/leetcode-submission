import React, { useState } from "react";
import axios from "axios";
import ControlButtons from "../components/ControlButtons";
import SubmissionsTable from "../components/SubmissionsTable";
import Placeholder from "../components/Placeholder";

const Home = () => {
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
      setSubmissions(res.data.submissions); 
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

  return (
    <div className="flex flex-col items-center justify-start p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-indigo-900 mb-6 sm:mb-8 tracking-tight animate-pulse">
          LeetCode Submission Scraper
        </h1>
        <ControlButtons
          step={step}
          username={username}
          loading={loading}
          onScrape={handleScrape}
          onFetch={handleFetchSubmissions}
        />
        {submissions.length > 0 ? (
          <SubmissionsTable
            submissions={submissions}
            username={username}
            onDownload={handleDownloadJSON}
          />
        ) : (
          <Placeholder />
        )}
      </div>
    </div>
  );
};

export default Home;