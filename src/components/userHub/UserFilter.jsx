
export default function UserFilter({
  searchText,
  setSearchText,
  filter,
  setFilter,
}) {
  return (
    <div className="mb-6">
      {/* -----------------Search bar: Filter users by name, email, or company===================== */}
      <input
        type="text"
        placeholder="Search by name, email or company"
        value={searchText}
        onChange={(e) =>
          setSearchText(e.target.value)
        }
        className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 bg-white outline-none focus:border-grey-500"/>
        {/*============ Filter buttons: All Users, Online Only, Recently ------------ */}
       <div className="flex flex-wrap gap-2">
       <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg border ${
            filter === "all"
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white border-gray-300"
          }`}
        >
          All Users </button>
        <button
          onClick={() => setFilter("online")}
          className={`px-4 py-2 rounded-lg border ${
            filter === "online"
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white border-gray-300"
          }`}
        > Online Only </button>
        <button
          onClick={() => setFilter("recent")}
          className={`px-4 py-2 rounded-lg border ${
            filter === "recent"
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white border-gray-300"
          }`}
        > Recently Added</button>
      </div>
    </div>
  );
}

