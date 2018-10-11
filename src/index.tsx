import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'sanitize.css'
import styled, { css } from 'styled-components'
import s from './styles'
// import UiContainer from './UiContainer'
// import UiHeader from './UiHeader'
// import UiField from './UiField'
// import UiInput from './UiInput'
import UiTransitionFadeIn from './UiTransitionFadeIn'
import UiDotsLoader from './UiDotsLoader'
// import CopyButton from './CopyButton'
// import UiButton from './UiButton'
// import Footer from './Footer'
// import UiTooltip from './UiTooltip'
import * as utils from './utils'

const videos = [
  {
    url: 'https://www.youtube.com/watch?v=fb6tH9G8MU0',
    title: "World's Most Expensive Homes Featuring Palazzo di Amore"
  },
  {
    url: 'https://www.youtube.com/watch?v=sS065Z0WFXU',
    title: "Elizabeth Taylor's Home"
  },
  {
    url: 'https://www.youtube.com/watch?v=nZKe4MEbpfk',
    title: 'Behind The Gates 9528 Dalegrove'
  },
  {
    url: 'https://www.youtube.com/watch?v=1e1JNVCU7F0',
    title: "1050 Summit: The David O'Selznick Estate!"
  }
]

interface AppState {
  active: number
  loading: boolean
  hasScrolled: boolean
}

const ui: any = {} as any
ui.Container = styled.div`
  padding: 16px;
  margin: 0 auto;
  max-width: 480px;
  font-family: ${s['font-family']};
  font-size: ${s['font-size']};
`
ui.Panel = styled.div`
  color: ${s['color-dirty-blue']};
  background: ${s['color-white']};
  box-shadow: 2px 4px 48px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid ${s['color-silver']};
  overflow: hidden;
`
ui.PanelMain = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
  transition: 400ms all ease;

  ${(props: any) =>
    props.hasScrolled &&
    css`
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
    `};
