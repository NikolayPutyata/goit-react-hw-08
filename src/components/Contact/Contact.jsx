import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";

const Contact = ({ id, name, number }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const openDeleteModal = () => setIsDeleteOpen(true);
  const closeDeleteModal = () => setIsDeleteOpen(false);

  const openEditModal = () => setIsEditOpen(true);
  const closeEditModal = () => setIsEditOpen(false);

  return (
    <>
      <li className="flex items-center justify-between p-4 border border-gray-300 rounded shadow-md">
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-gray-600">{number}</p>
        </div>
        <div className="space-x-2">
          <button
            type="button"
            onClick={openEditModal}
            className="bg-yellow-500 text-white rounded p-2 hover:bg-yellow-600 transition-colors duration-300"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={openDeleteModal}
            className="bg-red-500 text-white rounded p-2 hover:bg-red-600 transition-colors duration-300"
          >
            Delete
          </button>
        </div>
      </li>

      <EditModal
        id={id}
        name={name}
        isEditOpen={isEditOpen}
        closeEditModal={closeEditModal}
      />

      <DeleteModal
        id={id}
        name={name}
        closeDeleteModal={closeDeleteModal}
        isDeleteOpen={isDeleteOpen}
      />
    </>
  );
};

export default Contact;
