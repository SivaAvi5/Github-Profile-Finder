import React, { useEffect, useState } from 'react'
import User from './User'
import './style.css'

const GithubProfileFindert = () => {

  const [userName,setUserName] = useState('sivaAvi5')
  const [userData,setUserData] = useState([])
  const [loading,setLoading] = useState(false)
  const [searchName,setSearchName] = useState([])

  const fetchGithubUserData = async() =>{
    try{
    setLoading(true)
    const response = await fetch(`https://api.github.com/users/${userName}`)
    const data = await response.json()
    console.log(data)
    setUserData(data)
    setLoading(false)
    
    }catch(e){
      setLoading(false)
      console.log(e)
    }
  }

  function handleSubmit(){
    fetchGithubUserData()

  }

  useEffect(() =>{
    fetchGithubUserData()
  },[])

  if(loading){
    return <h1>Loading data ! Please wait</h1>
  } 
  console.log(userData)
  return (
    <div className='github-profile-container'>
      <div className='input-wrapper'>
        <input
        name='search-by-username'
        type='text'
        placeholder='search Github Username'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => handleSubmit()}>Search</button>
      </div>
      {userData !== null ? <User user = {userData}/>:null}
    </div>
  )
}

export default GithubProfileFindert