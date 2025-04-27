import RootHeader from './components/RootHeader';

function RootLayout({ children }) {
    return (
        <>
            <RootHeader></RootHeader>
            <main>{children}</main>
            <footer></footer>
        </>
    );
}

export default RootLayout;
