import React from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import Inputs, { InputNum } from "../Common/Inputs";

const Container = styled.div`
  width: 50vw;
  height: 100vh;
  margin: 0 auto;

  &:nth-child(1) > div {
    height: 65%;
    padding: 50px;
  }

  // 접종 여부, 접종일 묶기
  &:nth-child(1) > div > div {
    display: flex;
  }

  button {
    margin-top: 50px;
  }
`;

const Title = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
  padding: 30px 30px 40px 30px;
`;

const Contents = () => {
  return (
    <Container>
      <Title>회원가입</Title>
      <div>
        <Inputs inputPlaceholder="이름을 입력해주세요." inputContent="이름" />
        <Inputs
          inputPlaceholder="아이디를 입력해주세요."
          inputContent="아이디"
        />
        <Inputs
          inputType="password"
          inputPlaceholder="비밀번호를 입력해주세요."
          inputContent="비밀번호"
        />
        <Inputs
          inputType="password"
          inputPlaceholder="비밀번호를 다시 한 번 입력해주세요."
          inputContent="비밀번호 확인"
        />
        <div>
          <InputNum inputContent="백신 접종 여부" />
          <Inputs
            inputWidth="200px"
            inputContent="마지막 접종일"
            inputType="date"
          />
        </div>

        <Button Width="590px" Height="70px" Content="회원가입" />
      </div>
    </Container>
  );
};

export default Contents;