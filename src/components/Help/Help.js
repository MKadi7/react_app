import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const HelpContainer = styled.div`
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const StyledNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;

    li {
      a {
        display: inline-block;
        text-decoration: none;
        padding: 10px 20px;
        color: #fff;
        background-color: #808080;
        border-radius: 5px;
        font-weight: bold;
        transition: background-color 0.3s;

        &:hover {
          background-color: #FFA500;
        }
      }
    }
  }
`;

function HelpPage() {
  return (
    <HelpContainer>
      <ContentWrapper>
        <Title>Help</Title>
        <StyledNav>
          <ul>
            <li><Link to="add">Add</Link></li>
            <li><Link to="remove">Remove</Link></li>
            <li><Link to="change">Change</Link></li>
          </ul>
        </StyledNav>
        <Outlet />
      </ContentWrapper>
    </HelpContainer>
  );
}

export default HelpPage;
