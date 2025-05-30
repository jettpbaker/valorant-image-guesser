const LoadingIndicator = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="#ff4655"
      xmlns="http://www.w3.org/2000/svg"
      className="spinner"
    >
      <path
        d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 11.5858 20.8358 11.25 21.25 11.25C21.6642 11.25 22 11.5858 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.4142 2 12.75 2.33579 12.75 2.75C12.75 3.16421 12.4142 3.5 12 3.5Z"
        fill="#ff4655"
      />
    </svg>
  );
};

export default LoadingIndicator;
