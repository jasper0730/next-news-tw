"use client"
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <LogoRoot className={className}>
      <StyledLink href="/">
        <p>Logo</p>
      </StyledLink>
    </LogoRoot>
  )
}

export const LogoRoot = styled.div`
  width: 200px;
	height: 50px;
	background: #C8C8C8;
	color: #fff;
	font-size: 20px;
	text-align: center;
`

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
	justify-content: center;
	align-items: center;
`;

export default Logo