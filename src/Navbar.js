import { Link, NavLink } from "react-router-dom";

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 30px",
    // background: "linear-gradient(90deg, #0099f7, #0a63ff)",
background: "linear-gradient(90deg, #fc466b, #3f5efb)",

    color: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  siteTitle: {
    fontSize: "28px",
    fontWeight: "900",
    textDecoration: "none",
    color: "#fff",
    letterSpacing: "1px",
  },
  linkList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "18px",
  },
  listItem: {},
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    padding: "8px 14px",
    borderRadius: "8px",
    transition: "0.3s ease",
  },
  linkHover: {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  activeLink: {
    backgroundColor: "#ffc107",
    color: "#000",
  },
};

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.siteTitle}>
        🌊 AquaSense
      </Link>

      <ul style={styles.linkList}>
        <li style={styles.listItem}>
          <NavLink
            to="/Complaint"
            style={({ isActive }) =>
              isActive
                ? { ...styles.link, ...styles.activeLink }
                : { ...styles.link }
            }
          >
            Raise Complaint
          </NavLink>
        </li>

        <li style={styles.listItem}>
          <NavLink
            to="/StayAware"
            style={({ isActive }) =>
              isActive
                ? { ...styles.link, ...styles.activeLink }
                : { ...styles.link }
            }
          >
            Stay Aware
          </NavLink>
        </li>

        <li style={styles.listItem}>
          <NavLink
            to="/Donation"
            style={({ isActive }) =>
              isActive
                ? { ...styles.link, ...styles.activeLink }
                : { ...styles.link }
            }
          >
            Donation
          </NavLink>
        </li>
        <li style={styles.listItem}>
  <NavLink to="/policies" style={styles.link} activeStyle={styles.activeLink}>
    Policies
  </NavLink>
</li>

        <li style={styles.listItem}>
          <NavLink
            to="/About"
            style={({ isActive }) =>
              isActive
                ? { ...styles.link, ...styles.activeLink }
                : { ...styles.link }
            }
          >
            About
          </NavLink>
        </li>

        <li style={styles.listItem}>
          <NavLink
            to="/Login"
            style={({ isActive }) =>
              isActive
                ? { ...styles.link, ...styles.activeLink }
                : { ...styles.link }
            }
          >
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
