"use client";


import { Eye } from "lucide-react";
import { useRef } from "react";

function ViewResourcesModal({ title }: { title?: string }) {
  const viewResourcesModal = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (viewResourcesModal.current) {
      viewResourcesModal.current.showModal();
    }
  };

  const closeModal = () => {
    if (viewResourcesModal.current) {
      viewResourcesModal.current.close();
    }
  };
  return (
    <div>
      <button
        onClick={openModal}
        className=" btn bg-error rounded-full border-0 text-white px-4 py-2 mt-4 hover:bg-error/90 transition w-full lg:w-auto flex space-x-2"
      >
        <Eye size={16} />
        <span>View resource</span>
      </button>
      <dialog ref={viewResourcesModal} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">
            Resources under {title} will be available for download once they are
            uploaded
          </p>
          <div>
            <button type="button" className="btn bg-success text-secondary-content rounded-sm border border-success" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ViewResourcesModal;
