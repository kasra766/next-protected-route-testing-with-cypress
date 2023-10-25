"use client";
import { Button, Paper } from "@mui/material";
import { FormField } from "../text-field";
import { useSubmit } from "./use-submit";

export function SignUp() {
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
        name="name"
        rules={{ required: true }}
        type="text"
        label="Name"
        className="col-span-2"
      />
      <FormField
        fullWidth
        control={control}
        name="lname"
        rules={{ required: true }}
        type="text"
        label="Last Name"
        className="col-span-2"
      />

      <FormField
        fullWidth
        control={control}
        name="phone"
        rules={{ required: true }}
        type="tel"
        label="Phone Number"
        className="col-span-full"
      />
      <FormField
        fullWidth
        control={control}
        name="email"
        rules={{ required: true }}
        type="email"
        label="Email"
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
