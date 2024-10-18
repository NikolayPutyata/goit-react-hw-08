import Modal from "react-modal";
import { patchContact } from "../../redux/contacts/operations";
import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const EditModal = ({ id, name, closeEditModal, isEditOpen }) => {
  const dispatch = useDispatch();

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleEdit = () => {
    if (!newName.trim() || !newNumber.trim()) {
      toast.error("Please fill in both fields");
      return;
    }

    dispatch(patchContact({ id: id, name: newName, number: newNumber }));

    setNewName("");
    setNewNumber("");

    closeEditModal();
  };

  return (
    <div>
      <Modal
        isOpen={isEditOpen}
        onRequestClose={closeEditModal}
        contentLabel="modal edit"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            padding: "30px",
            backgroundColor: "#fff",
            border: "none",
            width: "500px",
            maxHeight: "300px",
          },
        }}
      >
        <h2 className="text-lg font-bold mb-4 text-center">
          Edit {name} contact
        </h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="New name..."
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="number"
            placeholder="New number..."
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
        <div className="flex gap-3 justify-between mt-4">
          <button
            type="button"
            onClick={handleEdit}
            className="bg-yellow-500 text-white rounded p-2 w-full hover:bg-yellow-600 transition-colors duration-300"
          >
            Edit
          </button>
          <button
            onClick={closeEditModal}
            className="border border-gray-300 rounded p-2 w-full hover:bg-gray-100 transition-colors duration-300"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default EditModal;
