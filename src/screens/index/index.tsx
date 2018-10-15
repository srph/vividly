import * as React from 'react'
import UiContainer from '@app/components/UiContainer'
import UiButton from '@app/components/UiButton'
import UiField from '@app/components/UiField'
import UiHeader from '@app/components/UiHeader'
import UiTransitionFadeIn from '@app/components/UiTransitionFadeIn'

interface IAppYoutubeLink {
  url: '',
  title: ''
}

interface IndexScreenState {
  items: IAppYoutubeLink[],
  url: string
}

class IndexScreen extends React.Component<{}, IndexScreenState> {
  render(): JSX.Element {
    return (
      <UiContainer>
        <
      </UiContainer>
    )
  }
}

export default IndexScreen`