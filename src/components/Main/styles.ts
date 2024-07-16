import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #6c3e9f;
  display: flex;
  flex-direction: column;
  align-items: center;

  .forca {
    margin-top: 5%;
    imgBase {
      width: 200px;
      height: 200px;
    }
  }

  .word {

    width: 20%;
    margin-top: 3%;
    font-size: xxx-large;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    color: #f5b72d;
    text-decoration: underline;
    font-family: sans-serif;
  }

  .keyboard {

    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    height: auto;
    width: 50%;
    flex-wrap: wrap;

    .letter, .iconPlay {
      background-color: white;
      color: purple;
      width: 10%;
      text-align: center;
      align-items: center;
      border: 3px solid #8b008b;
      border-radius: 10px;
      padding: 2px;
      margin-left: 2px;
      margin-right: 2px;
      margin-top: 5px;
      font-size: xx-large;
    }
  }

`;