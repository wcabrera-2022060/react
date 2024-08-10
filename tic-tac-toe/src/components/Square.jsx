export const Square = ({ children, isSelected, updateBoard }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard()
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
