import MainNav from "./MainNav";

function Layout(props) {
    return (
        <div>
            <MainNav/>
            {/*props.children = render the Switch tag from Layout tag from app.js!*/}
            <main>{props.children}</main>
        </div>
    )
}
export default Layout;