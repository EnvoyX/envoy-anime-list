const HeaderMenu = ({ title }) => {
  return (
    <div>
      <div className="p-8 flex justify-center">
        <h3 className="text-2xl font-bold text-color-dark px-6 py-2 rounded-lg bg-color-accent text-center">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default HeaderMenu;
