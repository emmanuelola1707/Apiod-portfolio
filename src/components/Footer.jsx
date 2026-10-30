
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      
      <a className="footer__logo" href="#home" aria-label="APIOD Visuals home">
        <img src="/images/apiod-logo.png" alt="APIOD Visuals" />
      </a>

      <p>Video editing. Visual storytelling. Lasting impact.</p>


      <a className="footer__back-to-top" href="#home">
        Back to top ↑
      </a>

      <div className="footer__bottom">
        <span>© {year} FRAME. All rights reserved.</span>
        <span>Independent Video Editor</span>
      </div>
    </footer>
  );
}

export default Footer;
