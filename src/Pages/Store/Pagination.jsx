const Pagination = () => {
  return (
    <div className="flex justify-between mt-12 items-center">
      <div>
        <p>
          Page 2 <span>of 16</span>
        </p>
      </div>
      <div className="flex gap-2">
        <p className="btn">1</p>
        <p className="btn">2</p>
        <p className="btn">3</p>
        <p className="btn">4</p>
        <p className="btn">5</p>
        <p className="btn">...</p>
        <p className="btn">16</p>
      </div>
      <div>
        <p className="btn">7/page</p>
      </div>
    </div>
  );
};

export default Pagination;
