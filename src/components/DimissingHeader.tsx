interface DimissingHeaderProps {
  description?: string;
  onClose: () => void;
  showHeader: boolean;
  title: string;
}

const DismissingHeader = ({
  title,
  description,
  onClose: onClose,
  showHeader,
}: DimissingHeaderProps) => {
  if (showHeader === false) return null;

  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>{title}</strong> {description}
        <button
          onClick={onClose}
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

export default DismissingHeader;
