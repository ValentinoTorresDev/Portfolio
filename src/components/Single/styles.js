import styled from 'styled-components'
import { device } from '../styles/Generals'

export const ContainerSingle = styled.section`
  width: 100%;
  margin: 0 20px 0 120px;
  align-self: flex-start;
  @media ${device.tablet}{
    margin: 16px 16px 86px 16px;
  }
`

export const PostWidth = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

export const ContainerImagePost = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
  && .gatsby-image-wrapper{
    height: 300px;
  }
`

export const TitleSingle = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  font-size: 32px;
  font-weight: 600;
  padding: 20px 0 10px 0;
`

export const SubTitleSingle = styled.h6`
  color: ${({ theme }) => theme.colors.title};
  font-size: 24px;
  font-weight: 600;
  padding: 10px 0 10px 0;
`

export const TextSingle = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  padding: 10px 0;
  text-align: left;
  && a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
`

export const ContainerList = styled.ul`
  padding: 10px 0;
`

export const ContainerListItem = styled.li`
  display: flex;
  list-style: none;
  & p {
    padding: 5px 0;
  }
`

export const PointListItem = styled.span`
  background: ${({ theme }) => theme.colors.title};
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 3px;
  margin-top: 14px;
  margin-right: 10px;
  flex-shrink: 0;
`

export const ContainerTechnologies = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  && div div{
    margin-left: 20px;
  }
  && div div:first-child{
    margin-left: 0;
  }
  && svg{
    width: auto;
    height: 32px;
  }
  @media ${device.tablet}{
    flex-direction: column;
  }
`

export const ContainerIcons = styled.div`
  display: flex;
  @media ${device.tablet}{
    margin-top: 10px;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${device.tablet}{
    flex-direction: column;
  }
`

export const Anchor = styled.a`
  text-decoration: none;
  width: ${({ oneButton }) => oneButton ? '100%' : 'calc(50% - 20px)'};
  && button{
    width: 100%;
    text-align: center;
  }
  && button .button-text{
    width: 100%;
  }
  @media ${device.tablet}{
    width: 100%;
    margin: 10px 0;
  }
`
