import { Outlet, Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className='sidebar'>
                <CustomLink to = '/' name='Home'/>
                <CustomLink to = '/createUser' name='Create User'/>
                <CustomLink to = '/createCost' name='Create Cost'/>
                <CustomLink to = '/report' name='Get Report'/>
            </div>

            <Outlet />
        </>
    )
};

const CustomLink = ({to, name, ...props}) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true});
    return (
            <Link to = {to} className={isActive && 'active'}> { name } </Link>
        )

}

export default Navbar;
