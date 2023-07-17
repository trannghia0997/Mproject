import { DatePicker, Input } from "antd"
import SettingQuestion from "./SettingQuestion";
import TextArea from "antd/es/input/TextArea";
import { useNavigate } from "react-router-dom";
import listQuestionTechnical from "../../../data/ListQuestion/listQuestionTechnical.json"
import listQuestionEnglish from "../../../data/ListQuestion/listQuestionEnglish.json"
import listQuestionSoftskill from "../../../data/ListQuestion/listQuestionSortskill.json"
import { useState } from "react";

const FormInterview = ({ id }) => {

    const dateFormat = 'DD/MM/YYYY';

    const navigate = useNavigate();

    const handleButtonDiscard = (interviewID) => {
        navigate(`/interview/detail/${interviewID}`)
    }

    const handleSaveChanges = (interviewID) => {

        localStorage.removeItem(`dataScore${id}`);
        navigate(`/interview/detail/${interviewID}`)
    }

    //Hiển thị lại nội dung đã nhập mà chưa lưu dưới local storage
    const dataStorageLast = localStorage.getItem(`dataScore${id}`)  //Lấy dữ liệu dưới LocalStorage
    const scores = dataStorageLast ? JSON.parse(dataStorageLast) : [];
    // console.log(scores)

    //Tính điểm trung bình
    const [averageScore, setAverageScore] = useState(null)

    const handleTinhDiem = () => {
        const dataScore = localStorage.getItem(`dataScore${id}`)
        let scores = []
        if (dataScore) {
            scores = JSON.parse(dataScore)
        }
        console.log(scores)
        const sum = scores.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
        const result = (sum / 10).toFixed(2)
        console.log(result)
        setAverageScore(result)
    }
    // console.log("candidateID", id)
    // Lưu dữ liệu



    return (
        <div style={{ marginTop: 55, backgroundColor: 'white', height: 1000, borderRadius: 5, marginLeft: -50 }}>
            <div style={{ fontSize: 23, fontWeight: 500, paddingTop: '6%', paddingLeft: '8%' }}>
                Chấm điểm và nhận xét ứng viên
            </div>
            <div style={{ fontSize: 19, fontWeight: 400, paddingLeft: '8%' }}>
                Hãy tạo ra sự công bằng bằng cách chấm điểm và nhận xét một cách công tâm
            </div>
            <div style={{ fontSize: 16, fontWeight: 500, paddingTop: '2%', paddingLeft: '8%' }}>
                <label>Họ và tên Người chấm điểm</label>
                <label style={{ paddingLeft: 220 }}>Ngày thực hiện</label>
            </div>
            <div style={{ fontWeight: 500, paddingLeft: '8%' }}>
                <Input style={{ width: 370, height: 40, backgroundColor: '#e7e7e7', marginRight: '7%' }}>
                    {/* Hiển thị lại nội dung đã lưu trong Database hoặc LocalStorage nếu có */}
                </Input>
                <DatePicker format={dateFormat} style={{ width: 200, height: 40, backgroundColor: '#e7e7e7' }} >
                    {/* Hiển thị lại nội dung đã lưu trong Database hoặc LocalStorage nếu có */}
                </DatePicker>
            </div>

            <div style={{ fontWeight: 500, fontSize: 25, paddingTop: '2%', paddingLeft: '8%' }}>Câu hỏi phỏng vấn</div>

            <div style={{ paddingLeft: '8%', fontWeight: 500, fontSize: 18 }}>Câu hỏi về Kiến thức chuyên ngành</div>
            <div style={{ paddingLeft: '8%' }}>
                {[1, 2, 3, 4, 5].map((numberOrder) => (
                    <SettingQuestion
                        key={numberOrder}
                        numberOrder={numberOrder.toString()}
                        data={listQuestionTechnical}
                        id={id}
                        score={scores[numberOrder - 1]}
                    />
                ))}
            </div>

            <div style={{ fontWeight: 500, fontSize: 18, paddingLeft: '8%' }}>Câu hỏi về Tiếng Anh</div>
            <div style={{ paddingLeft: '8%' }}>
                {[1, 2, 3].map((numberOrder) => (
                    <SettingQuestion
                        key={numberOrder}
                        numberOrder={numberOrder.toString()}
                        data={listQuestionEnglish}
                        id={id}
                        score={scores[5 + numberOrder - 1]}
                    />
                ))}
            </div>

            <div style={{ fontWeight: 500, fontSize: 18, paddingLeft: '8%' }}>Câu hỏi về Kỹ năng mềm</div>
            <div style={{ paddingLeft: '8%' }}>
                {[1, 2].map((numberOrder) => (
                    <SettingQuestion
                        key={numberOrder}
                        numberOrder={numberOrder.toString()}
                        data={listQuestionSoftskill}
                        id={id}
                        score={scores[8 + numberOrder - 1]}
                    />
                ))}
            </div>

            <div style={{ paddingTop: 15 }}>
                <label style={{ fontWeight: 500, fontSize: 20, paddingLeft: '8%' }}>Tổng điểm của ứng viên</label>
                <label
                    style={{
                        height: 45,
                        width: 700,
                        backgroundColor: '#e7e7e7',
                        borderRadius: 5,
                        fontSize: 18,
                        fontWeight: 500,
                        color: 'black',
                        marginLeft: 30,
                        padding: '10px 70px',
                    }}
                >
                    {averageScore}
                    {/* Hiển thị lại nội dung đã lưu trong Database hoặc LocalStorage nếu có */}
                </label>
                <button
                    style={{ fontSize: 13, backgroundColor: '#38c838', color: 'white', fontWeight: 500, marginLeft: 80, padding: '10px 30px', borderRadius: 5 }}
                    onClick={handleTinhDiem}
                >
                    TÍNH ĐIỂM
                </button>

                <div style={{ paddingTop: 8 }}>
                    <label style={{ fontWeight: 400, fontSize: 18, paddingLeft: '8%' }}>Nhận xét của người tuyển dụng</label>
                    <div style={{ paddingLeft: '8%' }}>
                        <TextArea style={{ resize: 'none', width: 715, height: 100, backgroundColor: '#e7e7e7' }}>
                            {/* Hiển thị lại nội dung đã lưu trong Database hoặc LocalStorage nếu có */}
                        </TextArea>
                    </div>
                </div>

                <div style={{ paddingTop: 20, paddingLeft: '70%' }}>
                    <button
                        onClick={() => handleButtonDiscard('1')}
                        style={{ backgroundColor: '#dedcdc', fontWeight: 500, marginRight: 20, padding: '3px 10px', borderRadius: 5 }}
                    >
                        Trở về
                    </button>
                    <button
                        style={{ backgroundColor: '#3482e9', color: "white", fontWeight: 500, padding: '3px 10px', borderRadius: 5 }}
                        onClick={() => handleSaveChanges('1')}
                    >
                        Lưu thay đổi
                    </button>
                </div>
            </div>
        </div >
    )
}

export default FormInterview