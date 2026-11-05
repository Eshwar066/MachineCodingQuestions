import { useState } from "react";

const employees = [
  { id: 1, name: "Eshwar", department: "Engineering", salary: 80000 },
  { id: 2, name: "Rahul", department: "HR", salary: 50000 },
  { id: 3, name: "Priya", department: "Engineering", salary: 90000 },
  { id: 4, name: "Ananya", department: "Marketing", salary: 60000 },
  { id: 5, name: "Kiran", department: "HR", salary: 55000 },
];

export default function Table() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "asc",
  });

  // Sorting
  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction:
        prev.key === key && prev.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  // Filtering
  let filteredData = employees.filter((employee) => {
    const matchesSearch = employee.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" ||
      employee.department === department;

    return matchesSearch && matchesDepartment;
  });

  // Apply sorting to filtered data
  if (sortConfig.key) {
    filteredData = [...filteredData].sort((a, b) => {
      const { key, direction } = sortConfig;

      let result;

      if (typeof a[key] === "string") {
        result = a[key].localeCompare(b[key]);
      } else {
        result = a[key] - b[key];
      }

      return direction === "asc" ? result : -result;
    });
  }

  // Reset all controls
  const handleReset = () => {
    setSearch("");
    setDepartment("All");
    setSortConfig({ key: "", direction: "asc" });
  };

  const sortIcon = (key) => {
    if (sortConfig.key !== key) return "↕";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee Table</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Department Filter */}
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="All">All Departments</option>
        <option value="Engineering">Engineering</option>
        <option value="HR">HR</option>
        <option value="Marketing">Marketing</option>
      </select>

      <button onClick={handleReset}>Reset</button>

      {/* Table */}
      <table
        border="1"
        // cellPadding="10"
        style={{
          marginTop: "20px",
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>

            <th onClick={() => handleSort("name")}>
              Name {sortIcon("name")}
            </th>

            <th onClick={() => handleSort("department")}>
              Department {sortIcon("department")}
            </th>

            <th onClick={() => handleSort("salary")}>
              Salary {sortIcon("salary")}
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.salary.toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No results found</td>
            </tr>
          )}
        </tbody>
      </table>

      <p>Total Employees: {filteredData.length}</p>
    </div>
  );
}