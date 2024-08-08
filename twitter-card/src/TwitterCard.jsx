import { useEffect, useState } from 'react'

export const TwitterCard = ({ formatedUsername, formatName, name, userName, children }) => {
  const [isFollowing, setIsFollowing] = useState(() => {
    return JSON.parse(localStorage.getItem(userName)) ?? false
  })

  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
    localStorage.setItem(userName, JSON.stringify(!isFollowing))
  }

  useEffect(() => {
    const follow = JSON.parse(localStorage.getItem(userName)) ?? false
    if (follow === isFollowing) return
    setIsFollowing(follow)
  }, [userName])

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={`https://unavatar.io/twitter/${userName}`} />
        <div className='tw-followCard-info'>
          <strong>{children ? formatName(children) : formatName(name)}</strong>
          <span className='tw-followCard-infoUserName'>{formatedUsername(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{isFollowing ? 'Following' : 'Follow'}</span>
          <span className='tw-followCard-stopFollow'>Unfollow</span>
        </button>
      </aside>
    </article>
  )
}
