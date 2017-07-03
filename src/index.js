import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const Link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
}

const Navbar = () => {
  return (
    <div>
      <NavLink
        to='/'
        exact
        style={Link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Home</NavLink>
      <NavLink
        to='/about'
        exact
        style={Link}
        activeStyle={{
          background: 'darkblue'
        }}
      >About</NavLink>
      <NavLink
        to='/login'
        exact
        style={Link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Login</NavLink>
    </div>
  )
}

const Home = () => {
  return <h1>Home</h1>
}

const About = () => {
  return <h1>About</h1>
}

const Login = () => {
  return (
    <form>
      <div>
        <input type='text' name='username' placeholder='Username' />
        <label htmlFor='username'>Username</label>
      </div>
      <div>
        <input type='password' name='password' placeholder='Password' />
        <label htmlFor='password'>Password</label>
      </div>
      <input type='submit' value='Login' />
    </form>
  )
}

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
        </div>
      </Router>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
