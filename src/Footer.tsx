const Footer = () => {
  return (
    <footer className="bg-neutral-50 text-center py-10 px-20 shadow-lg">
      <div className="flex flex-col items-center justify-center gap-4">
        <span>© {new Date().getFullYear()} Market? Market!</span>
      </div>
    </footer>
  );
};

export default Footer;
