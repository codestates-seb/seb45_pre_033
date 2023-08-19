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


const truncate = (str, n) =>{
    return str?.length > n ? str.substr(0, n-1) + '...' : str;
}
const User = () => {
    return (
        <main>
            <GridContainer>
                {usersData.map((item, idx) => (
                    <div key={idx}>
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