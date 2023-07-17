import { Avatar } from "antd"
// import { useNavigate } from "react-router-dom"


const InterviewDetailDashboard = ({ dataDashboardDetail }) => {

    return (
        <div className='bg-white w-full h-[250px] rounded-xl flex-col'>
            <div style={{ fontWeight: 500, fontSize: 30, paddingLeft: '13%', paddingTop: '2%' }}>{dataDashboardDetail.title}</div>
            <button
                type="button" disabled
                style={{
                    color: '#2b7afa',                      // đổi theo Status
                    backgroundColor: 'rgb(178 218 250)',   // đổi theo Status
                    borderRadius: 5,
                    fontWeight: 500,
                    fontSize: 17,
                    padding: '5px 10px',
                    width: 140,
                    position: 'relative',
                    left: 850,
                    top: -35,
                }}
            >
                In Process
            </button>
            <div style={{ position: 'relative', top: -20, fontWeight: 400, fontSize: 25, paddingLeft: '13%' }}>{dataDashboardDetail.description}</div>
            <div style={{ fontWeight: 500, fontSize: 18, paddingLeft: '13%' }}>
                <span>Ngày bắt đầu</span>
                <span style={{ paddingLeft: '13%' }}>Số người tham gia</span>
            </div>

            <div style={{ fontWeight: 400, fontSize: 18, paddingLeft: '13%', paddingTop: '0.5%' }}>
                <span>Sep 6, 2023</span>
                <span style={{ paddingLeft: '15%' }}>9</span>
            </div>

            <div style={{ position: 'relative', left: '60%', top: -55, width: 100 }}>
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
        </div>

    )

}

export default InterviewDetailDashboard