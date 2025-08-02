import './NavLinks.css';

const NavLink = () => {
  const links = [
    { href: '#intro', label: 'Home' },
    { href: '#vision', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#footer', label: 'Contacts' },
  ];

  return (
    <nav>
      <ul className="nav-list">
        {links.map(({ href, label }, index) => (
          <li key={index}>
            <a href={href} className="nav-link">{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLink;
