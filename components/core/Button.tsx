type propTypes = {
  title: string
  onClick?: () => void
}


const Button = ({title, onClick} : propTypes) => {
  return (
    <div>
      <button className="bg-[#66beee] w-[154px] h-[43px] rounded-xl" onClick={onClick}>
        <p className="place-self-center">{title}</p>
      </button>
    </div>
  )
}

export default Button
