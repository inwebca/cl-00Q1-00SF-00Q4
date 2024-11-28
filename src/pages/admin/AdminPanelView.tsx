import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Card from "@mui/material/Card";
import { Breadcrumbs } from "@mui/material";
import Grid from "@mui/material/Grid2";

const AdminPanelView = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography sx={{ color: "text.primary" }}>Admin</Typography>
      </Breadcrumbs>
      <Typography typography="h5" sx={{ mt: 2, mb: 2 }}>
        Admin Panel View
      </Typography>

      <Grid container spacing={2}>
        <Grid size={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Tasks Status
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to={"/tasks-status"}>
                Manage Tasks Status
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid size={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Task Assignment
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to={"/task-assignment"}>
                Task Assignment
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminPanelView;
