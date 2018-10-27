import * as React from 'react'
import styled, {css} from 'styled-components'
// import s from '@app/styles'
import UiContainer from '@app/components/UiContainer'
import * as moment from 'moment'

const sv = {
  TIME_SLOT_HEIGHT: 128
}

const ui = {} as any
ui.TimeSlot = styled.div`
  display: flex;
  // &:nth-child(even) {
  //   background: rgba(0, 0, 0, 0.1);
  // }
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
`
ui.TimeSlotCardsItemTitle = styled.h6`
  margin: 0;
  color: #868fb7;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 8px;
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

interface TimeSlot {
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

const data: TimeSlot[] = [
  {
    startTime: '6:00 AM',
    endTime: '7:00 AM',
    cards: [
      {
        title: 'Huddle',
        type: 'break',
        description: 'Prep things up',
        categoryIcon: '🙌'
      }
    ]
  },
  {
    startTime: '8:00 AM',
    endTime: '9:00 AM',
    cards: [
      {
        title: 'Meet up at Philam',
        description: 'Pick up mama and papa',
        categoryIcon: '🚗',
        categoryText: 'Tondo &mdash; Philam',
        group: 'kier'
      },
      {
        title: 'Meet up at Philam',
        description: 'Pick up Mom from Makati',
        categoryIcon: '🚗',
        categoryText: 'Makati &mdash; Philam',
        group: 'dad'
      }
    ]
  },
  {
    startTime: '9:00 AM',
    endTime: '10:30 AM',
    cards: [
      {
        title: 'Departure',
        description: "Let's go boys!",
        categoryIcon: '🚗',
        categoryText: 'Philam &mdash; Marquee Mall, Pampangga'
      }
    ]
  },
  {
    startTime: '10:30 AM',
    endTime: '12:20 PM',
    cards: [
      {
        title: 'Lunch',
        description: 'Marquee Mall, Pampangga',
        categoryIcon: '🍆'
      }
    ]
  },
  {
    startTime: '12:20 PM',
    endTime: '12:30 PM',
    cards: [
      {
        title: 'Huddle',
        type: 'break',
        description: 'Prep before taking off',
        categoryIcon: '🙌'
      }
    ]
  },
  {
    startTime: '12:30 PM',
    endTime: '2:30 PM',
    cards: [
      {
        title: 'Departure',
        description: 'To the town house',
        categoryIcon: '🚗',
        categoryText: 'Marquee Mall &mdash; Subic'
      }
    ]
  },
  {
    startTime: '2:30 PM',
    endTime: '3:30 PM',
    cards: [
      {
        title: 'Check in',
        description: 'Lay down belongings',
        categoryIcon: '😳'
      }
    ]
  },
  {
    startTime: '3:30 PM',
    endTime: '7:00 PM',
    cards: [
      {
        title: 'Beach time',
        description: 'Look at those sexy ladies',
        categoryIcon: '👙'
      }
    ]
  },
  {
    startTime: '7:00 PM',
    endTime: '8:30 PM',
    cards: [
      {
        title: 'Huddle',
        type: 'break',
        description: 'Back to rest house to wrap up',
        categoryIcon: '🙌'
      }
    ]
  },
  {
    startTime: '8:30 PM',
    cards: [
      {
        title: 'Dinner',
        type: 'celebration',
        description: "Celebrate Mom's 50th birthday",
        categoryIcon: '🎉'
      }
    ]
  }
]

class IndexScreen extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <UiContainer>
        {data.map((timeSlot, i) => {
          const startTime = moment(timeSlot.startTime, 'h:mm a')
          const endTime = moment(timeSlot.endTime, 'h:mm a')
          const duration = moment.duration(endTime.diff(startTime)).asHours()
          const timeHeight = timeSlot.endTime == null
            ? sv.TIME_SLOT_HEIGHT
            : sv.TIME_SLOT_HEIGHT * Math.max(1, duration)
          
          return (
            <ui.TimeSlot key={i}>
              <ui.TimeSlotSheet>
                {timeSlot.startTime}
                <br />
                {timeSlot.endTime}
              </ui.TimeSlotSheet>

              <ui.TimeSlotCards>
                {timeSlot.cards.map((card, j) => (
                  <ui.TimeSlotCardsItem type={card.type} height={timeHeight} key={j}>
                    {Boolean(card.group) && <ui.TimeSlotCardsItemGroup src={`/img/${card.group === 'kier' ? 'me.png' : 'dad.jpg'}`} alt="Kier's photo" />}

                    <ui.TimeSlotCardsItemTitle>{card.title}</ui.TimeSlotCardsItemTitle>
                    <ui.TimeSlotCardsItemDescription>{card.description}</ui.TimeSlotCardsItemDescription>

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

        <ui.Footer>That's all for today!</ui.Footer>
      </UiContainer>
    )
  }
}

export default IndexScreen
