const Search = ({}) => {
  return (
        <form onSubmit={(e) => e.preventDefault()} className="mb-4">
            <input
                type="text"
                // value={search}
                // onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="border px-1 py-1 bg-slate-800 text-slate-500 rounded w-full"
            />
        </form>
  );
}

export default Search;