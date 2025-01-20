const Header = () => {
  const AnnounecementBar = () => {
    return (
      <div className="w-full bg-black py-2">
        <div className="container mx-auto flex">
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
