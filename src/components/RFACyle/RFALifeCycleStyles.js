import styled from 'styled-components'

export const GridContainer = styled.section`
display: flex;
flex-direction: row;
 flex-wrap: wrap;
 justify-content:  center;
 align-items: center;
 align-content: space-between;

@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`
export const GridItem = styled.div`
 flex-grow: 4;
`