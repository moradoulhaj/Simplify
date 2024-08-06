export default function Header(props) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl px-4 py-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {props.head}
        </h1>
      </div>
    </header>
  );
}
