export const Modal: React.FC<{
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}> = ({ children, isOpen, closeModal }) => {
  return (
    <article
      className={`fixed z-auto top-0 left-0 w-full h-full min-h-full bg-opacity-75 bg-black justify-center items-center ${
        isOpen ? " fixed" : "hidden"
      }`}
    >
      <div className=" relative bg-slate-300 overflow-auto">
        <div className="absolute text-white" onClick={closeModal}>
          X
        </div>
        {children}
      </div>
    </article>
  );
};

export default Modal;
