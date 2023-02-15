import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

export function notify(msg: string, type: string) {
  if (type === "success") {
    console.log(msg)
    toast.success(msg, {
      autoClose: 3000,
      position: toast.POSITION.TOP_CENTER,
    })
  }
}

export function Notification() {
  return <ToastContainer />
}