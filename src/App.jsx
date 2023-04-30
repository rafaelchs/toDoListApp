import { useState } from "react";
import "./styles/App.css";

export default function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleAddNewItem = () => {
    if (item === "") {
      setIsEmpty(true);
      return;
    }
    setIsEmpty(false);

    const addItem = {
      id: Math.floor(Math.random() * 100000) + 1,
      value: item,
    };
    setItemList((currentList) => [...itemList, addItem]);
    setItem("");
  };

  const handleDeleteItem = (id) => {
    const currentItems = itemList.filter((item) => item.id !== id);
    setItemList([...currentItems]);
  };

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <h2 className="text-light text-center align-items-center justify-content-center">
            What's your tasks for Today?
          </h2>
        </div>

        <div className="row align-items-center justify-content-center mt-5">
          <div className="col-auto">
            <label className="form-label fw-bold text-light">
              Add a new item:
            </label>
          </div>

          <div className="col-auto">
            <input
              className="form-control "
              type="text"
              id="item"
              maxLength="20"
              value={item}
              onChange={(e) => {
                setItem(e.target.value);
              }}
            />
          </div>

          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-secondary btn-md"
              onClick={handleAddNewItem}
            >
              Save
            </button>
          </div>

          {isEmpty && (
            <div className="row mt-4 justify-content-center">
              <div className="col-auto">
                <div className="alert alert-info" role="alert">
                  Field is empty!
                </div>
              </div>
            </div>
          )}

          <div className="row mt-4 justify-content-center">
            <table className="table table-borderless w-50">
              <tbody>
                {itemList.map((row) => (
                  <tr key={row.id}>
                    <td></td>
                    <td className="text-light fw-bold" id="done">
                      {row.value}
                    </td>
                    <td>
                      <span
                        className="material-symbols-outlined span"
                        onClick={() => {
                          handleDeleteItem(row.id);
                        }}
                        n
                      >
                        delete
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
