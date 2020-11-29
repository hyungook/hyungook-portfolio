import React from 'react';
import Page__nav from '../components/Page__nav';
import styled from 'styled-components';

import { Header, Cursor, Cursor2, WorkWrap, MainHeader, MainBody,
    PortfoLI, PortfoA, WrapBox, PortfoImg, Footer } from './Work__styeld';
import { data } from '../Data/Work__data'



const url = process.env.PUBLIC_URL + '/image/';

class Work extends React.Component {


    componentDidMount() {
        // mouse Effect

         // Cursor Effect 변수
         let cursor = document.querySelector('.cursor');
         let cursor2 = document.querySelector('.cursor2');
         const cursorRect = cursor.getBoundingClientRect();
         const cursor2Rect = cursor2.getBoundingClientRect();
 
         const cursorHalfWidth = cursorRect.width / 2;
         const cursorHalfHeight = cursorRect.height / 2;
 
         const cursor2HalfWidth = cursor2Rect.width / 2;
         const cursor2HalfHeight = cursor2Rect.height / 2;
         cursor2.style.backgroundColor = `#2bd42e`;
         
 
         let headerUl = document.querySelector('.header__ul');
         let mainNavWrap = document.querySelector('.main__nav__wrap');
         let nameBox = document.querySelector('.name__box');
         
         let tf = true;
 
         // Cursor Effect
         document.addEventListener("mousemove", (e) => {
             // cursor.styled.cssText = cursor2.styled.cssText = "left" + e.clientX + "px; top:" + e.clientY + "px;";
             const y = e.clientY;
             const x = e.clientX;
         
             cursor.style.transform = `translate(${x - cursorHalfWidth}px, ${y - cursorHalfHeight}px)`;
             cursor2.style.transform = `translate(${x - cursor2HalfWidth}px, ${y - cursor2HalfHeight}px)`;
 
         })
 
        // function mousechange() {
        //      cursor.style.borderRadius = `0`;
        //      cursor.style.border = `1px solid #ffffff`;
        //      cursor.style.backgroundColor = `#2bd42e20`; 
        // }
         
        // document.addEventListener('mouseover', (e) => {
        //      let elem = e.target;
 
        //      if(elem.className == 'sc-hHftDr evQUgs'){
        //          mousechange()
        //      } else if(elem.className == 'title') {
        //          mousechange()
        //      } else if(elem.className == 'subTitle') {
        //          mousechange()
        //      } else if(elem.className == 'sc-hHftDr cNlQMS') {
        //          mousechange()
        //      } else if(elem.className == 'wrap box') {
        //          mousechange()
        //      } else if(elem.className == 'link') {
        //          mousechange()
        //      } else if(elem.className == 'icon') {
        //          mousechange()
        //      } else if(elem.className == 'sc-kEjbxe gEZwja backward') {
        //         mousechange()
        //     } else if(elem.className == 'span') {
        //          mousechange()
        //      } else if(elem.className == 'sc-crrsfI liZvO menuBtn openBtn') {
        //          mousechange()
        //      } else if(elem.className == 'menuLink') {
        //          mousechange()
        //      } else {
        //          cursor.style.borderRadius = `50%`;
        //          cursor.style.border = `1px solid #c6c6c6`;
        //          cursor.style.background = `none`;
        //      }  
        //  })       
    }

    render() {
        return <Header>

            <Cursor className={"cursor"}></Cursor>
            <Cursor2 className={"cursor2"}></Cursor2>

            <Page__nav />
            <WorkWrap className={"work__wrap"}>
                <MainHeader>
                    <h1>WORK</h1>
                    <p>특별한 경험을 만듭니다.</p>
                </MainHeader>
                <MainBody className={"mainBody"}>
                    <ul className={"itemWrap"}>
                    {data.map((data, idx) => {
                    return <PortfoLI className={"item"}>
                        <PortfoA href={data["url"]} target={"blank"}>
                            <button className={"goBtn"}>GO</button>
                            <WrapBox className={"wrap box"}>
                                <div className={"titleWrap"}>
                                    <div className={"title"}>{data["title"]}</div>
                                    <div className={"subTitle"}>{data["subTitle"]}</div>
                                </div>
                                <div className={"info"}>{data["info"]}</div>
                                <div className={"infoWrap"}>
                                    <a href={data["github"]} target={"blank"} className={"github"}>GitHub</a>
                                    <div className={"technic"}>{data["technic1"]}</div>
                                    <div className={"technic"}>{data["technic2"]}</div>
                                    <div className={"technic"}>{data["technic3"]}</div>
                                    <div className={"technic"}>{data["technic4"]}</div>
                                </div>
                            </WrapBox>
                        </PortfoA>
                        <PortfoImg src={`${url+data["img"]}`} alt={data["alt"]}></PortfoImg>
                        </PortfoLI>
                    })}
                    </ul>
                </MainBody>
                <Footer>
                    <strong>Determination</strong>
                    <p className={"subTitle"}>
                        한 걸음 더 나가고 싶은 오형욱 입니다.
                    </p>
                    <p className={"mainText"}>
                        본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리 본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리
                        본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리 본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리
                        본문이 들어갈 자리본문이 들어갈 자리본문이 들어갈 자리
                    </p>
                </Footer>
            </WorkWrap>
            </Header>
    }
}

export default Work;