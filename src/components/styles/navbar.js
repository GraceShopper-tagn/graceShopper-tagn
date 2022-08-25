import styled from "styled-components";

export const FullNav = styled.div`
  height: 100px;
  background-color: #c55544;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 400px;
`;

export const LinkNav = styled.div`
  background-color: #f2e49b;
  font-size: 18px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const SearchBar = styled.form`
  position: relative;
  display: flex;
  justify-content: right;
  width: 70%;
  height: 55%;
  padding: 0.5%;
  margin-top: 1.5%;
`;
