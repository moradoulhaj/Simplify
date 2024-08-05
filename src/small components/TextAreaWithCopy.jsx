import { useRef, useState } from "react";
import Modal from "./Modal";

export default function TextAreaWithCopy({ id, label, value, proxyDownProfiles }) {
  const textAreaRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const countLines = (text) => (text ? text.split("\n").length : 0);

  const copyToClipboard = () => {
    textAreaRef.current.select();
    document.execCommand("copy");
  };

  return (
    <>
      <div className="w-1/4 p-4 border border-gray-300 bg-gray-50 rounded-lg shadow-lg ml-4">
        <label
          htmlFor={id}
          className="block mb-2 text-center text-gray-700 font-medium"
        >
          {label}
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            {countLines(value)}
          </span>
        </label>
        <textarea
          id={id}
          name={id}
          rows={10}
          style={{ height: "160px" }}
          className="block w-full rounded-md border border-gray-400 py-1.5 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={value}
          ref={textAreaRef}
          readOnly
        />
        <div className="flex justify-center gap-5">
          <div>
            <button
              onClick={copyToClipboard}
              className="mt-2 bg-blue-600 text-white px-5 py-1 rounded"
            >
              <i className="ri-clipboard-line"></i>
            </button>
          </div>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="mt-2 bg-blue-600 text-white px-5 py-1 rounded"
            >
              {id === "proxyDown" ? (
                <i className="ri-pencil-fill"></i>
              ) : (
                <i className="ri-download-fill"></i>
              )}
            </button>
          </div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        proxyDownProfiles={proxyDownProfiles}
      />
    </>
  );
}
