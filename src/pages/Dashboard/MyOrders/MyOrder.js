import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import Footer from "../../../components/Footer/Footer";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`https://warm-lake-37627.herokuapp.com/myorders?email=${user.email}`)
      .then((res) => setOrders(res.data));
  }, []);
  const reducer = (previousValue, currentValue) =>
    previousValue + parseInt(currentValue.price);
  const totalPrice = orders.reduce(reducer, 0);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      axios
        .delete(`https://warm-lake-37627.herokuapp.com/orders/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            alert("product deleted");
            const restData = orders.filter((order) => order._id !== id);
            setOrders(restData);
          }
        });
    }
  };

  return (
    <Box>
      <Container>
        <h1>My Orders</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Ordered By</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order.name}
                  </TableCell>
                  <TableCell align="center">{order.price}</TableCell>
                  <TableCell align="center">{user.displayName}</TableCell>
                  {order.status === "Pending" ? (
                    <TableCell
                      sx={{
                        bgcolor: "warning.main",
                        fontWeight: "bold",
                        color: "white",
                        fontSize: 16,
                      }}
                      align="center"
                    >
                      {order.status}
                    </TableCell>
                  ) : (
                    <TableCell
                      sx={{
                        bgcolor: "success.main",
                        fontWeight: "bold",
                        color: "white",
                        fontSize: 16,
                      }}
                      align="center"
                    >
                      {order.status}
                    </TableCell>
                  )}
                  <TableCell align="center">
                    {" "}
                    <Button
                      onClick={() => handleDelete(order._id)}
                      sx={{ bgcolor: "error.main" }}
                      variant="contained"
                    >
                      {" "}
                      Cancel Order{" "}
                    </Button>{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            p: 2,
            border: "1px solid gold",
            width: "30%",
            margin: "50px auto",
          }}
        >
          <h3>Total Price: {totalPrice}</h3>
        </Box>
      </Container>
    </Box>
  );
};

export default MyOrder;
