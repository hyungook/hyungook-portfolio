import styled from 'styled-components';

export const NameBox = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    
    height: 80px;

    @media only screen and (min-width: 768px) {
        height: 140px;
    }
`;
export const ToyBtn = styled.a`
    font-family: "Squada One", sans-serif;
    font-weight: 400;
    position: absolute;
    font-size: 1.8rem;
    padding: 0;
    color: #999;
    border-bottom: 2px solid #2966ff;
    text-decoration: none;

    @media only screen and (min-width: 768px) {
        font-size: 3rem;
    }
    @media only screen and (min-width: 1025px) {
        font-size: 3rem;
        padding: 0 0.2em;
        color: #777;
        border-bottom: 1px solid #2966ff;
        line-height: 1.2;
        cursor: none;
        transition-timing-function: cubic-bezier(0.33, 0.78, 0.41, 1);
        z-index: 1;
    
        :hover {
            color: #111;
            transition-delay: 0.1s;
        }
        ::before {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #ffffff;
          
            transform: scaleY(0);
            transform-origin: bottom;
          
            transition: transform 0.8s;
            transition-timing-function: cubic-bezier(0.33, 0.78, 0.41, 1);
            transform: scaleY(0);
          
            z-index: -1;
        }
    
        :hover::before {
            transform: scaleY(1);
            transform-origin: top;
        }
    }
`;