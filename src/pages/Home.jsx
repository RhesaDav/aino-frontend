import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const [data, setData] = useState({})

  const getData = () => {
    const parse = JSON.parse(localStorage.getItem('user'))
    setData(parse)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    navigate('/login')
  }
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    getData()
  }, []);
  return (
    <div className="flex pt-20 justify-center">
      <div className="bg-green-500 p-5 flex flex-col gap-5 rounded-2xl">
        <h1>Hello {data.username}</h1>
        <div className="flex justify-center">
        <button className="bg-red-400 px-2 py-2 rounded-2xl hover:bg-red-500 hover:text-white" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
