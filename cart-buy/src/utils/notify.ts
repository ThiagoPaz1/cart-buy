import { toast } from "react-toastify"

export function notify(msg: string, type: string) {
  if (type === "success") {
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT
    })
  }
}