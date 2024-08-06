import { useState } from "react";
import Monitor from "../parts/Monitor";
import { checkLogs } from "../scripts/checker";  // Adjust the import path based on your folder structure

export default function LogChecker() {
  const [profiles, setProfiles] = useState("");
  const [logs, setLogs] = useState("");
  const [sent, setSent] = useState(true);

  const [result, setResult] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = checkLogs(profiles, logs);
    if (result.error) {
      alert(result.error);
    } else {
      setResult(result);
      setSent(true);

    }
  };

  return (
    <main>
      <div className="px-5 mt-2">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <div className="w-1/5">
              <label htmlFor="profiles">
                Profiles:
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  {profiles.split("\n").length}
                </span>
              </label>
              <textarea
                id="profiles"
                name="profiles"
                rows={3}
                style={{ height: "150px",resize: "none" }}
                className="w-full rounded-md border-0  p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={profiles}
                onChange={(e) => setProfiles(e.target.value)}
                required
              />
            </div>
           <div className="w-1/2"> 
              <label htmlFor="logs">
                Logs:
                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  {logs.split("\n").length}
                </span>
              </label>
              <textarea
                id="logs"
                name="logs"
                rows={3}
                style={{ height: "150px",resize: "none", }}
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={logs}
                onChange={(e) => setLogs(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="mt-1 bg-blue-600 py-1 w-1/2 rounded-full text-white hover:bg-blue-100 font-medium transition-2 hover:text-sky-700"
            >
              Check
            </button>
          </div>
        </form>
        <hr className="mt-2 border-indigo-600" />
      </div>
      {sent && <Monitor result={result} />}
    </main>
  );
}
