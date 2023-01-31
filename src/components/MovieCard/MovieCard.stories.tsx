import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import MovieCard from './MovieCard'

export default {
  title: 'UI/MovieCard',
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>

const Template: ComponentStory<typeof MovieCard> = (args) => <MovieCard {...args} />

export const mainCard = Template.bind({})

mainCard.args = {
  titleEng: 'Avatar 2',
  titleRus: 'Аватар 2',
  date: '21.12.2022',
  labels: ['Drama', 'Thriller', 'Adventure'],
  img: 'https://lifestyle.24tv.ua/resources/photos/news/202009/1424047.jpg?v=1661267896000',
  description:
    "A decade and a half has passed since the events of the first film. Jake Sully is the leader of the Omaticaya clan. He lives with Neytiri, their sons Neteyam and Lo'ak grow up, the daughter of Tuktirey, the adopted daughter of Kiri, born from the avatar of Grace Augustine, and also 'Spider' Miles, a human by birth. He is the son of Colonel Miles Quaritch, born on Pandora, but due to his age unable to go to Earth in cryosleep. A new wave of colonization of Pandora by RDA begins, during which ten ships arrive at once. When landing, earthling starships burn out a large part of the forest with their engines, on the site of which the operational base 'Bridgehead City' is being built off the coast during the year. Jake and the natives lead a guerrilla campaign against the city's supply lines. Meanwhile, a new group of avatars with their own consciousness, cloned as Navi, arrive from orbit at the base, among them the avatar of Colonel Quaritch. People have mastered the technology of 'recombinants' - the preservation of the consciousness and memory of the individual. Quaritch's avatar was loaded with the Colonel's memory and his desire for revenge on Jake Sully. The commander of the city's troops, General Frans Ardmore, tasks the colonel and his group of marines with the task of stopping the rebels. The native planet is dying, the flow of refugees from the Earth will grow and it is necessary to provide the settlers with a reliable base on Pandora.",
}
