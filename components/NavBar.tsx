import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';

const menuItems = [
    {
        id: 1,
        text: 'Home',
        href: '/'
    },
    {
        id: 2,
        text: 'About',
        href: '/about'
    },
    {
        id: 3,
        text: 'Contact',
        href: '/contact'
    },
    {
        id: 4,
        text: 'Pricing',
        href: '/pricing'
    }
]


export const NavBar = () => {
    return (
        <nav className={styles['menu-container']}>
            {menuItems.map((menus) =>
                <ActiveLink text={menus.text} href={menus.href} key={menus.id} />
            )}
        </nav>
    )
}
