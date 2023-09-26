export const Modal: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <article>
      <div>
        <button>X</button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
