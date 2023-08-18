import React from 'react';
import styled from 'styled-components';


const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 0fr 0fr 0fr;
    grid-template-rows: 1fr;
    max-width: 1100px;
    margin-left: 10px;
    margin-bottom: 60px;

`;


const UserProfile = styled.div`
    width: 350px;
    height: 150px;
    display: flex;
    padding: 10px;
    border: 1px outset rgb(50, 50, 50, 0.5);
    align-items: center;

    .UserImg {
        width: 100px;
        height: 100px;
        margin-right: 10px;
        border-radius: 20%;
        display: flex;
    }
    .UserInfo {
        display: flex;
        flex-direction: column;
    }
    .UserName {
        font-size: 25px;
        font-weight: bold;
        padding: 0px 0px 0px 7px;
        margin-top: 0px;
        color: #43337d;
    }
    .UserEx {
        font-size: 15px;
        margin-top: 10px;
        padding: 0px 0px 0px 10px;
    }
`;

const usersData = [
    {
        id: 1,
        name: "임영호",
        description: "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다.",
        imgUrl: "https://file3.instiz.net/data/file3/2018/01/30/9/a/7/9a7148d35382554fee3d00a35c8926b3.jpg"
    },
    {
        id: 2,
        name: "방승환",
        description: "이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다.",
        imgUrl: "https://mblogthumb-phinf.pstatic.net/MjAyMDA5MDlfNzEg/MDAxNTk5NjU4NDczMjYw.B1lNZuFoBN7euhRiinOHDkq8Q-L-HalpOaFIVv7_DAQg.1nf5no-TJqQR91UoUlYP9IOG-1fxi_wOI89U9A_2S_0g.JPEG.yellowouk2/1599658471952.JPEG?type=w800"
    },
    {
        id: 3,
        name: "김수민",
        description: "영국에서 HGXWCH이라는 사람은 1930년에 이 편지를 받았습니다. 그는 비서에게 복사해서 보내라고 했습니다.",
        imgUrl: "https://mblogthumb-phinf.pstatic.net/MjAxOTA2MDhfMjIy/MDAxNTU5OTYyOTU2NjM5.c6jWYbBeNEc3HQZJ7IbhidKWosj-PVK5ftVmO4i1bPsg.D5cRYzyxVpCV6sp33AhSxPA9GnHv9o5KxwPqR-ktAIcg.JPEG.yellowouk2/1559392446233.JPEG?type=w800"
    },
    {
        id: 4,
        name: "최승연",
        description: "며칠 뒤에 복권이 당첨되어 20억을 받았습니다.",
        imgUrl: "https://mblogthumb-phinf.pstatic.net/MjAxOTA2MDhfMTkg/MDAxNTU5OTYyOTgxOTY1.xehRPUbx2McL57W7R5oGqQ94CLOCAlXZx4_sZBjNWdog.uPWfuqcy4mPFSDSpTsGdBFv--hj4e36pQ41IqrdO7s8g.JPEG.yellowouk2/1559392348400.JPEG?type=w800"
    },
    {
        id: 5,
        name: "김정희",
        description: "어떤 이는 이 편지를 받았으나 96시간 이내 자신의 손에서 떠나야 한다는 사실을 잊었습니다. 그는 곧 사직되었습니다.",
        imgUrl: "https://i.pinimg.com/236x/5f/0b/c1/5f0bc1d993a7ffb11b79c6d92a9e4aeb.jpg"
    },
    {
        id: 6,
        name: "이수현",
        description: "나중에야 이 사실을 알고 7통의 편지를 보냈는데 다시 좋은 직장을 얻었습니다.",
        imgUrl: "https://mblogthumb-phinf.pstatic.net/MjAyMDA5MDlfMjE2/MDAxNTk5NjU4NDg1MzA0.LOfCwtfUTyqSVG2FwlxGtYx1AczlAq9YtkYSINB9T0sg.j1q2YnGS-VHZ5qonpa0COX6JPgkeDrRKsnqjOW7HiQMg.JPEG.yellowouk2/1599658483986.JPEG?type=w800"
    },
    {
        id: 7,
        name: "영호와 아이들",
        description: "미국의 케네디 대통령은 이 편지를 받았지만 그냥 버렸습니다. 결국 9일 후 그는 암살당했습니다.",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XoKHs4Xyl2LtNmv6HLjKmodNLYDpBzmEtf77VfacerRW990jykOdE4XVSHQp6jRt1kA&usqp=CAU"
    },
    {
        id: 8,
        name: "프리프로젝트",
        description: "기억해 주세요. 이 편지를 보내면 7년의 행운이 있을 것이고 그렇지 않으면 3년의 불행이 있을 것입니다.",
        imgUrl: "https://i.pinimg.com/236x/c9/97/cb/c997cb8b978549a5f0c2f399cf490102.jpg"
    },
    {
        id: 9,
        name: "33팀",
        description: "그리고 이 편지를 버리거나 낙서를 해서는 절대로 안됩니다. 7통입니다.",
        imgUrl: "https://mblogthumb-phinf.pstatic.net/MjAyMDA5MDlfMjM0/MDAxNTk5NjU4NDgzNzgx.qjCEXHOtizLVNrj_JTX0DxqumbDoPwFdqBXgCSB9HzYg.0jAMJw6AMtz0MCPWPPOvTIqvRv8e8p1zS2WczHDZX2og.JPEG.yellowouk2/1599658482520.JPEG?type=w800"
    },
    {
        id: 10,
        name: "코드스테이츠",
        description: "이 편지를 받은 사람은 행운이 깃들것입니다. 힘들겠지만 좋은게 좋다고 생각하세요.",
        imgUrl: "https://mblogthumb-phinf.pstatic.net/MjAyMDA5MDlfMjUz/MDAxNTk5NjU4NDg2MDgx.Q_wg23bI0_sqP-Gfr3f5sadIevi9_LSf1Edk-TvrDFgg.3Y_cUADLb_5xE-1zQSjtAwiVxIh613RwFE4WLqgiV-Ig.JPEG.yellowouk2/1599658484798.JPEG?type=w800"
    },
    {
        id: 11,
        name: "화이팅",
        description: "7년의 행운을 빌면서...",
        imgUrl: "data:image/jpeg;base64,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"
    },
    {
        id: 12,
        name: "아 이제 뭐하지",
        description: "여러분 제가 드디어 버그를 알아냈습니다!",
        imgUrl: "https://img.jjang0u.com/data3/chalkadak/160/201508/07/143891246945337.jpg"
    },
    {
        id: 13,
        name: "진짜 믿었는데",
        description: "이 글을 다른곳에다가 5번 옮기고 F3을 누르면 캐시창에 9999999999원이 있고 창고에 99999999999메소가 들어올것입니다 꼭 해보세요!",
        imgUrl: "https://yt3.googleusercontent.com/v1IJmuo9h3-2-CADo_MyPuVbcLEmZkNVr0oko3WKnUvyF0ffYbNjAVYB7RC6tXDG422BiER69Uw=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        id: 14,
        name: "너굴맨",
        description: "프리프로젝트는 너굴맨이 처리했으니 안심하라구",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--GMIAewppYz_vTxgFIRfx-lX6AXuirSDcGhPd-g0bZqWBAvJHq2z4c3-ONfoiYbFwD4&usqp=CAU"
    },
    {
        id: 15,
        name: "따봉도치",
        description: "따봉도치야 고마워~~!!",
        imgUrl: "https://img.animalplanet.co.kr/news/2019/08/10/700/v4q0b0ff4hcpew1g6t39.jpg"
    },
];
const truncate = (str, n) =>{
    return str?.length > n ? str.substr(0, n-1) + '...' : str;
}
const User = () => {
    return (
        <main>
            <GridContainer>
                {usersData.map((item, key) => (
                    <div key={key}>
                            <UserProfile key={item.id}>
                                <img className="UserImg" src={item.imgUrl} alt="userimg" />
                                <div className="UserInfo">
                                    <p className="UserName">{item.name}</p>
                                    <p className="UserEx">{truncate(item.description, 50)}</p>
                                </div>
                            </UserProfile>

                    </div>
                ))}
            </GridContainer>
        </main>
    );
};

export default User;