const Header = () => {
  const AnnounecementBar = () => {
    return (
      <div className="w-full bg-black py-2">
        <div className="container mx-auto flex items-center justify-center px-3">
          <span className="text-center text-sm font-medium tracking-wide text-white">
            FREE SHIPPING ON ORDERS OVER $15.00 + FREE RETURNS
          </span>
        </div>
      </div>
    );
  };
  return (
    <header className="w-full sticky">
      <div className="">
        <AnnounecementBar />
      </div>
    </header>
  );
};

export default Header;
