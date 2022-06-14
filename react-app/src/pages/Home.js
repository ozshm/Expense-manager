import Container from "../components/Container";
import mernLogo from './mern.jpeg'

const Home = () => {
    const pre =
        'This website is the final project for Async Server-side Development course at HIT.' +
        '\n We are using MERN stack — Mongodb, Express.js, React, and Node.js';
    const image = mernLogo;
    return (

        <
        Container title = 'Home'
        pre = {
            pre
        }
        image = {
            image
        }
        />


    )
}
export default Home;