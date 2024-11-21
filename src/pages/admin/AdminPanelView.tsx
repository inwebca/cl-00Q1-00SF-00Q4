import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Breadcrumbs } from "@mui/material";

const AdminPanelView = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography sx={{ color: "text.primary" }}>Admin</Typography>
      </Breadcrumbs>
      <Typography typography="h5" sx={{ mt: 2, mb: 2 }}>
        Admin Panel View
      </Typography>

      <div>
        <Link to={"/tasks-status"}>Manage Tasks Status</Link>
      </div>
    </>
  );
};

export default AdminPanelView;
