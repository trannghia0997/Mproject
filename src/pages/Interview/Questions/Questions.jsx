// import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Search from "antd/es/input/Search";
import { useNavigate } from "react-router-dom";
import ListQuestion from "./ListQuestions";


const Questions = () => {

    const items = [
        {
            label: <a>Level</a>,
            key: '0',
        },
        {
            label: <a>Time</a>,
            key: '1',
        }
    ];
    const navigate = useNavigate();

    const handleAddQuestion = () => {
        navigate('/Questions/AddQuestion')

    }
    return (
        <div className="flex w-full mt-7 bg-white h-[1250px] flex-col" style={{ borderRadius: 5 }}>
            <div className="flex w-full absolute right-[1px] mt-[-99px] bg-white h-16 rounded-xl items-center">
                <div className="ml-10 text-xl text">Bộ câu hỏi</div>
            </div>
            <div>
                <Search
                    style={{ paddingLeft: '10%', paddingTop: '5%', width: 950 }}
                    placeholder="Tìm kiếm..."
                />
                <Button
                    onClick={handleAddQuestion}
                    style={{ backgroundColor: '#14b6e9', marginTop: '5%', marginLeft: 30, color: 'white', fontWeight: 500 }}
                >
                    Thêm câu hỏi
                </Button>
            </div>
            <div style={{ fontSize: 25, fontWeight: 500, paddingLeft: '10%', paddingTop: '3%' }} >
                Bộ câu hỏi vẫn còn hạn chế nên bạn hãy đóng góp thêm câu hỏi nhé!
            </div>

            <div style={{ fontSize: 19, fontWeight: 200, paddingLeft: '10%', paddingTop: '1%' }} >
                Bộ câu hỏi có thể gợi ý câu trả lời để bạn có thể dễ dàng đánh giá ứng viên hơn
            </div>

            <div style={{ fontSize: 22, fontWeight: 500, paddingLeft: '10%', paddingTop: '2%' }} >
                Bộ câu hỏi về Kiến thức
                <ListQuestion />
            </div>

            <div style={{ fontSize: 22, fontWeight: 500, paddingLeft: '10%', paddingTop: '1%' }} >
                Bộ câu hỏi về Kỹ năng mềm
                <ListQuestion />
            </div>

            <div style={{ fontSize: 22, fontWeight: 500, paddingLeft: '10%', paddingTop: '1%' }} >
                Bộ câu hỏi về Tiếng Anh
                <ListQuestion />
            </div>

        </div>
    )
}

export default Questions