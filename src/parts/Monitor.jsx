import TextAreaWithCopy from "../small components/TextAreaWithCopy";

export default function Monitor({ result }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex w-full justify-center">
        <TextAreaWithCopy
          id="proxyDown"
          label="Proxy Down"
          value={result.proxyDownProfiles?.join("\n")}
          proxyDownProfiles={result.proxyDownProfiles}
        />
        <TextAreaWithCopy
          id="empty"
          label="Empty"
          value={result.notLogsProfiles?.join("\n")}
        />
        <TextAreaWithCopy
          id="others"
          label="Others"
          value={result.othersProfiles?.join("\n")}
        />
        <TextAreaWithCopy
          id="active"
          label="Active"
          value={result.connectedProfiles?.join("\n")}
        />
      </div>
      {/* Add more TextAreaWithCopy components for other categories if needed */}
    </div>
  );
}
