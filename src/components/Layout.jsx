import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router';
export default function Layout() {
    return (
        <>
            <div class="content">
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}