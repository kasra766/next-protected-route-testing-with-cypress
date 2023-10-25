import { useForm } from "react-hook-form";

import { type userInfoType } from "@/services/storage";

export function useSubmit() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      lname: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  function submit(data: userInfoType) {
    console.log(data);
  }

  return { control, handleSubmit, submit };
}
