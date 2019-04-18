class Menu extends React.Component {
    props;
    render() {
        const {activeClassName} = this.props;
        return (
            <nav className="menu">
                <NavLink to="/" exact className="menu__item" activeClassName={activeClassName}>Главная</NavLink>
                <NavLink to="/drift" className="menu__item" activeClassName={activeClassName}>Дрифт-такси</NavLink>
                <NavLink to="/timeattack" className="menu__item" activeClassName={activeClassName}>Time Attack</NavLink>
                <NavLink to="/forza" className="menu__item" activeClassName={activeClassName}>Forza Karting</NavLink>
            </nav>
        );
    }
}
