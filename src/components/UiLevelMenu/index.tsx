import * as React from 'react'
import styled from 'styled-components'

const ui = {} as any
ui.Level = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`
ui.LevelSection = styled.div`
  display: flex;
  align-items: center;
`
ui.LevelSectionItem = styled.div`
  &:not(:last-child) {
    margin-right: 16px;
  }
`

interface ILevelMenuProps {
  children: any
}

const UiLevelMenu: React.SFC<ILevelMenuProps> & {
  Section?: any
  SectionItem?: any
} = (props) => {
  return (
    <ui.Level>
      {props.children}
    </ui.Level>
  )
}

UiLevelMenu.Section = (props: ILevelMenuProps) => {
  return (
    <ui.LevelSection>{props.children}</ui.LevelSection>
  )
}

UiLevelMenu.SectionItem = (props: ILevelMenuProps) => {
  return (
    <ui.LevelSectionItem>{props.children}</ui.LevelSectionItem>
  )
}

export default UiLevelMenu