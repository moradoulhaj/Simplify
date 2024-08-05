export default function Monitor({ profiles, proxyDown, empty, active , others }) {
  const countLines = (text) => text.split("\n").length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mt-2 flex w-full justify-center">
      <div className="w-1/4 p-4 border border-gray-300 bg-gray-50 rounded-lg shadow-lg">
          <label htmlFor="proxyDown" className="block mb-2 text-center text-gray-700 font-medium">
            Active + Connected 
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {countLines(active)}
            </span>
          </label>
          <textarea
            id="proxyDown"
            name="proxyDown"
            rows={10}
            style={{ height: "200px" }}
            className="block w-full rounded-md border border-gray-400 py-1.5 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={proxyDown}
            disabled
          />
        </div>
        <div className="w-1/4 p-4 border border-gray-300 bg-gray-50 rounded-lg shadow-lg">
          <label htmlFor="proxyDown" className="block mb-2 text-center text-gray-700 font-medium">
            Proxy Down 
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {countLines(proxyDown)}
            </span>
          </label>
          <textarea
            id="proxyDown"
            name="proxyDown"
            rows={10}
            style={{ height: "200px" }}
            className="block w-full rounded-md border border-gray-400 py-1.5 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={proxyDown}
            disabled
          />
        </div>
        <div className="w-1/4 p-4 border border-gray-300 bg-gray-50 rounded-lg shadow-lg ml-4">
          <label htmlFor="empty" className="block mb-2 text-center text-gray-700 font-medium">
            Empty 
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {countLines(empty)}
            </span>
          </label>
          <textarea
            id="empty"
            name="empty"
            rows={10}
            style={{ height: "200px" }}
            className="block w-full rounded-md border border-gray-400 py-1.5 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={empty}
            disabled
          />
        </div>
        <div className="w-1/4 p-4 border border-gray-300 bg-gray-50 rounded-lg shadow-lg ml-4">
          <label htmlFor="others" className="block mb-2 text-center text-gray-700 font-medium">
            Others 
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {countLines(others)}
            </span>
          </label>
          <textarea
            id="others"
            name="others"
            rows={10}
            style={{ height: "200px" }}
            className="block w-full rounded-md border border-gray-400 py-1.5 text-gray-900 bg-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={others}
            disabled
          />
        </div>
      </div>
    </div>
  );
}
