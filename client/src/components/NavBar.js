function NavBar({handleLogout, currentUser}) {
  return (
    <div>
      <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span>
    </div>
  )
}

export default NavBar;