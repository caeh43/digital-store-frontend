import Logo from '../Logo/Logo.jsx';
import InfoColumn from '../InfoColumn/InfoColumn.jsx';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../Icons/Icons.jsx';
import { footerColumns, socialLinks } from '../../data/navigation.js';
import './Footer.css';

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Twitter: TwitterIcon,
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo variant="white" />
          <p className="footer__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <ul className="footer__social">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.name];
              return (
                <li key={social.name}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    <Icon size={24} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {footerColumns.map((column) => (
          <InfoColumn key={column.title} title={column.title} informations={column.informations} />
        ))}
      </div>

      <div className="container">
        <hr className="footer__divider" />
        <p className="footer__copyright">© {new Date().getFullYear()} Digital Store</p>
      </div>
    </footer>
  );
}
