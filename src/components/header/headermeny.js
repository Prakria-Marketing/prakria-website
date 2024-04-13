<ul className="main-menu">
  <li>
    <Link href="/">Home </Link>
    <span
      className={`dropdown-icon2 ${
        state.activeMenu === "home" ? "active" : ""
      }`}
      onClick={() => toggleMenu("home")}
    >
      <i className="bi bi-plus" />
    </span>
    <ul
      className={`submenu-list active ${
        state.activeMenu === "home" ? "d-block" : "d-none"
      }`}
    >
      <li>
        <a href="#">Light Version</a>
        <span
          className={`dropdown-icon2 two ${
            state.activeSubMenu === "light" ? "active" : ""
          }`}
          onClick={() => toggleSubMenu("light")}
        >
          <i className="bi bi-plus" />
        </span>
        <ul
          className={`submenu-list ${
            state.activeSubMenu === "light" ? "d-block" : "d-none"
          }`}
        >
          <li>
            <Link href="/">
              Startup Agency
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/digital-marketing">
              Digital Marketing Agency
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/saas">
              Saas Product
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/creative-agency">
              Creative Agency
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/it-solution">
              It Solution
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">Dark Version</a>
        <span
          className={`dropdown-icon2 two ${
            state.activeSubMenu === "dark" ? "active" : ""
          }`}
          onClick={() => toggleSubMenu("dark")}
        >
          <i className="bi bi-plus" />
        </span>
        <ul
          className={`submenu-list ${
            state.activeSubMenu === "dark" ? "d-block" : "d-none"
          }`}
        >
          <li>
            <Link href="/">
              Startup Agency
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/digital-marketing">
              Digital Marketing Agency
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/saas">
              Saas Product
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/creative-agency">
              Creative Agency
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/it-solution">
              It Solution
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <Link href="/service">Services</Link>
    <span
      className={`dropdown-icon2 ${
        state.activeMenu === "service" ? "active" : ""
      }`}
      onClick={() => toggleMenu("service")}
    >
      <i className="bi bi-plus" />
    </span>
    <ul
      className={`submenu-list ${
        state.activeMenu === "service" ? "d-block" : "d-none"
      }`}
    >
      <li>
        <Link href="/service">
          Service style 01
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/service/service2">
          Service style 02
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/service/service3">
          Service style 03
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/service/service4">
          Service style 04
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/service/service-details">
          Service Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
    </ul>
  </li>
  <li>
    <Link href="/case-study">Case Study</Link>
    <span
      className={`dropdown-icon2 ${
        state.activeMenu === "case-study" ? "active" : ""
      }`}
      onClick={() => toggleMenu("case-study")}
    >
      <i className="bi bi-plus" />
    </span>
    <ul
      className={`submenu-list ${
        state.activeMenu === "case-study" ? "d-block" : "d-none"
      }`}
    >
      <li>
        <Link href="/case-study">
          Case Study Style 01
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/case-study/case-study2">
          Case Study Style 02
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/case-study/case-study-details">
          Case Study Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
    </ul>
  </li>
  <li>
    <Link href="/blog">Blog</Link>
    <span
      className={`dropdown-icon2 ${
        state.activeMenu === "blog" ? "active" : ""
      }`}
      onClick={() => toggleMenu("blog")}
    >
      <i className="bi bi-plus" />
    </span>
    <ul
      className={`submenu-list ${
        state.activeMenu === "blog" ? "d-block" : "d-none"
      }`}
    >
      <li>
        <Link href="/blog">
          Blog Grid
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/blog/blog-sidebar">
          Blog Grid Sidebar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/blog/blog-list">
          Blog List
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/blog/blog-standard">
          Blog Standard
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/blog/blog-details">
          Blog Details Style 01
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/blog/blog-details2">
          Blog Details Style 02
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
    </ul>
  </li>
  <li>
    <a href="#">Pages</a>
    <span
      className={`dropdown-icon2 ${
        state.activeMenu === "pages" ? "active" : ""
      }`}
      onClick={() => toggleMenu("pages")}
    >
      <i className="bi bi-plus" />
    </span>
    <ul
      className={`submenu-list ${
        state.activeMenu === "pages" ? "d-block" : "d-none"
      }`}
    >
      <li>
        <Link href="/blog">
          About
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/portfolio">Portfolio </Link>
        <span
          className={`dropdown-icon2 two ${
            state.activeSubMenu === "portfolio" ? "active" : ""
          }`}
          onClick={() => toggleSubMenu("portfolio")}
        >
          <i className="bi bi-plus" />
        </span>
        <ul
          className={`submenu-list ${
            state.activeSubMenu === "portfolio" ? "d-block" : "d-none"
          }`}
        >
          <li>
            <Link href="/portfolio">
              Portfolio Grid
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/portfolio/portfolio-masonary">
              Portfolio Masonary
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/portfolio/portfolio-info-flow">
              Portfolio Info Flow
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/portfolio/portfolio-list">
              Portfolio List
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/portfolio/portfolio-details">
              Portfolio Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/team">Our Team</Link>
        <span
          className={`dropdown-icon2 two ${
            state.activeSubMenu === "team" ? "active" : ""
          }`}
          onClick={() => toggleSubMenu("team")}
        >
          <i className="bi bi-plus" />
        </span>
        <ul
          className={`submenu-list ${
            state.activeSubMenu === "team" ? "d-block" : "d-none"
          }`}
        >
          <li>
            <Link href="/team1">
              Team Style 1
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/team2">
              Team Style 2
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/features">
          Features
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/shop">Shop</Link>
        <span
          className={`dropdown-icon2 two ${
            state.activeSubMenu === "shop" ? "active" : ""
          }`}
          onClick={() => toggleSubMenu("shop")}
        >
          <i className="bi bi-plus" />
        </span>
        <ul
          className={`submenu-list ${
            state.activeSubMenu === "shop" ? "d-block" : "d-none"
          }`}
        >
          <li>
            <Link href="/shop">
              Shop
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/product-details">
              Product Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              Cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="/checkout">
              CheckOut
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                viewBox="0 0 10 10"
              >
                <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
              </svg>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/pricing-plan">
          Pricing Plan
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/faq">
          Faq
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
          >
            <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
          </svg>
        </Link>
      </li>
    </ul>
  </li>
  <li>
    <Link href="/contact">Contact</Link>
  </li>
</ul>;
