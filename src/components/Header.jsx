import Navbar from './Navbar'
export default function Header() {
    return (
        <header>
            <img class="logo" src="/images/FaB CLT Logo - 800px2.png" alt="Logo" />
            <div class="site-title">
                <h1> CLT Flesh and Blood</h1>
                <Navbar />
            </div>
            {/* img class="right-logo" src="/images/Flesh_and_Blood_TCG_Logo.png" alt="Logo" /> */}
        </header>
    );
}