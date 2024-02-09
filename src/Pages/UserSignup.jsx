import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function UserSignup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phonenumber: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      if (
        !formData.username ||
        !formData.email ||
        !formData.password ||
        !formData.phonenumber
      ) {
        setError("Please provide all required fields.");
        return;
      }
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setError("Please provide a valid email address.");
        return;
      }
      if (formData.password.length < 6) {
        setError("Password should be at least 6 characters long.");
        return;
      }
      if (formData.phonenumber.length !== 10) {
        setError("Phone number should be 10 digits long.");
        return;
      }
      if (!/^[0-9]+$/.test(formData.phonenumber)) {
        setError("Phone number should only contain digits.");
        return;
      }

      setLoading(true);

      const res = await axios.post("/user/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setFormData({
        username: "",
        email: "",
        password: "",
        phonenumber: "",
      });
      if (res.data.success === false) {
        setError(res.data.message);
        setLoading(false);

        return;
      }

      setLoading(false);
      setError(null);

      navigate("/login");
    } catch (error) {
      setLoading(false);
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <FormControl
            variant="outlined"
            fullWidth
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              required
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <TextField
            value={formData.phonenumber}
            onChange={handleChange}
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phonenumber"
            autoComplete="phone"
          />
          {error && (
            <Typography variant="h6" gutterBottom sx={{ color: "red" }}>
              {error}
            </Typography>
          )}
          <Button
            disabled={loading}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? "loading" : "Sign up"}
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Have an account? Login"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default UserSignup;
