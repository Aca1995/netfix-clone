import styled from "styled-components/macro";

export const Container = styled.div``;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  margin: 0 20px;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 115px;
  height: 45px;
  font-size: 18px;
  color: white;
  background-color: #e50914;
  border-color: #ff0a16;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  padding-left: 0;
`;
