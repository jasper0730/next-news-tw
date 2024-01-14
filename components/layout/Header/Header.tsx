
"use client"
import React from 'react'
import styled from 'styled-components';
import { Logo } from '@/components/ui'
import { ThemeSwitcher } from '@/components/ThemeSwitcher '

const Header: React.FC = () => {
	return (
		<HeaderRoot>
			<StyledLogo />
			<Tool>
				<ThemeSwitcher />
			</Tool>
		</HeaderRoot>

	)
}

export const HeaderRoot = styled.div`
	width: calc(100% - 55.556% - 110px);
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	top: 20px;
	left: 60px;
`

export const Tool = styled.div`
	margin-left: 30px;
	
`
export const StyledLogo = styled(Logo)`
`;

export const ModeSwitcher = styled.div``

export default Header