const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3 justify-center items-center">
        <div className="social-icon">
          <a href="https://github.com/jeffke110" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.svg" alt="GitHub" className="w-8 h-8" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/jeff-kedda/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2025 Jeffrey Kedda. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
