const Header = () => {
  const AnnounecementBar = () => {
    return (
      <div className="w-full">
        <div className="container">
          <span>FREE SHIPPING ON ORDERS OVER $15.00 + FREE RETURNS</span>
        </div>
      </div>
    );
  };
  return (
    <header>
      <div>
        <AnnounecementBar />
      </div>
    </header>
  );
};

export default Header;
