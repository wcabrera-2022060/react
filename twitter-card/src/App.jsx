import { useState } from 'react'
import './App.css'
import { TwitterCard } from './TwitterCard.jsx'

export const App = () => {
  const [name, setName] = useState(() => {
    return JSON.parse(localStorage.getItem('name')) ?? false
  })

  const formatedUsername = username => `@${username}`

  const formatName = name => name.toUpperCase()

  const changeName = () => setName(() => {
    localStorage.setItem('name', JSON.stringify(!name))
    return !name
  })

  return (
    <section className='App'>
      <TwitterCard formatedUsername={formatedUsername} formatName={formatName} userName='wesllycabrera'>
        Weslly Cabrera
      </TwitterCard>
      <TwitterCard formatedUsername={formatedUsername} formatName={formatName} userName='Cristiano' name='Cristiano Ronaldo' />
      <TwitterCard formatedUsername={formatedUsername} formatName={formatName} userName='neymarjr' name='Neymar Jr' />
      <TwitterCard formatedUsername={formatedUsername} formatName={formatName} userName='KMbappe' name='Kylian Mbappé' />
      <TwitterCard formatedUsername={formatedUsername} formatName={formatName} userName='realmadrid' name='Real Madrid' />
      <TwitterCard formatedUsername={formatedUsername} formatName={formatName} userName='FCBarcelona' name='Barcelona' />
      <TwitterCard formatedUsername={formatedUsername} formatName={formatName} userName='ChelseaFC_Sp' name='Chelsea' />
      <TwitterCard formatedUsername={formatedUsername} formatName={formatName} userName='ChampionsLeague' name='Champions' />
      <TwitterCard formatedUsername={formatedUsername} formatName={formatName} userName={!name ? 'ManCity' : 'ManUtd'} name={!name ? 'Manchester City' : 'Manchester United'} />
      <TwitterCard formatedUsername={formatedUsername} formatName={formatName} userName='Unknow' name='unknow' />
      <button className='tw-changeName-button' onClick={changeName}>
        Change name to manchester team  = {name ? 'Manchester City' : 'Manchester United'}
      </button>
    </section>
  )
}
