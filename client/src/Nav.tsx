import './Nav.css'

type INavProps = {
  toggleFx: React.Dispatch<React.SetStateAction<boolean>>;
  displayForm: boolean
}

function Nav(props: INavProps) {
  return (
    <div className='navbar'>
      <button>TODO</button>
      <div className='right-nav'>
        <button>Finished</button>
        <button onClick={() => props.toggleFx(!props.displayForm)}>New Todo</button>
      </div>
    </div>
  )
}

export default Nav
