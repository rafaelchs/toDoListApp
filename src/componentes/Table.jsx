import { useState, useEffect } from "react";
import "../styles/App.css";

export const Table = ({ list }) => {
  const [newItems, setNewItems] = useState([]);
  let currentItems = [];

  useEffect(() => {
    setNewItems(list);
  }, [list]);

  const handleDeleteItem = (id) => {
    currentItems = newItems.filter((item) => item.id !== id);
  };

  return (
    <>
      <table className="table table-sencondary w-50">
        <tbody>
          {newItems.map((row) => (
            <tr key={row.id}>
              <td key={row.id} className="text-light fw-bold">
                {row.id}
              </td>
              <td className="text-light fw-bold">{row.value}</td>
              <td>
                <span
                  className="material-symbols-outlined span"
                  onClick={() => {
                    handleDeleteItem(row.id);
                  }}
                >
                  delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
