import { AppBar as MuiAppBar, Toolbar } from "@mui/material";

export function AppBar({ children }: { children: React.ReactNode }) {
  return (
    <MuiAppBar position="static">
      <Toolbar>{children}</Toolbar>
    </MuiAppBar>
  );
}
