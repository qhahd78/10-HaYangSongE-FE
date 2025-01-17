/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Card from '../Common/Card';

const CardDiv = styled.div`
  display: flex;
  overflow-y: auto;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 2vh;
  width: 100vw;
`;

const NoneInfo = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  height: 70vh;
  width: 90vw;
`;

const Content = ({ listData }) => {
  if (listData.length === 0)
    return (
      <Fade bottom>
        <CardDiv>
          <NoneInfo>해당 지역에 결과가 없습니다.</NoneInfo>
        </CardDiv>
      </Fade>
    );
  return (
    <>
      <Fade bottom cascade>
        <CardDiv>
          {listData.map(item => (
            <Card
              key={item.id}
              title={item.name}
              address={item.branch_name}
              step={item.vaccine_condition}
              resId={item.id}
              pic={item.restaurant_photo}
            />
          ))}
        </CardDiv>
      </Fade>
    </>
  );
};

Content.propTypes = {
  listData: PropTypes.any.isRequired,
};

export default Content;
