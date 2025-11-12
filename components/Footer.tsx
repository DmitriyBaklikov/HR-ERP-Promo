
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto px-6 py-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} ООО "ДжетРуби Эйдженси". Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;