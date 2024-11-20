import { useContext } from "react"
import { AuthContext } from './../components/AuthProvider/AuthProvider';


export default function MyProfile() {
  const contexValue = useContext(AuthContext);
  // console.log(contexValue);
  return (
    <div>MyProfile</div>
  )
}
