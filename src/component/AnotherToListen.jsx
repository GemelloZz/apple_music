const AnotherToListen = (props) => {
  return (
    <>
      <div className="bg-dark w-100 rounded-3 d-flex justify-content-between align-items-center p-2 mt-1">
        <p className="text-danger mb-0 ms-0">{props.Value}</p>
        <i className="bi bi-arrow-right text-danger"></i>
      </div>
    </>
  );
};

export default AnotherToListen;
