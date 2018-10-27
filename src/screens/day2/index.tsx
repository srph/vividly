import * as React from 'react'
import UiTimeSheet, { IUiTimeSheetTimeSlot } from '@app/components/UiTimeSheet'

const data: IUiTimeSheetTimeSlot[] = [
  {
    startTime: '6:00 AM',
    endTime: '7:00 AM',
    cards: [
      {
        title: 'Breakfast',
        description: 'Ha? Hotdog',
        categoryIcon: '🍖'
      }
    ]
  },
  {
    startTime: '7:00 AM',
    endTime: '7:10 AM',
    cards: [
      {
        title: 'Huddle',
        type: 'break',
        description: 'Baboy reflex pa, mga bes',
        categoryIcon: '🙌'
      }
    ]
  },
  {
    startTime: '7:10 AM',
    endTime: '7:30 AM',
    cards: [
      {
        title: 'Inflatable Islands',
        description: 'Way to Inflatable Islands',
        categoryIcon: '🐾'
      }
    ]
  },
  {
    startTime: '7:30 AM',
    endTime: '8:00 AM',
    cards: [
      {
        title: 'Orientation',
        description: "Let's go boys!",
        categoryIcon: '🌊'
      }
    ]
  },
  {
    startTime: '8:00 AM',
    endTime: '9:50 AM',
    cards: [
      {
        title: 'Inflatable Islands',
        type: 'activity',
        description: 'Enjoy our 2-hour pass',
        categoryIcon: '🌊'
      }
    ]
  },
  {
    startTime: '9:50 AM',
    endTime: '10:30 AM',
    cards: [
      {
        title: 'Beach',
        type: 'activity',
        description: 'Leisure time',
        categoryIcon: '🌞'
      }
    ]
  },
  {
    startTime: '10:30 AM',
    endTime: '11:00 AM',
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
    startTime: '11:00 AM',
    endTime: '12:45 PM',
    cards: [
      {
        title: 'Leisure',
        description: 'Pack up, bath, laundry time',
        categoryIcon: '🏓'
      }
    ]
  },
  {
    startTime: '12:45 PM',
    endTime: '2:00 PM',
    cards: [
      {
        title: 'Lunch',
        description: 'Wrapping up.',
        categoryIcon: '🍖'
      }
    ]
  },
  {
    startTime: '8:00 AM',
    endTime: '9:00 AM',
    cards: [
      {
        title: 'Uwian',
        description: 'back to reality.',
        categoryIcon: '🚗',
        categoryText: 'Subic &mdash; Tondo',
        group: 'kier'
      },
      {
        title: 'Uwian',
        description: 'Drive the thunders home safely.',
        categoryIcon: '🚗',
        categoryText: 'Subic &mdash; Philam',
        group: 'dad'
      }
    ]
  },
]

interface IDay2Props {
  onNavigationChange: (navigationIndex: number) => void
}

class Day2Screen extends React.Component<IDay2Props, {}> {
  render(): JSX.Element {
    return (
      <UiTimeSheet
        data={data}
        day={2}
        footerText="Thank you for making this happen! 🎉"
        navigationIndex={2}
        onNavigationChange={this.props.onNavigationChange}
      />
    )
  }
}

export default Day2Screen
