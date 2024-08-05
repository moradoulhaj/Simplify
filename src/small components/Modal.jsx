import { useState } from "react";
import TextAreaWithCopy from "./TextAreaWithCopy";

export default function Modal({ showModal, setShowModal, proxyDownProfiles }) {
  const [proxyInput, setProxyInput] = useState("");
  const [pairedList, setPairedList] = useState([]);

  // Helper function to count lines
  const countLines = (text) => (text ? text.split("\n").length : 0);

  const handleProxySubmit = () => {
    const profiles = proxyDownProfiles.join("\n").split("\n");
    const proxies = proxyInput.split("\n").map(proxy => proxy.replace(/:\d+$/, '')); // Remove port

    if (profiles.length !== proxies.length) {
      alert("You must provide the same number of proxies as profiles.");
      return;
    }

    const newPairedList = profiles.map((profile, index) => `${profile};${proxies[index]}`);
    console.log("Paired List:", newPairedList.join("\n"));

    // Set the paired list to the state
    setPairedList(newPairedList);

    // Optionally, display the paired list or handle further processing here
    setShowModal(false); // Close the modal after submission
  };

  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-3/4">
          <h2 className="text-xl font-semibold mb-4">Enter Proxies</h2>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block mb-2 text-gray-700 font-medium">
                Proxy Down Profiles
              </label>
              <textarea
                className="w-full p-2 border rounded"
                rows={10}
                value={proxyDownProfiles.join("\n")}
                readOnly
              />
              <span className="block mt-1 text-xs text-gray-600">
                Lines: {countLines(proxyDownProfiles.join("\n"))}
              </span>
            </div>

            <div className="w-1/2">
              <label className="block mb-2 text-gray-700 font-medium">
                Enter New Proxies
              </label>
              <textarea
                className="w-full p-2 border rounded"
                rows={10}
                value={proxyInput}
                onChange={(e) => setProxyInput(e.target.value)}
              />
              <span className="block mt-1 text-xs text-gray-600">
                Lines: {countLines(proxyInput)}
              </span>
            </div>
          </div>
          <TextAreaWithCopy
            id="pairedList"
            label="Paired List"
            value={pairedList.join("\n")}
          />
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
