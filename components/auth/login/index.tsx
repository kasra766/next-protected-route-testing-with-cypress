"use client";
import { Button, Paper } from "@mui/material";
import { FormField } from "../../text-field";
import { useSubmit } from "./use-submit";

export function Login() {
  const { control, handleSubmit, submit } = useSubmit();

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit(submit)}
      elevation={12}
      className="grid min-w-[500px] max-w-2xl grid-cols-4 gap-3 p-3"
    >
      <FormField
        autoFocus
        fullWidth
        control={control}
        name="userName"
        rules={{ required: true }}
        type="text"
        label="User Name"
        className="col-span-full"
      />

      <FormField
        fullWidth
        control={control}
        name="password"
        rules={{ required: true }}
        type="password"
        label="Password"
        className="col-span-full"
      />

      <Button type="submit" variant="contained" className="col-span-full">
        Submit
      </Button>
    </Paper>
  );
}
