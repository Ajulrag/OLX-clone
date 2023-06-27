import React, { useContext, useEffect } from 'react';
import Login from '../Components/Login/Login';
import { AuthContext } from '../store/Context';
import {useHistory} from 'react-router-dom'

function LoginPage() {
  const history = useHistory()
  const { user } = useContext(AuthContext)
  useEffect(() => {
    if(user) {
      history.push('/')
    }
  })
  return (
    <div>
      <Login />
    </div>
  );
}

export default LoginPage;
