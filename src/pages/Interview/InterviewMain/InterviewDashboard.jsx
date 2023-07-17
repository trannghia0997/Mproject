import { Avatar, Button, Card } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';

const InterviewDashboard = () => {

    const dataChart = [
        { title: "In Process", value: 10 },
        { title: "Completed", value: 11 },
        { title: "Yet to start", value: 3 },
    ];

    const COLORS = ["#0088FE", "#00C49F", "#cecece"];

    const navigate = useNavigate()

    const handleClickAllCandidates = () => {
        navigate('')         // Chuyển hướng đến trang quản lý Candidates
    }
    

    return (
        <div className='w-full flex justify-around gap-10 '>
            <div className='flex bg-white w-1/3 h-[280px] rounded-xl flex-col'>
                <div className='flex' style={{ paddingTop: '8%', paddingLeft: '10%', fontWeight: 500, fontSize: 22 }}>24 Cuộc phỏng vấn</div>
                <div className='flex'>
                    <div className='flex w-1/2 flex-col'>
                        <div className='flex gap-3 h-[40px] flex-row' style={{ paddingTop: '20%', paddingLeft: '20%' }}>
                            {dataChart[0].title}
                            <Card style={{ backgroundColor: '#0088FE', height: 20, width: 30, marginLeft: 6 }} />
                            <label style={{}}>{dataChart[0].value}</label>
                        </div>
                        <div className='flex gap-3 h-[40px]' style={{ paddingTop: '20%', paddingLeft: '20%' }}>
                            {dataChart[1].title}
                            <Card style={{ backgroundColor: '#00C49F', height: 20, width: 30 }} />
                            <label style={{}}>{dataChart[1].value}</label>
                        </div>
                        <div className='flex gap-3 h-[40px]' style={{ paddingTop: '20%', paddingLeft: '20%' }}>
                            {dataChart[2].title}
                            <Card style={{ backgroundColor: '#cecece', height: 20, width: 30, marginLeft: 1 }} />
                            <label style={{}}>{dataChart[2].value}</label>
                        </div>
                    </div>
                    <div className='flex w-1/2'>
                        <PieChart width={180} height={200}>
                            <Pie
                                data={dataChart}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {dataChart.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </div>
                </div>

            </div>

            <div className='flex bg-white w-1/3 h-[280px] rounded-xl'>
                <div className='flex w-full flex-col'>
                    <div className='flex' style={{ paddingTop: '8%', paddingLeft: '10%', fontWeight: 500, fontSize: 22 }}>40 Chỉ tiêu ứng viên</div>
                    <div className='flex'>
                        <div style={{ paddingTop: '5%', paddingLeft: '10%', fontWeight: 400, fontSize: 19 }}>Chỉ tiêu ứng viên tăng</div>
                        <div style={{ paddingTop: '5%', paddingLeft: '15%', fontWeight: 400, fontSize: 19 }}>5 người</div>
                    </div>
                </div>
            </div>

            <div className='flex bg-white w-1/3 h-[280px] rounded-xl'>
                <div className='flex w-full flex-col'>
                    <div className='flex' style={{ paddingTop: '8%', paddingLeft: '10%', fontWeight: 500, fontSize: 22 }}>49 Đã ứng tuyển</div>
                    <div className='flex' style={{ paddingTop: '3%', paddingLeft: '10%', fontWeight: 400, fontSize: 19 }}>Các ứng viên</div>
                    <div className='flex' style={{ paddingTop: '5%', paddingLeft: '10%' }}>
                        <Avatar.Group
                            maxCount={7}
                            size="large"
                            maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', fontWeight: 500 }}
                        >
                            <Avatar src="http://xsgames.co/randomusers/assets/avatars/male/0.jpg" />
                            <Avatar src="https://xsgames.co/randomusers/assets/avatars/female/34.jpg" />
                            <Avatar src="https://xsgames.co/randomusers/assets/avatars/female/7.jpg" />
                            <Avatar src="https://xsgames.co/randomusers/assets/avatars/male/75.jpg" />
                            <Avatar src="https://xsgames.co/randomusers/assets/avatars/female/5.jpg" />
                            <Avatar src="https://xsgames.co/randomusers/assets/avatars/male/24.jpg" />
                            <Avatar src="https://xsgames.co/randomusers/assets/avatars/female/6.jpg" />
                            <Avatar src="https://xsgames.co/randomusers/assets/avatars/female/15.jpg" />
                            <Avatar src="https://xsgames.co/randomusers/assets/avatars/male/12.jpg" />

                        </Avatar.Group>
                    </div>
                    <div className="flex" style={{ paddingTop: '5%', paddingLeft: '10%' }} >
                        <Button
                            onClick={handleClickAllCandidates}
                            style={{ backgroundColor: '#0097e9', color: 'white', fontWeight: 500 }}
                        >
                            Danh sách ứng viên
                        </Button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default InterviewDashboard