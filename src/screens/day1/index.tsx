import * as React from 'react'
import UiTimeSheet, { IUiTimeSheetTimeSlot } from '@app/components/UiTimeSheet'

const data: IUiTimeSheetTimeSlot[] = [
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
        description: 'Goodbye, PH. Touch down Marquee Mall.',
        categoryIcon: '🍖',
        categoryText: 'Marquee Mall, Pampangga'
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
        categoryIcon: '💩'
      }
    ]
  },
  {
    startTime: '3:30 PM',
    endTime: '7:00 PM',
    cards: [
      {
        title: 'Beach time',
        type: 'activity',
        description: 'Tangina rak na dis, mga bessywap.',
        categoryIcon: '🌞'
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

interface IDay1Props {
  onNavigationChange: (navigationIndex: number) => void
}

class Day1Screen extends React.Component<IDay1Props, {}> {
  render(): JSX.Element {
    return (
      <UiTimeSheet
        data={data}
        day={1}
        footerText="That's all for today! 🎉"
        navigationIndex={1}
        onNavigationChange={this.props.onNavigationChange}
      />
    )
  }
}

export default Day1Screen
