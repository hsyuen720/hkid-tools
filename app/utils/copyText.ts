import { toast } from "react-toastify";

export const copyText = async (text: string | null, errorMessage?: string) => {
  if (text !== null && text !== undefined && text !== "") {
    await navigator.clipboard.writeText(text);
    toast.success(`${text} are copied to clipboard!`, { position: "top-right", autoClose: 2000 });
  } else {
    toast.error(errorMessage ?? "Data cannot be copied. Please try again", {
      position: "top-right",
      autoClose: 2000,
    });
  }
};
