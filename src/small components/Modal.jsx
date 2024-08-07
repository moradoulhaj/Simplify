import { useState } from "react";
import TextAreaWithCopy from "./TextAreaWithCopy";
import TextAreaInput from "./TextAreaInput";  // Adjust the import path based on your folder structure

export default function Modal({ showModal, setShowModal, proxyDownProfiles }) {
  const [proxyInput, setProxyInput] = useState("");
  const [pairedList, setPairedList] = useState([]);

  const handleProxySubmit = () => {
    const profiles = proxyDownProfiles.join("\n").split("\n");
    const proxies = proxyInput.split("\n").map((proxy) => proxy.replace(/:\d+$/, "")); // Remove port

    if (profiles.length !== proxies.length) {
      alert("You must provide the same number of proxies as profiles.");
      return;
    }

    const newPairedList = profiles.map((profile, index) => `${profile};${proxies[index]}`);
    console.log("Paired List:", newPairedList.join("\n"));

    // Set the paired list to the state
    setPairedList(newPairedList);

    // Optionally, display the paired list or handle further processing here
     // Close the modal after submission
  };

  return (
    showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-3/4">
          <h2 className="text-xl font-semibold mb-4">Enter Proxies</h2>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <TextAreaInput
                id="proxyDownProfiles"
                label="Proxy Down Profiles"
                value={proxyDownProfiles.join("\n")}
                onChange={() => {}}
                readOnly={true}
              />
            </div>
            <div className="w-1/2">
              <TextAreaInput
                id="proxyInput"
                label="Enter New Proxies"
                value={proxyInput}
                onChange={(e) => setProxyInput(e.target.value)}
              />
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
              <i class="ri-close-large-line"></i>
            </button>
            <button
              onClick={handleProxySubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              <i class="ri-swap-2-fill"></i>
            </button>
          </div>
        </div>
      </div>
    )
  );
}
