import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
// import RouterNavLink from '@app/components/RouterNavLink'
// import styled from 'styled-components'
// import s from '@app/styles'
import UiButton from '@app/components/UiButton'
import UiLevelMenu from '@app/components/UiLevelMenu'
import UiHeadingTitle from '@app/components/UiHeadingTitle'

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
      </React.Fragment>
    )
  }
}

export default MainOrganizationCampaignsScreen