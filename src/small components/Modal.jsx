import { useState } from "react";

export default function Modal({ showModal, setShowModal, proxyDownProfiles }) {
  const [proxyInput, setProxyInput] = useState("");

  // Helper function to count lines
  const countLines = (text) => (text ? text.split("\n").length : 0);

  const handleProxySubmit = () => {
    // Handle proxy input submission
    console.log("Proxies:", proxyInput);
    setShowModal(false); // Close the modal after submission
    if ( countLines(proxyInput) - countLines(proxyDownProfiles.join("\n")) !=0 ){alert("u must give me the same number as the profiles")}
  };

  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
          <h2 className="text-xl font-semibold mb-4">Enter Proxies</h2>
          <div className="flex gap-4 mb-4">
            <div className="w-1/5">
              <label className="block mb-2 text-gray-700 font-medium">
                Proxy Down Profiles
              </label>
              <textarea
                className="w-full p-2 border rounded"
                rows={10}
                value={proxyDownProfiles.join("\n")}
                readOnly
              />
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              Lines: {countLines(proxyDownProfiles.join("\n"))}
              </span>
            </div>
            <div className="w-4/5">
              <label className="block mb-2 text-gray-700 font-medium">
                Enter New Proxies
              </label>
              <textarea
                className="w-full p-2 border rounded"
                rows={10}
                value={proxyInput}
                onChange={(e) => setProxyInput(e.target.value)}
              />
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              Lines: {countLines(proxyInput)}
              </span>
            </div>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={() => setShowModal(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleProxySubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  );
}
