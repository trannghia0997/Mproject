import React from 'react';
import { useState, useEffect } from 'react';
import "./room.scss"
import data from "./data.json"
import { Link } from 'react-router-dom';



const Room = () => {
    const [tableData, setTableData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [events, setEvents] = useState([]);
    useEffect(() => {
        setTableData(data);
      }, []);

    return (
        <div className='home'>
            <div className='top-main'>
                <h1>Hello Devs</h1>
            </div>
                <h4 style={{margin:'30px'}}>Các cuộc phỏng vấn gần đây</h4>
                <button id='addRoom'>Thêm phòng họp</button>
                <div className='container-company'>
                {tableData.map((item) => (
         
            <div className='company-item' key={item.id}>
                        <div className='company-item-top'>
                            <img className='logo' src='https://lezebre.lu/images/detailed/17/30476-Perodua-Myvi.png'/>
                            <h3>{item.RoomName}</h3>
                            <p>{item.RoomType}</p>
                            <button className='status'>{item.Status}</button>
                        </div>
                        <div className='company-item-mid'>
                            <p>{item.RoomDescription}</p>
                        </div>
                        <div className='company-item-bot'>
                            <button className='date'>
                                <h4>Feb 6, 2021</h4>
                                <p>Due date</p>
                            </button>
                            <button className='salary'>
                                <h4>$284,900.00</h4>
                                <p>Budget</p>
                            </button>
                            <div className='adjustButton'>
                            <button className='DetailButton'> Detail</button>
                            <Link to={`/room/${item.RoomId}`}>
                             <button className='EditButton'  > Edit</button>
                            </Link>
                            </div>
                    </div>
          </div>
        ))}
                    
                    <div className='company-item'>
                        <div className='company-item-top'>
                            <img className='logo' src='https://lezebre.lu/images/detailed/17/30476-Perodua-Myvi.png'/>
                            <h3>Mivy App</h3>
                            <p>CRM App application to HR fficiency</p>
                            <button className='status'>In Progress</button>
                        </div>
                        <div className='company-item-mid'>
                            <p>First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words per minute and your writing skills are sharp. From the seed of the idea to finally hitting speed</p>
                        </div>
                        <div className='company-item-bot'>
                            <button className='date'>
                                <h4>Feb 6, 2021</h4>
                                <p>Due date</p>
                            </button>
                            <button className='salary'>
                                <h4>$284,900.00</h4>
                                <p>Budget</p>
                            </button>
                            <button> Detail</button>
                             <button> Edit</button>
                        </div>
                    </div>
                    <div className='company-item'>
                        <div className='company-item-top'>
                            <img className='logo' src='https://lezebre.lu/images/detailed/17/30476-Perodua-Myvi.png'/>
                            <h3>Mivy App</h3>
                            <p>CRM App application to HR fficiency</p>
                            <button className='status'>In Progress</button>
                        </div>
                        <div className='company-item-mid'>
                            <p>First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words per minute and your writing skills are sharp. From the seed of the idea to finally hitting speed</p>
                        </div>
                        <div className='company-item-bot'>
                            <button className='date'>
                                <h4>Feb 6, 2021</h4>
                                <p>Due date</p>
                            </button>
                            <button className='salary'>
                                <h4>$284,900.00</h4>
                                <p>Budget</p>
                            </button>
                            <button> Detail</button>
                             <button> Edit</button>
                        </div>
                    </div>
                    <div className='company-item'>
                        <div className='company-item-top'>
                            <img className='logo' src='https://lezebre.lu/images/detailed/17/30476-Perodua-Myvi.png'/>
                            <h3>Mivy App</h3>
                            <p>CRM App application to HR fficiency</p>
                            <button className='status'>In Progress</button>
                        </div>
                        <div className='company-item-mid'>
                            <p>First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words per minute and your writing skills are sharp. From the seed of the idea to finally hitting speed</p>
                        </div>
                        <div className='company-item-bot'>
                            <button className='date'>
                                <h4>Feb 6, 2021</h4>
                                <p>Due date</p>
                            </button>
                            <button className='salary'>
                                <h4>$284,900.00</h4>
                                <p>Budget</p>
                            </button>
                            <button> Detail</button>
                             <button> Edit</button>
                        </div>
                    </div>
                    <div className='company-item'>
                        <div className='company-item-top'>
                            <img className='logo' src='https://lezebre.lu/images/detailed/17/30476-Perodua-Myvi.png'/>
                            <h3>Mivy App</h3>
                            <p>CRM App application to HR fficiency</p>
                            <button className='status'>In Progress</button>
                        </div>
                        <div className='company-item-mid'>
                            <p>First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words per minute and your writing skills are sharp. From the seed of the idea to finally hitting speed</p>
                        </div>
                        <div className='company-item-bot'>
                            <button className='date'>
                                <h4>Feb 6, 2021</h4>
                                <p>Due date</p>
                            </button>
                            <button className='salary'>
                                <h4>$284,900.00</h4>
                                <p>Budget</p>
                            </button>
                            <button> Detail</button>
                             <button> Edit</button>
                        </div>
                    </div>
                    <div className='company-item'>
                        <div className='company-item-top'>
                            <img className='logo' src='https://lezebre.lu/images/detailed/17/30476-Perodua-Myvi.png'/>
                            <h3>Mivy App</h3>
                            <p>CRM App application to HR fficiency</p>
                            <button className='status'>In Progress</button>
                        </div>
                        <div className='company-item-mid'>
                            <p>First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words per minute and your writing skills are sharp. From the seed of the idea to finally hitting speed</p>
                        </div>
                        <div className='company-item-bot'>
                            <button className='date'>
                                <h4>Feb 6, 2021</h4>
                                <p>Due date</p>
                            </button>
                            <button className='salary'>
                                <h4>$284,900.00</h4>
                                <p>Budget</p>
                            </button>
                            <button> Detail</button>
                             <button> Edit</button>
                        </div>
                    </div>
                    <div className='company-item'>
                        <div className='company-item-top'>
                            <img className='logo' src='https://lezebre.lu/images/detailed/17/30476-Perodua-Myvi.png'/>
                            <h3>Mivy App</h3>
                            <p>CRM App application to HR fficiency</p>
                            <button className='status'>In Progress</button>
                        </div>
                        <div className='company-item-mid'>
                            <p>First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words per minute and your writing skills are sharp. From the seed of the idea to finally hitting speed</p>
                        </div>
                        <div className='company-item-bot'>
                            <button className='date'>
                                <h4>Feb 6, 2021</h4>
                                <p>Due date</p>
                            </button>
                            <button className='salary'>
                                <h4>$284,900.00</h4>
                                <p>Budget</p>
                            </button>
                            <button> Detail</button>
                             <button> Edit</button>
                        </div>
                    </div>
                    <div className='company-item'>
                        <div className='company-item-top'>
                            <img className='logo' src='https://lezebre.lu/images/detailed/17/30476-Perodua-Myvi.png'/>
                            <h3>Mivy App</h3>
                            <p>CRM App application to HR fficiency</p>
                            <button className='status'>In Progress</button>
                        </div>
                        <div className='company-item-mid'>
                            <p>First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words per minute and your writing skills are sharp. From the seed of the idea to finally hitting speed</p>
                        </div>
                        <div className='company-item-bot'>
                            <button className='date'>
                                <h4>Feb 6, 2021</h4>
                                <p>Due date</p>
                            </button>
                            <button className='salary'>
                                <h4>$284,900.00</h4>
                                <p>Budget</p>
                            </button>
                            <button> Detail</button>
                             <button> Edit</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Room;