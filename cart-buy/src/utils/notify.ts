import { toast } from "react-toastify"

export function notify(msg: string, type: string) {
  if (type === "success") {
    toast.success(msg, {
      autoClose: 3000,
      position: toast.POSITION.TOP_CENTER,
    })
  }
}