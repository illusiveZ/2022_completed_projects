import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;

  > a > img {
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 18px;
  }
`;

export const HeaderSearch = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;

  > input {
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
  }

  > .MuiSvgIcon-root {
    padding: 5px;
    height: 22px !important;
    background-color: #cd9042;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;

  > span:first-child {
    font-size: 10px;
  }

  > span:last-child {
    font-size: 13px;
    font-weight: 800;
  }
`;

export const Basket = styled.div`
  display: flex;
  align-items: center;
  color: white;

  > span {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
