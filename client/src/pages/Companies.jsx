import React from 'react';
import styled from 'styled-components';


const StyleHeader = styled.h1`
    font-size: 35px;
    padding: 0 20px;
`;



const ListContent = styled.h6`
    font-size: 20px;
    padding: 0px 30px;
    margin: 40px 0px 10px 0px;
`;


const HeaderRow = styled.div`
    max-width: 1100px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding: 30px 0;

`;

const CompaniesRow = styled.div`
    max-width: 1100px;
    background-color: white;
    padding: 20px;
    border-top: 1px solid rgba(40, 40, 40, 0.3);
    border-bottom: 1px solid rgba(40, 40, 40, 0.3);
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 20px;
    margin-top: 20px;
    margin-left: 20px;
`;


const CompaniesStates = styled.img`
    width: 100px;
    height: 100px;
`;

const CompaniesTitle = styled.div`
    p {
        margin: 0px 0px 0px 0px;
        font-size: 30px;
    }
    a {
        color: #43337d;
        font-size: 15px;
    }
    .additional-tags {
        margin-top: 10px;
        display: flex;
        gap: 10px;
    }
    span {
        background-color: #43337d;
        padding: 5px 10px;
        border-radius: 4px;
        border: 1px solid rgb(50, 50, 50, 0.2);
        font-size: 13px;
        color: white;
        cursor: pointer;
        &:hover {
            background-color: #564d75;
            transition: 0.1s;
        }
    }
`;

const Companies = () => {
    return (
        <main>
            <HeaderRow>
                <div>
                    <StyleHeader>그룹목록</StyleHeader>
                    <ListContent>1 개의 그룹</ListContent>
                </div>
            </HeaderRow>
            <CompaniesRow>
                <CompaniesStates src="https://ugc.production.linktr.ee/NOBNEZcTEODmfUKpUIlR_%E1%84%80%E1%85%AA%E1%86%A8%E1%84%8E%E1%85%A5%E1%86%AF%E1%84%8B%E1%85%B5%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png" alt="Company Logo" />
                <CompaniesTitle>
                    <p>영호와 아이들</p>
                    <p><a href="https://github.com/codestates-seb/seb45_pre_033" target="_blank" rel="noopener noreferrer">https://github.com/codestates-seb/seb45_pre_033</a></p>
                    <div className="additional-tags">
                        <span>#Frontend</span>
                        <span>#Backend</span>
                        <span>#Codestates</span>
                    </div>
                </CompaniesTitle>
            </CompaniesRow>
        </main>
    );
};

export default Companies;
