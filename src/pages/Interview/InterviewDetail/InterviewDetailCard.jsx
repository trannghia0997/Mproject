import { Avatar, Button } from "antd"
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const InterviewDetailCard = ({ dataInterviewDetail }) => {

    const navigate = useNavigate()

    const EVENTS_PER_PAGE = 9;
    const [currentPage, setCurrentPage] = useState(1);
    // const [showResults, setShowResults] = useState(true);
    const totalEventPage = Math.ceil(dataInterviewDetail.length / EVENTS_PER_PAGE);
    const paginatedData = dataInterviewDetail.slice(
        (currentPage - 1) * EVENTS_PER_PAGE,
        currentPage * EVENTS_PER_PAGE
    );

    const handleButtonStatus = (detailID, interviewID) => {

        return (
            navigate(`/interview/detail/${interviewID}/${detailID}`)
        )
    }

    return (
        <div>
            <div className='grid grid-cols-3 gap-10 ' style={{ paddingTop: 25 }}>
                {paginatedData && Array.isArray(paginatedData) && paginatedData.map((item) => (

                    < div div className='bg-white h-[280px] rounded-xl' >
                        <Avatar
                            src={item.avatar}
                            style={{ width: 70, height: 70, position: 'relative', left: '42%', top: '7%' }}
                        />
                        <div style={{ fontWeight: 500, fontSize: 21, paddingTop: '6%', paddingLeft: '1%', textAlign: 'center' }}>{item.name}</div>
                        <div style={{ fontWeight: 300, fontSize: 18, paddingLeft: '1%', textAlign: 'center' }}>{item.position}</div>
                        <div style={{ paddingTop: '4%', paddingLeft: '13%', fontSize: 17 }}>
                            <label style={{ paddingRight: 120 }}>Kỹ năng</label>
                            <label>Kinh nghiệm</label>
                        </div>
                        <div style={{ paddingTop: '0.5%', paddingLeft: '13%', fontSize: 16, fontWeight: 200 }}>
                            <label style={{ paddingRight: 40 }}>{item.skill}</label>
                        </div>

                        <div style={{textAlign: 'right' }}>
                            <label style={{ position: 'relative', paddingRight: '27%', top: -21, marginTop: 20}}>{item.experience}</label>
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <Button
                                onClick={() => handleButtonStatus(item.detailID, item.interviewID)}
                                style={{
                                    height: 26,
                                    // marginLeft: '41%',
                                    backgroundColor: item.status === 'Đã chấm' ? '#b7f1b7' : '#ffa9a9',
                                    color: item.status === 'Đã chấm' ? 'green' : 'red',
                                    fontWeight: 500,
                                    padding: '1px 10px',
                                    textAlign: 'center'
                                }}
                            >
                                {item.status}
                            </Button>
                        </div>
                    </div >

                ))}
            </div>

            <div>
                {totalEventPage > 1 && (
                    <div className="d-flex justify-content-center mt-3" style={{ marginBottom: 20, marginTop: 30,textAlign: 'center' }}>
                        <Button
                            variant="outline-success"
                            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
                            disabled={currentPage === 1}
                            className="me-2 rounded-circle btn btn-md"
                        >
                            <span>&lt;</span>
                        </Button>
                        <span className="align-self-center">
                            {currentPage}/{totalEventPage} trang
                        </span>
                        <Button
                            variant="outline-success"
                            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                            disabled={currentPage === totalEventPage}
                            className="ms-2 rounded-circle btn btn-md"
                        >
                            <span>&gt;</span>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default InterviewDetailCard