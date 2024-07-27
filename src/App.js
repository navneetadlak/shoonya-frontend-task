import React, { useEffect, useState } from "react";
import Homepage from "./Component/Homepage";
import Navbar from "./Component/Navbar";

function App() {
  const [retreats, setRetreats] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ type: "", date: "" });
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredRetreats, setFilteredRetreats] = useState([]);

  useEffect(() => {
    fetch(
      `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${currentPage}&limit=5`
    )
      .then((res) => res.json())
      .then((data) => {
        setRetreats(data);
        setFilteredRetreats(data);
      });
  }, [currentPage]);

  useEffect(() => {
    let filtered = retreats;

    if (filter.type) {
      filtered = filtered.filter((retreat) => retreat.type === filter.type);
    }
    if (filter.date) {
      filtered = filtered.filter((retreat) => new Date(retreat.date).toISOString().split('T')[0] === filter.date);
    }
    if (searchTerm) {
      filtered = filtered.filter((retreat) => retreat.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    setFilteredRetreats(filtered);
  }, [filter, searchTerm, retreats]);

  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
