<ul className="main-menu">
  {navData.map((data) => {
    const { id, label, link, icon, subMenu } = data;
    return (
      <li
        key={id}
        className={`${icon === true ? "menu-item-has-children" : ""}`}
      >
        <Link href={link} className="drop-down">
          {label}
        </Link>
        {icon && (
          <i
            onClick={() => toggleMenu(label)}
            className={`bi bi-${
              state.activeMenu === label ? "dash" : "plus"
            } dropdown-icon`}
          />
        )}

        {subMenu && (
          <ul
            className={`sub-menu ${
              state.activeMenu === label ? "d-block" : ""
            }`}
          >
            {subMenu.map((subItem, subIndex) => (
              <li key={subIndex}>
                <Link legacyBehavior href={subItem.link}>
                  <a>{subItem.label}</a>
                </Link>
                {subItem.icon && subItem.icon ? (
                  <>
                    <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                    <i
                      onClick={() => toggleSubMenu(subItem.label)}
                      className={`d-lg-none d-flex bi bi-${
                        state.activeSubMenu === subItem.label ? "dash" : "plus"
                      } dropdown-icon `}
                    />
                  </>
                ) : (
                  ""
                )}
                {subItem.subMenu && (
                  <ul
                    className={`sub-menu ${
                      state.activeSubMenu === subItem.label ? "d-block" : ""
                    }`}
                  >
                    {subItem.subMenu.map((subItem, subIndex) => (
                      <li key={subItem.id}>
                        <Link legacyBehavior href={subItem.link}>
                          <a>{subItem.label}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  })}
</ul>;
