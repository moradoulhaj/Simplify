export default function LogChecker() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <form action="">
          <div className="mt-2 flex">
            <textarea
              id=""
              name="about"
              rows={3}
              cols={20}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
              required
            />
            <textarea
              id=""
              name="about"
              rows={3}
              cols={20}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
              required
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="mt-3 bg-blue-600 px-6 py-2 rounded-full text-white"
            >
              Check
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
