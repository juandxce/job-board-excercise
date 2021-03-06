import React, { useContext } from "react";
import { store } from "../store.js";

function Modal() {
  const { dispatch, state } = useContext(store);
  const { modalIsOpen } = state;
  return (
    <div
      className={`${
        !modalIsOpen && "hidden"
      } fixed z-10 inset-0 overflow-y-auto`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div
            onClick={() => {
              dispatch({ type: "SET_MODAL_IS_OPEN", payload: false });
            }}
            className="absolute inset-0 bg-gray-500 opacity-75"
          ></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg md:max-w-6xl sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Department
                </h3>
                <div className="mt-2">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    {state.filters["department"]?.map((filter, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`${
                          state.selectedFilters?.department === filter.key &&
                          "text-blue-500"
                        } text-left block cursor-pointer hover:underline col-span-1`}
                        onClick={() =>
                          dispatch({
                            type: "SELECT_USER_FILTERS",
                            payload: { key: "department", value: filter.key },
                          })
                        }
                      >
                        {filter.key} -{" "}
                        <span className="text-gray-400">
                          {filter.doc_count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Modal);
