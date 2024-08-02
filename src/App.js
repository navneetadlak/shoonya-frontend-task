import React, { useEffect, useState } from "react";
import Pagination from "./Component/Pagination";
import Navbar from "./Component/Navbar";
import Filter from "./Component/Filter";
import RetreatCard from "./Component/RetreatCard";

function App() {
  const [retreats, setRetreats] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState({ type: "", date: "" });
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredRetreats, setFilteredRetreats] = useState([]);

  const fetchRetreats = async (queryParams = "") => {
    const response = await fetch(
      `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page=${currentPage}&limit=22${queryParams}`
    );
    const data = await response.json();
    console.log(data);
    console.log((Math.ceil(data.total / 22)));
    setRetreats(data);
    setFilteredRetreats(data);
    // Assuming total pages can be calculated from headers or response
    setTotalPages(Math.ceil(data.total / 22)); //Math.ceil Method rounds a number up to the nearest integer Math.ceil(4.2) is gonna be 5.
  };

  useEffect(() => {
    fetchRetreats();
  }, [currentPage]);

  useEffect(() => {
    let queryParams = "";

    if (filter.type) {
      queryParams += `&filter=${filter.type}`;
    }
    if (filter.date) {
      queryParams += `&date=${filter.date}`;
    }
    if (searchTerm) {
      queryParams += `&search=${searchTerm}`;
    }

    fetchRetreats(queryParams);
  }, [filter, searchTerm, currentPage]);

  const handleFilterChange = (type, value) => {
    setFilter({ ...filter, [type]: value });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <Filter
        onFilterChange={handleFilterChange}
        onSearchChange={handleSearchChange}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRetreats.map((retreat) => (
          <RetreatCard key={retreat.id} retreat={retreat} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
