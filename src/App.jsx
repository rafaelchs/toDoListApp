import { useState } from "react";
import "./styles/App.css";

import { Table } from "./componentes/Table";

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
      id: itemList.length + 1,
      value: item,
    };
    setItemList((currentList) => [...itemList, addItem]);
    setItem("");
  };

  return (
    <>
      <div className="container">
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
            <Table list={itemList} />
          </div>
        </div>
      </div>
    </>
  );
}
