import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import "./RoomAdd.scss"
import data from '../data.json';


const RoomAdd = () => {
    const history = useNavigate();
    let { id } = useParams();
    const [info, setInfo] = useState(data.find((item) =>
        item.RoomId === parseInt(id)
    ))
    const [imagePreview, setImagePreview] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const generateTimeOptions = () => {
        const startTime = 7; // 7 AM (7 o'clock in the morning)
        const endTime = 18; // 6 PM (18 o'clock in the evening)
        const timeIntervals = 30; // 30 minutes interval

        const timeOptions = [];

        for (let hour = startTime; hour < endTime; hour++) {
            for (let minute = 0; minute < 60; minute += timeIntervals) {
                const startShift = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                const endShift = `${(hour + Math.floor((minute + timeIntervals) / 60)).toString().padStart(2, '0')}:${((minute + timeIntervals) % 60).toString().padStart(2, '0')}`;
                const shiftOption = `${startShift} to ${endShift}`;
                timeOptions.push(
                    <option key={shiftOption} value={shiftOption}>
                        {shiftOption}
                    </option>
                );
            }
        }

        return timeOptions;
    };
    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
        // You can save the selected time to the state or send it to the server
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImagePreview(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };


    return (
        <div className='RoomAdd-home'>
            <div className='container-company'>
                <div className='info-container'>
                    <h2>Thông tin cơ bản</h2>
                    <div className='form-edit'>
                        <div className='info-item' style={{ marginTop: '15px' }}>
                            <span style={{ marginRight: '10px' }}>Logo phòng họp</span>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {imagePreview && (
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '10px' }}
                                    />
                                )}
                                <label className='custom-file-upload'>
                                    <input type="file" className='info' onChange={handleImageChange} />
                                </label>
                            </div>
                        </div>
                        <div className='info-item'>
                            <span>Tên phòng họp</span>
                            <input />
                        </div>
                        <div className='info-item'>
                            <span>Mô tả phòng họp</span>
                            <input />
                        </div>
                        <div className='info-item'>
                            <span>Thời gian</span>
                            <select
                                className='info'
                                value={selectedTime}
                                onChange={handleTimeChange}
                                style={{
                                    width: '80%',
                                    marginTop: '0px',
                                    height: '60%',
                                    borderRadius: '6px',
                                    backgroundColor: 'gainsboro',
                                    border: 'none',
                                    boxSizing: 'border-box',
                                }}
                            >
                                <option value=''>-- Chọn thời gian --</option>
                                {generateTimeOptions()}
                            </select>
                        </div>
                        <div className='info-item'>
                            <span>Link phòng họp</span>
                            <input />
                        </div>

                    </div>
                    <Link to={'/Room'}>
                        <button className='BackButton'>Lưu thay đổi</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomAdd;
