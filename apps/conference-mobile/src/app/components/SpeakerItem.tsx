import React from 'react'
import { Session } from '../models/Schedule'
import {
  IonCard,
  IonCardHeader,
  IonItem,
  IonLabel,
  IonAvatar,
  IonCardContent,
  IonList,
} from '@ionic/react'
import { Speaker } from '@dreamon/conference-speakers'

interface SpeakerItemProps {
  speaker: Speaker
  sessions: Session[]
}

const SpeakerItem: React.FC<SpeakerItemProps> = ({ speaker, sessions }) => {
  return (
    <IonCard className="speaker-card">
      <IonCardHeader>
        <IonItem
          button
          detail={false}
          lines="none"
          className="speaker-item"
          routerLink={`/tabs/speakers/${speaker.slug}`}
        >
          <IonAvatar slot="start">
            <img src={speaker.image} alt="Speaker profile pic" />
          </IonAvatar>
          <IonLabel>
            <h2>{speaker.name}</h2>
            <p>{speaker.title}</p>
          </IonLabel>
        </IonItem>
      </IonCardHeader>

      <IonCardContent>
        <IonList lines="none">
          {sessions.map((session) => (
            <IonItem
              detail={false}
              routerLink={`/tabs/speakers/sessions/${session.id}`}
              key={session.name}
            >
              <IonLabel>
                <h3>{session.name}</h3>
              </IonLabel>
            </IonItem>
          ))}
          <IonItem detail={false} routerLink={`/tabs/speakers/${speaker.slug}`}>
            <IonLabel>
              <h3>About {speaker.name}</h3>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  )
}

export default SpeakerItem
