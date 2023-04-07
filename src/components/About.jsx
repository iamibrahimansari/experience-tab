import {FaAngleDoubleRight} from 'react-icons/fa';

const About = ({about}) =>{
    return(
        <ul>
            {about.map((desc, index) => {
                return (
                    <li key={index}>
                        <p><FaAngleDoubleRight /></p>
                        <p>{desc}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default About;