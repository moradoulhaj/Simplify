import { useState } from "react";
import Monitor from "../parts/Monitor";

export default function LogChecker() {
  const [profiles, setProfiles] = useState("");
  const [logs, setLogs] = useState("");
  const [proxyDown, setProxyDown] = useState("");
  const [empty, setEmpty] = useState("");
  const [others, setOthers] = useState("");
  const [active, setActive] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (profiles.split("\n").length != logs.split("\n").length){alert("Profiles and Logs are not equal")}


    // Split the logs into lines and process each line
    const logLines = logs.split("\n");
    let proxyDownLogs = [];
    let emptyLogs = [];
    let othersLogs = [];
    let activeLogs = [];


    logLines.forEach((line) => {
      if (line.includes("proxy down")) {
        proxyDownLogs.push(line);
      } else if (line.trim() === "") {
        emptyLogs.push(line);
      } else if (line.includes("active")) {
        activeLogs.push(line);
      }
      else {
        othersLogs.push(line);
      }
    });

    setProxyDown(proxyDownLogs.join("\n"));
    setEmpty(emptyLogs.join("\n"));
    setOthers(othersLogs.join("\n"));
    setActive(activeLogs.join("\n"));

  };

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit}>
          <div className="mt-2 flex w-full">
            <div className="w-1/2">
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
                style={{ height: "200px" }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                style={{ height: "200px" }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={logs}
                onChange={(e) => setLogs(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="mt-1 bg-blue-600 py-1 w-1/2 rounded-full text-white"
            >
              Check
            </button>
          </div>
        </form>
        <hr className="mt-2 border-indigo-600" />
      </div>
      <Monitor active={active} profiles={profiles} proxyDown={proxyDown} empty={empty} others={others} />
    </main>
  );
}
