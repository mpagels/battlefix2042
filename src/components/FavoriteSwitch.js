import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/system";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#26ffdf",
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#26ffdf",
  },
}));

export default function FavoriteSwitch({
  favoriteIsChecked,
  handleChange,
  label,
}) {
  return (
    <FormGroup>
      <FormControlLabel
        style={{ color: "#26ffdf" }}
        control={
          <GreenSwitch
            checked={favoriteIsChecked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label={label}
      />
    </FormGroup>
  );
}
