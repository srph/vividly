import * as React from 'react'
import styled, {css} from 'styled-components'
// import s from '@app/styles'
import * as moment from 'moment'
import UiContainer from '@app/components/UiContainer'
import UiNavigation from '@app/components/UiNavigation'
import UiTimeUpdater from '@app/components/UiTimeUpdater'

const sv = {
  TIME_SLOT_HEIGHT: 128,
  EVENT_DATE: '10/28/2018',
  EVENT_DATE_END: '10/29/2018'
}

const ui = {} as any
ui.TimeSlot = styled.div`
  display: flex;
  ${(props: any) => props.isPast && css`
    opacity: 0.3;
  `}
`
ui.TimeSlotSheet = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding-right: 8px;
  text-align: right;
  flex-direction: column;
  height: ${sv.TIME_SLOT_HEIGHT}px;
  width: 76px;
  font-size: 10px;
`
ui.TimeSlotCards = styled.div`
  display: flex;
  overflow-x: scroll;
  padding-top: 16px;
  padding-bottom: 8px;
  padding-left: 20px;
  padding-right: 16px;
  border-bottom: 2px solid #ddd;
  width: 100%;
`
ui.TimeSlotCardsItem = styled.div`
  position: relative;
  flex-shrink: 0;
  padding: 16px;
  width: 202px;
  height: ${(props: any) => props.height}px;
  color: #051350;
  background: #ece7fe;
  border-radius: 4px;

  &:not(:last-child) {
    margin-right: 16px;
  }

  ${(props: any) => props.type === 'break' && css`
    background: repeating-linear-gradient(
      45deg,
      #e5e7ec,
      #e5e7ec 10px,
      transparent 10px,
      transparent 20px
    );
    border-radius: 0;
  `}

  ${(props: any) => props.type === 'celebration' && css`
    background: linear-gradient(#75ffbf, #c8ffbb);
  `}

  ${(props: any) => props.type === 'activity' && css`
    background: linear-gradient(#75acff,#bbf9ff);
  `}
`
ui.TimeSlotCardsItemTitle = styled.h6`
  margin: 0;
  color: #868fb7;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 8px;

  ${(props: any) => props.type === 'celebration' && css`
    color: #54b596;
  `}

  ${(props: any) => props.type === 'activity' && css`
    color: #fff;
  `}
`
ui.TimeSlotCardsItemDescription = styled.p`
  margin: 0;
  line-height: 1.25;
  font-size: 18px;
  min-height: 45px;
  margin-bottom: 16px;

`
ui.TimeSlotCardsItemCategory = styled.div`
  display: flex;
  align-items: center;
`
ui.TimeSlotCardsItemCategoryIcon = styled.span`
  font-size: 16px;
  margin-right: 8px;
  color: #868fb7;
`
ui.TimeSlotCardsItemCategoryText = styled.span`
  font-size: 10px;
  color: #868fb7;
  text-transform: uppercase;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
`
ui.TimeSlotCardsItemGroup = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;
  height: 16px;
  width: 16px;
  border-radius: 50%;
`
ui.Footer = styled.footer`
  text-align: center;
  padding-top: 32px;
  padding-bottom: 32px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(13, 27, 84, 0.38);
  font-size: 10px;
`

export interface IUiTimeSheetTimeSlot {
  startTime: string
  endTime?: string
  cards: {
    title: string
    type?: 'break' | 'activity' | 'celebration'
    description: string
    categoryIcon: string
    categoryText?: string
    group?: 'kier' | 'dad'
  }[]
}

interface IUiTimeSheetProps {
  data: IUiTimeSheetTimeSlot[]
  day: number
  footerText: string
  navigationIndex: number
  onNavigationChange: (navigationIndex: number) => void
}

interface IUiTimeSheetSlotElement {
  [key: string]: HTMLElement
}

class Day2Screen extends React.Component<IUiTimeSheetProps, {}> {
  slotElement: IUiTimeSheetSlotElement = {}

  getNow(): moment.Moment {
    return moment()
  }

  getEventDate(): string {
    return this.props.day === 1 ? sv.EVENT_DATE : sv.EVENT_DATE_END
  }

  render(): JSX.Element {
    const date = this.getEventDate()

    return (
      <UiTimeUpdater interval={1000 * 60}>
        {() => {
          const now = this.getNow()

          return (
            <UiContainer>
              <UiNavigation index={this.props.navigationIndex} onChange={this.props.onNavigationChange} onScrollToActiveTime={this.handleScrollToActiveTime} />

              {this.props.data.map((timeSlot, i) => {
                const startTime = moment(`${date} ${timeSlot.startTime}`, 'MM/DD/YYYY h:mm a')
                const endTime = moment(`${date} ${timeSlot.endTime || '11:59 PM'}`, 'MM/DD/YYYY h:mm a')
                const duration = moment.duration(endTime.diff(startTime)).asHours()
                const timeHeight = timeSlot.endTime == null
                  ? sv.TIME_SLOT_HEIGHT
                  : sv.TIME_SLOT_HEIGHT * Math.max(1, duration)
                
                return (
                  <ui.TimeSlot isPast={now > endTime} key={i} innerRef={(c: HTMLElement) => this.slotElement[i] = c}>
                    <ui.TimeSlotSheet>
                      {timeSlot.startTime}
                      <br />
                      {timeSlot.endTime}
                    </ui.TimeSlotSheet>

                    <ui.TimeSlotCards>
                      {timeSlot.cards.map((card, j) => (
                        <ui.TimeSlotCardsItem type={card.type} height={timeHeight} key={j}>
                          {Boolean(card.group) && <ui.TimeSlotCardsItemGroup src={`/img/${card.group === 'kier' ? 'me.png' : 'dad.jpg'}`} alt="Kier's photo" />}

                          <ui.TimeSlotCardsItemTitle type={card.type}>{card.title}</ui.TimeSlotCardsItemTitle>
                          <ui.TimeSlotCardsItemDescription type={card.type}>{card.description}</ui.TimeSlotCardsItemDescription>

                          <ui.TimeSlotCardsItemCategory>
                            <ui.TimeSlotCardsItemCategoryIcon>
                              {card.categoryIcon}
                            </ui.TimeSlotCardsItemCategoryIcon>

                            <ui.TimeSlotCardsItemCategoryText dangerouslySetInnerHTML={{ __html: card.categoryText }} />
                          </ui.TimeSlotCardsItemCategory>
                        </ui.TimeSlotCardsItem>
                      ))}
                    </ui.TimeSlotCards>
                  </ui.TimeSlot>
                )
              })}

              <ui.Footer>{this.props.footerText}</ui.Footer>
            </UiContainer>
          )
        }}
      </UiTimeUpdater>
    )
  }

  handleScrollToActiveTime = () => {
    const now = this.getNow()

    const activeTimeSlotIndex = this.props.data.findIndex((data) => {
      return moment(`${this.getEventDate()} ${data.endTime || '11:59 PM'}`, 'MM/DD/YYYY h:mm a') > now
    })

    if (activeTimeSlotIndex != -1) {
      this.slotElement[activeTimeSlotIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}

export default Day2Screen