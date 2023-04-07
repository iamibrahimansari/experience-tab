import {useState} from 'react';

const Navbar = ({onClick, emps}) =>{
    const [value, setValue] = useState(0);
    return (
        <ul>
            { 
                emps.map(emp => {
                    return(
                        <li
                            style={
                                value === emp.id - 1 ?
                                {color: '#14b8a6', borderLeftColor: '#14b8a6'} :  
                                {color: '', borderLeftColor: '#f8fafc'}
                            }
                            onClick={() => onClick(emp.id, setValue)}
                            key={emp.id}
                        >
                            {emp.name}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Navbar;