`
ui.PanelLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`
ui.PanelMainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
`
ui.PanelMainContainerVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`
ui.PanelList = styled.div`
  position: relative;
  max-height: 320px;
  overflow-y: scroll;
  z-index: 99;

  /* @source https://gist.github.com/devinrhode2/2573411 */

  ::-webkit-scrollbar {
    width: 8px; /* 1px wider than Lion. */
    /* This is more usable for users trying to click it. */
    background-color: rgba(0, 0, 0, 0);
    -webkit-border-radius: 100px;
  }
  /* hover effect for both scrollbar area, and scrollbar 'thumb' */
  ::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }

  /* The scrollbar 'thumb' ...that marque oval shape in a scrollbar */
  ::-webkit-scrollbar-thumb:vertical {
    /* This is the EXACT color of Mac OS scrollbars. 
       Yes, I pulled out digital color meter */
    background: rgba(0, 0, 0, 0.5);
    -webkit-border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb:vertical:active {
    background: rgba(0, 0, 0, 0.61); /* Some darker color when you click it */
    -webkit-border-radius: 100px;
  }
`
ui.PanelListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  padding-right: 20px;
  height: 125px;
  color: ${s['color-dirty-blue']};
  background: ${s['color-white']};
  cursor: pointer;
  transition: 200ms all ease;

  &:hover {
    background: ${s['color-light-silver']};
  }

  ${(props: { isActive: boolean }) =>
    props.isActive &&
    css`
      background: ${s['color-silver']};
    `} &:not(:last-child) {
    border-bottom: 1px solid ${s['color-silver']};
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`
ui.PanelListItemThumbnail = styled.div`
  position: relative;
  flex-shrink: 0;
  height: 80px;
  width: 120px;
  border-raidus: 4px;
  margin-right: 16px;
  overflow: hidden;
  border: 1px solid ${s['color-silver']};
  border-radius: 4px;
`
ui.PanelListItemCount = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 18px;
  font-weight: bold;
  line-height: 1;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  color: ${s['color-white']};
  font-size: 10px;
  background: ${s['color-dark-silver']};
`
ui.PanelListItemThumbnailImg = styled.img`
  max-width: 150%;
  display: block;
`
ui.PanelListItemTitle = styled.h5`
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
`
ui.PanelListItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`
ui.PanelListItemLabel = styled.span`
  display: inline-block;
  margin-bottom: 8px;
  font-size: 10px;
  padding: 4px;
  padding-bottom: 2px;
  color: ${s['color-white']};
  background: ${s['color-dirty-blue']};
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  border-radius: 4px;
  letter-spacing: 2px;
`
ui.PanelListItemArrowContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  width: 32px;
`
ui.PanelListItemArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid ${s['color-dirty-blue']};
  opacity: 0;
  transform: translateX(-8px);
  transition: 200ms all ease;

  ${(props: { isActive: boolean }) =>
    !props.isActive &&
    css`
      ${ui.PanelListItem}:hover & {
        opacity: 1;
        transform: translateX(0px);
      }
    `};
`

class App extends React.Component<{}, AppState> {
  state: AppState = {
    active: 0,
    loading: false,
    hasScrolled: false
  }

  scrollTimeout: number | undefined

  render() {
    const activeVideo = videos[this.state.active]

    return (
      <ui.Container>
        <ui.Panel>
          <ui.PanelMain hasScrolled={this.state.hasScrolled}>
            <ui.PanelMainContainer>
              {this.state.active !== -1 && (
                <UiTransitionFadeIn>
                  <ui.PanelMainContainerVideo>
                    <iframe
                      width="100%"
                      height="100%"
                      src={utils.getYoutubeEmbedUrl(activeVideo.url)}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      onLoad={this.handleVideoLoad}
                      style={{ opacity: this.state.loading ? 0 : 1 }}
                    />
                  </ui.PanelMainContainerVideo>
                </UiTransitionFadeIn>
              )}

              <ui.PanelLoader>
                <UiDotsLoader />
              </ui.PanelLoader>
            </ui.PanelMainContainer>
          </ui.PanelMain>

          <ui.PanelList onScroll={this.handleScrollList}>
            {videos.map((video, i) => (
              <ui.PanelListItem
                title={i !== this.state.active ? 'Click to play' : ''}
                isActive={i === this.state.active}
                onClick={() => this.handleChangeActiveVideo(i)}
                role="button"
                key={i}>
                <ui.PanelListItemCount>{i + 1}</ui.PanelListItemCount>

                <ui.PanelListItemThumbnail>
                  <ui.PanelListItemThumbnailImg src={utils.getYoutubeThumbnail(video.url)} />
                </ui.PanelListItemThumbnail>

                <ui.PanelListItemDetails>
                  {i === this.state.active && (
                    <UiTransitionFadeIn movement="small">
                      <ui.PanelListItemLabel>Now Playing</ui.PanelListItemLabel>
                    </UiTransitionFadeIn>
                  )}
                  <ui.PanelListItemTitle>{video.title}</ui.PanelListItemTitle>
                </ui.PanelListItemDetails>

                <ui.PanelListItemArrowContainer>
                  <ui.PanelListItemArrow isActive={i === this.state.active} />
                </ui.PanelListItemArrowContainer>
              </ui.PanelListItem>
            ))}
          </ui.PanelList>
        </ui.Panel>
      </ui.Container>
    )
  }

  handleScrollList = (evt: any) => {
    evt.persist()
    window.clearTimeout(this.scrollTimeout)
    // @todo Throttle
    this.scrollTimeout = window.setTimeout(() => {
      this.setState({
        hasScrolled: evt.target.scrollTop > 75
      })
    }, 100)
  }

  handleVideoLoad = () => {
    this.setState({
      loading: false
    })
  }

  handleChangeActiveVideo = (i: number) => {
    this.setState(
      {
        active: -1,
        loading: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            active: i
          })

          ReactDOM.findDOMNode(this).scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
