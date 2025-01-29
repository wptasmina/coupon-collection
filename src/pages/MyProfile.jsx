import { useContext } from "react"
import { AuthContext } from "../context/AuthContext";



export default function MyProfile() {
  const contexValue = useContext(AuthContext);
  // console.log(contexValue);
  return (
    <div>MyProfile</div>
  )
}
