"use client"
import { useEffect, useState } from 'react';
import styled, { ThemeProvider }from 'styled-components';


export default function Home() {
  const [theme, setTheme] = useState<string>('')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === '' ? 'dark' : ''))
  }
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.toggle('dark', prefersDarkMode);
  }, []);
  return  (
    <>
      <Header>
        <HeaderContainer>
          <SearchGroup>
            <Filter>
              <FilterContainer></FilterContainer>
            </Filter>
            <Search>
              <SearchContainer></SearchContainer>
            </Search>
          </SearchGroup>
          <ButtonBar>
            <LeftBar>
              <Button>
                <i className="icon-zoom"></i>
              </Button>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
              <Button>Button</Button>
            </LeftBar>
          </ButtonBar>
        </HeaderContainer>
      </Header>
      <Body>
        <MainTitle>Articles</MainTitle>
        <BodyContent></BodyContent>
      </Body>
    </>
  )
}

export const Header = styled.div`
`
export const HeaderContainer = styled.div`
  margin: 0 auto;
  width: calc(100% - 120px);
`
export const SearchGroup = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  
`
export const Filter = styled.div`
  padding-top: 120px;
  /* width: 350px; */
  width: 19.445%;
`
export const FilterContainer = styled.div`
  height: 200px;
  background: #EAEAEA;
  flex-shrink: 0;
`
export const Search = styled.div`
  padding-top: 20px;
  /* width: 1000px; */
  width: 55.556%;
`
export const SearchContainer = styled.div`
  width: 100%;
  height: 300px;
  background: #EAEAEA;

`
export const ButtonBar = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

`
export const LeftBar = styled.div`
  display: flex;
  align-items: stretch;

`
export const Button = styled.div`
  cursor: pointer;
  word-break: break-word;
  padding: 10px;
  width: 125px;
  min-height: 50px;
  text-align: center;
  background: #C8C8C8;
  display: flex;
  align-items: center;
  justify-content: center;

`

export const Body = styled.div`
  margin-top: 50px;
  padding: 0 30px; 

`
export const MainTitle = styled.div`
  font-size: 2.25rem;
  font-weight: 500;

`
export const BodyContent = styled.div`
  margin-top: 50px;

`