import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
// import RouterNavLink from '@app/components/RouterNavLink'
import styled from 'styled-components'
// import s from '@app/styles'
import UiButton from '@app/components/UiButton'
import UiLevelMenu from '@app/components/UiLevelMenu'
import UiHeadingTitle from '@app/components/UiHeadingTitle'
import UiDataTable from '@app/components/UiDataTable';
import UiLabel from '@app/components/UiLabel';

interface ICampaign {
  id: number
  name: string
  from_number: string
  content: string
  status: 'sent' | 'draft'
  sent_at?: string
  author_name: string
}

interface IMainOrganizationScreenState {
  campaigns: ICampaign[]
}

const ui = {} as any
ui.HeadingName = styled.h4`
  margin-top: 0;
  margin-bottom: 0;
`
ui.HeadingNameLink = styled.a`
  color: inherit;
  text-decoration: none;
`
ui.HeadingNameMeta = styled.p`
  opacity: 0.5;
  margin-bottom: 0;
`

class MainOrganizationCampaignsScreen extends React.Component<RouteComponentProps, IMainOrganizationScreenState> {
  state: IMainOrganizationScreenState = {
    campaigns: [{
      id: 1,
      name: 'Megalo Boxing Promo',
      from_number: '09167621926',
      content: 'Lipsum hello',
      status: 'draft',
      sent_at: 'hehe',
      author_name: 'Kusakabe Hikaru'
    }]
  }

  render() {
    return (
      <React.Fragment>
        <UiLevelMenu>
          <UiLevelMenu.Section>
            <UiHeadingTitle spacer={false} text="Your Campaigns" />
          </UiLevelMenu.Section>

          <UiLevelMenu.Section>
            <UiButton preset="primary" size="md">Create Campaign</UiButton>
          </UiLevelMenu.Section>
        </UiLevelMenu>

        <UiDataTable endpoint="/organization/1/campaigns">
          <UiDataTable.Column label="Name">
            {() => (
              <React.Fragment>
                <ui.HeadingName><ui.HeadingNameLink href="#">Anniversary Promotion</ui.HeadingNameLink></ui.HeadingName>
                <p>Is the message</p>
                <ui.HeadingNameMeta>Edited Thu, November 23 PM by you</ui.HeadingNameMeta>
              </React.Fragment>
            )}
          </UiDataTable.Column>

          <UiDataTable.Column>
            {() => (
              <React.Fragment>
                <UiLabel>Sent</UiLabel>
              </React.Fragment>
            )}
          </UiDataTable.Column>
        </UiDataTable>
      </React.Fragment>
    )
  }
}

export default MainOrganizationCampaignsScreen