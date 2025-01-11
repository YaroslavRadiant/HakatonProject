import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Window = ({ show, onClose, item }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <>
        <div className="flex justify-between">
          <h1 className="text-xl">{item.title}</h1>
          <button
            className="text-black text-4xl h-40px w-35px border-none rounded-25px hover:bg-#dcdcdc"
            onClick={onClose}
          >
            &#215;
          </button>
        </div>
        <div>
          <h2 className="text-xl">Description</h2>
          <p>{item.content}</p>

          <h2 className="text-xl">Status</h2>
          <p>
            {item.icon}
            {`${item.status.charAt(0).toUpperCase()}${item.status.slice(1)}`}
          </p>
        </div>
      </>
    </Modal>
  );
};

export default Window;
