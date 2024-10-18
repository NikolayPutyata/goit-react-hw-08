import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const DeleteModal = ({ id, name, closeDeleteModal, isDeleteOpen }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Modal
        isOpen={isDeleteOpen}
        onRequestClose={closeDeleteModal}
        contentLabel="modal delete confirm"
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
          Are you sure you want to delete contact {name}?
        </h2>
        <div className="flex gap-3 justify-between mt-4">
          <button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            className="bg-red-500 text-white rounded p-2 w-full hover:bg-red-600 transition-colors duration-300"
          >
            Delete
          </button>
          <button
            onClick={closeDeleteModal}
            className="border border-gray-300 rounded p-2 w-full hover:bg-gray-100 transition-colors duration-300"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
